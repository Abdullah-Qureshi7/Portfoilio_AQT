// ---------- scroll reveal ----------
// Safety net: if IntersectionObserver is unsupported, or JS is slow/blocked
// on a real device, .reveal content must never stay stuck invisible. We
// force everything visible after a short timeout as a guaranteed fallback.
const revealEls = document.querySelectorAll('.reveal');
if('IntersectionObserver' in window){
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{
      if(e.isIntersecting){ e.target.classList.add('is-visible'); io.unobserve(e.target); }
    });
  }, {threshold:.15});
  revealEls.forEach(el=>io.observe(el));
} else {
  revealEls.forEach(el=>el.classList.add('is-visible'));
}
setTimeout(()=>{
  revealEls.forEach(el=>el.classList.add('is-visible'));
}, 2500);

// ---------- mobile menu ----------
const navToggle = document.getElementById('nav-toggle');
const mobileMenu = document.getElementById('mobile-menu');
if(navToggle && mobileMenu){
  navToggle.addEventListener('click', ()=>{
    mobileMenu.classList.toggle('open');
    const icon = navToggle.querySelector('i');
    const isOpen = mobileMenu.classList.contains('open');
    icon.className = isOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars';
  });
  mobileMenu.querySelectorAll('a').forEach(a=>{
    a.addEventListener('click', ()=>{
      mobileMenu.classList.remove('open');
      navToggle.querySelector('i').className = 'fa-solid fa-bars';
    });
  });
}

// ---------- 3D tilt on hover (project cards + hero photo frame) ----------
const tiltCards = document.querySelectorAll('.tilt-card');
tiltCards.forEach(card=>{
  card.addEventListener('mousemove', (e)=>{
    const r = card.getBoundingClientRect();
    const x = (e.clientX - r.left)/r.width - 0.5;
    const y = (e.clientY - r.top)/r.height - 0.5;
    card.style.transform = `perspective(900px) rotateY(${x*8}deg) rotateX(${-y*8}deg) translateY(-4px)`;
  });
  card.addEventListener('mouseleave', ()=>{
    card.style.transform = 'perspective(900px) rotateY(0) rotateX(0) translateY(0)';
  });
});

// ---------- sliders (services + testimonials) ----------
document.querySelectorAll('[data-slider]').forEach(slider=>{
  const track = slider.querySelector('.slider-track');
  const prevBtn = slider.querySelector('[data-slider-prev]');
  const nextBtn = slider.querySelector('[data-slider-next]');
  if(!track) return;
  const scrollByAmount = ()=>{
    const card = track.firstElementChild;
    if(!card) return 300;
    const style = getComputedStyle(track);
    const gap = parseInt(style.columnGap || style.gap || '18', 10);
    return card.getBoundingClientRect().width + gap;
  };
  prevBtn && prevBtn.addEventListener('click', ()=> track.scrollBy({left: -scrollByAmount(), behavior:'smooth'}));
  nextBtn && nextBtn.addEventListener('click', ()=> track.scrollBy({left: scrollByAmount(), behavior:'smooth'}));
});

// ---------- FAQ accordion ----------
document.querySelectorAll('.faq-item').forEach(item=>{
  item.querySelector('.faq-q').addEventListener('click', ()=>{
    const wasOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item').forEach(i=>i.classList.remove('open'));
    if(!wasOpen) item.classList.add('open');
  });
});

// ---------- education flip cards ----------
// Desktop: CSS :hover already flips them. This adds tap-to-flip for touch
// devices, so the interaction still works without a mouse.
document.querySelectorAll('.edu-flip').forEach(card=>{
  card.addEventListener('click', ()=>{
    card.classList.toggle('flipped');
  });
});

// ---------- contact form -> serverless function -> Resend ----------
// This calls a relative "/api/send-email" endpoint (see api/send-email.js).
// A Resend API key can NEVER be safely called directly from this static
// frontend, so this endpoint must be deployed as a serverless function
// (Vercel/Netlify) with RESEND_API_KEY set as a server-side env variable.
// See README.md for the two-minute setup.
const form = document.getElementById('contact-form');
if(form){
  const statusEl = document.getElementById('cf-status');
  const submitBtn = document.getElementById('cf-submit');

  form.addEventListener('submit', async (e)=>{
    e.preventDefault();
    const data = Object.fromEntries(new FormData(form).entries());
    submitBtn.disabled = true;
    const originalHTML = submitBtn.innerHTML;
    submitBtn.innerHTML = 'Sending...';
    statusEl.textContent = '';
    statusEl.className = 'form-status';

    try{
      const res = await fetch('/api/send-email', {
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body: JSON.stringify(data)
      });
      if(!res.ok) throw new Error('Request failed');
      statusEl.textContent = "Message sent — I'll reply within a day.";
      statusEl.classList.add('ok');
      form.reset();
    }catch(err){
      statusEl.textContent = 'Could not send right now — email me directly instead.';
      statusEl.classList.add('err');
    }finally{
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalHTML;
    }
  });
}

# How to edit this portfolio (easy)

**Rule:** change text, links, and lists in `src/data/` only.  
Do **not** dig into `src/components/` unless you want to change layout/design.

After editing a data file, save → the page updates (with `npm run dev` running).

---

## Quick map

| What you want to change | Open this file |
|---|---|
| Name, email, phone, WhatsApp, logo, nav links, social icons | `site.js` |
| Hero name, role, buttons, photo, stats | `hero.js` |
| About / “Why choose me” text + video | `about.js` |
| Skills / tech stack pills | `stack.js` |
| Services list | `services.js` |
| Portfolio projects + images | `projects.js` |
| Work process steps | `process.js` |
| Education cards | `education.js` |
| Certifications | `certifications.js` |
| Achievements | `achievements.js` |
| Work experience + logos | `experience.js` |
| YouTube videos | `youtube.js` |
| Testimonials | `testimonials.js` |
| FAQ questions | `faq.js` |
| Contact form titles / messages | `contact.js` |
| Chatbot welcome + answers | `chatbot.js` |

---

## Images & resume

Put files in `public/assets/`, then use paths like:

- Photo: `/assets/hero-portrait.png`
- Project image: `/assets/project-img/Fixit_Vibe.png`
- Experience logo: `/assets/Experience/skill-hunger.png`
- Resume: `/assets/resume/Abdullah_Qureshi_Resume.pdf`

---

## Chatbot + email (Vercel)

| Variable | Where | Needed for |
|---|---|---|
| `RESEND_API_KEY` | Vercel env | Contact form emails |
| `OPENROUTER_API_KEY` | Vercel env | Smarter AI chat (optional) |
| `OPENROUTER_MODEL` | Vercel env | Optional model name |
| `NEXT_PUBLIC_SITE_URL` | Vercel env | Your live site URL |

Chat works **without** OpenRouter (local answers from `chatbot.js`).

---

## Safe edit tips

1. Keep quotes around text: `"like this"`
2. Keep commas between list items
3. Don’t rename `export const …` names (e.g. `hero`, `site`)
4. If something breaks, undo the last edit or check the terminal for a syntax error

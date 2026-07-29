// api/send-email.js
// Deploy this as a Vercel serverless function — put this whole "api" folder
// at your project root, alongside index.html/styles.css/script.js.
//
// SETUP:
// 1. Sign up at https://resend.com, get an API key.
// 2. In Vercel → your project → Settings → Environment Variables, add:
//      RESEND_API_KEY = re_xxxxxxxxxxxxxxxx
// 3. Update the "to" address below to your real inbox.
// 4. Once you verify a domain in Resend, update the "from" address too.

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, subject, message } = req.body || {};

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Portfolio Contact <onboarding@resend.dev>', // swap once your domain is verified
        to: ['abdullahahmedwala@gmai.com'], // <-- put your real inbox here
        reply_to: email,
        subject: `New portfolio message: ${subject}`,
        html: `
          <p><strong>From:</strong> ${escapeHtml(name)} (${escapeHtml(email)})</p>
          <p><strong>Subject:</strong> ${escapeHtml(subject)}</p>
          <p>${escapeHtml(message).replace(/\n/g, '<br>')}</p>
        `,
      }),
    });

    if (!response.ok) {
      const err = await response.text();
      console.error('Resend error:', err);
      return res.status(502).json({ error: 'Email service error' });
    }

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error('Send email error:', err);
    return res.status(500).json({ error: 'Server error' });
  }
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}
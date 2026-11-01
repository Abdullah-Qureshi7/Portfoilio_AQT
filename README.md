# Abdullah Qureshi Portfolio

Next.js portfolio (component-based, easy to edit). Works on **Vercel free**.

## Quick start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## How to edit content (easy)

All text lives in `src/data/` — change values there, not inside components.

| Want to change… | Edit this file |
|---|---|
| Name, email, phone, social links | `src/data/site.js` |
| Hero headline & stats | `src/data/hero.js` |
| About paragraphs | `src/data/about.js` |
| Skills | `src/data/stack.js` |
| Services | `src/data/services.js` |
| Projects | `src/data/projects.js` |
| YouTube videos | `src/data/youtube.js` |
| Experience | `src/data/experience.js` |
| Education | `src/data/education.js` |
| Certifications | `src/data/certifications.js` |
| Achievements | `src/data/achievements.js` |
| Testimonials / FAQ / Contact copy | matching files in `src/data/` |

Images go in `public/assets/`.

## Folder structure

```
src/
  app/                 → Next.js pages + API
  components/
    layout/            → Header, Footer
    sections/          → Hero, About, Works, Youtube, Contact…
    ui/                → small reusable pieces (Slider, Reveal…)
  data/                → ALL editable content
public/assets/         → images, resume, logos
```

## Contact form (Resend)

1. Create API key at [resend.com](https://resend.com)
2. Add `RESEND_API_KEY` in Vercel Environment Variables
3. Update the `to` email in `src/app/api/send-email/route.js`

## Deploy on Vercel

1. Push this repo to GitHub
2. Import in Vercel (Framework = **Next.js** — auto detected)
3. Add `RESEND_API_KEY`
4. Deploy

## Scripts

- `npm run dev` — local development
- `npm run build` — production build
- `npm start` — run production build locally

# Abdullah Qureshi Portfolio

Next.js portfolio — **content is separated from design** so you can edit text easily.

## Quick start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Edit content easily

**Only edit files in `src/data/`.**  
Step-by-step map: [`src/data/EDIT.md`](src/data/EDIT.md)

| Want to change… | File |
|---|---|
| Name, email, phone, socials, nav | `src/data/site.js` |
| Hero | `src/data/hero.js` |
| About | `src/data/about.js` |
| Skills | `src/data/stack.js` |
| Services | `src/data/services.js` |
| Projects | `src/data/projects.js` |
| Experience | `src/data/experience.js` |
| Education / Certs / Achievements | matching files in `src/data/` |
| YouTube / Testimonials / FAQ / Contact | matching files in `src/data/` |
| Chatbot text | `src/data/chatbot.js` |

Images & resume → `public/assets/`

## Folder structure

```
src/
  data/          ← EDIT YOUR TEXT HERE (easy)
  components/    ← layout/design (only if you change UI)
  app/           ← pages + API routes
public/assets/   ← images, logos, resume
```

## Contact form (Resend)

1. Get a key at [resend.com](https://resend.com)
2. Add `RESEND_API_KEY` in Vercel → Environment Variables
3. Redeploy

## Chatbot (optional AI)

- Works **without** any key (answers from portfolio data)
- For smarter AI: add `OPENROUTER_API_KEY` on Vercel, then redeploy

## Deploy on Vercel

1. Push to GitHub  
2. Import in Vercel (Next.js)  
3. Add env vars if needed  
4. Deploy  

## Scripts

- `npm run dev` — local development  
- `npm run build` — production build  
- `npm start` — run production build locally  

# Md Ashfaq — Portfolio

Personal portfolio website built with **Next.js 14** (App Router), **TypeScript**, and **Tailwind CSS**. Deployed on **Vercel**.

## Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:3000
```

## How to Add a New Project

All content lives in a single file: `lib/data.ts`. To add a project:

1. Open `lib/data.ts`
2. Find the `projects` array
3. Add a new object like this:

```typescript
{
  id: "my-new-project",
  title: "My New Project",
  description: "A short description of what the project does and what I learned.",
  tags: ["Python", "TensorFlow", "Pandas"],
  github: "https://github.com/ashfaq-xy/my-project",
  liveDemo: "https://my-project.vercel.app",  // optional
},
```

4. Remove or keep the "Coming Soon" placeholder cards
5. Push to GitHub — Vercel auto-deploys

## Project Structure

```
app/
  layout.tsx          → Root layout (Navbar + Footer + metadata)
  page.tsx            → Home page
  projects/page.tsx   → Projects listing
  experience/page.tsx → Experience & Education timeline
  skills/page.tsx     → Skills & Certifications
  contact/page.tsx    → Contact links
  not-found.tsx       → Custom 404

components/
  layout/             → Navbar, Footer
  sections/           → HeroSection, AboutSection, SkillsPreview
  ui/                 → ProjectCard, TimelineItem, SkillPill, SectionHeading, Button

lib/
  data.ts             → ALL content (edit this to update the site)
  types.ts            → TypeScript interfaces
```

## Deploy to Vercel

1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) → New Project → Import from GitHub
3. Select this repo → Deploy
4. Every push to `main` auto-deploys

## Tech Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide Icons
- Vercel (hosting)

## License

Personal portfolio — not intended for redistribution.

# Progress

## 2026-04-05

- Removed Create Next App boilerplate from `src/app/page.js`
- Replaced with semantic HTML resume shell: `<header>`, `<main>` (summary, experience, education, skills sections), `<footer>`
- Stripped `src/app/globals.css` down to a single Tailwind import directive

## 2026-04-05 (session 2)

- Built full hero section in `src/app/page.js`: dark gradient (`gray-950 → blue-950`), radial glow, subtle grid overlay, staggered fade-in-up animations, name/tagline, contact pills (email, LinkedIn, location), CTA buttons, scroll indicator
- Built sticky navbar in `src/app/components/Navbar.js` (Client Component): transparent → frosted-glass on scroll, IntersectionObserver active-link highlighting, smooth scroll via CSS
- Added `fadeInUp` keyframes and `.fade-in-up-*` delay utilities to `globals.css`; set `scroll-behavior: smooth` on `html`

## 2026-04-05 (session 3)

- Built all remaining sections in one pass for review:
  - **About**: objective paragraph + 4 stat cards (GPA, University, Graduating, Minor)
  - **Education**: USF card with degree, GPA badge, expected date, coursework pills
  - **Experience**: vertical timeline (4 entries: C1 Intern, Care for Company Chair, Harpoon Harry's, Elder Interactive)
  - **Projects**: `ProjectCards.js` client component — 3 expandable cards with tech pills, click to reveal bullets
  - **Skills**: `SkillBars.js` client component — 3 category groups, IntersectionObserver-triggered progress bars
  - **Certifications**: badge/pill cards with hover scale + border glow
  - **Involvement**: 3 activity cards (Portfolio, Data Science Club, Investment Club)
  - **Footer**: "Let's Connect" CTA with email, LinkedIn, and phone buttons

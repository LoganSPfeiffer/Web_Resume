# Logan Pfeiffer — Resume Site

A personal resume and portfolio site built with **Next.js 16 (App Router)** and **Tailwind CSS v4**. Dark-themed, fully responsive, and built with semantic HTML throughout.

---

## Setup

**Prerequisites:** Node.js 18+

```bash
# 1. Clone the repo
git clone <your-repo-url>
cd my-shit-app

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

```bash
# Build for production
npm run build

# Run the production build
npm start
```

---

## Project Structure

```
src/
└── app/
    ├── layout.js           # Root layout — sets fonts, scroll-smooth, global CSS
    ├── page.js             # Main page — all resume sections as one server component
    ├── globals.css         # Tailwind import + fadeInUp animation utilities
    └── components/
        ├── Navbar.js       # Sticky nav with active-section highlighting (client)
        ├── ProjectCards.js # Expandable project cards (client)
        └── SkillBars.js    # Scroll-triggered animated skill bars (client)
docs/
├── resume-content.md       # Source of truth for all resume data
├── design-decisions.md     # Theme and layout decisions
└── progress.md             # Session-by-session build log
```

---

## Features

- [x] **Sticky navbar** — transparent on load, frosted-glass on scroll, active section highlighted via `IntersectionObserver`
- [x] **Hero section** — full-viewport dark gradient, staggered fade-in-up entrance animations, contact pills (email, LinkedIn, location), CTA buttons
- [x] **About section** — objective paragraph with 4 stat cards (GPA, university, graduation, minor)
- [x] **Education section** — USF card with degree, GPA badge, expected graduation, and coursework pills
- [x] **Experience section** — vertical timeline layout with 3 roles; "Incoming" badge on the C1 internship
- [x] **Projects section** — 3 cards with tech-stack pill badges; click any card to expand full bullet details
- [x] **Skills section** — 3 category groups (Programming, Analytics & BI, Business); progress bars animate to their level on first scroll into view
- [x] **Certifications section** — badge cards with icon, name, and status; hover scale + border glow
- [x] **Involvement section** — 3 activity cards (personal portfolio, Data Science Club, Investment Club)
- [x] **Footer** — "Let's Connect" CTA with email, LinkedIn, and phone buttons
- [x] **Smooth scroll** — all nav and CTA anchor links scroll smoothly via Tailwind's `scroll-smooth` utility
- [x] **Semantic HTML** — `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`, `<ul>/<li>` used throughout
- [x] **Tailwind-only styling** — all styles applied via `className`; custom animation utilities registered through `@layer utilities`

---

## How the Code Works

### `layout.js`
The root layout wraps every page. It loads the Geist font variables, applies them to `<html>`, and includes `globals.css`. The `scroll-smooth` Tailwind class here is what makes anchor-link scrolling smooth site-wide — no JavaScript needed.

### `globals.css`
Contains a single `@import "tailwindcss"` (Tailwind v4 syntax) plus the `fadeInUp` keyframe animation. The `.fade-in-up` delay variants are registered inside `@layer utilities` so they behave as proper Tailwind utility classes and can be used directly in `className` — no raw CSS leaking outside of Tailwind's layer system.

### `page.js` (Server Component)
The main page file. It renders every section — hero, about, education, experience, projects, skills, certifications, involvement, and footer — as a single server-rendered page. Interactive sections import their own client components. The heading hierarchy is: one `<h1>` (name in the hero) → `<h2>` per section → `<h3>` for items within each section.

### `Navbar.js` (Client Component)
Needs `'use client'` because it reads browser state. Uses two `useEffect` hooks:
1. A `scroll` event listener that toggles the frosted-glass style once the page scrolls past 20px.
2. An `IntersectionObserver` over each section that updates the `active` state, highlighting the matching nav link as you scroll through the page.

### `ProjectCards.js` (Client Component)
Uses a single `useState` call to track which card index is expanded (`null` = all collapsed). Clicking a card calls `setExpanded(isOpen ? null : i)` — toggling it closed if already open, or opening it. The chevron icon rotates 180° via a Tailwind `rotate-180` class applied conditionally.

### `SkillBars.js` (Client Component)
Uses `useRef`, `useEffect`, and `useState` to animate skill bars on scroll:
1. A `ref` is attached to the container div.
2. An `IntersectionObserver` watches that ref; when it enters the viewport for the first time, `animated` is set to `true` and the observer disconnects.
3. Each bar has an inline `style={{ width: animated ? \`${skill.level}%\` : '0%' }}` — Tailwind's `transition-all duration-700` handles the smooth animation from 0 to the target width.

---

## Tech Stack

| Tool | Version |
|------|---------|
| Next.js | 16.2.2 |
| React | 19.2.4 |
| Tailwind CSS | 4.x |
| Node.js | 18+ |

# Subham Kumar Singh — Portfolio

A backend-systems-themed portfolio built with **React + Vite**, **Tailwind CSS v4**, and **GSAP**
(plus ScrollTrigger). The design's signature element is an animated "data-flow" line — nodes
connected by a moving packet — used in the hero and on every project card to visualize the
real-time systems (WebSocket / pub-sub / SSE) each project actually implements.

## Run it locally

```bash
npm install
npm run dev
```

Open the printed local URL (usually `http://localhost:5173`).

## Build for production

```bash
npm run build
npm run preview   # sanity-check the production build locally
```

The static output lands in `dist/` — deploy that folder to Vercel, Netlify, GitHub Pages,
Railway, or any static host.

## Project structure

```
src/
  data.js                  all resume content (profile, projects, skills, etc.) — edit this
                           file to update copy without touching components
  index.css                design tokens (colors, fonts) via Tailwind v4 @theme, global styles
  components/
    Navbar.jsx
    Hero.jsx               load-in animation + the large data-flow motif
    FlowLine.jsx           the signature animated flow-line (small + large variants)
    StatusBoard.jsx        "ops dashboard" style metrics strip
    About.jsx
    Experience.jsx
    Projects.jsx / ProjectCard.jsx   project grid, expandable detail + hover motion
    Skills.jsx              domain-grouped skill chips
    Achievements.jsx
    Contact.jsx              terminal-styled contact card, click-to-copy email
    Footer.jsx
```

## Customizing

- **Content**: everything text-based (name, projects, skills, achievements, links) lives in
  `src/data.js`. Edit that file only for copy changes.
- **Colors / fonts**: defined once in `src/index.css` under `@theme` — change a hex value there
  and it updates everywhere (Tailwind v4 auto-generates utility classes like `bg-signal`,
  `text-fog`, `border-line` from these tokens).
- **Animations**: GSAP timelines live inside each component's `useEffect`, scoped with
  `gsap.context()` so they clean up on unmount. Scroll-triggered reveals use
  `ScrollTrigger` (`start: "top 78%"` pattern) — adjust the trigger point to change when
  reveals fire.
- Reduced motion is respected globally via a `prefers-reduced-motion` media query in
  `index.css`.

## Stack

React 19 · Vite · Tailwind CSS v4 · GSAP 3 (+ ScrollTrigger) · lucide-react

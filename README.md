# Better Website Co.

Premium marketing site for Better Website Co. — built with React, Vite, Tailwind CSS v4, and Framer Motion.

## Stack

- React 19 + Vite
- Tailwind CSS v4 (via `@tailwindcss/vite`, no config file needed — tokens live in `src/index.css`)
- Framer Motion for micro-interactions
- No jQuery, no Bootstrap, no UI kit dependencies

## Getting started

```bash
npm install
npm run dev       # local dev server
npm run build     # production build -> dist/
npm run preview   # preview the production build locally
```

## Structure

```
src/
  assets/           brand logo (dark/light variants) + mascot
  components/       one component per section (Hero, Pricing, FAQ, etc.)
  context/          ThemeContext — light/dark mode, persisted to localStorage
  data/             copy and project data kept out of components
  index.css         design tokens (color, type, spacing) as CSS variables
```

## Theme system

- Defaults to dark mode on first visit.
- Respects `prefers-color-scheme` if no saved preference exists.
- Persists the user's choice to `localStorage` (`bwc-theme`).
- An inline script in `index.html` sets `data-theme` before React hydrates, so there's no flash of the wrong theme.
- All colors are CSS variables (`--bg`, `--text-primary`, `--accent`, etc.) so switching themes is a single attribute change with a smooth ~300ms transition — no re-render of the component tree.

## Deploying to Netlify

1. `npm run build`
2. Drag the `dist/` folder into Netlify, or connect the repo with:
   - Build command: `npm run build`
   - Publish directory: `dist`

## Editing content

Copy for pricing, FAQ, and project case studies lives in `src/data/` — update it there rather than inside components.

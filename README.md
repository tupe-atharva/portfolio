# Atharva Tupe · Portfolio

A single-page portfolio built with React and Vite, styled after Apple's product catalog pages. Light and dark mode follow the system setting, with a toggle in the nav.

## Run locally

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in dist/
npm run preview  # serve the production build
```

## Edit content

Everything you see on the page (experience, projects, skills, leadership, certifications, links) lives in `src/data.js`. Change it there and the page updates.

- Résumé: replace `public/Atharva_Tupe_Resume.pdf` with a newer PDF (keep the file name, or update `profile.resume` in `src/data.js`).
- New project: add an object to `projects` in `src/data.js`. It gets a tile, a detail sheet, and a ⌘K entry automatically.

## Features

- ⌘K / Ctrl+K command menu: jump to sections, open projects, open LinkedIn/GitHub/résumé, copy email, toggle theme
- Project tiles open a detail sheet (problem, how it's built, outcome, stack, links). Esc or click outside to close
- Light/dark toggle, remembered per browser
- Responsive down to phone width, reduced-motion aware

## Deploy to Netlify

`netlify.toml` is included, so either:

1. Push this folder to a GitHub repo, then in Netlify choose **Add new site → Import an existing project**, pick the repo, and deploy (build settings are read from `netlify.toml`), or
2. Run `npm run build` and drag the `dist/` folder onto your site's **Deploys** page.

To replace the current site at atharva-tupe.netlify.app, deploy to that same Netlify site.

## Structure

```
src/
  App.jsx     components: Nav, Hero, About, Experience, Work, Leadership, Contact, CommandPalette
  data.js     all content
  index.css   design tokens (light + dark) and styles
public/
  Atharva_Tupe_Resume.pdf
  favicon.svg
```

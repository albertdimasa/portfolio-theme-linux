# AGENTS.md

## Stack

- **Framework**: Vue 3 (Composition API, `<script setup>`)
- **Build**: Vite 8 + `@vitejs/plugin-vue`
- **Package manager**: Bun (not npm/pnpm/yarn)
- **Language**: JavaScript (no TypeScript)
- **Styling**: Tailwind CSS v4 (`@tailwindcss/vite` plugin) + custom CSS variables
- **Formatter**: Prettier (no semicolons, single quotes, printWidth 100)
- **Node**: `^22.18.0 \|\| >=24.12.0` (enforced via `package.json` `engines`)
- **No** lint, typecheck, test, or CI setup

## Commands

| Command | Action |
|---|---|
| `bun install` | Install dependencies |
| `bun dev` | Dev server with HMR |
| `bun run build` | Production build to `dist/` |
| `bun run preview` | Preview production build |
| `bun run format` | Format all `src/` with Prettier |

## Import aliases

- `@/Component` → `src/Component` (configured in `vite.config.js` and `jsconfig.json`)

## Entrypoints

- `index.html` → `src/main.js` → `src/App.vue`

## Architecture

This is a personal portfolio site converted from a static HTML file. Key files:

| Path | Purpose |
|---|---|
| `src/App.vue` | Root layout — bento grid (12-col/6-row) |
| `src/components/TopBar.vue` | Fixed top bar with clock |
| `src/components/Dock.vue` | Side/bottom navigation + ID/EN lang toggle |
| `src/components/TerminalHero.vue` | Hero terminal window (summary/detail) |
| `src/components/AboutCard.vue` | About section |
| `src/components/SkillsCard.vue` | Skills tags + courses |
| `src/components/ContactCard.vue` | Contact info |
| `src/components/WorkCard.vue` | Work experience |
| `src/components/ProjectsCard.vue` | Project tiles + modal detail |
| `src/components/EduCard.vue` | Education history |
| `src/components/ProjectModal.vue` | Modal overlay for project details |
| `src/composables/useI18n.js` | ID/EN translations object |
| `src/composables/useClock.js` | Live clock (updates every 10s) |
| `src/composables/useDock.js` | Card maximize/restore state |
| `src/composables/useProjectModal.js` | Projects data + modal state |
| `src/assets/main.css` | Tailwind import + global styles + CSS variables |

## Notable

- Site is a portfolio for **Dimas Albert Abraham** — CV PDF available at `/CV%20-%20Dimas%20Albert%20Abraham.pdf`
- Language toggle (ID/EN) via `useI18n` composable; translations stored inline
- Each card has a **summary** (default) and **detail** (maximized via dock click) view
- `index.html` includes Google Fonts (Ubuntu + Ubuntu Mono) via `<link>` — not in CSS
- No router — section switching is CSS-based maximize/restore
- Build output in `dist/` is gitignored; deploy manually
- VS Code: Volar + Prettier recommended, format-on-save enabled
- `vite-plugin-vue-devtools` is active in dev; Vue DevTools available via overlay
- `example/` contains the original static portfolio (no build, Tailwind CDN) — not part of this project

# AGENTS.md

## Stack

- **Framework**: Vue 3 (Composition API, `<script setup>`)
- **Build**: Vite 8 + `@vitejs/plugin-vue`
- **Package manager**: Bun (not npm/pnpm/yarn)
- **Language**: JavaScript (no TypeScript)
- **Styling**: Tailwind CSS v4 (`@tailwindcss/vite` plugin) + custom CSS variables
- **Formatter**: Prettier (no semicolons, single quotes, printWidth 100) — formats only `src/`
- **Node**: `^22.18.0 || >=24.12.0` (enforced via `package.json` `engines`)
- **No** lint, typecheck, test, or CI setup

## Commands

| Command | Action |
|---|---|
| `bun install` | Install dependencies |
| `bun dev` | Dev server with HMR (Vue DevTools overlay available) |
| `bun run build` | Production build to `dist/` |
| `bun run preview` | Preview production build |
| `bun run format` | Prettier `--write src/` |

## Import aliases

- `@/Component` → `src/Component` (in `vite.config.js` + `jsconfig.json`)

## Entrypoints

- `index.html` → `src/main.js` → `src/App.vue`

## Architecture

Bento grid layout (12-col / 6-row, collapses to single-column flex below 900px). Cards have **summary** (default) and **detail** (maximized fullscreen via dock click). No router — CSS-based maximize/restore. No store — composables use module-level singleton `ref()` so state is shared across all callers.

### Key files

| Path | Purpose |
|---|---|
| `src/App.vue` | Root layout — grid + `Escape` listener (closes maximized card or project modal) |
| `src/components/TopBar.vue` | Fixed top bar with clock |
| `src/components/Dock.vue` | Side/bottom navigation + ID/EN lang toggle |
| `src/components/TerminalHero.vue` | Hero terminal window (summary/detail) |
| `src/components/AboutCard.vue` | About section |
| `src/components/SkillsCard.vue` | Skills tags + courses |
| `src/components/ContactCard.vue` | Contact info |
| `src/components/WorkCard.vue` | Work experience (4 roles) |
| `src/components/ProjectsCard.vue` | Project tiles + modal detail (5 projects) |
| `src/components/EduCard.vue` | Education history |
| `src/components/ProjectModal.vue` | Modal overlay for project details |
| `src/composables/useI18n.js` | ID/EN translations (inline object) |
| `src/composables/useClock.js` | Live clock, updates every 10s |
| `src/composables/useDock.js` | Card maximize/restore state |
| `src/composables/useProjectModal.js` | Projects data + modal state |
| `src/assets/main.css` | Tailwind import + global styles + CSS variables |

## Notable

- `.opencode/plans/` contains design docs — read before editing layout/components
- Language toggle (ID/EN) via `useI18n` composable; translations stored inline
- `index.html` loads Google Fonts (Ubuntu + Ubuntu Mono) via `<link>` — not in CSS
- `example/` contains the original static portfolio (standalone, Tailwind CDN) — not part of build
- CV PDF at `/CV%20-%20Dimas%20Albert%20Abraham.pdf`
- `Escape` key: closes project modal first, then maximized card

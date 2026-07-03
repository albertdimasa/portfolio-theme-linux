# albertabraham.web.id

Personal portfolio site for **Dimas Albert Abraham** — Full-Stack Developer specializing in Laravel & Nuxt.js.

Built with Vue 3, Vite 8, and Tailwind CSS v4. Converted from a static HTML portfolio into a component-based Vue SPA.

## Stack

| Category | Technology |
|---|---|
| **Framework** | Vue 3 (Composition API, `<script setup>`) |
| **Build** | Vite 8 + `@vitejs/plugin-vue` |
| **Package manager** | Bun |
| **Language** | JavaScript (no TypeScript) |
| **Styling** | Tailwind CSS v4 (`@tailwindcss/vite` plugin) + custom CSS variables |
| **Formatter** | Prettier (no semicolons, single quotes, printWidth 100) |

## Prerequisites

- **Node.js**: `^22.18.0` or `>=24.12.0`
- **Bun**: latest stable (install via `curl -fsSL https://bun.sh/install | bash`)

## Setup

```sh
bun install
```

## Available Commands

| Command | Action |
|---|---|
| `bun dev` | Start dev server with HMR (Vue DevTools available via overlay) |
| `bun run build` | Production build to `dist/` |
| `bun run preview` | Preview production build locally |
| `bun run format` | Format all files in `src/` with Prettier |

## Project Structure

```
├── index.html                # Entry HTML (Google Fonts, lang="id")
├── vite.config.js            # Vite config (Vue, DevTools, Tailwind plugins)
├── jsconfig.json             # Import alias @/ → src/
├── package.json
├── bun.lock
├── public/
│   ├── favicon.ico
│   └── CV - Dimas Albert Abraham.pdf
├── src/
│   ├── main.js               # App bootstrap
│   ├── App.vue               # Root layout — bento grid (12-col / 6-row)
│   ├── assets/
│   │   └── main.css          # Tailwind import + global styles + CSS variables
│   ├── composables/
│   │   ├── useI18n.js        # ID/EN translations (inline object)
│   │   ├── useClock.js       # Live clock (updates every 10s)
│   │   ├── useDock.js        # Card maximize/restore state
│   │   └── useProjectModal.js # Projects data + modal open/close state
│   └── components/
│       ├── TopBar.vue          # Fixed top bar with clock & status icons
│       ├── Dock.vue            # Side navigation + ID/EN language toggle
│       ├── TerminalHero.vue    # Hero section (terminal-themed, summary/detail)
│       ├── AboutCard.vue       # About section
│       ├── SkillsCard.vue      # Skills tags + online courses
│       ├── ContactCard.vue     # Contact info (email, phone, social)
│       ├── WorkCard.vue        # Work experience (4 roles)
│       ├── ProjectsCard.vue    # Project tiles + detail list (5 projects)
│       ├── EduCard.vue         # Education history
│       └── ProjectModal.vue    # Modal overlay for project problem/solution
└── example/
    └── index.html             # Original static portfolio (standalone, not part of build)
```

## Architecture

### Layout

The page uses a **bento grid** — CSS Grid with 12 columns and 6 rows. On mobile (< 900px), the grid collapses into a single-column flex layout with a bottom dock.

Each card component has two visual states:
- **Summary** (default): compact view showing key info
- **Detail** (maximized): full-screen overlay triggered by clicking the dock icon

State management is handled by the `useDock` composable — clicking a dock icon sets `activeCard`, which applies a `.maximized` class to the target card, positioning it as a fixed fullscreen overlay.

### Language Switching

Indonesian (ID) and English (EN) translations are stored inline in `useI18n.js` as a plain object. The `t()` function looks up keys in the current language. The toggle is in the dock component.

### Import Aliases

`@/` maps to `src/` (configured in both `vite.config.js` and `jsconfig.json`).

### Styling

- Tailwind CSS v4 via `@tailwindcss/vite` — no PostCSS config needed
- Custom CSS variables for the Ubuntu color scheme (orange, purple, terminal green/blue) defined in `src/assets/main.css`
- Card styles (`.win`, `.win-bar`, `.win-body`) are scoped per component
- Google Fonts (Ubuntu + Ubuntu Mono) loaded via `<link>` in `index.html`

### Key Design Details

- **No router** — section switching is CSS-based maximize/restore (no URL routing)
- **No store** — all state lives in composables (singleton refs)
- **CV download** — PDF available at `/CV%20-%20Dimas%20Albert%20Abraham.pdf`
- **Vue DevTools** active in dev via `vite-plugin-vue-devtools`

## Deployment

Build output goes to `dist/` (gitignored). Deploy manually by uploading the contents of `dist/` to any static host.

```sh
bun run build
# upload dist/ to your server
```

## VS Code Setup

Recommended extensions (listed in `.vscode/extensions.json`):
- **Vue.volar** — Vue 3 language support
- **esbenp.prettier-vscode** — Prettier formatter

Format on save is enabled in `.vscode/settings.json`.

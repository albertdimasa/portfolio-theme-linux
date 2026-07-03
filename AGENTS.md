# AGENTS.md

## Stack

- **Framework**: Vue 3 (Composition API, `<script setup>`)
- **Build**: Vite 8 + `@vitejs/plugin-vue`
- **Package manager**: Bun (not npm/pnpm/yarn)
- **Language**: JavaScript (no TypeScript)
- **Formatter**: Prettier (no semicolons, single quotes, printWidth 100)
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

## Notable

- `index.html` `<title>` still reads "Vite App" — change it for production
- No router, store, or auth — this is a minimal/personal site
- Build output in `dist/` is gitignored; deploy manually
- VS Code: Volar + Prettier recommended, format-on-save enabled

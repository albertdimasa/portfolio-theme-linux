# Porto — Portfolio Site

**Static single-page portfolio** — no build tools, no server, no dependencies.

## Quick start

```
open index.html         # view in browser (no server needed)
```

## Structure

- `index.html` — entire site (HTML + inline CSS + inline JS + Tailwind CDN)
- `CV - Dimas Albert Abraham.pdf` — downloadable CV

## Key facts

- **No package.json, no npm, no CI, no tests.** The site is fully static.
- Tailwind CSS loaded via CDN `<script>` — no config file, no purge. All utility classes used directly in HTML.
- Fonts: Ubuntu + Ubuntu Mono via Google Fonts.
- Layout: CSS Grid "bento" with 12-column / 6-row grid; mobile collapses to flex column with bottom dock.
- Content is in Indonesian (Bahasa).
- The name "Alex Rivera" is the fictional portfolio persona, not necessarily the CV name.
- Edit `index.html` directly — no codegen, no build step.

## What to avoid

- Do not install npm packages or set up a bundler — the site intentionally has none.
- Do not add a server or SSR — it's designed as a static file.

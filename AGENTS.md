# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

> `CLAUDE.md` is a symlink to `AGENTS.md` — edit `AGENTS.md`; changes apply to both.

## What this is

Single-page marketing site for Sussana Correa, a Spanish-language digital content strategist. Built with **Astro 7** and **Tailwind CSS v4**, statically rendered (no client framework, no backend). Package manager is **pnpm** (Node >= 22.12).

## Development

Start the dev server in background mode:

```
astro dev --background
```

Manage it with `astro dev stop`, `astro dev status`, and `astro dev logs`. Dev server runs at `localhost:4321`.

Other commands: `pnpm build` (outputs to `./dist/`), `pnpm preview`, `pnpm astro check` (TypeScript/Astro diagnostics — there is no separate test or lint suite).

## Architecture

- **`src/pages/index.astro`** is the entire site — it imports `Layout` and composes the page from section components in order (Header → Hero → Services → WorkCases → Archive → ContentProduction → Testimonials → Contact → Footer). Adding or reordering a section happens here.
- **`src/layouts/Layout.astro`** is the single HTML shell: `<head>` (SEO title/description props, Google Fonts for Literata + Source Sans 3, Material Symbols) and a global scroll-reveal script. That inline `IntersectionObserver` script auto-applies a fade/translate transition to **every** `<section>` on the page — sections start hidden (`opacity-0`) and reveal on scroll, so a new top-level section gets this behavior for free.
- **`src/components/`** — each section is one self-contained `.astro` component. Content (service lists, work cases, testimonials) lives as hardcoded arrays in the component frontmatter and is rendered with `.map()`; there is no CMS or content collection. Copy is in **Spanish**.
- Shared primitives: `Container.astro` (centered max-width wrapper, `narrow` prop swaps 1100px → 760px), `Button.astro` (`primary`/`secondary` variants, renders `<a>` when `href` is passed else `<button>`), `Icon.astro` (wraps a Material Symbols glyph by `name`), `SeparatorStar.astro`.

## Design system

The design is spec-driven. **`DESIGN.md`** is the source of truth for brand voice, color, typography, spacing, and per-component rules ("Artisanal Strategy Narrative" — warm editorial minimalism, earth tones, no shadows). Read it before making visual changes.

Those tokens are implemented in **`src/styles/global.css`** using Tailwind v4's CSS-first `@theme` block (there is **no `tailwind.config.js`**). Consequences for styling work:

- Use the semantic token utilities, not raw values: colors `bg-linen`, `bg-parchment`, `text-espresso`, `text-soft-espresso`, `text-terracotta`, `bg-adobe`, `border-hairline` (plus a full Material color set: `surface`, `primary`, `on-surface`, etc.).
- Typography pairs go through named font + text tokens: serif headings via `font-headline-md`/`font-display-lg` + `text-headline-md`, body via `font-body-lg`/`font-body-md`. Eyebrow/label text uses `font-label-caps text-label-caps uppercase`.
- Spacing tokens: section vertical rhythm is `py-section-padding` (80px). Buttons/pills use `rounded-full`; depth is done with `border-hairline` 1px outlines, never shadows.
- To add a new token, add the corresponding `--color-*` / `--font-*` / `--text-*` / `--spacing-*` variable to the `@theme` block in `global.css` and mirror it in `DESIGN.md`.

## Astro reference

Full docs: https://docs.astro.build — consult before working on routing/middleware, component syntax, framework integrations, content collections, styling/Tailwind, or i18n.

# Sussi Website

Single-page marketing site for Sussana Correa, a digital content strategist. The site is built with Astro 7, Tailwind CSS v4, and static rendering. It ships as a bilingual experience with Spanish at `/` and English at `/en/`.

## Stack

- Astro 7
- Tailwind CSS v4 through `@tailwindcss/vite`
- TypeScript
- Astro image optimization through `astro:assets`
- pnpm 11
- Node `>=22.12.0`

There is no client framework, CMS, backend, or server-side application logic.

## Commands

Run commands from the project root:

| Command            | Purpose                                        |
| :----------------- | :--------------------------------------------- |
| `pnpm install`     | Install dependencies                           |
| `pnpm dev`         | Start the Astro dev server at `localhost:4321` |
| `pnpm build`       | Build the static site into `dist/`             |
| `pnpm preview`     | Preview the production build locally           |
| `pnpm astro check` | Run Astro and TypeScript diagnostics           |
| `pnpm lint`        | Run `oxlint`                                   |
| `pnpm lint:fix`    | Run `oxlint` with automatic fixes              |
| `pnpm fmt`         | Format with `oxfmt`                            |
| `pnpm fmt:check`   | Check formatting with `oxfmt`                  |

Astro can also run in background mode:

```sh
pnpm astro dev -- --background
pnpm astro dev -- stop
pnpm astro dev -- status
pnpm astro dev -- logs
```

## Routes

Astro i18n is configured in `astro.config.mjs`:

- `/` is the default Spanish route.
- `/en/` is the English route.
- The default locale is not prefixed because `prefixDefaultLocale` is `false`.

The route files are intentionally thin:

- `src/pages/index.astro` renders `<Home lang="es" />`.
- `src/pages/en/index.astro` renders `<Home lang="en" />`.

## Project Structure

```text
/
├── public/                 # Favicons and public static assets
├── src/
│   ├── assets/img/         # Local images imported by Astro components
│   ├── components/         # Page sections and small UI primitives
│   ├── i18n/               # Typed Spanish and English copy dictionaries
│   ├── layouts/            # Shared HTML shell
│   ├── pages/              # Astro routes
│   └── styles/global.css   # Tailwind v4 theme tokens and global styles
├── DESIGN.md               # Source of truth for visual direction
├── astro.config.mjs        # Astro and i18n configuration
└── package.json
```

## Architecture

`src/components/Home.astro` composes the entire page:

```text
Header
Hero
SeparatorStar
Services
WorkCases
Archive
ContentProduction
Testimonials
Contact
Footer
```

To add, remove, or reorder sections, update `Home.astro`. To create a new route, add a file under `src/pages/` and pass the correct language into shared components.

`src/layouts/Layout.astro` owns the document shell: metadata, favicons, Google Fonts, Material Symbols, global CSS import, and the lightweight scroll reveal script. The reveal script targets every `<section>`, so any new top-level section automatically fades in on scroll.

## Components

Section components are self-contained Astro files:

- `Header.astro` renders navigation, the SC mark, language switcher, and mobile menu icon.
- `Hero.astro` renders the main intro, CTA, and portrait image.
- `Services.astro` renders service cards from translation data plus local icon metadata.
- `WorkCases.astro` renders the featured case and secondary case grid.
- `Archive.astro` renders older/archival brand work.
- `ContentProduction.astro` renders the vertical UGC-style content grid.
- `Testimonials.astro` renders the video frame and testimonial cards.
- `Contact.astro` renders WhatsApp, Instagram, and email CTAs.
- `Footer.astro` renders footer links and copyright.

Shared primitives:

- `Container.astro` provides centered layout widths.
- `Button.astro` renders an `<a>` when `href` exists, otherwise a `<button>`.
- `Icon.astro` wraps Material Symbols glyphs.
- `SeparatorStar.astro` renders the decorative star separator.

## Content and Localization

Copy lives in typed dictionaries:

- `src/i18n/es.ts`
- `src/i18n/en.ts`
- `src/i18n/index.ts`

`src/i18n/index.ts` defines the `UIStrings` interface. Both locale files must match that shape, so missing copy keys are caught by `pnpm astro check`.

Most section components import `getTranslations(lang)` and read their copy from the matching dictionary. Structural details that are not copy, such as icon names, image order, and border classes, stay inside the component.

## Design System

`DESIGN.md` is the design source of truth. It describes the brand direction as warm editorial minimalism with earth tones, tactile spacing, flat surfaces, fine borders, and no shadow-based depth.

The design tokens are implemented in `src/styles/global.css` using Tailwind v4's CSS-first `@theme` block. There is no `tailwind.config.js`.

Prefer semantic utilities from the theme:

- Colors: `bg-linen`, `bg-parchment`, `text-espresso`, `text-soft-espresso`, `text-terracotta`, `bg-adobe`, `border-hairline`
- Typography: `font-display-lg`, `font-headline-md`, `font-headline-sm`, `font-body-lg`, `font-body-md`, `font-label-caps`
- Spacing: `py-section-padding`, `gap-stack-*`, `px-gutter`

When adding or changing a design token, update both `DESIGN.md` and the `@theme` block in `src/styles/global.css`.

## Images and Assets

Images used by components live in `src/assets/img/` and are imported directly into Astro files. This allows Astro to optimize them through `astro:assets`.

Favicons and other files that should be served as-is live in `public/`.

## Editing Guide

- Change page order in `src/components/Home.astro`.
- Change SEO metadata in the `meta` keys of each locale dictionary.
- Change nav labels or anchors in `header.nav` inside each locale dictionary.
- Change section copy in `src/i18n/es.ts` and `src/i18n/en.ts`.
- Change imagery by replacing imports in the relevant section component.
- Change brand tokens in `DESIGN.md` and `src/styles/global.css`.

After meaningful changes, run:

```sh
pnpm astro check
pnpm lint
pnpm fmt:check
pnpm build
```

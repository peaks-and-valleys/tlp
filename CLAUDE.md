# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a SvelteKit-based website for "FATAL WOVND", an egocentric platform. The site uses modern web technologies including Svelte 5, TypeScript, CSS, and MDsveX for content management.

## Architecture Overview

### Frontend Framework

- **Svelte 5** with runes API for reactive state management
- **SvelteKit** for routing and SSR/SSG capabilities
- **TypeScript** for type safety throughout the codebase

### Styling System

- **Plain CSS** — no preprocessor. Global styles live in a single `src/routes/styles/app.css`; everything else is Svelte scoped `<style>` blocks
- **Native CSS nesting** is used in both global and scoped styles (no `lang="scss"`)
- **CSS Variables** for theming and consistent spacing/sizing
- Responsive design with mobile-first approach

### Content Management

- **MDsveX** for Markdown/MDX-like content with Svelte components
- Content pages stored as `.svx` files in route directories

### Theming

- Dark theme only — there is no runtime theme switching, no toggle UI, and no persisted preference
- Semantic color tokens (`--c-primary`, `--c-bg-primary`, `--c-ac-primary`, …) are defined once on `:root` in `src/routes/styles/app.css`, mapped from the `--color-*` palette
- `html { color-scheme: dark }` so native UI (scrollbars, form controls) matches

### Key Directories

```
src/
├── routes/                 # Page routes and content
│   ├── (general)/          # Main site pages
│   │   ├── discography/    # Music discography content
│   │   ├── shows/          # Shows/events information
│   │   └── links/          # External links
├── lib/                    # Reusable components and utilities
│   ├── components/         # Shared UI components
│   └── types/             # TypeScript interfaces
└── routes/styles/         # Global styling
    └── app.css            # Reset, CSS variables, base element styles
```

### Component Structure

- Components follow Svelte 5 best practices with runes API
- Semantic HTML with accessible markup
- SVG animations and effects for visual interest

## Deployment

The site is configured to deploy to Cloudflare Pages via `@sveltejs/adapter-cloudflare`.

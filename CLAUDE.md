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
- RSS feed generation for news articles

### Theming

- Light/dark theme support with localStorage persistence
- CSS custom properties for color scheme management
- Automatic detection of system preference with manual override

### Key Directories

```
src/
├── routes/                 # Page routes and content
│   ├── (general)/          # Main site pages
│   │   ├── news/           # News articles and RSS
│   │   ├── discography/    # Music discography content
│   │   ├── shows/          # Shows/events information
│   │   └── links/          # External links
├── lib/                    # Reusable components and utilities
│   ├── components/         # Shared UI components
│   ├── types/             # TypeScript interfaces
│   └── utils/             # Utility functions
└── routes/styles/         # Global styling
    └── app.css            # Reset, CSS variables, base element styles
```

### Component Structure

- Components follow Svelte 5 best practices with runes API
- Theme management through Svelte stores
- Semantic HTML with accessible markup
- SVG animations and effects for visual interest

## Deployment

The site is configured to deploy to Cloudflare Pages via `@sveltejs/adapter-cloudflare`.

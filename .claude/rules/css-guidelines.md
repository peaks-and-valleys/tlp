---
paths:
  - 'src/**/*.{css,scss,svelte}'
---

# CSS/SCSS Development Guidelines

This document provides quick reference guidelines for CSS/SCSS development in this project, following the rules outlined in CLAUDE.md.

## Quick Checklist

Before writing any CSS/SCSS, ask yourself:

1. **Have I checked existing CSS variables?**
   - Check `/src/routes/styles/foundation/_variables.scss` first
   - Look for semantic variables that match your needs

2. **Can this be done with component-scoped styles?**
   - Write styles in the component's `<style>` block
   - Use `lang="scss"` for SCSS features

3. **Do I need to modify global styles?**
   - If yes, have I gotten explicit approval?
   - Can I justify why component-scoped styles won't work?

## Examples of Proper Variable Usage

### ✅ Correct Usage

```scss
.button {
	color: var(--c-primary);
	background-color: var(--c-bg-secondary);
	padding: var(--spacing-m);
	font-size: var(--text-m);
	border-radius: 2px; /* No variable exists, but it's a simple value */
}
```

### ❌ Incorrect Usage

```scss
.button {
	color: #1a1c1f; /* Should use var(--c-primary) */
	padding: 1rem; /* Should use var(--spacing-m) */
	font-size: 16px; /* Should use var(--text-m) */
}
```

## Component-Scoped vs Global Styles

### Component-Scoped (Preferred)

```svelte
<!-- MyComponent.svelte -->
<div class="card">
	<h2>Card Title</h2>
	<p>Card content</p>
</div>

<style lang="scss">
	.card {
		background: var(--c-bg-secondary);
		padding: var(--spacing-l);
		border-radius: 4px;

		h2 {
			color: var(--c-primary);
			margin-bottom: var(--spacing-m);
		}
	}
</style>
```

### Global Styles (Use Sparingly)

Global styles should only be modified with explicit approval and should focus on foundational aspects:

- CSS resets
- Base typography
- Color schemes
- Spacing systems

## Process for Global CSS Changes

If you need to modify global CSS:

1. **Identify the need**: Document why component-scoped styles won't work
2. **Check existing patterns**: Ensure your approach aligns with current global CSS architecture
3. **Request approval**: Discuss with the team before making changes
4. **Implement thoughtfully**: Follow existing naming conventions and organization patterns

## Best Practices

1. **Use semantic class names**: Name classes based on purpose, not appearance
2. **Leverage SCSS features**: Use nesting, but avoid deep nesting (>3 levels)
3. **Mobile-first approach**: Write base styles for mobile, then use media queries for larger screens
4. **Accessibility**: Ensure sufficient color contrast and logical focus orders

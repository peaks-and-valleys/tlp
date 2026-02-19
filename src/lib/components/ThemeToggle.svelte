<script lang="ts">
	import { theme, toggleTheme } from '$lib/utils/theme';
	import type { HTMLButtonAttributes } from 'svelte/elements';

	let props: HTMLButtonAttributes = $props();
</script>

<button onclick={toggleTheme} aria-label="Change color scheme" {...props}>
	{#if $theme === 'dark'}
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round"
			aria-hidden="true"
			><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path
				d="M9 12a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"
			/><path d="M12 5l0 -2" /><path d="M17 7l1.4 -1.4" /><path d="M19 12l2 0" /><path
				d="M17 17l1.4 1.4"
			/><path d="M12 19l0 2" /><path d="M7 17l-1.4 1.4" /><path d="M6 12l-2 0" /><path
				d="M7 7l-1.4 -1.4"
			/></svg
		>
	{:else if $theme === 'light'}
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round"
			aria-hidden="true"
			><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path
				d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454l0 .008"
			/></svg
		>
	{/if}
</button>

<style lang="scss">
	button {
		border-radius: 2px;
		border: 1px solid var(--c-secondary);
		background: transparent;
		font-size: 0.75rem;
		color: var(--c-secondary);
		padding: 4px;
		display: flex;
		justify-content: center;
		align-items: center;

		@media (any-hover) {
			&:hover {
				background: var(--c-ac-primary);
				color: var(--c-ac-fg-primary);
			}
		}
	}
</style>

<script lang="ts">
	import Breadcrumbs from './Breadcrumbs.svelte';
	import LinkIcons from './LinkIcons.svelte';
	import ThemeToggle from './ThemeToggle.svelte';
</script>

<footer>
	<Breadcrumbs />
	<div class="content">
		<div class="submenu">
			<ThemeToggle />
			<LinkIcons />
		</div>
		<p>
			All text contents on this website are licensed under <a
				href="https://creativecommons.org/licenses/by-sa/4.0/"
				rel="external noopener noreferrer"
				translate="no">CC BY-SA 4.0</a
			> (unless explicitly mentioned).
		</p>
	</div>
</footer>

<style lang="scss">
	footer {
		margin-block-start: var(--spacing-xl);
		border-block-start: 1px solid var(--c-tertiary);
	}

	.content {
		margin-block-start: var(--spacing-m);

		p {
			margin-block-start: calc(var(--spacing-s) - var(--half-leading));
			font-size: 0.75rem;
			color: var(--c-secondary);
		}
	}

	.submenu {
		display: flex;
		justify-content: space-between;
		align-items: center;
		column-gap: var(--spacing-xxs);
	}
</style>

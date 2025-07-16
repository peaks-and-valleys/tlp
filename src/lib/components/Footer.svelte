<script lang="ts">
	import Breadcrumbs from './Breadcrumbs.svelte';
	import LinkIcons from './LinkIcons.svelte';
</script>

<footer>
	<Breadcrumbs />
	<div class="content">
		<LinkIcons />
		<p>
			All contents on this website are licensed under <a
				href="https://creativecommons.org/licenses/by-sa/4.0/"
				rel="external noopener noreferrer"
				translate="no">CC BY-SA 4.0</a
			> (unless explicitly mentioned).
		</p>
	</div>
</footer>

<style lang="scss">
	.content {
		view-transition-name: footer-content;
		margin-block-start: var(--spacing-s);
		padding: var(--spacing-s);
		border-block: 1px solid var(--darkgrey-3);
		border-radius: 16px;

		p {
			margin-block-start: calc(var(--spacing-s) - var(--half-leading));
			font-size: 0.75rem;
			color: var(--c-secondary);
		}
	}
</style>

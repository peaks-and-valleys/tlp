<script lang="ts">
	import Breadcrumbs from './Breadcrumbs.svelte';
</script>

<footer>
	<Breadcrumbs />
	<p>
		All contents on this website are licensed under <a
			href="https://creativecommons.org/licenses/by-sa/4.0/"
			rel="external noopener noreferrer"
			translate="no">CC BY-SA 4.0</a
		> (unless explicitly mentioned).
	</p>
</footer>

<style lang="scss">
	footer {
		margin-block-start: 8px;
		border-top: 1px solid var(--bluegrey-40);

		p {
			margin: 0;
			font-size: 0.75rem;
			color: var(--bluegrey-30);
		}
	}
</style>

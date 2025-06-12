<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { LayoutData } from './$types';
	import { page } from '$app/state';
	import { onNavigate } from '$app/navigation';
	import './styles/app.scss';

	import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';

	let { data, children }: { data: LayoutData; children: Snippet } = $props();

	onNavigate((navigation) => {
		if (!document.startViewTransition) return;

		return new Promise((resolve) => {
			document.startViewTransition(async () => {
				resolve();
				await navigation.complete;
			});
		});
	});
</script>

<header>
	<Breadcrumbs />
</header>

<main>
	{@render children()}
</main>

<footer>
	<nav aria-label="Back to the top of this page">
		<a href="#top" class="backToTopNav">↑</a>
	</nav>
</footer>

<style lang="scss">
	.backToTopNav {
		background-color: var(--bluegrey-40);
		color: var(--bluegrey-90);
		font-size: 1.4rem;
		border-radius: 2px;
		text-decoration: none;
		opacity: 0.8;

		position: fixed;
		bottom: 0.625rem;
		right: 0.25rem;
	}
</style>

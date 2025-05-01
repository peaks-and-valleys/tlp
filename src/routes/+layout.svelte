<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { LayoutData } from './$types';
	import { page } from '$app/state';
	import './styles/app.scss';

	import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';

	let { data, children }: { data: LayoutData; children: Snippet } = $props();
</script>

<header>
	<Breadcrumbs />
</header>

<main>
	{@render children()}
</main>

<footer>
	<p>
		<a href="#top">↑ Back to the top</a>
	</p>
</footer>

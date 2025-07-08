<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { LayoutData } from './$types';
	import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';

	let { data, children }: { data: LayoutData; children: Snippet } = $props();
</script>

<Breadcrumbs />

<div class="wrapper">
	<main class="container">
		{@render children()}
	</main>
</div>

<style lang="scss">
	.wrapper {
		margin-block: 8px;
		margin-inline: 12px;
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		min-height: 100vh;
	}
	.container {
		max-width: 80ch;
	}
</style>

<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { LayoutData } from './$types';
	import Header from '$lib/components/Header.svelte';

	let { data, children }: { data: LayoutData; children: Snippet } = $props();
</script>

<div class="wrapper">
	<div class="container">
		<Header />
		<main>
			{@render children()}
		</main>
	</div>
</div>

<style lang="scss">
	.wrapper {
		padding-block: 8px;
		padding-inline: 12px;
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		min-height: 100vh;
	}
	.container {
		inline-size: 100%;
		max-inline-size: 80ch;
		display: flex;
		flex-direction: column;

		main {
			flex: 1;
		}
	}
</style>

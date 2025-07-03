<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { LayoutData } from './$types';
	import { onNavigate } from '$app/navigation';
	import './styles/app.scss';

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

<div class="wrapper">
	<div class="container">
		{@render children()}
	</div>
</div>

<style lang="scss">
	.wrapper {
		padding-inline: 8px;
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		min-height: 100vh;
	}
	.container {
		max-width: 70ch;
	}
</style>
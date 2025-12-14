<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { LayoutData } from './$types';
	import './styles/app.scss';
	import { onNavigate } from '$app/navigation';
	import { pwaInfo } from 'virtual:pwa-info';

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

	let webManifest = $derived(pwaInfo ? pwaInfo.webManifest.linkTag : '');
</script>

<svelte:head>
	{@html webManifest}
</svelte:head>

{@render children()}

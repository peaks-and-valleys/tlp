<script lang="ts">
	import { onMount, type Snippet } from 'svelte';
	import type { LayoutData } from './$types';
	import './styles/app.scss';
	import { theme } from '$lib/utils/theme';

	let { children }: { data: LayoutData; children: Snippet } = $props();

	onMount(() => {
		// マウント時に現在のテーマを DOM に適用
		document.documentElement.setAttribute('data-theme', $theme);
	});
</script>

{@render children()}

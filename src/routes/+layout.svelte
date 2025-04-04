<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { LayoutData } from './$types';
	import './css/sanitize.css';
	import './css/global.css';
	import './css/transition.css'

	let { data, children }: { data: LayoutData; children: Snippet } = $props();

	import { onNavigate } from '$app/navigation';

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
	<p><a href="/">Index page</a></p>
</header>

{@render children()}

<footer>
	<p>
		<a href="#top">↑ Back to the top</a>
	</p>
</footer>

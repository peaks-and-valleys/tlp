<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { LayoutData } from './$types';
	import './css/sanitize.css';
	import './css/global.css';

	let { data, children }: { data: LayoutData; children: Snippet } = $props();
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

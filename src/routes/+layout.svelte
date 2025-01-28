<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { LayoutData } from './$types';
	import './css/sanitize.css';
	import './css/global.css';

	let { data, children }: { data: LayoutData; children: Snippet } = $props();
</script>

<nav>
	<p><a href="/">Index page</a></p>
</nav>

{@render children()}

<footer>
	<p>
		<a href="#top">↑ Back to the top</a>
	</p>
</footer>

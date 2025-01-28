<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { LayoutData } from '../(articles)/$types';

	let { data, children }: { data: LayoutData; children: Snippet } = $props();
</script>

<header>
	<nav>
		<p><a href="/">← Back to index page</a></p>
	</nav>
</header>

{@render children()}

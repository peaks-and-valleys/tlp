<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { LayoutData } from './$types';
	import './css/sanitize.css';
	import './css/global.css';

	let { data, children }: { data: LayoutData; children: Snippet } = $props();
</script>

<div class="top">
	{@render children()}
</div>

<footer>
	<p>
		<a href="#top">↑ Back to the top</a>
	</p>
</footer>

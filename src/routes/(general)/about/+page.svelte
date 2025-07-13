<script lang="ts">
	import HeadProperties from '$lib/components/HeadProperties.svelte';
	import Links from './Links.svelte';

	const metadata = {
		pageTitle: 'About',
		description: 'About TohLPeaks'
	};
</script>

<HeadProperties {metadata} />

<article>
	<h1>About</h1>
	<p><strong>TohLPeaks</strong>: Genres unidentified. Creating confusion in Japan.</p>
	<Links />
</article>

<script lang="ts">
	import type { PageData } from './$types';
	import HeadProperties from '$lib/components/Head-Properties.svelte';

	let { data }: { data: PageData } = $props();
</script>

<HeadProperties pageTitle="2025 singles" description="List of singles that were released in 2025"
></HeadProperties>

<article>
	<h1>2025 singles</h1>
	<h2>Obsessed [2k25]</h2>
	<iframe
		style="border: 0; width: 100%; height: 120px;"
		src="https://bandcamp.com/EmbeddedPlayer/album=3195808291/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/"
		seamless
		><a href="https://tohlpeaks.bandcamp.com/album/obsessed-2k25">Obsessed [2k25] by TohLPeaks</a
		></iframe
	>
	<h2>drowning in narcissism</h2>
	<iframe
		style="border: 0; width: 100%; height: 120px;"
		src="https://bandcamp.com/EmbeddedPlayer/album=729470225/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/"
		seamless
		><a href="https://tohlpeaks.bandcamp.com/album/drowning-in-narcissism"
			>drowning in narcissism by TohLPeaks</a
		></iframe
	>
	<iframe
		width="560"
		height="315"
		src="https://www.youtube-nocookie.com/embed/JYOfz-gF1mc?si=GXjDDajdf_e_gGgH"
		title="YouTube video player"
		frameborder="0"
		allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
		referrerpolicy="strict-origin-when-cross-origin"
		allowfullscreen
	></iframe>
</article>

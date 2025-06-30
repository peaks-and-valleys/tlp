<script lang="ts">
	import type { PageData } from './$types';
	import HeadProperties from '$lib/components/HeadProperties.svelte';
	import Article from './Article.svx';

	let { data }: { data: PageData } = $props();
</script>

<HeadProperties pageTitle="Discography" description="Discography list"></HeadProperties>

<article>
	<Article />
</article>

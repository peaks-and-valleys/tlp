<script lang="ts">
	import type { PageData } from './$types';
	import HeadProperties from '$lib/components/HeadProperties.svelte';
	import Article from './Article.svx';

	let { data }: { data: PageData } = $props();
</script>

<HeadProperties pageTitle="Past shows" description="Past shows list"></HeadProperties>

<article>
	<Article />
</article>

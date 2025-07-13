<script lang="ts">
	import HeadProperties from '$lib/components/HeadProperties.svelte';
	import Article from './Article.svx';

	const metadata = {
		pageTitle: 'Discography',
		description: 'Discography list'
	};
</script>

<HeadProperties {metadata} />

<article>
	<Article />
</article>

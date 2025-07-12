<script>
	import HeadProperties from '$lib/components/HeadProperties.svelte';
	import Article from './Article.svx';

	const metadata = {
		pageTitle: 'Links',
		description: 'Recommended website link list',
	};
</script>

<HeadProperties metadata={metadata} />

<article>
	<Article />
</article>

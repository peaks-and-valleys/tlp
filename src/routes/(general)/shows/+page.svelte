<script lang="ts">
	import HeadProperties from '$lib/components/HeadProperties.svelte';
	import Article from './Article.svx';

	const metadata = {
		pageTitle: 'Shows',
		description: 'Show list'
	};
</script>

<HeadProperties {metadata} />

<article>
	<Article />
</article>

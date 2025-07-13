<script lang="ts">
	import HeadProperties from '$lib/components/HeadProperties.svelte';
	import Article from './Article.svx';

	const metadata = {
		pageTitle: '2025 singles',
		description: 'List of singles that has been released in 2025'
	};
</script>

<HeadProperties {metadata} />
<article>
	<Article />
</article>

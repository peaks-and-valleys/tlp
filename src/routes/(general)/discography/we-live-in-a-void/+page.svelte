<script lang="ts">
	import HeadProperties from '$lib/components/HeadProperties.svelte';
	import Article from './Article.svx';

	const metadata = {
		pageTitle: 'we live in a void',
		description: 'Released on 23rd January 2026'
	};
</script>

<HeadProperties {metadata} />
<article>
	<Article />
</article>

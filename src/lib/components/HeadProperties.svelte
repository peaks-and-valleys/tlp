<script lang="ts">
	import { generateMetadata, type Metadata } from '$lib/types/metadata';

	let { metadata = {} }: { metadata?: Metadata } = $props();

	const { fullTitle, description, canonicalUrl, contentLang, pageType } = $derived(
		generateMetadata(metadata)
	);
</script>

<svelte:head>
	<title>{fullTitle}</title>
	<meta name="description" content={description} />
	<link rel="canonical" href={canonicalUrl} />

	<meta property="og:title" content={fullTitle} />
	<meta property="og:description" content={description} />
	<meta property="og:url" content={canonicalUrl} />
	<meta property="og:site_name" content="FATAL WOVND, by TohLPeaks" />
	<meta property="og:locale" content={contentLang} />
	<meta property="og:type" content={pageType} />
	<meta property="og:image" content="https://tohlpeaks.party/images/ogp.jpg" />

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={fullTitle} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content="https://tohlpeaks.party/images/ogp.jpg" />
</svelte:head>

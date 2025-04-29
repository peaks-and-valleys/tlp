<script lang="ts">
	import { page } from '$app/state';

	const baseTitle: string = 'FATAL WOVND, run by TohLPeaks';
	export let pageTitle: string = '';
	let wholeTitle = baseTitle;

	if (pageTitle != '') {
		wholeTitle = pageTitle + ' - ' + baseTitle;
	}

	export let description: string = 'An egocentric platform, run by TohLPeaks';

	const baseUrl: string = 'https://tohlpeaks.party';
	let pagePath = page.url.pathname;

	// Remove grouping "/()" path
	pagePath = pagePath.replace(/\([^()]*\)/g, '');
	pagePath = pagePath.replace(/\/\//g, '/');

	let wholeUrl: string = baseUrl + pagePath;

	export let contentLang: string = 'en-US';
	export let pageType: string = 'website';
</script>

<svelte:head>
	<title>{wholeTitle}</title>
	<meta name="description" content={description} />
	<meta property="og:description" content={description} />
	<meta property="og:title" content={wholeTitle} />
	<meta property="og:url" content={wholeUrl} />
	<meta property="og:image" content="{baseUrl}/images/ogp.jpg" />
	<meta property="og:site_name" content={baseTitle} />
	<meta property="og:locale" content={contentLang} />
	<meta property="og:type" content={pageType} />
</svelte:head>

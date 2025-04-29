<script lang="ts">
	import { page } from '$app/state';

	let {
		pageTitle = '',
		description = 'An egocentric platform, run by TohLPeaks',
		contentLang = 'en-US',
		pageType = 'website'
	}: Props = $props();

	const baseTitle: string = 'FATAL WOVND, run by TohLPeaks';
	let wholeTitle = $state(baseTitle);

	if (pageTitle != '') {
		wholeTitle = pageTitle + ' - ' + baseTitle;
	}


	const baseUrl: string = 'https://tohlpeaks.party';
	let pagePath = page.url.pathname;

	// Remove grouping "/()" path
	pagePath = pagePath.replace(/\([^()]*\)/g, '');
	pagePath = pagePath.replace(/\/\//g, '/');

	let wholeUrl: string = baseUrl + pagePath;

	interface Props {
		pageTitle?: string;
		description?: string;
		contentLang?: string;
		pageType?: string;
	}
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

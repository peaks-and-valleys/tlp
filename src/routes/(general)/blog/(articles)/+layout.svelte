<script lang="ts">
	import type { LayoutData } from './$types';
	import HeadProperties from '$lib/components/HeadProperties.svelte';

	interface Props {
		data: LayoutData;
		children: any;
	}

	const { data, children }: Props = $props();

	const metadata = {
		pageTitle: data.title,
		description: data.description,
		contentLang: 'ja',
		pageType: 'article'
	};
</script>

<HeadProperties metadata={metadata} />

<article lang="ja">
	<hgroup>
		<h1>{data.title}</h1>
		<p>
			<time datetime={data.date}>{new Date(data.date || '').toLocaleDateString()}</time> | {data.description}
		</p>
	</hgroup>

	{@render children()}
</article>

<style>
	hgroup {
		p {
			margin-block-start: calc(var(--spacing-xs) - var(--half-leading));
			font-size: 0.875rem;
			color: var(--darkgrey-2);
		}
	}
</style>

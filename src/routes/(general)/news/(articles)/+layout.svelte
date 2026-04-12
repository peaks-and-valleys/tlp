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

<HeadProperties {metadata} />

<article lang="ja">
	<hgroup>
		<h1>{data.title}</h1>
		<p class="post-meta">
			<time datetime={data.date}>{new Date(data.date || '').toLocaleDateString('ja-JP')}</time>
			<span class="category">{data.category}</span>
		</p>
	</hgroup>

	{@render children()}
</article>

<style>
	hgroup {
		.post-meta {
			display: flex;
			align-items: center;
			gap: var(--spacing-xs);
			margin-top: var(--spacing-xxs);
			font-size: var(--text-xs);
		}

		time {
			color: var(--c-secondary);
		}

		.category {
			background-color: var(--c-bg-secondary);
			color: var(--c-primary);
			padding-inline: 2px;
			border-radius: 2px;
			text-transform: uppercase;
		}
	}
</style>

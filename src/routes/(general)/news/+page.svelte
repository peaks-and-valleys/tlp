<script lang="ts">
	import type { PageData } from './$types';
	import HeadProperties from '$lib/components/HeadProperties.svelte';

	interface Props {
		data: PageData;
	}

	const { data }: Props = $props();

	const metadata = {
		pageTitle: 'News',
		description: 'ニュース・ブログの記事一覧'
	};
</script>

<svelte:head>
	<link
		rel="alternate"
		type="application/rss+xml"
		title="FATAL WOVND [NEWS/BLOG]"
		href="/news/rss.xml"
	/>
</svelte:head>

<HeadProperties {metadata} />

<h1>News</h1>

<a href="/news/rss.xml" class="rss">RSS Feed</a>

<ul class="category-notice">
	<li><span class="category">news</span> - ちゃんとした告知です</li>
	<li><span class="category">blog</span> - どうでもよいことで、文体も雑です</li>
</ul>

<ul class="posts">
	{#if data.posts.length === 0}
		<li>投稿がありません</li>
	{/if}
	{#each data.posts as post (post.slug)}
		<li class="post">
			<article lang="ja">
				<span role="heading" aria-level="2">
					<a href="/news/{post.slug}">
						{post.title}
					</a>
				</span>
				<div class="post-meta">
					<time datetime={post.date}>{new Date(post.date).toLocaleDateString('ja-JP')}</time>
					{#if post.category}
						<span class="category">{post.category}</span>
					{/if}
				</div>
			</article>
		</li>
	{/each}
</ul>

<style>
	.rss {
		font-size: var(--text-s);
		display: inline-block;
		margin-top: calc(var(--spacing-xs) - var(--half-leading));
	}

	.category-notice {
		font-size: var(--text-xs);
		margin-block-start: var(--spacing-s);
		list-style: none;
		padding-inline-start: 0;
	}

	.posts {
		display: flex;
		flex-direction: column;
		gap: calc(var(--spacing-m) - var(--half-leading));
		margin-block-start: calc(var(--spacing-l) - var(--half-leading));
		padding-inline-start: 0;
	}

	.post {
		list-style: none;
		border-inline-start: 0.25rem solid var(--c-secondary);
		padding-inline-start: var(--spacing-s);
	}

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
</style>

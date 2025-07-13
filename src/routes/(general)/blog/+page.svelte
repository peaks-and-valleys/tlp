<script lang="ts">
	import type { PageData } from './$types';
    import HeadProperties from '$lib/components/HeadProperties.svelte';

	interface Props {
		data: PageData;
	}

	const { data }: Props = $props();

    const metadata = {
        pageTitle: 'Blog',
        description: 'Article list'
    };
</script>

<HeadProperties metadata={metadata} />

<h1>Blog</h1>

<ul class="posts">
	{#if data.posts.length === 0}
		<li>No posts available.</li>
	{/if}
	{#each data.posts as post}
		<li class="post">
			<article>
				<a href="/blog/{post.slug}">
					{post.title}
				</a>
				<time datetime={post.date}>{new Date(post.date).toLocaleDateString()}</time>
			</article>
		</li>
	{/each}
</ul>

<aside><a href="https://log.tohlpeaks.party/" rel="external me noopener noreferrer">Past Archive</a></aside>

<style>
    .posts {
        display: flex;
        flex-direction: column;
        gap: calc(var(--spacing-m) - var(--half-leading));
    }

	time {
		color: var(--c-secondary);
		font-size: 0.875rem;
	}

    aside {
        margin-top: calc(var(--spacing-l) - var(--half-leading));
        font-size: 0.75rem;
    }
</style>

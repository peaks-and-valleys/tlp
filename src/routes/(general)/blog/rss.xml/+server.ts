import type { RequestHandler } from '@sveltejs/kit';
import type { BlogPost, BlogPostModule } from '$lib/types/blog';

export const prerender = true;

export const GET: RequestHandler = async () => {
	const blogPosts = await loadBlogPosts();
	const rss = generateRss(blogPosts);

	return new Response(rss, {
		headers: {
			'Content-Type': 'application/rss+xml; charset=utf-8',
			'Cache-Control': 'max-age=3600'
		}
	});
};

async function loadBlogPosts(): Promise<BlogPost[]> {
	const blogPosts: BlogPost[] = [];

	const modules = import.meta.glob<BlogPostModule>('../\\(articles\\)/*/+page.svx', {
		eager: true
	});

	for (const [path, module] of Object.entries(modules)) {
		const slug = extractSlugFromPath(path);
		if (!slug) continue;

		if (module.metadata.draft === true) continue;

		blogPosts.push({
			slug,
			title: module.metadata.title,
			description: module.metadata.description,
			date: module.metadata.date,
			draft: module.metadata.draft
		});
	}

	return blogPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

function extractSlugFromPath(path: string): string | null {
	const match = path.match(/\(articles\)\/([^/]+)\/\+page\.svx$/);
	return match?.[1] ?? null;
}

function generateRss(posts: BlogPost[]): string {
	const baseUrl = 'https://tohlpeaks.party';
	const channelData = {
		title: 'FATAL WOVND [Blog]',
		link: `${baseUrl}/blog`,
		description: 'Blog posts by TohLPeaks',
		language: 'ja',
		copyright: 'Creative Commons Attribution-ShareAlike 4.0 International'
	};

	const itemsXml = posts.map((post) => createItemElement(post, baseUrl)).join('');
	const lastBuildDate =
		posts.length > 0 ? new Date(posts[0].date).toUTCString() : new Date().toUTCString();

	return buildRssDocument(channelData, itemsXml, lastBuildDate, baseUrl);
}

function createItemElement(post: BlogPost, baseUrl: string): string {
	const link = `${baseUrl}/blog/${post.slug}`;
	return `
    <item>
        <title>${escapeXml(post.title)}</title>
        <description>${escapeXml(post.description)}</description>
        <link>${link}</link>
        <guid isPermaLink="true">${link}</guid>
        <pubDate>${new Date(post.date).toUTCString()}</pubDate>
        <category>Blog</category>
    </item>`;
}

function buildRssDocument(
	channel: {
		title: string;
		link: string;
		description: string;
		language: string;
		copyright: string;
	},
	itemsXml: string,
	lastBuildDate: string,
	baseUrl: string
): string {
	return `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
    <channel>
        <title>${escapeXml(channel.title)}</title>
        <link>${channel.link}</link>
        <description>${escapeXml(channel.description)}</description>
        <language>${channel.language}</language>
        <atom:link href="${baseUrl}/blog/rss.xml" rel="self" type="application/rss+xml" />
        <lastBuildDate>${lastBuildDate}</lastBuildDate>
        <copyright>${channel.copyright}</copyright>${itemsXml}
    </channel>
</rss>`;
}

function escapeXml(str: string): string {
	return str
		.replace(/&/g, '&amp;')
		.replace(/</g, '&lt;')
		.replace(/>/g, '&gt;')
		.replace(/"/g, '&quot;')
		.replace(/'/g, '&apos;');
}

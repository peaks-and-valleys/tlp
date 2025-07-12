import { error } from '@sveltejs/kit';
import type { BlogPostModule } from '$lib/types/blog';

export async function load({ url }: { url: URL }) {
	// /blog/article-slug -> article-slug
	const pathSegments = url.pathname.split('/');
	const slug = pathSegments[pathSegments.length - 1];
	
	// ブログ一覧ページの場合はスキップ
	if (slug === 'blog' || !slug) {
		return {};
	}
		
	try {
		const module = await import(`./${slug}/+page.svx`) as BlogPostModule;
		
		return {
			title: module.metadata.title,
			description: module.metadata.description,
			date: module.metadata.date,
			slug
		};
	} catch (e) {
		console.error('Error loading blog post:', e);
		error(404, `Blog post "${slug}" not found`);
	}
}

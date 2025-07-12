import { error } from '@sveltejs/kit';
import type { BlogPostModule } from '$lib/types/blog';

export async function load({ url }: { url: URL }) {
	// /blog/article-slug -> article-slug
	const pathSegments = url.pathname.split('/');
	const slug = pathSegments[pathSegments.length - 1];

	// If the slug is 'blog' or empty, return an empty object
	if (slug === 'blog' || !slug) {
		return {};
	}

	try {
		const module = (await import(`./${slug}/+page.svx`)) as BlogPostModule;

		// If the post is a draft, return a 404 error. If undefined, assume it's not a draft.
		const isDraft = module.metadata.draft === true;
		if (isDraft) {
			error(404, `Blog post "${slug}" not found`);
		}

		return {
			title: module.metadata.title,
			description: module.metadata.description,
			date: module.metadata.date,
			draft: module.metadata.draft,
			slug
		};
	} catch (e) {
		console.error('Error loading blog post:', e);
		error(404, `Blog post "${slug}" not found`);
	}
}

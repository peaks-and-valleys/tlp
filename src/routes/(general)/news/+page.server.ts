import type { BlogPost, BlogPostModule } from '$lib/types/blog';

export async function load() {
	const blogPosts: BlogPost[] = [];

	const modules = import.meta.glob('./\\(articles\\)/*/+page.svx', {
		eager: true
	}) as Record<string, BlogPostModule>;

	for (const [path, module] of Object.entries(modules)) {
		// ./(articles)/slug-name/+page.svx -> slug-name
		const pathMatch = path.match(/\.\/\(articles\)\/([^/]+)\/\+page\.svx$/);
		if (pathMatch) {
			const slug = pathMatch[1];

			// Check if the post is a draft. If undefined, assume it's not a draft.
			const isDraft = module.metadata.draft === true;
			if (isDraft) {
				continue;
			}

			blogPosts.push({
				slug,
				title: module.metadata.title,
				description: module.metadata.description,
				date: module.metadata.date,
				draft: module.metadata.draft
			});
		}
	}

	blogPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

	return {
		posts: blogPosts
	};
}

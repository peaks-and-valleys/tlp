import type { Component } from 'svelte';

type Category = 'blog' | 'news';

export interface BlogPost {
	slug: string;
	title: string;
	description: string;
	date: string;
	category?: Category;
	content?: string;
	draft?: boolean;
}

export interface BlogPostModule {
	default: Component;
	metadata: {
		title: string;
		description: string;
		date: string;
		category?: Category;
		draft?: boolean;
	};
}

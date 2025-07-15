import type { Component } from 'svelte';

export interface BlogPost {
	slug: string;
	title: string;
	description: string;
	date: string;
	content?: string;
	draft?: boolean;
}

export interface BlogPostModule {
	default: Component;
	metadata: {
		title: string;
		description: string;
		date: string;
		draft?: boolean;
	};
}

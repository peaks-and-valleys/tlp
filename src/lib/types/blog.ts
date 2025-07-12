export interface BlogPost {
	slug: string;
	title: string;
	description: string;
	date: string;
	content?: string;
}

export interface BlogPostModule {
	default: any;
	metadata: {
		title: string;
		description: string;
		date: string;
	};
}

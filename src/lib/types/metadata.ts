import { page } from '$app/state';

export interface Metadata {
	pageTitle?: string;
	description?: string;
	relativePath?: string;
	contentLang?: string;
	pageType?: string;
}

function getRelativePath(): string {
	const targetPath = page.url.pathname;
	return targetPath.replace(/\([^()]*\)/g, '').replace(/\/\//g, '/'); // Removing grouping directory and double slashes
}

// デフォルト設定
const DEFAULT_METADATA: Required<Omit<Metadata, 'pageTitle' | 'description' | 'relativePath'>> = {
	contentLang: 'en-US',
	pageType: 'website'
};

const BASE_TITLE = 'FATAL WOVND, by TohLPeaks';
const BASE_URL = 'https://tohlpeaks.party';

export function generateMetadata(metadata: Metadata = {}): {
	fullTitle: string;
	description: string;
	canonicalUrl: string;
	relativePath: string;
	contentLang: string;
	pageType: string;
} {
	const relativePath = metadata.relativePath || getRelativePath();
	const fullTitle = metadata.pageTitle ? `${metadata.pageTitle} | ${BASE_TITLE}` : BASE_TITLE;

	return {
		fullTitle,
		description: metadata.description || '',
		canonicalUrl: `${BASE_URL}${relativePath}`,
		relativePath,
		contentLang: metadata.contentLang || DEFAULT_METADATA.contentLang,
		pageType: metadata.pageType || DEFAULT_METADATA.pageType
	};
}

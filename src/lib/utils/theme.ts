import { browser } from '$app/environment';
import { writable } from 'svelte/store';

type Theme = 'light' | 'dark';

// 初期値：ローカルストレージ → OS設定 → light の優先順
function getInitialTheme(): Theme {
	if (!browser) return 'light';
	const saved = localStorage.getItem('theme') as Theme | null;
	if (saved) return saved;
	return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

export const theme = writable<Theme>(getInitialTheme());

export function toggleTheme() {
	theme.update((current) => {
		const next = current === 'light' ? 'dark' : 'light';
		localStorage.setItem('theme', next);
		document.documentElement.setAttribute('data-theme', next);
		return next;
	});
}

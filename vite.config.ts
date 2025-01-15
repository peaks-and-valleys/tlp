import { defineConfig } from 'vitest/config';
import { sveltekit } from '@sveltejs/kit/vite';

export default defineConfig({
	server: {
		host: true,
		watch: {
			usePolling: true,
			interval: 1000,
			binaryInterval: 1500
		}
	},

	plugins: [sveltekit()],

	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
});

import { defineConfig } from 'vitest/config';
import { sveltekit } from '@sveltejs/kit/vite';
import { SvelteKitPWA } from '@vite-pwa/sveltekit';

export default defineConfig({
	css: {
		preprocessorOptions: {
			scss: {
				api: 'modern-compiler'
			}
		}
	},

	server: {
		host: true,
		watch: {
			usePolling: true,
			interval: 1000,
			binaryInterval: 1500
		}
	},

	plugins: [
		sveltekit(),
		SvelteKitPWA({
			strategies: 'generateSW',
			registerType: 'autoUpdate',
			manifest: {
				name: 'FATAL WOVND, by TohLPeaks',
				short_name: 'FATAL WOVND',
				description: 'An egocentric platform, run by TohLPeaks.',
				theme_color: '#eaebf0',
				start_url: '/',
				icons: [
					{
						src: '/icon-192.png',
						sizes: '192x192',
						type: 'image/png'
					},
					{
						src: '/icon-512.png',
						sizes: '512x512',
						type: 'image/png'
					}
				]
			},
			workbox: {
				globPatterns: ['**/*.{js,css,html,svg,png,ico,txt}']
			},
			devOptions: {
				enabled: true,
				type: 'module'
			}
		})
	],

	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
});

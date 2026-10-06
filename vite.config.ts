import { mdsvex } from 'mdsvex';
import adapter from '@sveltejs/adapter-cloudflare';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import rehypeExternalLinks from 'rehype-external-links';
import { defineConfig } from 'vitest/config';
import { sveltekit } from '@sveltejs/kit/vite';

/** @type {import('mdsvex').MdsvexOptions} */ const mdsvexOptions = {
  extensions: ['.svx'],
  smartypants: { quotes: true, ellipses: true, dashes: 'oldschool' },
  rehypePlugins: [
    [
      rehypeExternalLinks,
      {
        target: '_blank',
        rel: ['noopener', 'noreferrer', 'external']
      }
    ]
  ]
};

export default defineConfig({
  server: {
    host: true,
    watch: {
      usePolling: true,
      interval: 1000,
      binaryInterval: 1500
    }
  },
  plugins: [
    sveltekit({
      // Consult https://svelte.dev/docs/kit/integrations
      // for more information about preprocessors
      preprocess: [vitePreprocess(), mdsvex(mdsvexOptions)],
      extensions: ['.svelte', '.svx'],
      // adapter-auto only supports some environments, see https://svelte.dev/docs/kit/adapter-auto for a list.
      // If your environment is not supported, or you settled on a specific environment, switch out the adapter.
      // See https://svelte.dev/docs/kit/adapters for more information about adapters.
      adapter: adapter()
    })
  ],
  test: {
    include: ['src/**/*.{test,spec}.{js,ts}'],
    passWithNoTests: true
  }
});

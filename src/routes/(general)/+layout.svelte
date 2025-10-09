<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { LayoutData } from './$types';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';

	let { data, children }: { data: LayoutData; children: Snippet } = $props();
</script>

<div class="wrapper">
	<div class="container">
		<div class="menu-container">
			<Header />
		</div>
		<div class="main-container">
			<main>
				{@render children()}
			</main>
			<Footer />
		</div>
	</div>
</div>

<style lang="scss">
	.wrapper {
		padding-block: var(--spacing-xs);
		padding-inline: var(--spacing-s);
		display: flex;
		flex-direction: row;
		justify-content: center;
		min-height: 100vh;
		min-height: 100dvh;
	}

	.container {
		@media screen and (max-width: 1023.8px) {
			display: flex;
			flex-direction: column;
			max-inline-size: 800px;
		}
		@media screen and (min-width: 1024px) {
			display: flex;
			flex-direction: row;
			gap: var(--spacing-m);

			.menu-container {
				inline-size: 160px;
				position: sticky;
				inset-block-start: 8px;
				align-self: flex-start;
			}
		}
	}

	.main-container {
		flex: 1;
		inline-size: 100%;
		display: flex;
		flex-direction: column;

		@media screen and (min-width: 1024px) {
			inline-size: 800px;
		}

		main {
			flex: 1;
		}
	}
</style>

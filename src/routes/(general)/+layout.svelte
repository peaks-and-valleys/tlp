<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { LayoutData } from './$types';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';

	let { children }: { data: LayoutData; children: Snippet } = $props();
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
		padding: 24px;
		display: flex;
		flex-direction: row;
		justify-content: center;
		min-block-size: 100vh;
		min-block-size: 100dvh;
	}

	.container {
		@media screen and (max-width: calc(64rem - 0.2px)) {
			display: flex;
			flex-direction: column;
			inline-size: 100%;
			max-inline-size: 45rem;
		}
		@media screen and (min-width: 64rem) {
			display: flex;
			flex-direction: row;
			gap: 2.5rem;
		}
	}

	.menu-container {
		@media screen and (min-width: 64rem) {
			inline-size: 10rem;
			position: sticky;
			align-self: flex-start;
		}
	}

	.main-container {
		flex: 1;
		inline-size: 100%;
		display: flex;
		flex-direction: column;

		@media screen and (min-width: 64rem) {
			inline-size: 45rem;
		}

		main {
			flex: 1;
		}
	}
</style>

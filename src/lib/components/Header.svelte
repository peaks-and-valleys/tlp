<script lang="ts">
	import { page } from '$app/state';
	import Menu from './Menu.svelte';
</script>

<header>
	<div class="home-symbol">
		<a href="/" aria-label="Home" aria-current={page.url.pathname === '/' ? 'page' : undefined}>
			<img src="/images/fatal-wovnd.svg" alt="FATAL WOVND" />
		</a>
	</div>
	<Menu />
</header>

<style lang="scss">
	header {
		view-transition-name: header;
	}
	.home-symbol {
		display: flex;
		justify-content: center;
		a {
			inline-size: clamp(64px, 25%, 128px);
			block-size: auto;
		}
	}
</style>

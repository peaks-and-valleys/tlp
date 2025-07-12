<script lang="ts">
	import { page } from '$app/state';
	import Menu from './Menu.svelte';
</script>

<header>
	<div class="symbol">
		<a href="/" aria-label="Home">
			<img src="/images/fatal-wovnd.svg" alt="FATAL WOVND" />
		</a>
	</div>
	<Menu />
</header>

<style lang="scss">
	.symbol {
		display: flex;
		justify-content: center;
		a {
			img {
				inline-size: 96px;
				block-size: auto;
				object-fit: contain;
			}
		}
	}
</style>

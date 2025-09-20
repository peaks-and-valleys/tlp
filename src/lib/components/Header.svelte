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
		@media screen and (min-width: 1024px) {
			position: sticky;
			top: 0;
		}
	}

	.home-symbol {
		display: flex;
		justify-content: center;
		a {
			inline-size: clamp(64px, 25%, 96px);
			block-size: auto;

			@media screen and (min-width: 1024px) {
				inline-size: 96px;
			}

			@media (any-hover) {
				&:hover {
					animation: rotate 5000ms linear infinite;

					@keyframes rotate {
						0% {
							transform: rotate(0);
						}
						100% {
							transform: rotate(-1turn);
						}
					}
				}
			}
		}
	}
</style>

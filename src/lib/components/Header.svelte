<script lang="ts">
	import { page } from '$app/state';
	import Breadcrumbs from './Breadcrumbs.svelte';
</script>

<header>
	<div class="symbol">
		<a href="/" aria-label="Home">
			<img src="/images/fatal-wovnd.svg" alt="FATAL WOVND" />
		</a>
	</div>
	<nav aria-label="Main navigation">
		<ul class="menu">
			<li><a href="/about" aria-current={page.url.pathname === '/about'}>About</a></li>
			<li>
				<a href="/discography" aria-current={page.url.pathname === '/discography'}>Discography</a>
			</li>
			<li>
				<a href="/past-shows" aria-current={page.url.pathname === '/past-shows'}>Past shows</a>
			</li>
			<li>
				<a href="https://log.tohlpeaks.party/" rel="external me noopener noreferrer">Blog</a>
			</li>
			<li>
				<a href="/links" aria-current={page.url.pathname === '/links'}>Links</a>
			</li>
		</ul>
	</nav>
	<Breadcrumbs />
</header>

<style lang="scss">
	.symbol {
		display: flex;
		width: 6rem;
		justify-content: center;
		a {
			display: block;
			width: 100%;
			height: 100%;
			img {
				width: 100%;
				height: 100%;
				object-fit: contain;
			}
		}
	}
	.menu {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		gap: 12px;
		list-style: none;
		padding-inline-start: 0;
		margin-block-end: 0;

		a {
			color: var(--bluegrey-20);
			font-size: 0.875rem;
			text-decoration: none;

			@media (hover: hover) {
				&:hover {
					background-color: var(--bluegrey-40);
					color: var(--bluegrey-90);
					@media (prefers-reduced-motion: no-preference) {
						transition:
							color 0.2s ease-in-out,
							background-color 0.2s ease-in-out;
					}
				}
			}

			&[aria-current='true'] {
				background-color: var(--bluegrey-40);
				color: var(--bluegrey-90);
			}
		}
	}
</style>

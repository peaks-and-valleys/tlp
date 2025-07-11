<script lang="ts">
	import { page } from '$app/state';
</script>

<header>
	<div class="symbol">
		<a href="/" aria-label="Home">
			<img src="/images/fatal-wovnd.svg" alt="FATAL WOVND" />
		</a>
	</div>
	<nav aria-label="Main navigation">
		<ul class="menu">
			<li>
				<a href="/about" aria-current={page.url.pathname === '/about' ? 'page' : undefined}>About</a
				>
			</li>
			<li>
				<a
					href="/discography"
					aria-current={page.url.pathname === '/discography' ? 'page' : undefined}>Discography</a
				>
			</li>
			<li>
				<a href="/shows" aria-current={page.url.pathname === '/shows' ? 'page' : undefined}>Shows</a
				>
			</li>
			<li>
				<a href="https://log.tohlpeaks.party/" rel="external me noopener noreferrer">Blog</a>
			</li>
			<li>
				<a href="/links" aria-current={page.url.pathname === '/links' ? 'page' : undefined}>Links</a
				>
			</li>
		</ul>
	</nav>
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
	.menu {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		list-style: none;
		gap: var(--spacing-xs);
		padding-inline-start: 0;
		margin-block-end: 0;
		justify-content: space-between;

		a {
			color: var(--bluegrey-20);
			font-size: 0.875rem;
			text-decoration: none;

			@media (any-hover) {
				&:hover {
					background-color: var(--bluegrey-40);
					color: var(--bluegrey-90);
					@media (prefers-reduced-motion: no-preference) {
						transition:
							color 200ms ease-in-out,
							background-color 200ms ease-in-out;
					}
				}
			}

			&[aria-current='page'] {
				background-color: var(--bluegrey-40);
				color: var(--bluegrey-90);
			}
		}
	}
</style>

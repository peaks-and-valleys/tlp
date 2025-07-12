<script lang="ts">
	import { page } from '$app/state';

	let innerWidth = $state(0);
    let isOpen = $derived(innerWidth >= 640);
</script>

<svelte:window bind:innerWidth />

<nav aria-label="Main navigation">
	<details bind:open={isOpen}>
		<summary>Menu</summary>
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
	</details>
</nav>

<style lang="scss">
	details {
		summary {
			margin-block-start: calc(var(--spacing-m) - var(--half-leading));
			text-align: center;
			color: var(--bluegrey-20);
			font-size: 0.875rem;
			border-block: 1px solid var(--bluegrey-40);
			border-radius: 4px;
			list-style: none;

			&::-webkit-details-marker {
				display: none;
			}

			&::before,
			&::after {
				content: '+';
				display: inline-block;
				margin-inline: 0.5rem;
			}

			@media screen and (min-width: 640px) {
				display: none;
			}
		}

		&[open] {
			summary {
				&::before,
				&::after {
					content: '-';
				}
			}
		}
	}

	.menu {
		padding-inline-start: 0;
		margin-block-start: calc(var(--spacing-s) - var(--half-leading));
		margin-block-end: 0;

		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		list-style: none;
		gap: var(--spacing-xs);
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

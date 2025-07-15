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
				<a href="/about" aria-current={page.url.pathname === '/about' ? 'true' : undefined}>About</a
				>
			</li>
			<li>
				<a
					href="/discography"
					aria-current={page.url.pathname.startsWith('/discography') ? 'true' : undefined}
					>Discography</a
				>
			</li>
			<li>
				<a href="/shows" aria-current={page.url.pathname.startsWith('/shows') ? 'true' : undefined}
					>Shows</a
				>
			</li>
			<li>
				<a href="/blog" aria-current={page.url.pathname.startsWith('/blog') ? 'true' : undefined}
					>Blog</a
				>
			</li>
			<li>
				<a href="/links" aria-current={page.url.pathname === '/links' ? 'true' : undefined}>Links</a
				>
			</li>
		</ul>
	</details>
</nav>

<style lang="scss">
	details {
		summary {
			margin-block-start: var(--spacing-m);
			padding-block: calc(var(--spacing-xxs) - var(--half-leading));
			margin-inline: auto;
			inline-size: min(100%, 120px);
			background-color: var(--lightgrey-2);
			text-align: center;
			color: var(--c-primary);
			font-size: 0.75rem;
			list-style: none;
			border-radius: 2px;

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
		margin-block-start: var(--spacing-m);
		margin-block-end: 0;
		padding-inline: var(--spacing-xs);
		padding-block: calc(var(--spacing-s) - var(--half-leading));

		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		list-style: none;
		gap: var(--spacing-xs);
		justify-content: space-between;

		border-block: 1px solid var(--darkgrey-3);
		border-radius: 4px;

		a {
			color: var(--c-primary);
			font-size: 0.875rem;
			text-decoration: none;

			@media (any-hover) {
				&:hover {
					background-color: var(--c-ac-primary);
					color: var(--lightgrey-1);
					@media (prefers-reduced-motion: no-preference) {
						transition:
							color 200ms ease-in-out,
							background-color 200ms ease-in-out;
					}
				}
			}

			&[aria-current='true'] {
				background-color: var(--c-ac-primary);
				color: var(--lightgrey-1);
			}
		}
	}
</style>

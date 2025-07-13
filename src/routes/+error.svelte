<script lang="ts">
	import { page } from '$app/state';
	import HeadProperties from '$lib/components/HeadProperties.svelte';

	const metadata = {
		pageTitle: `Error ${page.status}`,
		description: 'An error occurred'
	};

	function getErrorMessage(status: number): string {
		switch (status) {
			case 404:
				return 'Page not found';
			case 500:
				return 'Internal server error';
			case 403:
				return 'Forbidden';
			default:
				return 'An error occurred';
		}
	}

	function getErrorDescription(status: number): string {
		switch (status) {
			case 404:
				return "The page you're looking for doesn't exist or has been moved.";
			case 500:
				return 'Something went wrong on our end. Please try again later.';
			case 403:
				return "You don't have permission to access this resource.";
			default:
				return 'Something unexpected happened. Please try again.';
		}
	}
</script>

<HeadProperties {metadata} />

<div class="error-container" role="status">
	<div class="error-content">
		<h1>{page.status}: {getErrorMessage(page.status)}</h1>
		<p>
			{getErrorDescription(page.status)}
		</p>

		{#if page.error?.message}
			<details>
				<summary>Technical details</summary>
				<span>{page.error.message}</span>
			</details>
		{/if}

		<nav>
			<a href="/">Go home</a>
			<button on:click={() => history.back()}>Go back</button>
		</nav>
	</div>
</div>

<style lang="scss">
	.error-container {
		display: flex;
		justify-content: center;
		align-items: center;
		min-block-size: 90vh;
		padding-block: var(--spacing-xs);
		padding-inline: var(--spacing-m);
	}

	.error-content {
		max-width: 70ch;
	}

	details {
		margin-block-start: var(--spacing-m);
	}

	nav {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		gap: var(--spacing-m);
		margin-block-start: var(--spacing-m);
	}

	button {
		color: var(--c-secondary);
		background-color: var(--c-bg-primary);
		border: none;
		text-decoration: underline;
		padding: 0;
        line-height: 1.8;

		@media (any-hover) {
			&:hover {
				color: var(--c-ac-primary);
				text-decoration: underline wavy;
				text-decoration-color: var(--c-ac-primary);
			}
		}
	}
</style>

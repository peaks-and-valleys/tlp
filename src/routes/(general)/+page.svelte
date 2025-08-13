<script lang="ts">
	import HeadProperties from '$lib/components/HeadProperties.svelte';

	const metadata = {
		description: 'An egocentric platform'
	};
</script>

<HeadProperties {metadata} />

<hgroup>
	<h1 translate="no">FATAL WOVND</h1>
	<p>An egocentric platform, by <strong translate="no">TohLPeaks</strong></p>
</hgroup>

<div class="logo">
	<img src="/images/tlp.svg" alt="TohLPeaks" />
</div>

<style lang="scss">
	.logo {
		display: flex;
		justify-content: center;
		margin-block-start: var(--spacing-l);
		img {
			content-visibility: auto;
			contain-intrinsic-size: 200px;
			inline-size: min(100%, 320px);
			block-size: auto;
			object-fit: contain;
		}
	}
</style>

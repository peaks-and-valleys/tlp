<script>
	import HeadProperties from '$lib/components/HeadProperties.svelte';
</script>

<HeadProperties></HeadProperties>

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
		margin-block-start: 24px;
		img {
			inline-size: min(100%, 320px);
			block-size: auto;
			object-fit: contain;
		}
	}
</style>

<script>
	import HeadProperties from '$lib/components/HeadProperties.svelte';
</script>

<HeadProperties></HeadProperties>

<hgroup>
	<h1 translate="no">FATAL WOVND</h1>
	<p>An egocentric platform, by <strong translate="no">TohLPeaks</strong></p>
</hgroup>
<nav>
	<ul class="menu">
		<li><a href="/about">About</a></li>
		<li><a href="/discography">Discography</a></li>
		<li><a href="/past-shows">Past shows</a></li>
		<li>
			<a href="https://log.tohlpeaks.party/" rel="external me noopener noreferrer">Blog</a>
		</li>
		<li>
			<a href="/links">Links</a>
		</li>
	</ul>
</nav>

<style lang="scss">
	.menu {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		row-gap: calc(0.625rem - var(--half-leading));
		column-gap: 1rem;
		list-style: none;
		padding-inline-start: 0;
	}
</style>

<script>
	import HeadProperties from '$lib/components/HeadProperties.svelte';
</script>

<HeadProperties></HeadProperties>

<hgroup>
	<h1 translate="no">FATAL WOVND</h1>
	<p>An egocentric platform, run by <strong translate="no">TohLPeaks</strong></p>
</hgroup>
<h2 id="pages">Pages</h2>
<nav aria-labelledby="pages">
	<ul class="c-flexMenu">
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
<h2>External Links</h2>
<h3 id="music-and-video">Music / Video</h3>
<nav aria-labelledby="music-and-video-links">
	<ul class="c-flexMenu">
		<li>
			<a href="https://tohlpeaks.bandcamp.com/" rel="external me noopener noreferrer" translate="no"
				>bandcamp</a
			>
		</li>
		<li>
			<a
				href="https://soundcloud.com/tohlpeaks"
				rel="external me noopener noreferrer"
				translate="no">SoundCloud</a
			>
		</li>
		<li>
			<a
				href="https://www.youtube.com/@tohlpeaks"
				rel="external me noopener noreferrer"
				translate="no">YouTube</a
			>
		</li>
		<li>
			<a href="https://ffm.bio/tohlpeaks" rel=" external me noopener noreferrer">Other DSPs</a>
		</li>
	</ul>
</nav>
<h3 id="social">Social</h3>
<nav aria-labelledby="social">
	<ul class="c-flexMenu">
		<li>
			<a
				href="https://bsky.app/profile/tohlpeaks.bsky.social"
				rel="external me noopener noreferrer"
				translate="no">Bluesky</a
			>
		</li>
		<li>
			<a
				href="https://www.instagram.com/tohlpeaks/"
				rel="external me noopener noreferrer"
				translate="no">Instagram</a
			>
		</li>
		<li>
			<a href="https://x.com/tohlpeaks" rel="external me noopener noreferrer">X</a>
		</li>
	</ul>
</nav>
<h3 id="contact">Contact</h3>
<nav aria-labelledby="contact">
	<address>
		<ul class="c-flexMenu">
			<li>
				<a
					href="https://discordapp.com/users/283132253465477120"
					rel="external me noopener noreferrer"
					translate="no">Discord</a
				>
			</li>
			<li>tohlpeaks(at)proton(dot)me</li>
		</ul>
	</address>
</nav>

<style lang="scss">
	.c-flexMenu {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		row-gap: calc(0.625rem - var(--half-leading));
		column-gap: 1.25rem;
		list-style: none;
		padding-inline-start: 0;
	}
</style>

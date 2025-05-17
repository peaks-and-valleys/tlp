<script>
	import { page } from '$app/state';
	import HeadProperties from '$lib/components/Head-Properties.svelte';
</script>

<HeadProperties></HeadProperties>

<article>
	<hgroup>
		<h1 translate="no">FATAL WOVND</h1>
		<p>An egocentric platform, run by <strong translate="no">TohLPeaks</strong></p>
	</hgroup>
	<h2>Announcement</h2>
	<h3>New singles out</h3>
	<p>Check out <a href="/discography/2025-singles">this page</a></p>
	<h2 id="portfolio">Portfolio</h2>
	<nav aria-labelledby="portfolio">
		<ul class="c-flexMenu">
			<li><a href="/discography">Discography</a></li>
			<li><a href="/past-shows">Past shows</a></li>
		</ul>
	</nav>
	<h2>Links</h2>
	<h3 id="music-and-video">Music / Video</h3>
	<nav aria-labelledby="music-and-video-links">
		<ul class="c-flexMenu">
			<li>
				<a
					href="https://tohlpeaks.bandcamp.com/"
					rel="external me noopener noreferrer"
					translate="no">bandcamp</a
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
				<a href="https://ffm.bio/tohlpeaks" rel=" external me noopener noreferrer"
					>Other DSPs</a
				>
			</li>
		</ul>
	</nav>
	<h3 id="social">Social</h3>
	<nav aria-labelledby="social">
		<ul class="c-flexMenu">
			<li>
				<a
					href="https://www.instagram.com/tohlpeaks/"
					rel="external me noopener noreferrer"
					translate="no">Instagram</a
				>
			</li>
			<li>
				<a
					href="https://bsky.app/profile/tohlpeaks.bsky.social"
					rel="external me noopener noreferrer"
					translate="no">Bluesky</a
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
	<h3 id="misc-contents">Misc</h3>
	<nav aria-labelledby="misc-contents">
		<ul class="c-flexMenu">
			<li>
				<a href="https://log.tohlpeaks.party/" rel="external me noopener noreferrer"
					>Blog (written in Japanese)</a
				>
			</li>
			<li>
				<a href="https://discord.gg/MnKBeR3eNm" rel="external noopener noreferrer">Discord server</a
				>
			</li>
			<li>
				<a href="https://www.paypal.com/paypalme/tohlpeaks" rel="external noopener noreferrer"
					>Donate via PayPal</a
				>
			</li>
			<li>
				<a href="/recommendations">Recommendations</a>
			</li>
		</ul>
	</nav>
</article>

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

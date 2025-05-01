<script lang="ts">
	import type { PageData } from './$types';
	import HeadProperties from '$lib/components/Head-Properties.svelte';

	let { data }: { data: PageData } = $props();
</script>

<HeadProperties pageTitle="Recommendations" description="Recommendation list"></HeadProperties>

<article>
	<h1>Recommendations</h1>
	<p>
		I published this page without permissions. If you want to add or remove your website on this
		page, hit me up (contact info on index page).
	</p>
	<p><strong>Notice: I will never link to SNS pages. Build your own websites or blogs.</strong></p>
	<h2>Individuals</h2>
	<ul>
		<li>
			<a href="https://www.cannorin.net/" hreflang="ja" translate="no">cannorin</a>
		</li>
		<li>
			<a href="https://deathinsurance.online/" hreflang="en-US" translate="no">death insurance</a>
		</li>
		<li>
			<a href="https://eulalie.fun/" translate="no">Eulalie</a>
		</li>
	</ul>
	<h2>Organizations</h2>
	<h3>Labels / Collectives</h3>
	<ul>
		<li>
			<a href="https://dayofthedroids.wixsite.com/dayofthedroids" translate="no"
				>Day of the droids</a
			>
		</li>
		<li>
			<a href="https://sound.jp/fujimi/" translate="no">Fujimi Industry Records</a>
		</li>
		<li>
			<a href="https://ketapasando.com/" translate="no">ketapasando</a>
		</li>
		<li>
			<a href="https://www.pvre.life/" translate="no">Pure Life</a>
		</li>
		<li>
			<a href="http://okuyukashiki.com" translate="no">奥床式</a>
		</li>
	</ul>
	<h3>Venues</h3>
	<ul>
		<li>
			<a href="https://nuthings.wordpress.com/" hreflang="ja" translate="no">environment 0g</a>
		</li>
		<li>
			<a href="https://namba-bears.main.jp" hreflang="ja" translate="no">Namba BEARS</a>
		</li>
	</ul>
	<h3>Internet radios</h3>
	<ul>
		<li>
			<a href="https://datafruits.fm/" translate="no">datafruits.fm</a>
		</li>
		<li>
			<a href="https://somnyan.stream/" translate="no">Somnyan In-ter-face</a>
		</li>
	</ul>
	<h3>Blogs / Media</h3>
	<ul>
		<li>
			<a href="https://ghz.tokyo/" hreflang="ja" translate="no">GHz</a>
		</li>
		<li>
			<a href="https://indiegrab.jp/" hreflang="ja" translate="no">indiegrab</a>
		</li>
	</ul>
	<h3>Record shops</h3>
	<ul>
		<li>
			<a href="https://enban.cart.fc2.com/" hreflang="ja" translate="no">円盤</a>
		</li>
		<li>
			<a href="https://naminohana-records.com/" hreflang="ja" translate="no">naminohana records</a>
		</li>
	</ul>
</article>

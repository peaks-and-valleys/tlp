<script lang="ts">
  import { onMount } from 'svelte';
  import { MediaQuery } from 'svelte/reactivity';

  const sources = [
    '/images/index/vis-01.mp4',
    '/images/index/vis-02.mp4',
    '/images/index/vis-03.mp4',
    '/images/index/vis-04.mp4',
    '/images/index/vis-05.mp4'
  ];

  const reducedMotion = new MediaQuery('prefers-reduced-motion: reduce');

  let picked = $state<number | undefined>();
  let video = $state<HTMLVideoElement | undefined>();

  const src = $derived(
    picked === undefined || reducedMotion.current ? undefined : sources[picked]
  );

  onMount(() => {
    picked = Math.floor(Math.random() * sources.length);
  });
</script>

{#if src}
  <video
    {src}
    bind:this={video}
    autoplay
    muted
    loop
    playsinline
    preload="auto"
    disablepictureinpicture
    aria-hidden="true"
    tabindex="-1"
    onloadedmetadata={() => video?.play().catch(() => {})}
  ></video>
{/if}

<style>
  video {
    position: fixed;
    inset: 0;
    z-index: 0;
    inline-size: 100%;
    block-size: 100%;
    object-fit: cover;
    pointer-events: none;
    mix-blend-mode: screen;
    opacity: 40%;
  }
</style>

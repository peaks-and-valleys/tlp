<script lang="ts">
	import type { HTMLImgAttributes } from 'svelte/elements';

	interface Props extends HTMLImgAttributes {
		maxInlineSizePx?: string;
		containIntrinsicSizePx?: string;
	}

	let {
		src,
		alt,
		class: className,
		style,
		maxInlineSizePx,
		containIntrinsicSizePx,
		...restProps
	}: Props = $props();

	const computedStyle = `
        --max-inline-size: ${maxInlineSizePx ?? '600px'};
        --intrinsic-size: ${containIntrinsicSizePx ?? '320px'}
        ${style || ''}
    `;
</script>

<img {src} alt={alt ?? ''} class={className || ''} style={computedStyle} {...restProps} />

<style>
	img {
		inline-size: min(100%, var(--max-inline-size));
		content-visibility: auto;
		contain-intrinsic-size: var(--intrinsic-size);
	}
</style>

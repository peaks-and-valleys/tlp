<script lang="ts">
	import type { HTMLImgAttributes } from 'svelte/elements';

	interface Props extends HTMLImgAttributes {
		marginBlockStartPx?: string;
		maxInlineSizePx?: string;
		containIntrinsicSizePx?: string;
	}

	let {
		src,
		alt,
		class: className,
		style,
		marginBlockStartPx,
		maxInlineSizePx,
		containIntrinsicSizePx,
		...restProps
	}: Props = $props();

	const computedStyle = `
		--margin-block-start-size: ${marginBlockStartPx ?? '16px'};
        --max-inline-size: ${maxInlineSizePx ?? '600px'};
        --intrinsic-size: ${containIntrinsicSizePx ?? '320px'}
        ${style || ''}
    `;
</script>

<img {src} alt={alt ?? ''} class={className || ''} style={computedStyle} {...restProps} />

<style>
	img {
		margin-block-start: var(--margin-block-start-size);
		inline-size: min(100%, var(--max-inline-size));
		content-visibility: auto;
		contain-intrinsic-size: var(--intrinsic-size);
	}
</style>

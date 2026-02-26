<script lang="ts">
	import type { HTMLImgAttributes } from 'svelte/elements';

	interface Props extends HTMLImgAttributes {
		marginBlockStart?: string;
		maxInlineSize?: string;
		containIntrinsicSize?: string;
	}

	let {
		src,
		alt,
		class: className,
		style,
		marginBlockStart,
		maxInlineSize,
		containIntrinsicSize,
		...restProps
	}: Props = $props();

	const computedStyle = `
		--margin-block-start-size: ${marginBlockStart ?? '1.5rem'};
        --max-inline-size: ${maxInlineSize ?? '35rem'};
        --intrinsic-size: ${containIntrinsicSize ?? '20rem'}
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

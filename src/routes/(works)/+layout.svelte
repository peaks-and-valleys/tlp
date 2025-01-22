<script lang="ts">
    import type { Snippet } from 'svelte';
    import type { LayoutData } from './$types';

    let { data, children }: { data: LayoutData, children: Snippet } = $props();
</script>

<header>
    <nav>
        <a href="/">Back to index page</a>
    </nav>
</header>

{@render children()}
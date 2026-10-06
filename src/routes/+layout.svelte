<script lang="ts">
  import type { Snippet } from 'svelte';
  import type { LayoutData } from './$types';
  import './styles/app.css';
  import { onNavigate } from '$app/navigation';

  let { children }: { data: LayoutData; children: Snippet } = $props();

  onNavigate((navigation) => {
    if (navigation.shallow) return;
    if (!document.startViewTransition) return;

    return new Promise((resolve) => {
      document.startViewTransition(async () => {
        resolve();
        await navigation.complete;
      });
    });
  });
</script>

{@render children()}

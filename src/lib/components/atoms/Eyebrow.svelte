<script lang="ts">
	import type { Snippet } from 'svelte';

	let { children }: { children: Snippet } = $props();
</script>

<span class="font-sans text-[9.5px] font-medium tracking-[0.28em] text-amber uppercase">
	{@render children()}
</span>

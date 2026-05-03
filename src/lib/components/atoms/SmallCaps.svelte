<script lang="ts">
	import type { Snippet } from 'svelte';

	let { children }: { children: Snippet } = $props();
</script>

<span class="font-sans text-[10px] font-medium tracking-[0.18em] uppercase">
	{@render children()}
</span>

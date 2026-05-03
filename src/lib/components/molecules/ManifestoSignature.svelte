<script lang="ts">
	import type { Snippet } from 'svelte';

	let { children }: { children: Snippet } = $props();
</script>

<div class="mt-14 inline-flex flex-col items-center gap-1.5 text-manifesto-text/55">
	<span class="font-display text-[24px] text-manifesto-accent italic"> — & — </span>
	<span class="font-sans text-[10px] font-medium tracking-[0.22em] uppercase">
		{@render children()}
	</span>
</div>

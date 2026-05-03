<script lang="ts">
	import type { Snippet } from 'svelte';

	let { size = 'md' }: { size?: 'sm' | 'md' | 'lg'; children?: Snippet } = $props();
</script>

<span
	class="font-display leading-none font-light tracking-[0.02em] italic
	       {size === 'sm' ? 'text-[28px]' : size === 'lg' ? 'text-[34px]' : 'text-[18px]'}"
>
	Hue<span class="font-normal text-amber"> & </span>Weave
</span>

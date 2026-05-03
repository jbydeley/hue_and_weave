<script lang="ts">
	import type { HexColor } from '$lib/data/collections';

	let { color, size = 'sm' }: { color: HexColor; size?: 'sm' | 'md' | 'lg' } = $props();

	let sizeClass = $derived(
		size === 'sm' ? 'w-[10px] h-[10px]' : size === 'md' ? 'w-3 h-3' : 'w-4 h-4'
	);
</script>

<span class="inline-block rounded-full {sizeClass}" style:background-color={color}></span>

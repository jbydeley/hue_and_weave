<script lang="ts">
	import type { Collection } from '$lib/data/collections';
	import Swatch from '../atoms/Swatch.svelte';

	let {
		collection,
		active = false,
		onclick,
		onmouseenter,
		onmouseleave
	}: {
		collection: Collection;
		active?: boolean;
		onclick?: () => void;
		onmouseenter?: () => void;
		onmouseleave?: () => void;
	} = $props();

	let index = $derived(
		collection.id === 'soleil'
			? 1
			: collection.id === 'foret'
				? 2
				: collection.id === 'crepuscule'
					? 3
					: 4
	);
</script>

<button
	role="tab"
	aria-selected={active}
	class="font-inherit flex flex-1 flex-col items-center gap-2 border-0 border-b-[1px]
	       bg-transparent px-3 py-[18px] transition-[color,border-color] duration-250
	       {active ? 'border-b-amber text-text-primary' : 'border-b-transparent text-text-secondary'}
	       max-[880px]:[flex:0_0_auto]"
	{onclick}
	{onmouseenter}
	{onmouseleave}
>
	<Swatch color={collection.color} />
	<span class="font-display text-[22px] font-light tracking-[0.01em] italic">{collection.name}</span
	>
	<span
		class="text-[9px] font-medium tracking-[0.22em] uppercase
		       {active ? 'text-amber' : 'text-text-tertiary'}"
	>
		№ 0{index} · {collection.products.length} pieces
	</span>
</button>

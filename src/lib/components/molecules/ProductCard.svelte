<script lang="ts">
	import type { Product, Collection } from '$lib/data/collections';
	import Bracelet from '../atoms/Bracelet.svelte';

	let {
		product,
		collection,
		index = 0
	}: {
		product: Product;
		collection: Collection;
		index?: number;
	} = $props();

	let rotation = $derived(-8 + (index - 1) * 4);
</script>

<article
	class="flex flex-col overflow-hidden rounded-[6px] border-[0.5px] border-hairline
	       bg-surface transition-[border-color,transform,box-shadow] duration-300
	       hover:-translate-y-[2px] hover:border-amber"
>
	<div
		class="relative flex aspect-[5/4] items-center justify-center"
		style:background-color={collection.bg}
	>
		<div class="w-[78%]">
			<Bracelet colors={product.colors} {rotation} />
		</div>
	</div>
	<div class="flex flex-col gap-1.5 border-t-[0.5px] border-hairline-soft px-5 py-[18px] pb-5">
		<span class="text-[9px] font-medium tracking-[0.22em] text-amber uppercase"
			>{collection.name}</span
		>
		<span class="font-display text-[18px] font-normal tracking-[0.01em] text-text-primary"
			>{product.name}</span
		>
		<div class="mt-1.5 flex items-center justify-between">
			<span class="text-[12px] font-medium tracking-[0.04em] text-text-primary"
				>{product.price}</span
			>
			<button
				class="rounded-full border-[0.5px] border-hairline bg-transparent px-3 py-[7px]
				       font-sans text-[9px] font-medium tracking-[0.2em] text-text-secondary uppercase
				       transition-all duration-250 hover:border-amber hover:text-amber"
			>
				View
			</button>
		</div>
	</div>
</article>

<script lang="ts">
	import { collections } from '$lib/data/collections';
	import Eyebrow from '../atoms/Eyebrow.svelte';
	import CollectionTab from '../molecules/CollectionTab.svelte';
	import ProductCard from '../molecules/ProductCard.svelte';

	let active: string = $state(collections[0].id);

	let col = $derived(collections.find((c) => c.id === active) ?? collections[0]);
</script>

<section id="collections" class="py-[120px] pb-[140px]">
	<div class="mx-auto max-w-[1280px] px-9">
		<div class="mb-16">
			<Eyebrow>The Four Collections</Eyebrow>
			<h2
				class="m-0 mt-4 font-display text-[clamp(36px,4vw,52px)] leading-[1.05]
				       font-light tracking-[0.005em]"
			>
				An atlas of <em class="text-amber italic">color</em>.
			</h2>
			<p
				class="m-0 mt-3 max-w-[52ch] font-sans text-[15px] leading-[1.6] font-light text-text-secondary"
			>
				Each collection is named for an hour of the day, or a feeling we couldn't otherwise place.
			</p>
		</div>

		<div
			class="mx-auto my-14 flex max-w-[980px] justify-center border-t-[0.5px] border-b-[0.5px]
			       border-hairline"
			role="tablist"
		>
			{#each collections as c, i (c.id)}
				<div class={i > 0 ? 'border-l-[0.5px] border-hairline' : ''}>
					<CollectionTab collection={c} active={c.id === active} onclick={() => (active = c.id)} />
				</div>
			{/each}
		</div>

		<div class="grid grid-cols-3 items-stretch gap-[14px] max-[880px]:grid-cols-1">
			{#each col.products as product, i (product.name)}
				<ProductCard {product} collection={col} index={i} />
			{/each}
		</div>
	</div>
</section>

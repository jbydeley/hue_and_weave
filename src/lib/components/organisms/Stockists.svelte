<script lang="ts">
	import { stockists } from '$lib/data/stockists';
	import Eyebrow from '../atoms/Eyebrow.svelte';
	import StockistRow from '../molecules/StockistRow.svelte';
	import WorldMap from '../molecules/WorldMap.svelte';

	let hoveredIndex: number | null = $state(null);
</script>

<section id="stockists" class="py-[120px] pb-[130px]">
	<div class="mx-auto max-w-[1280px] px-9">
		<div class="flex flex-col items-center gap-3.5 text-center">
			<Eyebrow>Stockists</Eyebrow>
			<h2 class="sec-title">Found in seven <em>cities</em>.</h2>
			<p class="sec-sub">We do not sell online. We prefer the bracelet to be held first.</p>
		</div>

		<div class="mt-16 grid grid-cols-1 items-center gap-[60px] md:grid-cols-[1.2fr_1fr]">
			<WorldMap
				{stockists}
				highlightedIndex={hoveredIndex}
				onpinenter={(i) => (hoveredIndex = i)}
				onpinleave={() => (hoveredIndex = null)}
			/>

			<div class="flex flex-col">
				{#each stockists as s, i (s.city)}
					<StockistRow
						stockist={s}
						isHighlighted={hoveredIndex === i}
						onmouseenter={() => (hoveredIndex = i)}
						onmouseleave={() => (hoveredIndex = null)}
					/>
				{/each}
			</div>
		</div>
	</div>
</section>

<style>
	.sec-title {
		font-family: var(--font-display);
		font-weight: 300;
		font-size: 54px;
		line-height: 1.05;
		letter-spacing: 0.005em;
		margin: 0;
	}

	.sec-title em {
		font-style: italic;
		font-weight: 300;
		color: var(--color-amber);
	}

	.sec-sub {
		font-family: var(--font-display);
		font-style: italic;
		font-weight: 300;
		font-size: 18px;
		color: var(--color-text-secondary);
		margin: 0;
		max-width: 520px;
	}
</style>

<script lang="ts">
	import Eyebrow from '../atoms/Eyebrow.svelte';
	import PhotoCorner from '../atoms/PhotoCorner.svelte';
	import PhotoTag from '../atoms/PhotoTag.svelte';
	import CraftItem from '../molecules/CraftItem.svelte';
</script>

<section id="craft" class="border-t border-b border-hairline bg-off-white py-[130px]">
	<div class="mx-auto max-w-[1280px] px-9">
		<div class="flex flex-col items-center gap-3.5 text-center">
			<Eyebrow>The Craft</Eyebrow>
			<h2 class="sec-title">
				A loom, a palette, <em>a point of view</em>.
			</h2>
			<p class="sec-sub">
				Forty-three colors of elastic, sorted by hour of day, strung by hand on a pegboard the size
				of a postcard.
			</p>
		</div>

		<div class="mt-[72px] grid grid-cols-1 items-center gap-[80px] md:grid-cols-2">
			<div
				class="photo-stripes relative aspect-[4/5] overflow-hidden rounded-[4px] border-[0.5px] border-hairline bg-foret-bg"
			>
				<PhotoCorner>Plate II</PhotoCorner>
				<PhotoTag>// atelier still life — pegboard, 2026</PhotoTag>
			</div>
			<div class="flex flex-col gap-9">
				<CraftItem
					numeral="i."
					title="The palette is curated, never assembled."
					description="Each collection begins with a single colour observed in the world — the inside of an apricot, a sage hedge after rain — and the rest are chosen to keep it company."
					iconColor="#C17B3A"
					iconBg="rgba(193,123,58,0.14)"
				/>
				<CraftItem
					numeral="ii."
					title="Strung by hand, on a pegboard."
					description="The loom is a wooden board, the size of a postcard, with twenty-eight pins. Each bracelet takes between four and seven minutes to weave."
					iconColor="#4A8B7A"
					iconBg="rgba(74,139,122,0.14)"
				/>
				<CraftItem
					numeral="iii."
					title="The price is fifty cents."
					description="It is the price of the materials, plus a small consideration for the time. We do not feel the need to say more about it."
					iconColor="#7B6AAF"
					iconBg="rgba(123,106,175,0.14)"
				/>
			</div>
		</div>
	</div>
</section>

<style>
	.photo-stripes {
		background:
			repeating-linear-gradient(135deg, var(--color-hairline-soft) 0 1px, transparent 1px 14px),
			var(--color-foret-bg);
	}

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

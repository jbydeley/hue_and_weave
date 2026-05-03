<script lang="ts">
	import Bracelet from '../atoms/Bracelet.svelte';
	import Button from '../atoms/Button.svelte';
	import Eyebrow from '../atoms/Eyebrow.svelte';
	import PhotoCorner from '../atoms/PhotoCorner.svelte';
	import PhotoTag from '../atoms/PhotoTag.svelte';
	import { collections } from '$lib/data/collections';

	const rose = collections[3];
	const braceletColors = rose.products[0].colors;
</script>

<section class="hero-plate relative pt-24 pb-[90px]">
	<div
		class="mx-auto grid max-w-[1280px] grid-cols-2 items-stretch gap-0 px-9
		       max-[880px]:grid-cols-1 min-[881px]:min-h-[88vh]"
	>
		<div
			class="flex flex-col justify-center gap-6 py-20 pr-0
			       min-[881px]:border-r min-[881px]:border-hairline min-[881px]:pr-[60px]"
		>
			<Eyebrow>Spring Collection — MMXXIV</Eyebrow>
			<h1
				class="m-0 font-display text-[clamp(56px,6.5vw,96px)] leading-[1.0]
				       font-light tracking-[0.005em]"
			>
				Loomed with <em class="text-amber italic">intention</em>, worn without ceremony.
			</h1>
			<p
				class="m-0 max-w-[440px] font-display text-[20px] leading-[1.5] text-text-secondary italic"
			>
				Four collections, twelve bracelets, one quiet idea: that fifty cents of elastic deserves the
				same care as anything else on the wrist.
			</p>
			<div class="mt-4 flex gap-3">
				<a href="#collections">
					<Button variant="primary">Browse collections</Button>
				</a>
			</div>
		</div>

		<div class="grid grid-rows-[1fr_auto] gap-6 py-20 pl-0 min-[881px]:pl-[60px]">
			<div
				class="photo-stripes relative min-h-[380px] overflow-hidden rounded-[4px]
				       border-[0.5px] border-hairline bg-rose-bg"
			>
				<PhotoCorner>Plate I</PhotoCorner>
				<div class="absolute inset-0 flex items-center justify-center p-8">
					<Bracelet colors={braceletColors} rotation={-6} />
				</div>
				<PhotoTag>// hand portrait — wrist 03 / atelier light</PhotoTag>
			</div>
			<div
				class="flex items-baseline justify-between font-mono text-[10px]
				       tracking-[0.08em] text-text-tertiary"
			>
				<span>Photographed in natural light</span>
				<span>New Hamburg, 04.MMXXIV</span>
			</div>
		</div>
	</div>
</section>

<style>
	.photo-stripes {
		background:
			repeating-linear-gradient(135deg, var(--color-hairline-soft) 0 1px, transparent 1px 14px),
			var(--color-rose-bg);
	}
</style>

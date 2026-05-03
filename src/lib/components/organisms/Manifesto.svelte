<script lang="ts">
	import ManifestoSignature from '../molecules/ManifestoSignature.svelte';
</script>

<section id="manifesto" class="bg-manifesto-bg py-[160px] text-center text-manifesto-text">
	<div class="mx-auto max-w-[1280px] px-9">
		<span
			class="font-sans text-[9.5px] font-medium tracking-[0.28em] text-manifesto-accent uppercase"
		>
			Manifesto
		</span>
		<h2
			class="mx-auto mt-8 max-w-[18ch] font-display text-[clamp(40px,5vw,68px)]
			       leading-[1.18] font-light tracking-[0.005em]"
		>
			We believe a wrist is a small canvas, and a small canvas deserves
			<em class="text-manifesto-accent italic">real attention</em>.
		</h2>
		<ManifestoSignature>The Atelier of Hue & Weave</ManifestoSignature>
	</div>
</section>

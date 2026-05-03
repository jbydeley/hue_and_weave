<script lang="ts">
	import type { HexColor } from '$lib/data/collections';

	let {
		numeral,
		title,
		description,
		iconColor,
		iconBg
	}: {
		numeral: string;
		title: string;
		description: string;
		iconColor: HexColor;
		iconBg: string;
	} = $props();
</script>

<div class="grid grid-cols-[48px_1fr] items-start gap-5">
	<div
		class="flex h-9 w-9 items-center justify-center rounded-full font-display
		       text-[16px] italic"
		style:background={iconBg}
		style:color={iconColor}
	>
		{numeral}
	</div>
	<div>
		<h4 class="m-0 font-display text-[20px] font-normal tracking-[0.005em] text-text-primary">
			{title}
		</h4>
		<p
			class="m-0 max-w-[38ch] font-sans text-[13.5px] leading-[1.7] font-light text-text-secondary"
		>
			{description}
		</p>
	</div>
</div>

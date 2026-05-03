<script lang="ts">
	import type { Stockist } from '$lib/data/stockists';

	let {
		stockist,
		isHighlighted = false,
		onmouseenter,
		onmouseleave
	}: {
		stockist: Stockist;
		isHighlighted?: boolean;
		onmouseenter?: () => void;
		onmouseleave?: () => void;
	} = $props();

	let sold = $derived(stockist.status === 'sold-out');
</script>

<div
	role="listitem"
	class="grid grid-cols-[auto_1fr_auto] items-baseline gap-[18px] border-b-[0.5px]
	       border-hairline-soft py-[18px] transition-[color,opacity] duration-250
	       first:border-t-[0.5px] first:border-hairline-soft"
	style:color={isHighlighted ? 'var(--color-amber)' : undefined}
	style:opacity={sold ? 0.6 : 1}
	{onmouseenter}
	{onmouseleave}
>
	<span
		class="font-display text-[20px] font-light italic"
		style:text-decoration={sold ? 'line-through' : 'none'}
		style:text-decoration-color="var(--color-hairline)"
	>
		{stockist.city}
	</span>
	<span class="font-sans text-[13px] font-light text-text-secondary">{stockist.place}</span>
	<span
		class="font-sans text-[9px] font-medium tracking-[0.22em] uppercase"
		style:color={sold ? 'var(--color-text-tertiary)' : 'var(--color-amber)'}
	>
		{sold ? 'Sold out' : 'In stock'}
	</span>
</div>

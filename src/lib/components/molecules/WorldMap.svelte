<script lang="ts">
	import type { Stockist } from '$lib/data/stockists';

	let {
		stockists,
		highlightedIndex = null,
		onpinenter,
		onpinleave
	}: {
		stockists: readonly Stockist[];
		highlightedIndex?: number | null;
		onpinenter?: (index: number) => void;
		onpinleave?: () => void;
	} = $props();

	let hLines = $derived(Array.from({ length: 11 }, (_, i) => i));
	let vLines = $derived(Array.from({ length: 13 }, (_, i) => i));
</script>

<svg
	viewBox="0 0 1000 540"
	class="h-auto w-full rounded-[4px] border-[0.5px] border-hairline bg-surface p-6"
	aria-hidden="true"
>
	<g stroke="var(--color-hairline-soft)" stroke-width="0.4">
		{#each hLines as i (i)}
			<line x1="0" x2="1000" y1={i * 54} y2={i * 54} />
		{/each}
		{#each vLines as i (i)}
			<line x1={i * 83} x2={i * 83} y1="0" y2="540" />
		{/each}
	</g>

	<g fill="var(--color-hairline-soft)">
		<path
			d="M120,180 Q170,140 240,150 Q300,160 320,210 Q310,260 260,280 Q200,290 160,270 Q110,250 120,180 Z"
		/>
		<path
			d="M430,150 Q500,130 560,150 Q610,170 620,210 Q610,260 560,280 Q480,300 440,270 Q400,230 430,150 Z"
		/>
		<path d="M780,200 Q860,180 900,220 Q920,260 880,290 Q820,310 780,290 Q740,260 780,200 Z" />
		<path d="M820,440 Q880,430 900,460 Q900,490 860,500 Q820,500 810,470 Q810,450 820,440 Z" />
		<path d="M520,360 Q560,350 580,380 Q580,410 540,420 Q500,420 510,390 Q510,370 520,360 Z" />
	</g>

	{#each stockists as s, i (s.city)}
		{@const sold = s.status === 'sold-out'}
		{@const pinFill = sold ? 'var(--color-text-tertiary)' : 'var(--color-amber)'}
		<g
			role="button"
			tabindex="-1"
			style:cursor="default"
			onmouseenter={() => onpinenter?.(i)}
			onmouseleave={() => onpinleave?.()}
		>
			<circle
				cx={s.x}
				cy={s.y}
				r={highlightedIndex === i ? 18 : 14}
				fill={pinFill}
				opacity={sold ? 0.1 : 0.14}
			/>
			<circle cx={s.x} cy={s.y} r="4.5" fill={pinFill} opacity={sold ? 0.55 : 1} />
			<text
				x={s.x + 12}
				y={s.y + 4}
				font-size="11"
				font-family="DM Sans"
				font-weight="500"
				letter-spacing="0.14em"
				fill={sold ? 'var(--color-text-tertiary)' : 'var(--color-text-primary)'}
			>
				{s.city.toUpperCase()}
			</text>
		</g>
	{/each}
</svg>

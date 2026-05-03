<script lang="ts">
	import type { HexColor } from '$lib/data/collections';

	type BraceletStyle = 'ellipse' | 'woven';

	let {
		colors,
		style = 'ellipse',
		rotation = -8
	}: {
		colors: [HexColor, HexColor, HexColor];
		style?: BraceletStyle;
		rotation?: number;
	} = $props();

	const cx = 140;
	const cy = 80;
	const rx = 110;
	const ry = 52;
</script>

<svg viewBox="0 0 280 160" class="block h-full w-full" preserveAspectRatio="xMidYMid meet">
	<g transform="rotate({rotation} {cx} {cy})">
		{#if style === 'ellipse'}
			<ellipse
				{cx}
				{cy}
				rx={rx + 6}
				ry={ry + 6}
				fill="none"
				stroke={colors[0]}
				stroke-opacity="0.08"
				stroke-width="1"
			/>
			<ellipse
				{cx}
				{cy}
				{rx}
				{ry}
				fill="none"
				stroke={colors[0]}
				stroke-width="6"
				stroke-linecap="round"
			/>
			<ellipse
				{cx}
				{cy}
				rx={rx - 5}
				ry={ry - 5}
				fill="none"
				stroke={colors[1]}
				stroke-width="1.6"
				stroke-dasharray="3 3"
				opacity="0.7"
			/>
			<ellipse
				{cx}
				{cy}
				rx={rx - 14}
				ry={ry - 14}
				fill="none"
				stroke={colors[2]}
				stroke-width="1"
				opacity="0.4"
			/>
		{:else}
			<ellipse
				{cx}
				{cy}
				{rx}
				{ry}
				fill="none"
				stroke={colors[0]}
				stroke-opacity="0.14"
				stroke-width="0.6"
			/>
			{#each Array(36) as _, i (i)}
				{@const t = (i / 36) * Math.PI * 2}
				<circle
					cx={cx + Math.cos(t) * (rx - 12)}
					cy={cy + Math.sin(t) * (ry - 12)}
					r="1"
					fill={colors[2]}
					opacity="0.5"
				/>
			{/each}
			{#each Array(56) as _, i (i)}
				{@const t = (i / 56) * Math.PI * 2}
				{@const col = i % 3 === 0 ? colors[0] : i % 3 === 1 ? colors[1] : colors[2]}
				{@const r = i % 3 === 0 ? 3.4 : 2.6}
				<circle
					cx={cx + Math.cos(t) * rx}
					cy={cy + Math.sin(t) * ry}
					{r}
					fill={col}
					opacity={i % 3 === 0 ? 1 : 0.85}
				/>
			{/each}
		{/if}
	</g>
</svg>

<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { HTMLButtonAttributes } from 'svelte/elements';

	type Variant = 'primary' | 'ghost';

	let {
		variant = 'ghost',
		children,
		...rest
	}: HTMLButtonAttributes & {
		variant?: Variant;
		children?: Snippet;
	} = $props();
</script>

<button
	class="inline-flex items-center gap-2 rounded-full border-[0.5px] px-[18px] py-3 font-sans
	       text-[11px] font-medium tracking-[0.2em] uppercase transition-all duration-250 ease-out
	       {variant === 'primary'
		? 'border-amber bg-amber text-white hover:border-amber/85 hover:bg-amber/85'
		: 'border-hairline bg-transparent text-text-primary hover:border-amber hover:text-amber'}"
	{...rest}
>
	{#if children}
		{@render children()}
	{/if}
</button>

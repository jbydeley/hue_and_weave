<script lang="ts">
	let { items = [] }: { items?: string[] } = $props();
</script>

<div
	class="flex items-center justify-center gap-7 font-sans text-[10px] font-medium tracking-[0.18em] text-announce-text uppercase"
>
	{#each items as item, i (item)}
		<span>{item}</span>
		{#if i < items.length - 1}
			<span class="h-[3px] w-[3px] shrink-0 rounded-full bg-announce-text/55"></span>
		{/if}
	{/each}
</div>

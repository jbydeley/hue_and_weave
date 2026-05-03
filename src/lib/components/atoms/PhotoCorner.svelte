<script lang="ts">
	import type { Snippet } from 'svelte';

	let { children }: { children: Snippet } = $props();
</script>

<span
	class="absolute top-[14px] right-[14px] font-mono text-[9px] tracking-[0.12em] text-text-tertiary uppercase"
>
	{@render children()}
</span>

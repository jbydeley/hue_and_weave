<script lang="ts">
	import type { Snippet } from 'svelte';

	let { children }: { children: Snippet } = $props();
</script>

<span
	class="absolute bottom-[14px] left-[14px] font-mono text-[9.5px] tracking-[0.08em] text-text-tertiary"
>
	{@render children()}
</span>

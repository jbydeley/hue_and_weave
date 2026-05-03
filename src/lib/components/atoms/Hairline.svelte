<script lang="ts">
	let {
		position = 'bottom',
		class: className = ''
	}: { position?: 'top' | 'bottom'; class?: string } = $props();

	let borderClass = $derived(
		position === 'top' ? 'border-t border-hairline' : 'border-b border-hairline'
	);
</script>

<hr class={`border-0 ${borderClass} ${className}`} />

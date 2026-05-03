<script lang="ts">
	const links = [
		{ href: '#collections', label: 'Collections' },
		{ href: '#craft', label: 'The Craft' },
		{ href: '#manifesto', label: 'Manifesto' },
		{ href: '#stockists', label: 'Stockists' }
	] as const;
</script>

<div class="flex justify-center gap-[34px] max-[880px]:hidden">
	{#each links as link (link.href)}
		<a
			href={link.href}
			class="text-[11px] font-normal tracking-[0.14em] text-text-secondary uppercase
			       transition-colors duration-250 hover:text-amber"
		>
			{link.label}
		</a>
	{/each}
</div>

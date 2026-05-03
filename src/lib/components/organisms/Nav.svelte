<script lang="ts">
	import SmallCaps from '../atoms/SmallCaps.svelte';
	import NavLogo from '../molecules/NavLogo.svelte';
	import NavLinks from '../molecules/NavLinks.svelte';

	let scrolled = $state(false);

	$effect(() => {
		const onScroll = () => {
			scrolled = window.scrollY > 32;
		};
		onScroll();
		window.addEventListener('scroll', onScroll, { passive: true });
		return () => window.removeEventListener('scroll', onScroll);
	});
</script>

<nav
	class="nav fixed inset-x-0 top-0 z-50 grid grid-cols-[1fr_auto_1fr] items-center
	       border-b-[0.5px] px-9 transition-all duration-350 ease-in-out"
	class:condensed={scrolled}
>
	<NavLogo />
	<NavLinks />
	<div class="flex items-center justify-end gap-[18px]">
		<span class="text-text-tertiary">
			<SmallCaps>Est. 2024</SmallCaps>
		</span>
		<a
			href="#stockists"
			class="inline-flex items-center gap-2 rounded-full border-[0.5px] border-hairline
			       bg-transparent px-[18px] py-3 font-sans text-[11px] font-medium tracking-[0.2em]
			       text-text-primary uppercase transition-all duration-250 ease-out
			       hover:border-amber hover:text-amber"
		>
			Find a stockist
		</a>
	</div>
</nav>

<style>
	.nav {
		padding-top: 22px;
		padding-bottom: 22px;
		background-color: transparent;
		border-bottom-color: transparent;
	}

	.condensed {
		padding-top: 12px;
		padding-bottom: 12px;
		background-color: var(--color-nav-bg-condensed);
		backdrop-filter: blur(18px) saturate(160%);
		-webkit-backdrop-filter: blur(18px) saturate(160%);
		border-bottom-color: var(--color-hairline);
	}
</style>

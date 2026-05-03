<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import { themeConfig } from '$lib/theme';

	let { children } = $props();

	// Live OS preference updates — pre-hydration twin lives in src/app.html inline script.
	$effect(() => {
		const mq = window.matchMedia('(prefers-color-scheme: dark)');
		const apply = (dark: boolean) => {
			document.documentElement.setAttribute(
				'data-theme',
				dark ? themeConfig.dark : themeConfig.light
			);
		};
		apply(mq.matches);
		const handler = (e: MediaQueryListEvent) => apply(e.matches);
		mq.addEventListener('change', handler);
		return () => mq.removeEventListener('change', handler);
	});
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<!--
		Pre-hydration script in src/app.html reads this tag to resolve light/dark palette names.
		The content is driven by src/lib/theme.ts — change that file, no other edits needed.
	-->
	<meta name="theme-config" content={JSON.stringify(themeConfig)} />
</svelte:head>

{@render children()}

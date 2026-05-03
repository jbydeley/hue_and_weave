<script lang="ts">
	import Eyebrow from '../atoms/Eyebrow.svelte';
	import Hairline from '../atoms/Hairline.svelte';
	import Wordmark from '../atoms/Wordmark.svelte';

	type FooterLink = { label: string; href?: string };

	type FooterColumn = { heading: string; links: FooterLink[] };

	const columns: FooterColumn[] = [
		{
			heading: 'Collections',
			links: [
				{ label: 'Soleil', href: '#collections' },
				{ label: 'Forêt', href: '#collections' },
				{ label: 'Crépuscule', href: '#collections' },
				{ label: 'Rosé', href: '#collections' }
			]
		},
		{
			heading: 'The Atelier',
			links: [
				{ label: 'The Craft', href: '#craft' },
				{ label: 'Manifesto', href: '#manifesto' },
				{ label: 'Stockists', href: '#stockists' },
				{ label: 'Press inquiries' }
			]
		},
		{
			heading: 'Atelier',
			links: [{ label: 'bonjour@hueandweave.com' }]
		}
	];
</script>

<footer class="transition-background bg-bg px-9 pt-20 pb-10 duration-350 ease-in-out">
	<Hairline position="top" />

	<div class="mx-auto max-w-[1200px]">
		<div
			class="grid grid-cols-[1.4fr_1fr_1fr_1fr] gap-16 pb-16 max-[880px]:grid-cols-2 max-[880px]:gap-9"
		>
			<div>
				<Wordmark size="lg" />
				<p
					class="mt-2 max-w-[30ch] font-display text-[15px] leading-[1.55] font-light text-text-secondary italic"
				>
					Color is the craft.
				</p>
			</div>

			{#each columns as col (col.heading)}
				<div>
					<Eyebrow>{col.heading}</Eyebrow>
					<ul class="m-0 flex list-none flex-col gap-2.5 p-0">
						{#each col.links as link (link.label)}
							<li class="text-[13px] font-light text-text-secondary">
								{#if link.href}
									<a href={link.href} class="transition-colors duration-200 hover:text-amber">
										{link.label}
									</a>
								{:else}
									{link.label}
								{/if}
							</li>
						{/each}
					</ul>
				</div>
			{/each}
		</div>

		<Hairline />

		<div
			class="flex items-center justify-between pt-8 font-sans text-[10.5px] font-medium tracking-[0.16em] text-text-tertiary uppercase"
		>
			<span>&copy; MMXXIV Hue &amp; Weave</span>
			<span>Hand-loomed &middot; New Hamburg &middot; Est. 2024</span>
		</div>
	</div>
</footer>

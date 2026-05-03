<script lang="ts">
	import {
		Announce,
		Collections,
		Craft,
		Footer,
		HeroPlate,
		Manifesto,
		Nav,
		Stockists
	} from '$lib/components';
</script>

<Announce />
<Nav />

<main class="flex flex-col">
	<HeroPlate />
	<Collections />
	<Craft />
	<Manifesto />
	<Stockists />
</main>

<Footer />

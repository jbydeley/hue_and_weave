<script lang="ts">
	import AnnounceTrack from '../molecules/AnnounceTrack.svelte';

	const items = [
		'New · The Crépuscule Collection',
		'Now stocked in 7 cities',
		'Hand-loomed in New Hamburg',
		'$0.50 — and not a cent less'
	];
</script>

<div class="overflow-hidden bg-announce-bg py-[14px] text-announce-text">
	<AnnounceTrack {items} />
</div>

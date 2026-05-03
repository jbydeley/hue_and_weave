<script lang="ts">
	let { class: className = '' }: { class?: string } = $props();
</script>

<div
	aria-hidden="true"
	class="grid h-[22px] w-[22px] grid-cols-2 grid-rows-2 gap-[1.5px] overflow-hidden rounded-[4px] {className}"
>
	<i class="block rounded-[1.5px] bg-amber"></i>
	<i class="block rounded-[1.5px] bg-jade"></i>
	<i class="block rounded-[1.5px] bg-blush"></i>
	<i class="block rounded-[1.5px] bg-violet"></i>
</div>

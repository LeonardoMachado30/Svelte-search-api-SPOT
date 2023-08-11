<script>
	import { fly } from 'svelte/transition';

	const countrys = ['Brazil', 'Estados unidos', 'Mexico', 'Alemanha'];
	let open = false;

	function handleTooltip() {
		open = !open;
	}
</script>

<ul class="flex justify-end items-baseline w-full gap-4">
	<button
		class="relative bg-white px-8 py-2 cursor-pointer"
		type="button"
		on:click|preventDefault|stopPropagation={handleTooltip}
	>
		<span class="font-black">Filtrar</span>
		{#if open}
			<div
				class="absolute flex flex-col top-10 left-0 text-center bg-white z-10 shadow-inner shadow-gray-400"
				transition:fly={{ y: -10, duration: 2000 }}
			>
				{#each countrys as country, i}
					<button value={i} class="px-3 py-1 text-sm hover:bg-sky-500 hover:text-white">
						{country}
					</button>
				{/each}
			</div>
		{/if}
	</button>
	<li>Ordenar</li>
</ul>

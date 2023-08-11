<script lang="ts">
	function handleChange(event: any) {
		const search = `/search/q=${event?.target?.value}`;
		if (event.which === 13) location.href = search;
	}
</script>

<div class="relative w-full max-w-lg">
	<input
		on:keyup={handleChange}
		type="text"
		class="p-4 pr-12 rounded-sm border-b-2 w-full border-sky-700 active:border-sky-700 hover:border-sky-700 text-lg"
		placeholder="Pesquise sua noticia"
	/>

	<svg
		class="w-6 h-6 absolute top-4 right-3"
		xmlns="http://www.w3.org/2000/svg"
		fill="none"
		viewBox="0 0 24 24"
		stroke-width="1.5"
		stroke="currentColor"
	>
		<path
			stroke-linecap="round"
			stroke-linejoin="round"
			d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
		/>
	</svg>
</div>

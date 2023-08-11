<script>
	import '../style.css';
	import Filter from './components/Filter.svelte';
	import InputSearch from './components/InputSearch.svelte';
</script>

<section class="container flex flex-col justify-center items-center mx-6 my-6 gap-4">
	<InputSearch />
	<Filter />
	<slot />
</section>

<script lang="ts">
	/** @type {import('./$types').PageServerLoad} */
	export let data: any;
	const articles = data.articles;
	const totalResults = data.totalResults;
</script>

{#if totalResults === 0}
	<div>Nenhum resultado encontrado</div>
{:else}
	<ul class="flex flex-wrap justify-center items-center lg:grid lg:grid-cols-4 gap-4 mt-7">
		{#each articles as data, i}
			<li>
				<a
					href={data.url}
					target="_blank"
					class="relative rounded-sm shadow flex items-center flex-col bg-white max-w-xs gap-2 h-full"
				>
					<div
						class="p-5 text-base font-bold self-center bg-sky-300 w-full bg-cover bg-center h-28 text-justify"
						style="background-image: url('{data.urlToImage}')"
					>
						<p class=" bg-opacity-50 bg-black px-2 text-white font-black">
							{data.title}
						</p>
					</div>
					<div class="px-5 pt-1 pb-5 gap-3 flex flex-col">
						<div class="flex justify-between text-xs opacity-70">
							<div class="flex flex-col text-xs">
								{#if data.author !== null}
									<p>Author: {data.author}</p>
								{/if}
								<p>Publisher: {@html data.source.name}</p>
							</div>

							<p>
								Ano: {new Date(data.publishedAt).getFullYear()}
							</p>
						</div>

						<p class="text-sm">{@html data.description}</p>
						<!-- <p>Publisher: {@html data.content}</p> -->
					</div>
				</a>
			</li>
		{/each}
	</ul>
{/if}

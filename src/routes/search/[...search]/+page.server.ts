import NewsApi from '../../../lib/index';

/** @type {import('./$types').PageServerLoad} */
interface Params {
	params: { search: string };
}

//TODO: Validação de PUBLIC_BASE_URL
export async function load({ params }: any) {
	const { search } = params;
	console.log(search);
	search.replace("");
	// const newsapi = new NewsApi();
	// const typeSearch =
	// 	search
	// 		?.match(/([\w]+)[?]/g)
	// 		?.toString()
	// 		.toLocaleLowerCase() ?? 'everything';

	// switch (typeSearch) {
	// 	case 'topheadlines':
	// 		return await newsapi.getTopHeadlines();
	// 	case 'everything':
	// 		return await newsapi.getEverything();
	// 	case 'sources':
	// 		return await newsapi.getSource();
	// }
}

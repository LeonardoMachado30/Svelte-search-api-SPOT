import NewsAPI from 'newsapi';

// export default async function getNewsApi(paramValue: string) {
// 	const apiKey = '627f3e7eedf34774a548c7a5b89eec45';
// 	const urlBase = 'https://newsapi.org/v2';
// 	const pathName = 'everything';
// 	const params = {
// 		q: 'q'
// 	};
// 	// const paramValue = 'Elon%20Musk';
// 	const req = await fetch(`${urlBase}/${pathName}?${params.q}=${paramValue}&apiKey=${apiKey}`);

// 	const resp = await req.json();
// 	return resp;
// }

interface Request {
	articules: TopHeadlines | Everything | Source;
}

interface TopHeadlines {
	sources?: string;
	q?: string;
	category?: string;
	language?: string;
	country?: string;
}

interface Everything {
	q: string;
	sources: string;
	domains: string;
	from: Date;
	to: Date;
	language: string;
	sortBy: string;
	page: number;
}

interface Source {
	category: string;
	language: string;
	country: string;
}

export default class NewsApi {
	private newsapi = new NewsAPI('627f3e7eedf34774a548c7a5b89eec45');
	search: string;

	constructor(search: string) {
		this.search = search;
	}

	async getTopHeadlines() {
		const params: Request = this.handleUrlConvertObject();
		const { articles, totalResults } = await this.newsapi.v2.topHeadlines({
			...params
		});
		return { articles, totalResults };
	}

	async getEverything() {
		const params = this.handleUrlConvertObject();
		const { articles, totalResults } = await this.newsapi.v2.everything({
			...params
		});
		return { articles, totalResults };
		// {
		// 	q: 'bitcoin',
		// 	sources: 'bbc-news,the-verge',
		// 	domains: 'bbc.co.uk, techcrunch.com',
		// 	from: '2017-12-01',
		// 	to: '2017-12-12',
		// 	language: 'en',
		// 	sortBy: 'relevancy',
		// 	page: 2
		// }
	}

	async getSource() {
		const request = await this.newsapi.v2.sources({
			category: 'technology',
			language: 'en',
			country: 'us'
		});

		return await request.json();
	}

	async verifyTypeOf(variable: any) {
		return typeof variable !== 'undefined' ?? '';
	}

	handleUrlConvertObject(): Request {
		const paramsSearchMatch = this.search?.match(/([\w]+)[=]([\w\s]+)/g);

		if (paramsSearchMatch === null || paramsSearchMatch === undefined)
			throw Error('URL is null or undefined');

		const params: Request | any = {};

		for (const item of paramsSearchMatch) {
			const [key, value] = item.split('=');
			params[key] = value;
		}

		return params;
	}
}

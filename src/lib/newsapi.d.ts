declare module 'newsapi' {
	namespace NewsAPI {
		interface NewsAPIOptions {
			corsProxyUrl?: string;
			noCache?: boolean;
			showHeaders?: boolean;
		}

		interface Source {
			id: string;
			name: string;
			description: string;
			url: string;
			category: string;
			language: string;
			country: string;
		}

		interface Article {
			title: string;
			description: string;
			url: string;
			// ... outras propriedades
		}

		interface NewsResponse {
			json: any;
			articles: Article[];
			totalResults: number;
		}

		type Callback<T> = (error: Error | null, result?: T) => void;
	}

	class NewsAPI {
		constructor(apiKey: string, options?: NewsAPI.NewsAPIOptions);

		sources(
			params: object,
			options?: NewsAPI.NewsAPIOptions,
			cb?: NewsAPI.Callback<NewsAPI.Source[]>
		): Promise<NewsAPI.Source[]>;
		articles(
			params: object,
			options?: NewsAPI.NewsAPIOptions,
			cb?: NewsAPI.Callback<NewsAPI.NewsResponse>
		): Promise<NewsAPI.NewsResponse>;

		v2: {
			topHeadlines(
				params: object,
				options?: NewsAPI.NewsAPIOptions,
				cb?: NewsAPI.Callback<NewsAPI.NewsResponse>
			): Promise<NewsAPI.NewsResponse>;
			everything(
				params: object,
				options?: NewsAPI.NewsAPIOptions,
				cb?: NewsAPI.Callback<NewsAPI.NewsResponse>
			): Promise<NewsAPI.NewsResponse>;
			sources(
				params: object,
				options?: NewsAPI.NewsAPIOptions,
				cb?: NewsAPI.Callback<NewsAPI.Source[]>
			): Promise<NewsAPI.Source[]>;
		};
	}

	class NewsAPIError extends Error {
		constructor(err: { code: string; message: string });
	}

	export = NewsAPI;
}

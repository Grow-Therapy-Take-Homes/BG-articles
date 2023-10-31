export type QueryVariables = Record<string, unknown>;

export const endpoints = {
  /** Get the top 1000 most viewed articles for a specific date in the format yyyy/mm/dd. */
  top_views({ date }: QueryVariables) {
    return `https://wikimedia.org/api/rest_v1/metrics/pageviews/top/en.wikipedia/all-access/${date}`;
  },
  /** Get the daily views for a specific article in a given timeframe. */
  daily_views({ article, timeframe }: QueryVariables) {
    return `https://wikimedia.org/api/rest_v1/metrics/pageviews/per-article/en.wikipedia/all-access/user/${article}/daily/${timeframe}`;
  },
  /** Get the summary for a given article. */
  summary({ article }: QueryVariables) {
    return `https://en.wikipedia.org/api/rest_v1/page/summary/${article}`;
  },
};

export type Endpoint = keyof typeof endpoints;

export type ApiResponseMap = {
  top_views: TopViewsResponse;
  summary: Summary;
  daily_views: MonthlyViewsResponse;
};

export type Article = {
  article: string;
  views: number;
  rank: number;
};

export type TopPageViews = {
  project: string;
  access: string;
  year: string;
  month: string;
  day: string;
  articles: Article[];
};

export type ArticleViews = {
  project: string;
  article: string;
  granularity: string;
  timestamp: string;
  access: string;
  agent: string;
  views: number;
};

export type TopViewsResponse = {
  items: [TopPageViews];
};

export type Summary = {
  pageid: number;
  title: string;
  extract: string;
  description: string;
};

export type MonthlyViewsResponse = {
  items: ArticleViews[];
};

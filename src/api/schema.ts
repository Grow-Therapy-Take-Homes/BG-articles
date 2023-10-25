export type Article = {
  article: string;
  views: number;
  rank: number;
};

export type PageViews = {
  project: string;
  access: string;
  year: string;
  month: string;
  day: string;
  articles: Article[];
};

export type MetricsResponse = {
  items: PageViews;
};

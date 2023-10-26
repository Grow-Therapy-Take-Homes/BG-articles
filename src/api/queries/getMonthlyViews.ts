import callFetch from "@api/callFetch";
import { getMonthTimeframe } from "@utils/date";

export default async function getMonthlyViews(article: string) {
  const timeframe = getMonthTimeframe();
  const { items } = await callFetch("daily_views", { variables: { article, timeframe } });

  items.sort((a, b) => b.views - a.views);

  return items.slice(0, 3);
}

import callFetch from "@api/callFetch";
import { getMonthTimeframe } from "@utils/date";

export default async function getMonthlyViews(article: string, date: Date) {
  const timeframe = getMonthTimeframe(date);
  const { items } = await callFetch("dailyViews", { variables: { article, timeframe } });

  items.sort((a, b) => b.views - a.views);

  return items.slice(0, 3);
}

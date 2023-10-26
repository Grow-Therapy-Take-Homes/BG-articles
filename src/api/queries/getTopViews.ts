import callFetch from "@api/callFetch";
import { formatPageViewsDate } from "@utils/date";

export default async function getTopViews(date: Date) {
  const dateString = formatPageViewsDate(date);
  const { items } = await callFetch("top_views", { variables: { date: dateString } });
  const [views] = items;

  return views;
}

import { formatDate } from "@utils/date";

export function formatArticleTimestamp(timestamp: string) {
  const dateString = `${timestamp.slice(0, 4)}/${timestamp.slice(4, 6)}/${timestamp.slice(6, 8)}`;
  const date = new Date(dateString);

  return formatDate(date);
}

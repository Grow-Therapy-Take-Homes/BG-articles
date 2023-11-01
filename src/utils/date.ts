export function yearMonthDay(date: Date, separator = "/") {
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");

  return `${year}${separator}${month}${separator}${day}`;
}

export function formatPageViewsDate(date: Date | string) {
  if (typeof date === "string") return date;

  return yearMonthDay(date);
}

/** Format a timeframe for the daily_views endpoint. */
export function getMonthTimeframe(date = new Date()) {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const firstDayOfMonth = new Date(year, month - 1, 1);
  const today = new Date();
  let lastDayOfMonth = new Date(year, month, 0);

  if (today < lastDayOfMonth) {
    lastDayOfMonth = today;
  }

  const start = formatMonthStartOrEnd(firstDayOfMonth);
  const end = formatMonthStartOrEnd(lastDayOfMonth);

  return `${start}/${end}`;
}

/** Format a start or end date for the daily_views endpoint. */
function formatMonthStartOrEnd(date: Date) {
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");

  return `${year}${month}${day}`;
}

export function formatDate(date: Date) {
  return date.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
}

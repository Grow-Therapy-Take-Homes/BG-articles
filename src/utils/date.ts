export function yearMonthDay(date: Date, separator = "/") {
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");

  return `${year}${separator}${month}${separator}${day}`;
}

export function formatPageViewsDate(date: Date | string) {
  if (typeof date === "string") return date;

  const lastDataDate = new Date();
  lastDataDate.setDate(lastDataDate.getDate() - 2);

  if (date > lastDataDate) {
    date = lastDataDate;
  }

  return yearMonthDay(date);
}

export function getMonthTimeframe() {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const firstDayOfMonth = new Date(year, month - 1, 1);
  const lastDateOfData = new Date();
  lastDateOfData.setDate(lastDateOfData.getDate() - 2);

  let lastDayOfMonth = new Date(year, month, 0);

  if (lastDateOfData < lastDayOfMonth) {
    lastDayOfMonth = lastDateOfData;
  }

  const start = formatMonthStartOrEnd(firstDayOfMonth);
  const end = formatMonthStartOrEnd(lastDayOfMonth);

  return `${start}/${end}`;
}

function formatMonthStartOrEnd(date: Date) {
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");

  return `${year}${month}${day}`;
}

export function formatArticleTimestamp(timestamp: string) {
  const dateString = `${timestamp.slice(0, 4)}/${timestamp.slice(4, 6)}/${timestamp.slice(6, 8)}`;
  const date = new Date(dateString);

  return formatDate(date);
}

export function formatDate(date: Date) {
  return date.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
}

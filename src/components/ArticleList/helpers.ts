const namespaces = [
  "User:",
  "Project:",
  "File:",
  "MediaWiki:",
  "Template:",
  "Help:",
  "Category:",
  "Special:",
  "Medi:",
];

export default function formatArticleTitle(name: string) {
  if (namespaces.some((v) => name.startsWith(v))) {
    name = name.split(":")[1];
  }

  return name.replace(/_/g, " ");
}

export function getErrorMessage(error: unknown) {
  if (error instanceof Error && error.message.includes("404")) {
    return "No data available: It can take up to 24 hours or more for data to load. Either no data exists for the selected date, or it has not been loaded yet.";
  }

  return "Something went wrong!";
}

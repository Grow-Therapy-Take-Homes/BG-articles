const namespaces = [
  "User:",
  "Project:",
  "File:",
  "MediaWiki:",
  "Wikipedia:",
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

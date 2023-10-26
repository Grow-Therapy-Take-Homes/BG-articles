import callFetch from "@api/callFetch";

export default async function getArticleSummary(article: string) {
  const result = await callFetch("summary", { variables: { article } });

  return result;
}

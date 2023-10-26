import getArticleSummary from "@api/queries/getArticleSummary";
import { useQuery } from "react-query";

type SummaryProps = {
  articleName: string;
};

export default function Summary({ articleName }: SummaryProps) {
  const { data } = useQuery(
    ["summary", articleName],
    () => {
      return getArticleSummary(articleName);
    },
    {
      enabled: !articleName.startsWith("Special:"),
      retry: false,
    },
  );

  return <div>{data?.extract}</div>;
}

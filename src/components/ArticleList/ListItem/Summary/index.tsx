import getArticleSummary from "@api/queries/getArticleSummary";
import { useQuery } from "react-query";
import styles from "./styles.module.css";

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

  // Not every result has a summary.
  if (!data?.extract) return null;

  return <p className={styles.extract}>{data?.extract}</p>;
}

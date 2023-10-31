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

  return (
    <p className={styles.extract}>
      {data?.extract || data?.description || "This page does not include a summary."}
    </p>
  );
}

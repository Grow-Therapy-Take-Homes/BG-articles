import getArticleSummary from "@api/queries/getArticleSummary";
import { useQuery } from "react-query";
import styles from "./styles.module.css";
import SummaryLoading from "./SummaryLoading";

type SummaryProps = {
  articleName: string;
};

export default function Summary({ articleName }: SummaryProps) {
  const { data, isLoading } = useQuery(
    ["summary", articleName],
    () => {
      return getArticleSummary(articleName);
    },
    {
      enabled: !articleName.startsWith("Special:"),
      retry: false,
    },
  );

  if (isLoading) {
    return <SummaryLoading />;
  }

  return (
    <p className={styles.extract}>
      {data?.extract || data?.description || "This page does not include a summary"}
    </p>
  );
}

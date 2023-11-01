import getArticleSummary from "@api/queries/getArticleSummary";
import { useQuery } from "react-query";
import styles from "./styles.module.css";
import SummaryLoading from "./SummaryLoading";
import SummaryError from "./SummaryError";

type SummaryProps = {
  articleName: string;
};

export default function Summary({ articleName }: SummaryProps) {
  const { data, error, isLoading } = useQuery(["summary", articleName], () => {
    return getArticleSummary(articleName);
  });

  if (isLoading) {
    return <SummaryLoading />;
  }

  if (error instanceof Error && !error?.message.includes("404")) {
    return <SummaryError />;
  }

  return (
    <p className={styles.extract}>
      {data?.extract || data?.description || "This page does not include a summary"}
    </p>
  );
}

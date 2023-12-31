import getMonthlyViews from "@api/queries/getMonthlyViews";
import { useQuery } from "react-query";
import { useAppStore } from "store";
import styles from "./styles.module.css";
import ViewStatsLoading from "./ViewStatsLoading";
import { formatArticleTimestamp } from "./helpers";
import ViewStatsError from "./ViewStatsError";

type ViewStatsProps = {
  articleName: string;
};

export default function ViewStats({ articleName }: ViewStatsProps) {
  const date = useAppStore((s) => s.date);
  const { data, isLoading, isError } = useQuery(["views", articleName], () => {
    return getMonthlyViews(articleName, date);
  });

  if (isLoading) {
    return <ViewStatsLoading />;
  }

  if (isError) {
    return <ViewStatsError />;
  }

  return (
    <div className={styles.container} data-testid={`article-stats-${articleName}`}>
      <div className={styles.divider} />
      <div className={styles.title}>Top views this month</div>
      {data?.map((item) => (
        <div key={item.timestamp} className={styles.stat}>
          <div className={styles.date}>{formatArticleTimestamp(item.timestamp)}</div>
          <div className={styles.views}>{item.views.toLocaleString()} views</div>
        </div>
      ))}
    </div>
  );
}

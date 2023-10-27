import getMonthlyViews from "@api/queries/getMonthlyViews";
import { formatArticleTimestamp } from "@utils/date";
import { useQuery } from "react-query";
import styles from "./styles.module.css";

type ViewStatsProps = {
  articleName: string;
};

export default function ViewStats({ articleName }: ViewStatsProps) {
  const { data } = useQuery(["views", articleName], () => {
    return getMonthlyViews(articleName);
  });

  return (
    <div className={styles.container}>
      <div className={styles.divider} />
      <div className={styles.title}>Top views this month</div>
      {data?.map((item) => (
        <div key={item.timestamp} className={styles.stat}>
          <div className={styles.date}>{formatArticleTimestamp(item.timestamp)}</div>
          <div className={styles.views}>{item.views} views</div>
        </div>
      ))}
    </div>
  );
}

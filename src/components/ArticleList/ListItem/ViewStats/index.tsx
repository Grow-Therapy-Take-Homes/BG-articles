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
    <div>
      <div className={styles.title}>Top views this month</div>
      <ul className={styles.list}>
        {data?.map((item) => (
          <li key={item.timestamp} className={styles.stat}>
            <div>{formatArticleTimestamp(item.timestamp)}</div>
            <div>{item.views} views</div>
          </li>
        ))}
      </ul>
    </div>
  );
}

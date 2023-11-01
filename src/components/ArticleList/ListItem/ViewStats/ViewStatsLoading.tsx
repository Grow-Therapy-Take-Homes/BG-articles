import Shimmer from "@components/Shimmer";
import styles from "./styles.module.css";

export default function ViewStatsLoading() {
  return (
    <div className={styles.container} data-testid="view-stats-loading">
      <div className={styles.divider} />
      <div className={styles.title}>Top views this month</div>
      <div className={styles.stat}>
        <div className={styles.date}>
          <Shimmer maxWidth={115} minWidth={100} width="random" />
        </div>
        <div className={styles.views}>
          <Shimmer maxWidth={115} minWidth={100} width="random" />
        </div>
      </div>
      <div className={styles.stat}>
        <div className={styles.date}>
          <Shimmer maxWidth={115} minWidth={100} width="random" />
        </div>
        <div className={styles.views}>
          <Shimmer maxWidth={115} minWidth={100} width="random" />
        </div>
      </div>
      <div className={styles.stat}>
        <div className={styles.date}>
          <Shimmer maxWidth={115} minWidth={100} width="random" />
        </div>
        <div className={styles.views}>
          <Shimmer maxWidth={115} minWidth={100} width="random" />
        </div>
      </div>
    </div>
  );
}

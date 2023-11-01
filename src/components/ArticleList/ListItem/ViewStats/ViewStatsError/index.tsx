import Button from "@components/Button";
import styles from "./styles.module.css";

export default function ViewStatsError() {
  return (
    <div className={styles.container}>
      <div className={styles.divider} />
      <div className={styles.title}>Top views this month</div>
      <p className={styles.views}>Failed to load view statistics for the selected article.</p>
      <Button className={styles.bttn}>Try again</Button>
    </div>
  );
}

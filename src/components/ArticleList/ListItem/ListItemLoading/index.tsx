import Shimmer from "@components/Shimmer";
import styles from "./styles.module.css";

export default function ListItemLoading() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.rank}>
          <Shimmer height={16} width={12} />
        </div>
        <div className={styles.title}>
          <Shimmer height={16} maxWidth={300} minWidth={250} width="random" />
        </div>
        <div className={styles.views}>
          <Shimmer height={16} maxWidth={110} minWidth={60} width="random" />
        </div>
      </div>
    </div>
  );
}

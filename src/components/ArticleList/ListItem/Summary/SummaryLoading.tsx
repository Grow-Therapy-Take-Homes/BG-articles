import Shimmer from "@components/Shimmer";
import styles from "./styles.module.css";

export default function SummaryLoading() {
  return (
    <div className={styles.extract}>
      <Shimmer width="random" />
      <Shimmer width="random" />
      <Shimmer width="random" />
    </div>
  );
}

import styles from "./styles.module.css";

export default function Divider() {
  return (
    <div className={styles.divider}>
      <div className={styles.line} />
    </div>
  );
}

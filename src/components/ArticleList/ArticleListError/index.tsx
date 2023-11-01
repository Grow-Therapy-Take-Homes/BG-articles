import Button from "@components/Button";
import { getErrorContent } from "./helpers";
import styles from "./styles.module.css";

type ArticleListErrorProps = {
  error: unknown;
  onRetry?: () => void;
};

export default function ArticleListError({ error, onRetry }: ArticleListErrorProps) {
  const { title, message } = getErrorContent(error);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.message}>{message}</p>

      <Button className={styles.bttn} onClick={onRetry}>
        Try again
      </Button>
    </div>
  );
}

import cn from "@utils/cn";
import styles from "./styles.module.css";

export default function SummaryError() {
  return (
    <p className={cn(styles.extract, styles.extract_error)} data-testid="article-summary-error">
      Failed to load summary for the selected article.
    </p>
  );
}

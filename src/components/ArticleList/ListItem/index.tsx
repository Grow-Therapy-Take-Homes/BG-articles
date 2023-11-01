import { useState } from "react";
import type { Article } from "@api/schema";
import formatArticleTitle from "../helpers";
import Summary from "./Summary";
import ViewStats from "./ViewStats";
import styles from "./styles.module.css";

export type ListItemProps = {
  article: Article;
};

export default function ListItem({ article }: ListItemProps) {
  const [showDetails, setShowDetails] = useState(false);

  const handleToggleDetails = () => {
    setShowDetails(!showDetails);
  };

  const articleTitle = formatArticleTitle(article.article);

  return (
    <div className={styles.container} data-testid="article-list-item">
      <button
        className={styles.item}
        data-testid={`item-bttn-${article.article}`}
        type="button"
        onClick={handleToggleDetails}
      >
        <div className={styles.rank}>{article.rank}.</div>
        <div className={styles.title}>{articleTitle}</div>
        <div className={styles.views}>{article.views.toLocaleString()} views</div>
      </button>

      {showDetails && (
        <div className={styles.summary}>
          <Summary articleName={article.article} />
          <ViewStats articleName={article.article} />
        </div>
      )}
    </div>
  );
}

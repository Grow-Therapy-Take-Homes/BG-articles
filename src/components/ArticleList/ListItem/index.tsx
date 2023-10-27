import { useState } from "react";
import type { Article } from "@api/schema";
import formatArticleTitle from "@utils/formatArticleTitle";
import styles from "./styles.module.css";
import Summary from "./Summary";
import ViewStats from "./ViewStats";

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
    <div className={styles.container}>
      <button className={styles.item} type="button" onClick={handleToggleDetails}>
        <span>{articleTitle}</span>
        <span>{article.views} views</span>
      </button>

      {showDetails && (
        <div>
          <Summary articleName={article.article} />
          <ViewStats articleName={article.article} />
        </div>
      )}
    </div>
  );
}

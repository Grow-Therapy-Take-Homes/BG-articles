import type { Article } from "api/schema";
import type { ListItemProps } from "./ListItem";
import ListItem from "./ListItem";
import styles from "./styles.module.css";
import { getErrorMessage } from "./helpers";
import LoadingArticleList from "./LoadingArticleList";

export type ArticleListProps = {
  limit: number;
  loading: boolean;
  error?: unknown;
  articles?: Article[];
};

export type { ListItemProps };
export { ListItem };

export default function ArticleList({ articles, loading, error, limit }: ArticleListProps) {
  if (loading) return <LoadingArticleList limit={limit} />;

  if (error) return <div>{getErrorMessage(error)}</div>;

  return (
    <ul className={styles.list}>
      {articles?.map((item) => (
        <li key={item.article} className={styles.item}>
          <ListItem article={item} />
        </li>
      ))}
    </ul>
  );
}

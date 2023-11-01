import type { Article } from "api/schema";
import type { ListItemProps } from "./ListItem";
import ListItem from "./ListItem";
import styles from "./styles.module.css";
import ArticleListLoading from "./ArticleListLoading";
import ArticleListError from "./ArticleListError";

export type ArticleListProps = {
  limit: number;
  loading: boolean;
  error?: unknown;
  articles?: Article[];
  onRetry: () => void;
};

export type { ListItemProps };
export { ListItem };

export default function ArticleList({
  articles,
  loading,
  error,
  limit,
  onRetry,
}: ArticleListProps) {
  if (loading) return <ArticleListLoading limit={limit} />;

  if (error) return <ArticleListError error={error} onRetry={onRetry} />;

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

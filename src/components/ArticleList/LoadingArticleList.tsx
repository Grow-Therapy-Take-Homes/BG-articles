import ListItemLoading from "./ListItem/ListItemLoading";
import styles from "./styles.module.css";

export type LoadingArticleListProps = {
  limit: number;
};

export default function LoadingArticleList({ limit }: LoadingArticleListProps) {
  return (
    <div className={styles.list}>
      {new Array(limit).fill(0).map((_, i) => (
        <ListItemLoading key={i} />
      ))}
    </div>
  );
}

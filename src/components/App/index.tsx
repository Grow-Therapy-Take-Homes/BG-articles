import getTopViews from "@api/queries/getTopViews";
import Card from "@components/Card";
import usePagination from "@hooks/usePagination";
import { useQuery } from "react-query";
import { useAppStore } from "store";
import ArticleList from "@components/ArticleList";
import Navigation from "@components/Navigation";
import Pagination from "@components/Pagination";
import ActionBar from "@components/ActionBar";
import styles from "./styles.module.css";

export default function App() {
  const date = useAppStore((s) => s.date);
  const limit = useAppStore((s) => s.limit);

  const { data, isLoading, error } = useQuery(["top_views", date], () => getTopViews(date));
  const { items, ...pagination } = usePagination(data?.articles, limit);

  return (
    <div className={styles.app}>
      <Navigation />
      <div className={styles.content}>
        <h1 className={styles.title}>Top Wikipedia articles</h1>

        <ActionBar />

        <Card>
          <ArticleList
            articles={items}
            error={error}
            limit={pagination.limit}
            loading={isLoading}
          />
        </Card>

        <Pagination {...pagination} />
      </div>
    </div>
  );
}

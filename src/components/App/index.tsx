import getTopViews from "@api/queries/getTopViews";
import Card from "@components/Card";
import usePagination from "@hooks/usePagination";
import { useQuery } from "react-query";
import { useAppStore } from "store";
import ArticleList from "@components/ArticleList";
import Navigation from "@components/Navigation";
import Pagination from "@components/Pagination";
import styles from "./styles.module.css";

export default function App() {
  const date = useAppStore((s) => s.date);
  const { data, isLoading, isError } = useQuery(["top_views", date], () => getTopViews(date));
  const { items, page, limit, previous, setPage, next } = usePagination(data?.articles);

  return (
    <div className={styles.app}>
      <Navigation />
      <div className={styles.content}>
        <h1 className={styles.title}>Top Wikipedia articles</h1>

        <div className={styles.articles}>
          <Card>
            <ArticleList articles={items} error={isError} loading={isLoading} />
          </Card>
        </div>

        <Pagination
          hasNext
          hasPrevious
          active={page}
          limit={limit}
          page={page}
          range={4}
          onNext={next}
          onPrevious={previous}
          onSetPage={setPage}
        />
      </div>
    </div>
  );
}

import { useEffect, useState } from "react";

export default function usePagination<T>(entries?: T[]) {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [items, setItems] = useState(entries);

  const next = () => {
    if (!items) return;

    const totalPages = Math.floor(items.length / page);
    setPage(page + 1 > totalPages ? page : page + 1);
  };

  const previous = () => {
    if (!items) return;

    setPage(page - 1 < 1 ? 1 : page - 1);
  };

  const onLimitChange = (value: number) => {
    if (!items) return;

    if (value >= items.length) {
      setLimit(value);
    }
  };

  useEffect(() => {
    if (entries !== items) {
      setItems(entries);
    }
  }, [entries]);

  const startIdx = (page - 1) * limit;
  const endIdx = Math.min(startIdx + limit, items?.length || 0);
  const visibleItems = items?.slice(startIdx, endIdx) || [];

  return {
    page,
    limit,
    items: visibleItems,
    next,
    previous,
    setPage,
    onLimitChange,
  };
}

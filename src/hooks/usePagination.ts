import { useEffect, useState } from "react";

export default function usePagination<T>(entries?: T[]) {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [items, setItems] = useState(entries);
  const total = Math.floor(items?.length || 0 / page);

  const onNext = () => {
    if (!items) return;

    setPage(page + 1 > total ? page : page + 1);
  };

  const onPrevious = () => {
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

  const startIndex = (page - 1) * limit;
  const endIndex = Math.min(startIndex + limit, items?.length || 0);
  const visibleItems = items?.slice(startIndex, endIndex) || [];

  return {
    total,
    page,
    limit,
    items: visibleItems,
    hasNext: page + 1 < total,
    hasPrevious: page > 1,
    onNext,
    onPrevious,
    onSetPage: setPage,
    onLimitChange,
  };
}

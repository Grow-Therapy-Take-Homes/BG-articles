import { useEffect, useState } from "react";

export default function usePagination<T>(entries?: T[], limit = 10) {
  const [page, setPage] = useState(1);
  const [items, setItems] = useState(entries);
  const total = entries?.length || 0;
  const startIndex = (page - 1) * limit;
  const endIndex = Math.min(startIndex + limit, items?.length || 0);
  const visibleItems = items?.slice(startIndex, endIndex) || [];
  const hasNext = endIndex < (items?.length || 0);
  const hasPrevious = page > 1;
  const totalPages = Math.ceil((items?.length || 0) / limit);
  const lastPage = totalPages > 0 ? totalPages : 0;

  const onNext = () => {
    if (!items || !hasNext) return;

    setPage(page + 1);
  };

  const onPrevious = () => {
    if (!items || !hasPrevious) return;

    setPage(page - 1);
  };

  useEffect(() => {
    if (entries !== items) {
      setItems(entries);
      setPage(1);
    }
  }, [entries]);

  return {
    total,
    page,
    limit,
    items: visibleItems,
    lastPage,
    hasNext,
    hasPrevious,
    onNext,
    onPrevious,
    onSetPage: setPage,
  };
}

import { useRef, useState } from "react";

export default function usePagination(entries: unknown[]) {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const { current: items } = useRef(entries);
  const totalPages = Math.floor(items.length / page);

  const next = () => {
    setPage(page + 1 > totalPages ? page : page + 1);
  };

  const previous = () => {
    setPage(page - 1 < 1 ? 1 : page - 1);
  };

  const onLimitChange = (value: number) => {
    if (value >= items.length) {
      setLimit(value);
    }
  };

  return {
    page,
    limit,
    items: items.slice(0, page * limit + 1),
    next,
    previous,
    onLimitChange,
  };
}

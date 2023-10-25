import { useEffect, useState } from "react";

export default function useQuery<TData>(queryFn: () => Promise<TData>) {
  const [data, setData] = useState<TData>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error>();

  const runQuery = async () => {
    setLoading(true);
    try {
      const result = await queryFn();
      setData(result);
      setError(undefined);
    } catch (err) {
      setError(err as Error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    runQuery();
  }, []);

  return { data, loading, error, refetch: runQuery };
}

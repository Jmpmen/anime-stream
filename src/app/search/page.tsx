"use client";

import { useCallback, useEffect, useState } from "react";
import { Card } from "@/components/Card";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { useSearchParams } from "next/navigation";

export default function SearchPage() {
  const searchParams = useSearchParams();
  const search = searchParams.get("q") || "";
  const [results, setResults] = useState<any[]>([]);
  const [page, setPage] = useState(1);
  const [hasNextPage, setHasNextPage] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const fetchAnime = useCallback(
    async (page: number) => {
      if (!search) return;
      setIsLoading(true);
      try {
        const res = await fetch(
          `/api/search?q=${encodeURIComponent(search)}&page=${page}`
        );
        const data = await res.json();
        const { results: newResults = [], hasNextPage: next = false } =
          data || {};
        setResults((prev) => [...prev, ...newResults]);
        setHasNextPage(!!next);
        setPage(page + 1);
      } catch (error) {
        console.error("Search fetch error", error);
      } finally {
        setIsLoading(false);
      }
    },
    [search]
  );

  useEffect(() => {
    setPage(1);
    setResults([]);
    if (search) fetchAnime(1);
  }, [fetchAnime, search]);

  return (
    <>
      <div className="mt-5 grid grid-cols-2 md:grid-cols-4 gap-1 px-5 mb-5">
        {results?.map((result: any) => (
          <Card
            key={result.id}
            anime={result}
            className={"w-[180px] mx-auto"}
            aspectRatio={"portrait"}
            width={180}
          />
        ))}
      </div>
      <div
        className={`${hasNextPage ? "grid place-content-center" : "hidden"}`}
      >
        <Button onClick={() => fetchAnime(page)} variant="secondary">
          {isLoading ? (
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          ) : (
            "Load more"
          )}
        </Button>
      </div>
    </>
  );
}

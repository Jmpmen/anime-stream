"use client";

import { Card } from "@/components/Card";
import { Button } from "@/components/ui/button";
import { searchAnime } from "@/services/anilist";
import { IAnimeResult } from "@consumet/extensions";
import { Loader2 } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function SearchPage() {
  const searchParams = useSearchParams();
  const search = searchParams.get("q") || "";
  const [results, setResults] = useState<IAnimeResult[]>([]);
  const [page, setPage] = useState(1);
  const [hasNextPage, setHasNextPage] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  async function fetchAnime(page: number) {
    setIsLoading(true);
    const res = await searchAnime(search, page);
    setPage((prev) => prev + 1);
    setHasNextPage(!!res?.hasNextPage);
    setResults((prev) => [...prev, ...res.results]);
    setIsLoading(false);
  }

  useEffect(() => {
    setPage(1);
    setResults([]);
    fetchAnime(1);
  }, [search]);

  return (
    <>
      <div className="mt-5 grid grid-cols-2 md:grid-cols-5 gap-2 px-5 mb-5">
        {results?.map((result) => (
          <Card
            key={result.id}
            anime={result}
            className={"w-[150px] mx-auto"}
            aspectRatio={"portrait"}
            width={150}
            height={200}
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

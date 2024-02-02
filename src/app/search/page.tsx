"use client";

import { Card } from "@/components/Card";
import { searchAnime } from "@/services/anilist";
import { IAnimeResult } from "@consumet/extensions";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function SearchPage() {
  const searchParams = useSearchParams();
  const search = searchParams.get("q");
  const [results, setResults] = useState<IAnimeResult[]>([]);

  useEffect(() => {
    async function getURL() {
      const res = await searchAnime(search as string);
      setResults(res);
    }
    getURL();
  }, [search]);

  return (
    <div className="mt-5 grid grid-cols-2 md:grid-cols-5 gap-2 px-5">
      {results.map((result) => (
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
  );
}

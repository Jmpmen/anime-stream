import { NextResponse } from "next/server";
import { searchAnime } from "@/services/anilist";

export async function GET(req: Request) {
  const url = new URL(req.url);
  const q = url.searchParams.get("q") || "";
  const pageParam = url.searchParams.get("page") || "1";
  const page = Math.max(1, parseInt(pageParam, 10) || 1);
  try {
    const res = await searchAnime(q, page);
    const { results = [], hasNextPage = false, currentPage } = res || {};
    return NextResponse.json({
      results,
      hasNextPage,
      currentPage: currentPage ?? page,
    });
  } catch (error) {
    console.error("/api/search error:", error);
    return NextResponse.json(
      { results: [], hasNextPage: false },
      { status: 500 }
    );
  }
}

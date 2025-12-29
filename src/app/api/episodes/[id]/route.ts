import { NextResponse } from "next/server";
import { getEpisodeSources } from "@/services/anilist";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const data = await getEpisodeSources(params.id);
    if (!data) {
      return NextResponse.json(
        { url: "", sources: [], subtitles: [] },
        { status: 500 }
      );
    }
    return NextResponse.json(data);
  } catch (error) {
    console.error("API error fetching episode source:", error);
    return NextResponse.json(
      { url: "", sources: [], subtitles: [] },
      { status: 500 }
    );
  }
}

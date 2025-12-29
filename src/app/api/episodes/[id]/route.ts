import { NextResponse } from "next/server";
import { getEpisodeSources } from "@/services/anilist";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const url = await getEpisodeSources(params.id);
    return NextResponse.json({ url });
  } catch (error) {
    console.error("API error fetching episode source:", error);
    return NextResponse.json({ url: "" }, { status: 500 });
  }
}

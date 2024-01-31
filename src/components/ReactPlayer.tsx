"use client";

import { getEpisodeSources } from "@/services/anilist";
import { useEffect, useState } from "react";
import ReactPlayer from "react-player";

export default function HLSPlayer({ episodeId }: any) {
  //   const [url, setUrl] = useState();
  //   const options = {
  //     headers: {
  //       Authorization: `Bearer ${token}`,
  //     },
  //   };
  useEffect(() => {
    // fetch(videoUrl, options)
    //   .then((response) => response.blob())
    //   .then((blob) => {
    //     setUrl(URL.createObjectURL(blob));
    //   });
    async function getURL() {
      const res = await getEpisodeSources(episodeId);
    }
    getURL();
  }, [episodeId]);

  return <ReactPlayer url={""} width="100%" controls />;
}

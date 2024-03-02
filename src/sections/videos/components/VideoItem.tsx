import { PlaylistItemSnippet } from "@/data/videos";
import PaddedFlexContainer from "@/shared/PaddedFlexContainer";
import React from "react";

export default function VideoItem({
  playlistItemSnippet: pis,
}: {
  playlistItemSnippet: PlaylistItemSnippet;
}) {
  const date = new Date(pis.publishedAt!).toLocaleDateString("en-us", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "utc",
  });

  return (
    <div className="bg-white rounded-lg h-full">
      <img
        className="rounded-t-lg h-48 md:h-56 lg:h-64 xl:h-72 2xl:h-80 w-full object-cover"
        src={pis.thumbnails.high.url}
      />
      <PaddedFlexContainer>
        <p className="text-sm md:text-md lg:text-lg xl:text-xl 2xl:text-2xl tracking-widest text-indigo-600">
          {date}
        </p>
        <h1 className="text-md md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-bold">
          {pis.title}
        </h1>
      </PaddedFlexContainer>
    </div>
  );
}

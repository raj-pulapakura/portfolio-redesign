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
        <p className="text-sm md:text-md lg:text-lg xl:text-xl 2xl:text-2xl tracking-widest text-indigo-600 mb-2 lg:mb-4 xl:mb-5 2xl:mb-6">
          {date}
        </p>
        <h1 className="text-md md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-bold mb-3 md:mb-4 lg:mb-8">
          {pis.title}
        </h1>
        <p className="relative fade-out-text text-sm md:text-md lg:text-lg xl:text-xl 2xl:text-2xl mb-1">
          {pis.description.slice(0, 120) + "..."}
        </p>
      </PaddedFlexContainer>
    </div>
  );
}

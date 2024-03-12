"use client";

import { PlaylistItemSnippet } from "@/data/videos";
import PaddedFlexContainer from "@/shared/containers/PaddedFlexContainer";
import Link from "next/link";
import React, { useState } from "react";

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

  const [isHovering, setIsHovering] = useState(false);

  return (
    <Link href={`https://www.youtube.com/watch?v=${pis?.resourceId?.videoId}`}>
      <div
        className="bg-white rounded-lg h-full overflow-hidden"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <img
          className={`rounded-t-lg h-48 md:h-52 lg:h-56 xl:h-60 2xl:h-64 w-full object-cover ${
            isHovering && "scale-110 transition duration-500"
          }`}
          src={pis.thumbnails.high.url}
        />
        <PaddedFlexContainer>
          <p className="ext-sm lg:text-md tracking-widest text-indigo-600 mb-2 md:mb-3 lg:mb-4 2xl:mb-5">
            {date}
          </p>
          <h1 className="text-md xl:text-lg 2xl:text-xl font-bold mb-3 md:mb-4 lg:mb-5">
            {pis.title}
          </h1>
          <p className="relative fade-out-text text-md xl:text-lg mb-1">
            {pis.description.slice(0, 120) + "..."}
          </p>
        </PaddedFlexContainer>
      </div>
    </Link>
  );
}

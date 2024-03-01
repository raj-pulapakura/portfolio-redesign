import { PlaylistItemSnippet } from "@/data/videos";
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
        className="rounded-t-lg h-48 w-full object-cover"
        src={pis.thumbnails.high.url}
      />
      <div className="px-7 py-5">
        <p className="text-sm mb-2 tracking-widest text-indigo-600">{date}</p>
        <h1 className="text-sm font-bold mb-2">{pis.title}</h1>
      </div>
    </div>
  );
}

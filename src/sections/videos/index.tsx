import { rockSalt } from "@/app/layout";
import React from "react";
import EmblaCarousel from "@/shared/EmblaCarousel";
import EmblaCarouselItem from "@/shared/EmblaCarouselItem";
import VideoItem from "./components/VideoItem";
import { getVideos } from "@/data/videos";

export default async function Videos() {
  const videos = await getVideos();

  return (
    <div className="pt-10 pb-10 bg-lime-400 ">
      <h1 className={`${rockSalt.className} text-5xl text-center mb-10`}>
        VIDEOS
      </h1>
      <EmblaCarousel showDotButtons={false}>
        {videos.map((pis) => (
          <EmblaCarouselItem key={pis.snippet.title}>
            <VideoItem playlistItemSnippet={pis.snippet} />
          </EmblaCarouselItem>
        ))}
      </EmblaCarousel>
    </div>
  );
}

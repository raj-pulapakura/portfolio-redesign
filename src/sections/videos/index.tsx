import { rockSalt } from "@/app/layout";
import React from "react";
import EmblaCarousel from "@/shared/EmblaCarousel";
import EmblaCarouselItem from "@/shared/EmblaCarouselItem";
import VideoItem from "./components/VideoItem";
import { getVideos } from "@/data/videos";
import PaddedContainer from "@/shared/PaddedContainer";
import TitleSubtitleFlex from "@/shared/TitleSubtitleFlex";

export default async function Videos() {
  const videos = await getVideos();

  return (
    <PaddedContainer className="bg-fuchsia-400">
      <TitleSubtitleFlex
        title="VIDEOS"
        subtitle="Tech & project demos, and positive vibes."
      />
      <EmblaCarousel className="visible md:hidden">
        {videos.map((pis) => (
          <EmblaCarouselItem itemPctWidth="100%" key={pis.snippet.title}>
            <VideoItem playlistItemSnippet={pis.snippet} />
          </EmblaCarouselItem>
        ))}
      </EmblaCarousel>
      <EmblaCarousel className="hidden md:block xl:hidden">
        {videos.map((pis) => (
          <EmblaCarouselItem itemPctWidth="50%" key={pis.snippet.title}>
            <VideoItem playlistItemSnippet={pis.snippet} />
          </EmblaCarouselItem>
        ))}
      </EmblaCarousel>
      <EmblaCarousel className="hidden xl:block 2xl:hidden">
        {videos.map((pis) => (
          <EmblaCarouselItem itemPctWidth="33.33%" key={pis.snippet.title}>
            <VideoItem playlistItemSnippet={pis.snippet} />
          </EmblaCarouselItem>
        ))}
      </EmblaCarousel>
      <EmblaCarousel className="hidden 2xl:block">
        {videos.map((pis) => (
          <EmblaCarouselItem itemPctWidth="25%" key={pis.snippet.title}>
            <VideoItem playlistItemSnippet={pis.snippet} />
          </EmblaCarouselItem>
        ))}
      </EmblaCarousel>
    </PaddedContainer>
  );
}

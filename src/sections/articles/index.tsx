import React from "react";
import ArticleItem from "./components/ArticleItem";
import EmblaCarousel from "@/shared/EmblaCarousel";
import EmblaCarouselItem from "@/shared/EmblaCarouselItem";
import { articlesData } from "@/data/articles";
import PaddedContainer from "@/shared/PaddedContainer";
import TitleSubtitleFlex from "@/shared/TitleSubtitleFlex";

export default function Articles() {
  return (
    <PaddedContainer className="bg-lime-400">
      <TitleSubtitleFlex
        title="ARTICLES"
        subtitle="Documenting my journey and cool tech."
        className="flex-row-reverse"
      />
      <EmblaCarousel className="visible md:hidden">
        {articlesData.map((adp) => (
          <EmblaCarouselItem key={adp.title}>
            <ArticleItem articleDataPoint={adp} />
          </EmblaCarouselItem>
        ))}
      </EmblaCarousel>
      <EmblaCarousel className="hidden md:block xl:hidden">
        {articlesData.map((adp) => (
          <EmblaCarouselItem itemPctWidth="50%" key={adp.title}>
            <ArticleItem articleDataPoint={adp} />
          </EmblaCarouselItem>
        ))}
      </EmblaCarousel>
      <EmblaCarousel className="hidden xl:block">
        {articlesData.map((adp) => (
          <EmblaCarouselItem itemPctWidth="33.33%" key={adp.title}>
            <ArticleItem articleDataPoint={adp} />
          </EmblaCarouselItem>
        ))}
      </EmblaCarousel>
    </PaddedContainer>
  );
}

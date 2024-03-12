import React from "react";
import ArticleItem from "./components/ArticleItem";
import EmblaCarousel from "@/shared/carousel/EmblaCarousel";
import EmblaCarouselItem from "@/shared/carousel/EmblaCarouselItem";
import { articlesData } from "@/data/articles";
import PaddedContainer from "@/shared/containers/PaddedContainer";
import TitleSubtitleFlex from "@/shared/containers/TitleSubtitleFlex";

export default function Articles() {
  return (
    <PaddedContainer className="bg-slate-900">
      <TitleSubtitleFlex
        title="ARTICLES"
        subtitle="Documenting my journey and cool tech."
        className="flex-row-reverse text-white"
      />
      <EmblaCarousel className="visible md:hidden">
        {articlesData.map((adp) => (
          <EmblaCarouselItem key={adp.title}>
            <ArticleItem articleDataPoint={JSON.parse(JSON.stringify(adp))} />
          </EmblaCarouselItem>
        ))}
      </EmblaCarousel>
      <EmblaCarousel className="hidden md:block xl:hidden">
        {articlesData.map((adp) => (
          <EmblaCarouselItem itemPctWidth="50%" key={adp.title}>
            <ArticleItem articleDataPoint={JSON.parse(JSON.stringify(adp))} />
          </EmblaCarouselItem>
        ))}
      </EmblaCarousel>
      <EmblaCarousel className="hidden xl:block">
        {articlesData.map((adp) => (
          <EmblaCarouselItem itemPctWidth="33.33%" key={adp.title}>
            <ArticleItem articleDataPoint={JSON.parse(JSON.stringify(adp))} />
          </EmblaCarouselItem>
        ))}
      </EmblaCarousel>
    </PaddedContainer>
  );
}

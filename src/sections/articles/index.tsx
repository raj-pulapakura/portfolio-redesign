import { rockSalt } from "@/app/layout";
import React from "react";
import ArticleItem from "./components/ArticleItem";
import EmblaCarousel from "@/shared/EmblaCarousel";
import EmblaCarouselItem from "@/shared/EmblaCarouselItem";
import { articlesData } from "@/data/articles";

export default function Articles() {
  return (
    <div className="bg-black pt-10 pb-10">
      <h1
        className={`${rockSalt.className} text-5xl text-center mb-10 text-white`}
      >
        ARTICLES
      </h1>
      <EmblaCarousel showDotButtons={false}>
        {articlesData.map((adp) => (
          <EmblaCarouselItem key={adp.title}>
            <ArticleItem articleDataPoint={adp} />
          </EmblaCarouselItem>
        ))}
      </EmblaCarousel>
    </div>
  );
}

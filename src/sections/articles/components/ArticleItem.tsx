import { ArticleDataPoint } from "@/data/articles";
import PaddedFlexContainer from "@/shared/PaddedFlexContainer";
import React from "react";

export default function ArticleItem({
  articleDataPoint: adp,
}: {
  articleDataPoint: ArticleDataPoint;
}) {
  return (
    <div className="bg-white rounded-lg h-full">
      <img
        className="rounded-t-lg h-48 md:h-56 lg:h-64 xl:h-72 2xl:h-80 w-full object-cover"
        src={adp.thumbnailURL}
      />
      <PaddedFlexContainer>
        <p className="text-sm md:text-md lg:text-lg xl:text-xl 2xl:text-2xl tracking-widest text-indigo-600 mb-2 md:mb-3 lg:mb-4 xl:mb-5 2xl:mb-6">
          {adp.datePublished}
        </p>
        <h1 className="text-xl xl:text-2xl 2xl:text-3xl font-bold mb-3 md:mb-4 lg:mb-8">
          {adp.title}
        </h1>
        <p className="relative fade-out-text text-sm md:text-md lg:text-lg xl:text-xl 2xl:text-2xl mb-1">
          {adp.firstPara.slice(0, 120) + "..."}
        </p>
      </PaddedFlexContainer>
    </div>
  );
}

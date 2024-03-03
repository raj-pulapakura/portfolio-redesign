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
        className="rounded-t-lg h-48 md:h-52 lg:h-56 xl:h-60 2xl:h-64 w-full object-cover"
        src={adp.thumbnailURL}
      />
      <PaddedFlexContainer>
        <p className="text-sm lg:text-md tracking-widest text-indigo-600 mb-2 md:mb-3 lg:mb-4 2xl:mb-5">
          {adp.datePublished}
        </p>
        <h1 className="text-md xl:text-lg 2xl:text-xl font-bold mb-3 md:mb-4 lg:mb-5">
          {adp.title}
        </h1>
        <p className="relative fade-out-text text-sm xl:text-md mb-1">
          {adp.firstPara.slice(0, 120) + "..."}
        </p>
      </PaddedFlexContainer>
    </div>
  );
}

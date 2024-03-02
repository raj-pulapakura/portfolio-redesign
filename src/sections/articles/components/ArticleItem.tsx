import { ArticleDataPoint } from "@/data/articles";
import Card from "@/shared/Card";
import Chip from "@/shared/Chip";
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
      <Card>
        <p className="text-sm md:text-md lg:text-lg xl:text-xl 2xl:text-2xl tracking-widest text-indigo-600">
          {adp.datePublished}
        </p>
        <h1 className="text-md md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-bold">
          {adp.title}
        </h1>
        <p className="text-sm md:text-md lg:text-lg xl:text-xl 2xl:text-2xl mb-1">
          {adp.firstPara.slice(0, 100)}
        </p>
      </Card>
    </div>
  );
}

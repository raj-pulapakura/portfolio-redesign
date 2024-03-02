import { ArticleDataPoint } from "@/data/articles";
import Chip from "@/shared/Chip";
import React from "react";

export default function ArticleItem({
  articleDataPoint: adp,
}: {
  articleDataPoint: ArticleDataPoint;
}) {
  return (
    <div className="bg-white rounded-lg h-full overflow-scroll">
      <img
        className="rounded-t-lg h-48 w-full object-cover"
        src={adp.thumbnailURL}
      />
      <div className="px-7 py-5">
        <p className="text-sm mb-2 tracking-widest text-indigo-600">
          {adp.datePublished}
        </p>
        <h1 className="text-sm font-bold mb-2">{adp.title}</h1>
        <p className="text-sm">{adp.firstPara.slice(0, 100)}</p>
      </div>
    </div>
  );
}

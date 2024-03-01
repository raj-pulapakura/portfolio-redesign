import { TimelineDataPoint } from "@/data/timeline";
import React from "react";

export default function TimelineItemInfoModal({
  timelineDataPoint: tdp,
  turnModalOff,
}: {
  timelineDataPoint: TimelineDataPoint;
  turnModalOff: () => void;
}) {
  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
    turnModalOff();
  };

  return (
    <>
      <div
        onClick={handleClick}
        className="bg-black opacity-50 fixed top-0 left-0 w-full h-full z-20"
      ></div>
      <div className="bg-white p-5 fixed w-3/4 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-30 rounded-md">
        <h1 className="tracking-widest uppercase mb-3 text-blue-600">
          {tdp.date}
        </h1>
        <h1 className="font-bold text-lg mb-3">{tdp.title}</h1>
        <p>{tdp.extraInformation}</p>
      </div>
    </>
  );
}

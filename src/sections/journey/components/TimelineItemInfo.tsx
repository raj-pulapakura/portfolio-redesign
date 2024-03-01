"use client";

import { TimelineDataPoint } from "@/data/timeline";
import React, { useState } from "react";
import TimelineItemInfoModal from "./TimelineItemInfoModal";

export type TimelineItemInfoProps = JSX.IntrinsicElements["div"] & {
  timelineDataPoint: TimelineDataPoint;
};

export default function TimelineItemInfo({
  timelineDataPoint: tdp,
}: TimelineItemInfoProps) {
  const [modalShowing, setModalShowing] = useState(false);

  return (
    <div
      onClick={() => setModalShowing(true)}
      className="flex-1 border-2 border-white rounded-md px-4 py-3 hover:bg-gray-900"
    >
      <h1 className=" text-white text-center leading-5">{tdp.title}</h1>
      {modalShowing && (
        <TimelineItemInfoModal
          timelineDataPoint={tdp}
          turnModalOff={() => setModalShowing(false)}
        />
      )}
    </div>
  );
}

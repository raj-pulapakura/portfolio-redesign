import { TimelineDataPoint } from "@/data/timeline";
import React from "react";

export type TimelineItemProps = JSX.IntrinsicElements["div"] & {
  bubbleHeight: number;
  connectorHeight: number;
  connectorWidth: number;
  timelineDataPoint: TimelineDataPoint;
};

export default function TimelineItem({
  timelineDataPoint: tdp,
  bubbleHeight,
  connectorHeight,
  connectorWidth,
  ...props
}: TimelineItemProps) {
  // pixel units

  return (
    <div
      style={{ height: bubbleHeight + "px" }}
      className="relative w-full bg-lime-400 rounded-full"
    >
      <div className="absolute left-1/2 -translate-x-1/2 -translate-y-full w-full">
        <div className="flex flex-col items-center">
          <h1 className="text-white text-center font-bold text-xl">
            {tdp.date}
          </h1>
          <div
            style={{ height: connectorHeight, width: connectorWidth }}
            className="bg-white"
          ></div>
        </div>
      </div>

      <div
        style={{ top: bubbleHeight + "px" }}
        className="absolute left-1/2 -translate-x-1/2 w-full"
      >
        <div className="flex flex-col items-center">
          <div
            style={{ height: connectorHeight, width: connectorWidth }}
            className="bg-white mb-1"
          ></div>
          <h1 className="text-white text-center leading-5">{tdp.title}</h1>
        </div>
      </div>
    </div>
  );
}

"use client";

import { TimelineDataPoint, timelineData } from "@/data/timeline";
import React from "react";
import TimelineItemInfo from "./TimelineItemInfo";

export type TimelineItemProps = JSX.IntrinsicElements["div"] & {
  dateColumnWidth?: string;
  circleWidth?: string;
  circleHeight?: string;
  circleColour?: string;
  circleToTextConnectorWidth?: string;
  circleToTextConnectorHeight?: string;
  timelineDataPointTitle: string;
};

export default function TimelineItem({
  timelineDataPointTitle: tdpTitle,
  dateColumnWidth = "w-1/5",
  circleWidth = "2rem",
  circleHeight = "2rem",
  circleColour = "bg-lime-400",
  circleToTextConnectorHeight = "0.25rem",
  circleToTextConnectorWidth = "1.25rem",
  className,
  ...props
}: TimelineItemProps) {
  const containerStyle = `hover:cursor-pointer flex items-center ${className}`;
  const dateStyle = `text-white text-sm  text-center`;
  const circleStyle = `z-10 rounded-full ${circleColour}`;
  const connectorStyle = `bg-white`;

  const tdp = timelineData.find((tdp) => tdp.title === tdpTitle);

  if (!tdp) {
    return;
  }

  return (
    <div className={containerStyle} {...props}>
      <h1 style={{ width: dateColumnWidth }} className={dateStyle}>
        {tdp.date}
      </h1>
      <div
        style={{ width: circleWidth, height: circleHeight }}
        className={circleStyle}
      ></div>
      <div
        style={{
          width: circleToTextConnectorWidth,
          height: circleToTextConnectorHeight,
        }}
        className={connectorStyle}
      ></div>
      <TimelineItemInfo timelineDataPointTitle={tdpTitle} />
    </div>
  );
}

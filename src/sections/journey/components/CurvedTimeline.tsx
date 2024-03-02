import { timelineData } from "@/data/timeline";
import React from "react";
import TimelineItem from "./curved/TimelineItem";
import TimelineRow from "./curved/TimelineRow";
import TimelineEndNode from "./curved/TimelineEndNode";

type CurvedTimelineProps = JSX.IntrinsicElements["div"] & {
  rowGap: number;
  bubbleHeight: number;
};

export default function CurvedTimeline({
  className,
  rowGap,
  bubbleHeight,
  ...props
}: CurvedTimelineProps) {
  return (
    <div className={`${className}`} {...props}>
      <TimelineRow
        rowGap={rowGap}
        bubbleHeight={bubbleHeight}
        connectOnSide="right"
      >
        <TimelineEndNode bubbleHeight={bubbleHeight}>Start</TimelineEndNode>
        {timelineData.slice(0, 4).map((tdp) => (
          <TimelineItem
            bubbleHeight={bubbleHeight}
            connectorHeight={15}
            connectorWidth={5}
            timelineDataPoint={tdp}
          />
        ))}
      </TimelineRow>

      <TimelineRow
        rowGap={rowGap}
        bubbleHeight={bubbleHeight}
        connectOnSide="left"
      >
        {timelineData.slice(4, 8).map((tdp) => (
          <TimelineItem
            bubbleHeight={bubbleHeight}
            connectorHeight={15}
            connectorWidth={5}
            timelineDataPoint={tdp}
          />
        ))}
      </TimelineRow>

      <TimelineRow
        rowGap={rowGap}
        bubbleHeight={bubbleHeight}
        connectOnSide="none"
      >
        {timelineData.slice(8, timelineData.length).map((tdp) => (
          <TimelineItem
            bubbleHeight={bubbleHeight}
            connectorHeight={15}
            connectorWidth={5}
            timelineDataPoint={tdp}
          />
        ))}
        <TimelineEndNode bubbleHeight={bubbleHeight}>1/03/24</TimelineEndNode>
      </TimelineRow>
    </div>
  );
}

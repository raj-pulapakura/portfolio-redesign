"use client";

import { TimelineDataPoint, timelineData } from "@/data/timeline";
import React from "react";
import TimelineItem from "./curved/TimelineItem";
import TimelineRow from "./curved/TimelineRow";
import TimelineEndNode from "./curved/TimelineEndNode";
import { timelineItemColours, numColors } from "..";

type CurvedTimelineProps = JSX.IntrinsicElements["div"] & {
  rowGap: number;
  bubbleGap: number;
  bubbleHeight: number;
  dataRows: TimelineDataPoint[][];
};

export default function CurvedTimeline({
  rowGap,
  bubbleGap,
  bubbleHeight,
  dataRows,
  ...props
}: CurvedTimelineProps) {
  const timelineRows: JSX.Element[] = [];
  const timelineRowProps = { rowGap, bubbleHeight, bubbleGap };
  const timelineEndNodeProps = { bubbleHeight };
  const timelineItemProps = {
    bubbleHeight,
    connectorHeight: 15,
    connectorWidth: 5,
  };

  let colourIndex = 0;

  dataRows.forEach((dataRow, index) => {
    let timelineRow: JSX.Element;

    if (index === 0) {
      timelineRow = (
        <TimelineRow
          {...timelineRowProps}
          leftToRight={true}
          connectOnSide="right"
        >
          <TimelineEndNode {...timelineEndNodeProps}>Start</TimelineEndNode>
          {dataRow.map((tdp) => (
            <TimelineItem
              key={tdp.title}
              bubbleColour={timelineItemColours[colourIndex++ % numColors]}
              timelineDataPointTitle={tdp.title}
              {...timelineItemProps}
            />
          ))}
        </TimelineRow>
      );
    } else if (index === dataRows.length - 1) {
      timelineRow = (
        <TimelineRow
          {...timelineRowProps}
          leftToRight={index % 2 == 0}
          connectOnSide="none"
        >
          {dataRow.map((tdp) => (
            <TimelineItem
              key={tdp.title}
              {...timelineItemProps}
              bubbleColour={timelineItemColours[colourIndex++ % numColors]}
              timelineDataPointTitle={tdp.title}
            />
          ))}
        </TimelineRow>
      );
    } else {
      timelineRow = (
        <TimelineRow
          {...timelineRowProps}
          leftToRight={index % 2 == 0}
          connectOnSide={index % 2 === 0 ? "right" : "left"}
        >
          {dataRow.map((tdp) => (
            <TimelineItem
              key={tdp.title}
              {...timelineItemProps}
              bubbleColour={timelineItemColours[colourIndex++ % numColors]}
              timelineDataPointTitle={tdp.title}
            />
          ))}
        </TimelineRow>
      );
    }

    timelineRows.push(timelineRow);
  });

  return <div {...props}>{timelineRows}</div>;
}

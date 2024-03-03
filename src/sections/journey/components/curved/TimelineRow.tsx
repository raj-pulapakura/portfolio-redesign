"use client";

import React, { ReactNode } from "react";

type TimelineRowProps = {
  rowGap: number;
  bubbleGap: number;
  bubbleHeight: number;
  leftToRight: boolean;
  connectOnSide: "left" | "right" | "none";
  children?: ReactNode;
};

export default function TimelineRow({
  rowGap,
  bubbleGap,
  bubbleHeight,
  leftToRight,
  connectOnSide,
  children,
}: TimelineRowProps) {
  const flexDirection = leftToRight ? "row" : "row-reverse";

  return (
    <div className="relative">
      <HorizontalConnector />
      <div
        style={{
          marginBottom: rowGap + "px",
          gap: bubbleGap + "px",
          flexDirection,
        }}
        className="z-20 flex justify-between items-center"
      >
        {children}
      </div>
      <EndConnector
        bubbleHeight={bubbleHeight}
        rowGap={rowGap}
        connectOnSide={connectOnSide}
      />
    </div>
  );
}

function HorizontalConnector() {
  return (
    <div className="z-0 absolute w-full h-1 bg-white top-1/2 -translate-y-1/2"></div>
  );
}

function EndConnector({
  rowGap,
  bubbleHeight,
  connectOnSide,
}: {
  rowGap: number;
  bubbleHeight: number;
  connectOnSide: "left" | "right" | "none";
}) {
  if (connectOnSide === "none") {
    return;
  }

  const connectorHeight = rowGap + bubbleHeight + 4;
  const connectorWidth = connectorHeight / 2;

  return connectOnSide === "left" ? (
    <div
      style={{
        width: connectorWidth + "px",
        height: connectorHeight + "px",
        top: bubbleHeight / 2 - 2,
        transform: `translateX(-${connectorWidth - 2}px)`,
        left: 0,
      }}
      className="absolute border-t-4 border-b-4 rounded-l-full border-white"
    ></div>
  ) : (
    <div
      style={{
        width: connectorWidth,
        height: connectorHeight,
        top: bubbleHeight / 2 - 2,
        transform: `translateX(${connectorWidth - 2}px)`,
        right: 0,
      }}
      className="absolute border-t-4 border-b-4 rounded-r-full border-white"
    ></div>
  );
}

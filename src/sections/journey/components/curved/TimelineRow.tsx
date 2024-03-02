import React from "react";

type TimelineRowProps = JSX.IntrinsicElements["div"] & {
  rowGap?: number;
  bubbleHeight: number;
  connectOnSide: "left" | "right" | "none";
};

export default function TimelineRow({
  className,
  children,
  rowGap = 0,
  bubbleHeight,
  connectOnSide,
  ...props
}: TimelineRowProps) {
  return (
    <div className="relative">
      <HorizontalConnector />
      <div
        style={{ marginBottom: rowGap + "px" }}
        className={`z-20 flex justify-between items-center gap-10 ${className}`}
        {...props}
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

  const connectorHeight = rowGap + bubbleHeight;
  const connectorWidth = connectorHeight / 2;

  return connectOnSide === "left" ? (
    <div
      style={{
        width: connectorWidth + "px",
        height: connectorHeight + "px",
        top: bubbleHeight / 2,
        transform: `translateX(-${connectorWidth + 1}px)`,
        left: 0,
      }}
      className="absolute border-t-4 border-l-4 border-b-4 rounded-l-full border-white"
    ></div>
  ) : (
    <div
      style={{
        width: connectorWidth,
        height: connectorHeight,
        top: bubbleHeight / 2,
        transform: `translateX(${connectorWidth - 1}px)`,
        right: 0,
      }}
      className="absolute border-t-4 border-r-4 border-b-4 rounded-r-full border-white"
    ></div>
  );
}

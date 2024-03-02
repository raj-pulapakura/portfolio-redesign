import React from "react";

type TimelineEndNodeProps = JSX.IntrinsicElements["div"] & {
  bubbleHeight: number;
};

export default function TimelineEndNode({
  children,
  className,
  bubbleHeight,
  ...props
}: TimelineEndNodeProps) {
  return (
    <div
      style={{ height: bubbleHeight + "px" }}
      className={`z-0 px-8 uppercase align-middle bg-indigo-600 rounded-full flex ${className}`}
      {...props}
    >
      <h1 className="text-3xl font-bold text-white m-auto">{children}</h1>
    </div>
  );
}

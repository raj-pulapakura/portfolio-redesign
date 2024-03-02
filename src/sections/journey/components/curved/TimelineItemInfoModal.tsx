import { TimelineDataPoint } from "@/data/timeline";
import React from "react";

type TimelineItemInfoModalProps = JSX.IntrinsicElements["div"] & {
  timelineDataPoint: TimelineDataPoint;
};

export default function TimelineItemInfoModal({
  className,
  timelineDataPoint: tdp,
  ...props
}: TimelineItemInfoModalProps) {
  return (
    <div
      className={`z-30 p-5 absolute w-72 xl:w-96 left-1/2 -translate-x-1/2 -translate-y-full rounded-md ${className}`}
      {...props}
    >
      <p className="text-lg">{tdp.extraInformation}</p>
    </div>
  );
}

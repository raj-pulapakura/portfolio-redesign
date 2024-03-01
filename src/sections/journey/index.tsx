import { rockSalt } from "@/app/layout";
import { timelineData } from "@/data/timeline";
import React from "react";
import TimelineItem from "./components/TimelineItem";
import VerticalConnector from "./components/VerticalConnector";

const dateColumnWidth = "20%";
const circleWidth = "2rem";
const circleHeight = "2rem";
const circleToTextConnectorWidth = "1.25rem";
const circleToTextConnectorHeight = "0.25rem";
const verticalBarWidth = "0.25rem";

export default function Journey() {
  return (
    <section className="bg-black py-20">
      <h1 className={`${rockSalt.className} text-5xl text-white text-center`}>
        JOURNEY
      </h1>
      <div className="m-4 mt-16 relative ">
        <VerticalConnector
          circleWidth={circleWidth}
          dateColumnWidth={dateColumnWidth}
          verticalBarWidth={verticalBarWidth}
        />
        {timelineData.map((tdp) => (
          <TimelineItem
            dateColumnWidth={dateColumnWidth}
            circleWidth={circleWidth}
            circleHeight={circleHeight}
            circleToTextConnectorHeight={circleToTextConnectorHeight}
            circleToTextConnectorWidth={circleToTextConnectorWidth}
            timelineDataPoint={tdp}
            className="mb-3"
          />
        ))}
      </div>
    </section>
  );
}

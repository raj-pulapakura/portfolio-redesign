import React from "react";
import { rockSalt } from "@/app/layout";
import VerticalTimeline from "./components/VerticalTimeline";
import CurvedTimeline from "./components/CurvedTimeline";
import { timelineData } from "@/data/timeline";

export default function Journey() {
  return (
    <section className="bg-black py-20">
      <h1 className={`${rockSalt.className} text-5xl text-white text-center`}>
        JOURNEY
      </h1>

      <div className="visible lg:hidden">
        <VerticalTimeline className="m-4 mt-20" />
      </div>

      <div className="hidden lg:block xl:hidden">
        <CurvedTimeline
          dataRows={[
            timelineData.slice(0, 3),
            timelineData.slice(3, 8),
            timelineData.slice(8, timelineData.length),
          ]}
          rowGap={200}
          bubbleGap={60}
          bubbleHeight={40}
          className="mx-40 mt-32"
        />
      </div>

      <div className="hidden xl:block 2xl:hidden">
        <CurvedTimeline
          dataRows={[
            timelineData.slice(0, 4),
            timelineData.slice(4, 8),
            timelineData.slice(8, timelineData.length),
          ]}
          rowGap={170}
          bubbleGap={100}
          bubbleHeight={50}
          className="mx-40 mt-32"
        />
      </div>

      <div className="hidden 2xl:block">
        <CurvedTimeline
          dataRows={[
            timelineData.slice(0, 4),
            timelineData.slice(4, 8),
            timelineData.slice(8, timelineData.length),
          ]}
          rowGap={180}
          bubbleGap={200}
          bubbleHeight={60}
          className="mx-40 mt-32"
        />
      </div>
    </section>
  );
}

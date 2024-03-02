import React from "react";
import { rockSalt } from "@/app/layout";
import VerticalTimeline from "./components/VerticalTimeline";
import CurvedTimeline from "./components/CurvedTimeline";

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
          rowGap={200}
          bubbleHeight={40}
          className="mx-40 mt-32"
        />
      </div>

      <div className="hidden xl:block">
        <CurvedTimeline
          rowGap={150}
          bubbleHeight={50}
          className="mx-40 mt-32"
        />
      </div>
    </section>
  );
}

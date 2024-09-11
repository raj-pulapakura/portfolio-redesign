'use client';

import { timelineData } from '../../data/timeline';
import CurvedTimeline from './components/CurvedTimeline';
import VerticalTimeline from './components/VerticalTimeline';

export default function Journey() {
  return (
    <section className="bg-background pt-52 pb-20 px-10">
      <div id="journey" className="w-full h-20"></div>

      <h1 className="text-center font-bold text-8xl text-primary mb-40 rounded-lg font-display">
        MY JOURNEY
      </h1>

      <div className="visible lg:hidden">
        <VerticalTimeline className="m-4" />
      </div>

      <div className="hidden lg:block xl:hidden">
        <CurvedTimeline
          dataRows={[
            timelineData.slice(0, 5),
            timelineData.slice(5, 10),
            timelineData.slice(10, timelineData.length),
          ]}
          rowGap={200}
          bubbleGap={40}
          bubbleHeight={40}
          className="mx-40"
        />
      </div>

      <div className="hidden xl:block 2xl:hidden">
        <CurvedTimeline
          dataRows={[
            timelineData.slice(0, 5),
            timelineData.slice(5, 10),
            timelineData.slice(10, timelineData.length),
          ]}
          rowGap={170}
          bubbleGap={60}
          bubbleHeight={50}
          className="mx-40"
        />
      </div>

      <div className="hidden 2xl:block">
        <CurvedTimeline
          dataRows={[
            timelineData.slice(0, 5),
            timelineData.slice(5, 10),
            timelineData.slice(10, timelineData.length),
          ]}
          rowGap={180}
          bubbleGap={100}
          bubbleHeight={60}
          className="mx-40"
        />
      </div>
    </section>
  );
}

export const timelineItemColours = [
  'bg-primary',
  'bg-accent2',
  '#2D93AD',
  '#DE8F6E',
  '#EBBAB9',
];

export const numColors = timelineItemColours.length;

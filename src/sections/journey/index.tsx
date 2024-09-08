'use client';

import { timelineData } from '../../data/timeline';
import CurvedTimeline from './components/CurvedTimeline';
import VerticalTimeline from './components/VerticalTimeline';

export default function Journey() {
  return (
    <section className="bg-black py-20">
      <h1 className="text-center font-bold text-3xl text-cream mb-52">
        / JOURNEY
      </h1>

      <div className="visible lg:hidden">
        <VerticalTimeline className="m-4" />
      </div>

      <div className="hidden lg:block xl:hidden">
        <CurvedTimeline
          dataRows={[
            timelineData.slice(0, 4),
            timelineData.slice(4, 9),
            timelineData.slice(9, timelineData.length),
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
            timelineData.slice(0, 4),
            timelineData.slice(4, 9),
            timelineData.slice(9, timelineData.length),
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
            timelineData.slice(0, 4),
            timelineData.slice(4, 9),
            timelineData.slice(9, timelineData.length),
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
  'bg-cream',
  'bg-brown',
  '#2D93AD',
  '#DE8F6E',
  '#EBBAB9',
];

export const numColors = timelineItemColours.length;

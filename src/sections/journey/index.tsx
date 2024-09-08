'use client';

import { timelineData } from '../../data/timeline';
import CurvedTimeline from './components/CurvedTimeline';
import VerticalTimeline from './components/VerticalTimeline';

export default function Journey() {
  return (
    <section className="bg-black py-20">
      <div className="flex gap-10 justify-center lg:justify-normal items-center">
        <h1
          className={`text-5xl text-white text-center lg:text-left mx-20 leading-loose`}
        >
          MY JOURNEY
        </h1>
      </div>

      <div className="visible lg:hidden">
        <VerticalTimeline className="m-4 mt-20" />
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
          className="mx-40 mt-32"
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
          className="mx-40 mt-32"
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
          className="mx-40 mt-32"
        />
      </div>
    </section>
  );
}

export const timelineItemColours = [
  'bg-lime-400',
  'bg-indigo-400',
  'bg-yellow-400',
  'bg-blue-400',
  'bg-red-400',
];

export const numColors = timelineItemColours.length;

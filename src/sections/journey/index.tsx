'use client';

import { motion } from 'framer-motion';
import { timelineData } from '../../data/timeline';
import CurvedTimeline from './components/CurvedTimeline';
import VerticalTimeline from './components/VerticalTimeline';

export default function Journey() {
  return (
    <section className="bg-gray-900 px-10 pb-20">
      <div id="journey" className="w-full h-20"></div>

      <motion.h1
        initial={{ scale: 2, opacity: 0, y: -60 }}
        whileInView={{ scale: 1, opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 1,
          delay: 1,
          ease: 'easeInOut',
          type: 'spring',
          damping: 10,
          stiffness: 50,
        }}
        className="text-center font-bold text-7xl text-accent mb-20 lg:mb-40 rounded-lg font-sans"
      >
        MY JOURNEY
      </motion.h1>

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
          rowGap={170}
          bubbleGap={100}
          bubbleHeight={60}
          className="mx-40"
        />
      </div>
    </section>
  );
}

export const timelineItemColours = [
  'bg-pink-400',
  'bg-teal-400',
  'bg-amber-400',
  'bg-rose-500',
];

export const numColors = timelineItemColours.length;

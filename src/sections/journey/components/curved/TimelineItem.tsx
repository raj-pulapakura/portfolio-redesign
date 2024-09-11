'use client';

import { useState } from 'react';
import TimelineItemInfoModal from './TimelineItemInfoModal';
import { timelineData } from '../../../../data/timeline';
import { HTMLMotionProps, motion } from 'framer-motion';

export type TimelineItemProps = HTMLMotionProps<'div'> & {
  bubbleHeight: number;
  bubbleColour?: string;
  useRandomColour?: boolean;
  connectorHeight: number;
  connectorWidth: number;
  timelineDataPointTitle: string;
  index: number;
};

export default function TimelineItem({
  timelineDataPointTitle: tdpTitle,
  bubbleHeight,
  connectorHeight,
  connectorWidth,
  bubbleColour = 'bg-lime-400',
  className,
  style,
  ...props
}: TimelineItemProps) {
  const [onModal, setOnModal] = useState(false);

  const tdp = timelineData.find((tdp) => tdp.title === tdpTitle);

  if (!tdp) {
    return <div></div>;
  }

  return (
    <motion.div
      // motion props
      initial={{ scale: 2, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{
        duration: 1,
        delay: 1,
        ease: 'easeInOut',
        type: 'spring',
        damping: 10,
        stiffness: 50,
      }}
      // other props
      style={{ height: bubbleHeight + 'px', ...style }}
      className={`hover:cursor-zoom-in relative w-full ${className}`}
      onClick={() => setOnModal(true)}
      onMouseEnter={() => setOnModal(true)}
      onMouseLeave={() => setOnModal(false)}
      {...props}
    >
      {/* bubble */}
      <div
        style={{
          height: bubbleHeight + 'px',
          width: bubbleHeight + 'px',
          backgroundColor: bubbleColour.startsWith('bg-')
            ? undefined
            : bubbleColour,
        }}
        className={`${
          bubbleColour.startsWith('bg-') ? bubbleColour : ''
        } z-30  rounded-full absolute left-1/2 -translate-x-1/2`}
        onMouseEnter={() => setOnModal(true)}
        onMouseLeave={() => setOnModal(false)}
      >
        {onModal && (
          <TimelineItemInfoModal
            timelineDataPoint={tdp}
            style={
              bubbleColour.startsWith('bg-')
                ? {}
                : {
                    backgroundColor: bubbleColour,
                  }
            }
            className={`${bubbleColour.startsWith('bg-') ? bubbleColour : ''}`}
          />
        )}
      </div>

      {/* top content */}
      <div className="z-20 absolute left-1/2 -translate-x-1/2 -translate-y-full w-full">
        <div className="flex  flex-col items-center">
          <motion.h1
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 2, ease: 'easeInOut' }}
            viewport={{ once: true }}
            className="text-white text-center font-bold text-xl"
          >
            {tdp.date}
          </motion.h1>
          <div
            style={{ height: connectorHeight, width: connectorWidth }}
            className="bg-white"
          ></div>
        </div>
      </div>

      {/* bottom content */}
      <div
        style={{ top: bubbleHeight + 'px' }}
        className="absolute left-1/2 -translate-x-1/2 w-full"
      >
        <div className="flex flex-col items-center">
          <div
            style={{ height: connectorHeight, width: connectorWidth }}
            className="bg-white mb-1"
          ></div>
          <motion.h1
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 2.5, ease: 'easeInOut' }}
            viewport={{ once: true }}
            className="text-white text-center leading-5 text-xs lg:text-sm xl:text-md"
          >
            {tdp.title}
          </motion.h1>
        </div>
      </div>
    </motion.div>
  );
}

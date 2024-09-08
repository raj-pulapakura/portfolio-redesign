'use client';

import TimelineItem from './vertical/TimelineItem';
import VerticalConnector from './vertical/VerticalConnector';
import { numColors, timelineItemColours } from '..';
import { timelineData } from '../../../data/timeline';

const dateColumnWidth = '20%';
const circleWidth = '2rem';
const circleHeight = '2rem';
const circleToTextConnectorWidth = '1.25rem';
const circleToTextConnectorHeight = '0.25rem';
const verticalBarWidth = '0.25rem';

export default function VerticalTimeline({
  className,
  ...props
}: JSX.IntrinsicElements['div']) {
  let colourIndex = 0;

  return (
    <div className={`relative ${className}`} {...props}>
      <VerticalConnector
        circleWidth={circleWidth}
        dateColumnWidth={dateColumnWidth}
        verticalBarWidth={verticalBarWidth}
      />
      {timelineData.map((tdp) => (
        <TimelineItem
          key={tdp.title}
          dateColumnWidth={dateColumnWidth}
          circleWidth={circleWidth}
          circleHeight={circleHeight}
          circleColour={timelineItemColours[colourIndex++ % numColors]}
          circleToTextConnectorHeight={circleToTextConnectorHeight}
          circleToTextConnectorWidth={circleToTextConnectorWidth}
          timelineDataPointTitle={tdp.title}
          className="mb-3"
        />
      ))}
    </div>
  );
}

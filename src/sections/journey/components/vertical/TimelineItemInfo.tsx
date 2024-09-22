'use client';

import { useState } from 'react';
import TimelineItemInfoModal from './TimelineItemInfoModal';
import { timelineData } from '../../../../data/timeline';

export type TimelineItemInfoProps = JSX.IntrinsicElements['div'] & {
  timelineDataPointTitle: string;
};

export default function TimelineItemInfo({
  timelineDataPointTitle: tdpTitle,
}: TimelineItemInfoProps) {
  const [modalShowing, setModalShowing] = useState(false);

  const tdp = timelineData.find((tdp) => tdp.title == tdpTitle);

  if (!tdp) {
    return <div></div>;
  }

  return (
    <div
      onClick={() => setModalShowing(true)}
      className="flex-1 border-2 border-white rounded-md px-4 py-3 hover:bg-gray-900"
    >
      <h1 className=" text-white text-center leading-5">{tdp.title}</h1>
      {modalShowing && (
        <TimelineItemInfoModal
          timelineDataPoint={tdp}
          turnModalOff={() => setModalShowing(false)}
        />
      )}
    </div>
  );
}

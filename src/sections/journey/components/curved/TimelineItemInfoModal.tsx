import { TimelineDataPoint } from '../../../../data/timeline';

type TimelineItemInfoModalProps = JSX.IntrinsicElements['div'] & {
  timelineDataPoint: TimelineDataPoint;
};

export default function TimelineItemInfoModal({
  className,
  timelineDataPoint: tdp,
  ...props
}: TimelineItemInfoModalProps) {
  return (
    <div
      className={`z-30 p-5 relative w-72 xl:w-96 left-1/2 -translate-x-1/2 -translate-y-[calc(100%)] rounded-md animate-[fade-in_250ms] ${className}`}
      {...props}
    >
      <p className="text-sm">{tdp.extraInformation}</p>
    </div>
  );
}

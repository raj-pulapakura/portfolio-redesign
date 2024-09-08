'use client';

type VerticalConnectorProps = {
  dateColumnWidth: string;
  circleWidth: string;
  verticalBarWidth: string;
};

const remDivideBy = (rem: string, divideBy: number) => {
  const remValue = parseFloat(rem.slice(0, -3));
  const newRemValue = remValue / divideBy;
  return newRemValue + 'rem';
};

export default function VerticalConnector({
  dateColumnWidth,
  circleWidth,
  verticalBarWidth,
}: VerticalConnectorProps) {
  const circleRadius = remDivideBy(circleWidth, 2);
  const verticalBarAdjustment = remDivideBy(verticalBarWidth, 2);

  const left = `calc(${dateColumnWidth} + ${circleRadius} - ${verticalBarAdjustment})`;

  return (
    <div
      style={{ top: 0, left, width: verticalBarWidth }}
      className="absolute h-full bg-white z-0"
    ></div>
  );
}

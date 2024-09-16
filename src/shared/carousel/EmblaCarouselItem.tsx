import { ReactNode } from 'react';

export default function EmblaCarouselItem({
  children,
  itemPctWidth = '100%',
}: {
  children?: ReactNode;
  itemPctWidth?: string;
}) {
  return (
    <div
      style={{
        flexBasis: itemPctWidth,
        flexGrow: 0,
        flexShrink: 0,
        minWidth: 0,
        padding: '5rem',
      }}
    >
      {children}
    </div>
  );
}

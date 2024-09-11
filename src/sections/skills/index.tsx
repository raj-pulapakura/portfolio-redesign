'use client';

import GridXLarge from './components/GridXLarge';

export default function Skills() {
  return (
    <section className="w-full relative px-10 pt-40 bg-background">
      {/* <div className="absolute  top-1/2 -translate-y-1/3 -translate-x-2/3">
        <IconCircle itemSizeInPixels={50} radiusInPixels={300} />
      </div> */}

      <GridXLarge />

      {/* <div className="absolute top-1/2 right-0 -translate-y-1/3 translate-x-2/3">
        <IconCircle itemSizeInPixels={50} radiusInPixels={300} />
      </div> */}
    </section>
  );
}

import React, { useEffect } from 'react';
import { RegularBlockProps } from '..';
import { motion, MotionProps } from 'framer-motion';

export default function TitleBlock(props: RegularBlockProps) {
  const containerRef = React.useRef<HTMLDivElement>(null);

  const [contentAnimation, setContentAnimation] = React.useState<MotionProps>(
    {}
  );

  useEffect(() => {
    if (containerRef.current) {
      setContentAnimation({
        initial: {
          y: containerRef.current.clientHeight,
        },
        animate: {
          y: 0,
        },
        transition: {
          delay: 2.5,
          type: 'spring',
          damping: 10,
          stiffness: 100,
        },
      });
    }
  }, [containerRef.current]);

  return (
    <motion.div
      {...props}
      ref={containerRef}
      className="shadow-2xl rounded-lg px-10 xl:px-16 py-8 overflow-hidden w-full h-full"
    >
      {containerRef.current && (
        <motion.div {...contentAnimation}>
          <h1 className="text-6xl xl:text-7xl font-extrabold text-primary font-sans">
            AI /
          </h1>
          <h1 className="text-6xl xl:text-7xl font-extrabold text-primary font-sans">
            Software
          </h1>
          <h1 className="text-6xl xl:text-7xl font-extrabold text-primary font-sans">
            Engineer
          </h1>
          <p className="mt-8 text-primary font-sans font-bold">
            Currently working @ Time Under Tension
          </p>
        </motion.div>
      )}
    </motion.div>
  );
}

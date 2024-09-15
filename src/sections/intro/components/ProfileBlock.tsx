import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

export default function ProfileBlock({
  animationDuration,
}: {
  animationDuration: number;
}) {
  const profileRef = useRef<HTMLDivElement>(null);

  // State to store the x and y values of the starting position of the profile block in the animation
  const [xStart, setXStart] = useState<string | null>(null);
  const [yStart, setYStart] = useState<string | null>(null);

  // Calculate the x and y values of the center of the viewport
  const xCenter = window.innerWidth / 2;
  const yCenter = window.innerHeight / 2;

  useEffect(() => {
    if (profileRef.current) {
      // Calculate the x and y values of the left corner of the profile block
      const xProfile = profileRef.current?.offsetLeft || 0;
      const yProfile = profileRef.current?.offsetTop || 0;

      const xStart = `calc(${xCenter}px - ${xProfile}px - 50%)`;
      const yStart = `calc(${yCenter}px - ${yProfile}px - 50%)`;
      setXStart(xStart);
      setYStart(yStart);
    }
  }, [profileRef.current]);

  return (
    <motion.div
      ref={profileRef}
      className="shadow-2xl rounded-lg p-6 w-full h-full"
      initial={{
        opacity: 0,
        x: xStart,
        y: yStart,
        scale: 1.2,
      }}
      animate={{
        opacity: [0, 1, 1, 1, 1],
        x: [xStart, xStart, xStart, 0, 0],
        y: [yStart, yStart, yStart, 0, 0],
        scale: [1.2, 1.2, 1.2, 1, 1],
      }}
      transition={{ duration: animationDuration }}
    >
      <img
        src="/photos/profile-no-bg.png"
        className="w-full h-full object-contain "
      />
    </motion.div>
  );
}

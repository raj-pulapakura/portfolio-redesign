import { useState } from 'react';
import { motion } from 'framer-motion';

const HoverImage = () => {
  const [maskPosition, setMaskPosition] = useState<{
    x: number | null;
    y: number | null;
  }>({ x: null, y: null });

  const handleMouseMove = (e: any) => {
    const rect = e.target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMaskPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setMaskPosition({ x: null, y: null });
  };

  return (
    <motion.div
      initial={{ top: 0, right: '-100%' }}
      animate={{ top: 0, right: 0 }}
      transition={{ delay: 2.5, duration: 1, ease: 'easeInOut' }}
      className="absolute top-0 w-full h-full"
      onMouseMove={handleMouseMove}
      onMouseOut={handleMouseLeave}
    >
      {/* Colorful image on the bottom */}
      <img
        src="/photos/landscape3.jpg"
        className="absolute rounded-lg object-cover w-full h-full"
      />
      {/* Grayscale image on top */}
      <img
        src="/photos/landscape3.jpg"
        className="absolute grayscale rounded-lg object-cover w-full h-full opacity-50"
        style={{
          filter: 'grayscale(100%)',
          transition: 'filter 0.5s',
          WebkitMaskImage:
            maskPosition.x != null
              ? `radial-gradient(circle 100px at ${maskPosition.x}px ${maskPosition.y}px, transparent 100%, background 0%)`
              : undefined,
          maskImage:
            maskPosition.y != null
              ? `radial-gradient(circle 100px at ${maskPosition.x}px ${maskPosition.y}px, transparent 100%, background 0%)`
              : undefined,
        }}
      />
    </motion.div>
  );
};

export default HoverImage;

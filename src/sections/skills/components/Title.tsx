import { MotionProps, motion } from 'framer-motion';

export default function Title() {
  const titleAnimation: MotionProps = {
    initial: { y: 50, opacity: 0 },
    whileInView: { y: 0, opacity: 1 },
    viewport: { once: true },
    transition: { duration: 1 },
  };

  return (
    <motion.h1
      {...titleAnimation}
      className="font-bold text-8xl text-primary col-span-3 rounded-lg w-full mb-20 font-display text-left"
    >
      Skills ➜
    </motion.h1>
  );
  ``;
}

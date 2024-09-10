import { RegularBlockProps } from '..';
import { motion, MotionProps } from 'framer-motion';

export default function NavBlock(props: RegularBlockProps) {
  const animation1: MotionProps = {
    initial: { opacity: 0, x: -100 },
    animate: { opacity: 1, x: 0 },
    transition: { delay: 2, duration: 0.5 },
  };

  const animation2: MotionProps = {
    initial: { opacity: 0, x: 100 },
    animate: { opacity: 1, x: 0 },
    transition: { delay: 2, duration: 0.5 },
  };

  return (
    <motion.div
      {...props}
      className="bg-cream  font-bold text-3xl rounded-lg col-span-8 flex flex-col items-center justify-center"
    >
      <motion.p {...animation1} className="text-brown">
        / SKILLS
      </motion.p>
      <motion.p {...animation2} className="text-brown">
        / JOURNEY
      </motion.p>
      <motion.p {...animation1} className="text-brown">
        / PROJECTS
      </motion.p>
      <motion.p {...animation2} className="text-brown">
        / ARTICLES
      </motion.p>
      <motion.p {...animation1} className="text-brown">
        / VIDEOS
      </motion.p>
    </motion.div>
  );
}

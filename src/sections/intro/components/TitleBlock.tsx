import { RegularBlockProps } from '..';
import { motion } from 'framer-motion';

export default function TitleBlock(props: RegularBlockProps) {
  return (
    <motion.div {...props} className="bg-dark rounded-lg col-span-7 px-16 py-8">
      <h1 className="text-8xl font-bold text-cream font-display">AI /</h1>
      <h1 className="text-8xl font-bold text-cream">Software</h1>
      <h1 className="text-8xl font-bold text-cream">Engineer</h1>
      <p className="mt-8 text-cream">Currently working @ Time Under Tension</p>
    </motion.div>
  );
}

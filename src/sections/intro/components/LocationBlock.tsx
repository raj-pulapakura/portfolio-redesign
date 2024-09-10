import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { RegularBlockProps } from '..';
import { motion } from 'framer-motion';
import HoverImage from './HoverImage';

export default function LocationBlock(props: RegularBlockProps) {
  return (
    <motion.div
      {...props}
      className="rounded-lg col-span-4 flex flex-col justify-center items-center gap-10 relative "
    >
      <HoverImage />
      <FontAwesomeIcon
        className="text-cream z-10"
        icon={faLocationDot}
        size="3x"
      />
      <div className="text-center z-10">
        <p className="font-bold text-cream text-2xl">Melbourne,</p>
        <p className="font-bold text-cream text-2xl">Australia</p>
      </div>
    </motion.div>
  );
}

import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { RegularBlockProps } from '..';
import { motion } from 'framer-motion';
import HoverImage from './HoverImage';

export default function LocationBlock(props: RegularBlockProps) {
  return (
    <motion.div
      {...props}
      className="shadow-2xl rounded-lg flex flex-col justify-center items-center relative w-full h-full overflow-hidden"
    >
      <HoverImage />

      <motion.div
        initial={{ y: -1000 }}
        animate={{ y: 0 }}
        transition={{
          delay: 3.5,
          duration: 0.25,
          type: 'spring',
          damping: 10,
          stiffness: 50,
        }}
        className="text-center z-10"
      >
        <FontAwesomeIcon
          className="text-background z-10 mb-5"
          icon={faLocationDot}
          size="3x"
        />
        <p className="font-bold text-background text-2xl  font-sans">
          Melbourne,
        </p>
        <p className="font-bold text-background text-2xl font-sans">
          Australia
        </p>
      </motion.div>
    </motion.div>
  );
}

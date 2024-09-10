import { RegularBlockProps } from '..';
import LinkItem from './LinkItem';
import {
  faGithub,
  faLinkedin,
  faMedium,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import { motion, MotionProps } from 'framer-motion';

export default function LinksBlock(props: RegularBlockProps) {
  const animTransition: MotionProps['transition'] = {
    delay: 2,
    duration: 0.5,
    type: 'spring',
    dampness: 10,
    stiffness: 100,
  };

  const animation1: MotionProps = {
    initial: { opacity: 0, y: -50 },
    animate: { opacity: 1, y: 0 },
    transition: { ...animTransition },
  };

  const animation2: MotionProps = {
    initial: { opacity: 0, x: 50 },
    animate: { opacity: 1, x: 0 },
    transition: { ...animTransition },
  };

  const animation3: MotionProps = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    transition: { ...animTransition },
  };

  const animation4: MotionProps = {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0 },
    transition: { ...animTransition },
  };

  return (
    <motion.div
      {...props}
      className=" border-2 border-primary rounded-lg col-span-6 flex justify-center items-center"
    >
      <div className="grid grid-cols-2 w-fit gap-10">
        <motion.div {...animation1}>
          <LinkItem
            icon={faLinkedin}
            text="LinkedIn"
            url="https://www.linkedin.com/in/rajpulapakura/"
          />
        </motion.div>
        <motion.div {...animation2}>
          <LinkItem
            icon={faYoutube}
            text="YouTube"
            url="https://www.youtube.com/@rajpulapakura001"
          />
        </motion.div>
        <motion.div {...animation3}>
          <LinkItem
            icon={faGithub}
            text="GitHub"
            url="https://github.com/raj-pulapakura"
          />
        </motion.div>
        <motion.div {...animation4}>
          <LinkItem
            icon={faMedium}
            text="Medium"
            url="https://medium.com/@raj.pulapakura"
          />
        </motion.div>
      </div>
    </motion.div>
  );
}

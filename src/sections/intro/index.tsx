import ProfileBlock from './components/ProfileBlock';
import LinksBlock from './components/LinksBlock';
import TitleBlock from './components/TitleBlock';
import LocationBlock from './components/LocationBlock';
import NavBlock from './components/NavBlock';
import { motion, MotionProps } from 'framer-motion';

export interface RegularBlockProps {
  initial: MotionProps['initial'];
  animate: MotionProps['animate'];
  transition?: MotionProps['transition'];
}

export default function Intro() {
  const profileBlockAnimationDuration = 2;
  const otherBlockAnimationDuration = 1;

  const otherBlockProps: RegularBlockProps = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: {
      duration: otherBlockAnimationDuration,
      delay: profileBlockAnimationDuration - 0.25,
    },
  };

  return (
    <motion.div
      className="relative min-h-screen max-h-screen w-full p-5 md:p-10 bg-background grid gap-6 grid-rows-2"
      style={{ gridTemplateColumns: 'repeat(14, minmax(0, 1fr))' }}
    >
      <div className="col-span-4 xl:col-span-3">
        <ProfileBlock animationDuration={profileBlockAnimationDuration} />
      </div>
      <div className="col-span-6 xl:col-span-7">
        <TitleBlock {...otherBlockProps} />
      </div>
      <div className="col-span-4">
        <LinksBlock {...otherBlockProps} />
      </div>
      <div className="col-span-4">
        <NavBlock {...otherBlockProps} />
      </div>
      <div className="col-span-10">
        <LocationBlock {...otherBlockProps} />
      </div>
    </motion.div>
  );
}

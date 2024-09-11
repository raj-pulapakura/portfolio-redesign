import { motion, MotionProps } from 'framer-motion';
import { mlskills, fullstackskills, dataskills } from '../../../data/skills';
import SkillSection from './SkillSection';

export default function () {
  const screwAnimation: MotionProps = {
    initial: { scale: 3, opacity: 0, rotate: -90 },
    whileInView: { scale: 1, opacity: 1, rotate: 45 },
    transition: {
      duration: 1,
      delay: 1,
    },
    viewport: { once: true },
  };

  return (
    <div className="flex flex-col gap-10 col-span-3 row-span-2 rounded-lg bg-accent p-10 overflow-hidden relative shadow-2xl">
      <SkillSection
        title="AI & Machine Learning"
        skills={mlskills}
        align="text-center"
        animation="left"
      />
      <SkillSection
        title="Full Stack Dev"
        skills={fullstackskills}
        align="text-center"
        animation="right"
      />
      <SkillSection
        title="Data, Cloud and Infra"
        skills={dataskills}
        align="text-center"
        animation="left"
      />

      <div className="absolute top-2 left-2 w-4 h-4 bg-background rounded-full"></div>
      <div className="absolute bottom-2 left-2 w-4 h-4 bg-background rounded-full"></div>
      <div className="absolute top-2 right-2 w-4 h-4 bg-background rounded-full"></div>
      <div className="absolute bottom-2 right-2 w-4 h-4 bg-background rounded-full"></div>

      <motion.div
        {...screwAnimation}
        className="absolute top-3 left-3 w-2 h-2 bg-accent rounded-sm"
      ></motion.div>
      <motion.div
        {...screwAnimation}
        className="absolute bottom-3 left-3 w-2 h-2 bg-accent rounded-sm"
      ></motion.div>
      <motion.div
        {...screwAnimation}
        className="absolute top-3 right-3 w-2 h-2 bg-accent rounded-sm"
      ></motion.div>
      <motion.div
        {...screwAnimation}
        className="absolute bottom-3 right-3 w-2 h-2 bg-accent rounded-sm"
      ></motion.div>
    </div>
  );
}

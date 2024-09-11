import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { mlskills, dataskills, fullstackskills } from '../../../data/skills';
import SkillSection from './SkillSection';
import { motion, MotionProps } from 'framer-motion';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';

export default function GridXLarge() {
  const titleAnimation: MotionProps = {
    initial: { y: 50, opacity: 0 },
    whileInView: { y: 0, opacity: 1 },
    viewport: { once: true },
    transition: { duration: 1 },
  };

  const leadContentAnimation: MotionProps = {
    initial: { scale: 0.9, opacity: 0 },
    whileInView: { scale: 1, opacity: 1 },
    transition: {
      duration: 1,
    },
    viewport: { once: true },
  };

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
    <div className="w-10/12 mx-auto gap-x-10 gap-y-10">
      <div className="flex flex-row gap-32 items-center">
        <div className="w-1/3">
          <motion.h1
            {...titleAnimation}
            className="font-bold text-8xl text-primary col-span-3 rounded-lg w-full mb-20 font-display text-left"
          >
            Skills ➜
          </motion.h1>

          <motion.div
            {...leadContentAnimation}
            className="border-primary border-2 h-fit p-10 relative rounded-lg"
          >
            <p className="text-accent font-display opacity-80 text-5xl">
              See how I apply these skills in real-world projects
            </p>

            <div className="flex justify-end">
              <button className="border-2 border-accent rounded-full p-3 mt-4 ml-auto">
                <FontAwesomeIcon
                  icon={faArrowDown}
                  className="text-accent w-8 h-8"
                  size="2x"
                />
              </button>
            </div>

            <div className="absolute -top-5 -right-5 w-10 h-10 border-b-2 border-l-2 border-primary rounded-bl-lg"></div>
            <div className="absolute -bottom-5 -left-5 w-10 h-10 border-t-2 border-r-2 border-primary rounded-tr-lg"></div>
            <div className="absolute -top-5 -left-5 w-10 h-10 border-b-2 border-r-2 border-primary rounded-br-lg"></div>
            <div className="absolute -bottom-5 -right-5 w-10 h-10 border-t-2 border-l-2 border-primary rounded-tl-lg"></div>
          </motion.div>
        </div>

        <div className="w-2/3 flex flex-col gap-10 col-span-3 row-span-2 rounded-lg bg-accent p-10 overflow-hidden relative shadow-2xl">
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
      </div>
    </div>
  );
}

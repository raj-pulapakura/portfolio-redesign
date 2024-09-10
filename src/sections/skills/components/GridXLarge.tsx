import { mlskills, dataskills, fullstackskills } from '../../../data/skills';
import SkillSection from './SkillSection';
import { motion } from 'framer-motion';

export default function GridXLarge() {
  return (
    <div className="w-1/2 mx-auto gap-x-10 gap-y-10">
      <motion.h1
        initial={{ x: -50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="font-bold text-9xl text-primary col-span-3  rounded-lg w-full mb-20 font-display"
      >
        Skills
      </motion.h1>

      <div className="flex flex-col gap-10 col-span-3 row-span-2 rounded-lg">
        <SkillSection
          title="AI & Machine Learning"
          skills={mlskills}
          align="text-left"
        />
        <SkillSection
          title="Full Stack Dev"
          skills={fullstackskills}
          align="text-left"
        />
        <SkillSection
          title="Data, Cloud and Infra"
          skills={dataskills}
          align="text-left"
        />
      </div>
    </div>
  );
}

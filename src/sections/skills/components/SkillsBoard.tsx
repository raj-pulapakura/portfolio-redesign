import { MotionProps } from 'framer-motion';
import { mlskills, fullstackskills, dataskills } from '../../../data/skills';
import SkillSection from './SkillSection';

export default function () {
  return (
    <div className="flex flex-col gap-10 col-span-3 row-span-2 rounded-lg p-10 overflow-hidden relative shadow-2xl">
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
    </div>
  );
}

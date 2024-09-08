import IconBar from './IconBar';
import SkillSection from './SkillSection';
import { mlskills, dataskills, fullstackskills } from '../../../data/skills';

export default function GridSmall() {
  return (
    <div>
      <h1 className="text-2xl font-bold mx-3 text-center">
        I love using AI and Full Stack technologies to solve complex problems.
      </h1>
      <IconBar className="my-14 mx-5" />
      <div className="grid grid-cols-1 grid-rows-3 md:grid-cols-2 md:grid-rows-2 gap-5">
        <SkillSection
          title="AI & Machine Learning"
          skills={mlskills}
          className="col-span-1 "
        />
        <SkillSection
          title="Data, Cloud and Infra"
          skills={dataskills}
          className="col-span-1 "
        />
        <SkillSection
          title="Full Stack Dev"
          skills={fullstackskills}
          className="col-span-1 md:col-span-2"
        />
      </div>
    </div>
  );
}

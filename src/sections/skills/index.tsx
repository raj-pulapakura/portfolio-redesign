'use client';

import LeadContent from './components/LeadContent';
import SkillsBoard from './components/SkillsBoard';
import Title from './components/Title';

export default function Skills() {
  return (
    <section className="w-full relative px-10 pt-40 bg-background">
      <div id="skills" className="w-full h-20"></div>

      <div className="w-10/12 mx-auto flex flex-row gap-32 items-center">
        <div className="w-1/3">
          <Title />
          <LeadContent />
        </div>
        <div className="w-2/3">
          <SkillsBoard />
        </div>
      </div>
    </section>
  );
}

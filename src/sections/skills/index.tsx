'use client';

import Certifcations from './components/Certifcations';
import SkillsBoard from './components/SkillsBoard';

export default function Skills() {
  return (
    <section className="w-full relative px-10 py-32 flex flex-col items-center justify-center bg-blue-200">
      <div id="skills" className="absolute top-0 left-0 w-full h-20"></div>

      <div className="w-10/12 mx-auto flex flex-row gap-32 items-center">
        <div className="w-2/3">
          <SkillsBoard />
        </div>
        <div className="w-1/3">
          <Certifcations />
        </div>
      </div>
    </section>
  );
}

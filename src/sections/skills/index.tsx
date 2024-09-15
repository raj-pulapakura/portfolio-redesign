'use client';

import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SkillsBoard from './components/SkillsBoard';

export default function Skills() {
  return (
    <section className="w-full relative px-10 py-32 flex flex-col items-center justify-center bg-white">
      <div id="skills" className="absolute top-0 left-0 w-full h-20"></div>

      <div className="w-10/12 mx-auto flex flex-row gap-32 items-center">
        <div className="w-2/3">
          <SkillsBoard />
        </div>
        <div className="w-1/3 grid grid-cols-2 gap-10">
          <div className="border-2 border-opacity-60 border-gray-400 p-3 rounded-lg">
            <img src="certifications/aws-machine-learning-specialty.png" />
          </div>
          <div className="border-2 border-opacity-60 border-gray-400 p-3 rounded-lg">
            <img src="certifications/azure-ai-engineer-associate.png" />
          </div>
          <div className="border-2 border-opacity-60 border-gray-400 p-3 rounded-lg">
            <img src="certifications/azure-ai-fundamentals.png" />
          </div>
          <div className="border-2 border-opacity-60 border-gray-400 p-3 rounded-lg">
            <img src="certifications/azure-fundamentals.png" />
          </div>
          <div className="border-2 border-opacity-60 border-gray-400 p-3 rounded-lg">
            <img src="certifications/tensorflow-developer-certificate.png" />
          </div>
          <div className="p-5">
            <button className="fill w-full h-full">
              <FontAwesomeIcon
                icon={faArrowDown}
                className="w-8 h-8"
                size="2x"
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

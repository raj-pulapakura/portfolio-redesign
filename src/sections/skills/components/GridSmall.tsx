import { mlskills, dataskills, fullstackskills } from "@/data/skills";
import React from "react";
import IconBar from "./IconBar";
import SkillSection from "./SkillSection";

export default function GridSmall() {
  return (
    <>
      <h1 className="text-3xl font-bold mx-3 mb-3 text-center">
        I love solving problems using Machine Learning and Full Stack
        technologies.
      </h1>
      <IconBar className="mb-10 mt-10 mx-5" />
      <div className="grid grid-cols-1 grid-rows-3 md:grid-cols-2 md:grid-rows-2 gap-5">
        <SkillSection
          title="Machine Learning"
          skills={mlskills}
          className="col-span-1"
        />
        <SkillSection
          title="Data, Cloud and Infra"
          skills={dataskills}
          className="col-span-1"
        />
        <SkillSection
          title="Full Stack Dev"
          skills={fullstackskills}
          className="col-span-1 md:col-span-2 "
        />
      </div>
    </>
  );
}

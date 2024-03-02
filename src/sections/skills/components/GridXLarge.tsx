import { mlskills, dataskills, fullstackskills } from "@/data/skills";
import React from "react";
import IconCircle from "./IconCircle";
import SkillSection from "./SkillSection";

export default function GridXLarge() {
  return (
    <div className="grid grid-cols-3 grid-rows-2 gap-10">
      <h1 className="text-left col-start-1 col-end-2 row-start-1 row-end-2 text-4xl xl:text-5xl font-bold">
        I love using Machine Learning and Full Stack technologies to solve
        complex problems.
      </h1>
      <SkillSection
        title="Machine Learning"
        skills={mlskills}
        className="col-start-1 col-end-2 row-start-2 row-end-3 "
        align="text-left"
      />
      <SkillSection
        title="Data, Cloud and Infra"
        skills={dataskills}
        className="col-start-2 col-end-3 row-start-1 row-end-2"
        align="text-left"
      />
      <SkillSection
        title="Full Stack Dev"
        skills={fullstackskills}
        className="col-start-2 col-end-3 row-start-2 row-end-3"
        align="text-left"
      />

      <IconCircle
        className="col-start-3 col-end-4 row-start-1 row-end-3 m-auto "
        radiusInPixels={250}
        itemSizeInPixels={40}
      />
    </div>
  );
}

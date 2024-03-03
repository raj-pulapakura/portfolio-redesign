import { mlskills, dataskills, fullstackskills } from "@/data/skills";
import React from "react";
import IconCircle from "./IconCircle";
import SkillSection from "./SkillSection";

export default function GridLarge() {
  return (
    <div className="grid grid-cols-2 grid-rows-3 gap-5">
      <h1 className=" text-left col-start-1 col-end-2 row-start-1 row-end-2 text-3xl font-bold">
        I love using Machine Learning and Full Stack technologies to solve
        complex problems.
      </h1>
      <IconCircle
        className="col-start-2 col-end-3 row-start-1 row-end-3 m-auto "
        radiusInPixels={200}
        itemSizeInPixels={40}
      />

      <SkillSection
        title="Machine Learning"
        skills={mlskills}
        className="col-start-1 col-end-2 row-start-2 row-end-3 "
        align="text-left"
      />
      <SkillSection
        title="Data, Cloud and Infra"
        skills={dataskills}
        className="col-start-1 col-end-2 row-start-3 row-end-4 "
        align="text-left"
      />
      <SkillSection
        title="Full Stack Dev"
        skills={fullstackskills}
        className="col-start-2 col-end-3 row-start-3 row-end-4 "
        align="text-left"
      />
    </div>
  );
}

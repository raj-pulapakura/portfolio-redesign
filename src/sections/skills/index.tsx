import Profile from "@/shared/Profile";
import React from "react";
import SkillSection from "./components/SkillSection";
import { dataskills, fullstackskills, mlskills } from "@/data/skills";

export default function Skills() {
  return (
    <section>
      <Profile />
      <h1 className="font-bold text-2xl m-10 text-center">
        I love solving problems using Machine Learning and Full Stack
        technologies.
      </h1>
      <SkillSection
        title="Machine Learning"
        skills={mlskills}
        className="mb-10"
      />
      <SkillSection
        title="Data, Cloud and Infra"
        skills={dataskills}
        className="mb-10"
      />
      <SkillSection title="Full Stack Dev" skills={fullstackskills} />
    </section>
  );
}

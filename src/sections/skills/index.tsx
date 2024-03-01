import Profile from "@/shared/Profile";
import React from "react";
import SkillSection from "./components/SkillSection";
import { dataskills, fullstackskills, mlskills } from "@/data/skills";
import { rockSalt } from "@/app/layout";

export default function Skills() {
  return (
    <section>
      <Profile />
      <h1 className={`${rockSalt.className} text-5xl text-center mt-16 mb-16`}>
        SKILLS
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
      <SkillSection
        title="Full Stack Dev"
        skills={fullstackskills}
        className="mb-10"
      />
    </section>
  );
}

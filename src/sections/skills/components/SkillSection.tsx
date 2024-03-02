import Chip from "@/shared/Chip";
import React from "react";

export type SkillSectionProps = JSX.IntrinsicElements["div"] & {
  title: string;
  skills: string[];
  align?: string;
};

export default function SkillSection({
  title,
  skills,
  align = "text-center",
  className,
}: SkillSectionProps) {
  return (
    <div className={`${className}`}>
      <h1
        className={`${align} tracking-widest uppercase text-blue-600 font-bold mb-4`}
      >
        {title}
      </h1>
      <div className={align}>
        {skills.map((skill) => (
          <Chip>{skill}</Chip>
        ))}
      </div>
    </div>
  );
}

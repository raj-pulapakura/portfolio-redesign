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
    <div className={`h-fit ${className}`}>
      <h1
        className={`${align} tracking-widest uppercase text-blue-600 font-bold mb-4`}
      >
        {title}
      </h1>
      <div className={align}>
        {skills.map((skill) => (
          <Chip className="text-md lg:text-lg xl:text-xl 2xl:text-2xl mb-1 mr-1 xl:mb-2 xl:mr-2">
            {skill}
          </Chip>
        ))}
      </div>
    </div>
  );
}

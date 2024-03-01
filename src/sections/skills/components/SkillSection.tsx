import React from "react";

export type SkillSectionProps = JSX.IntrinsicElements["div"] & {
  title: string;
  skills: string[];
};

export default function SkillSection({
  title,
  skills,
  className,
}: SkillSectionProps) {
  return (
    <div className={`${className}`}>
      <h1 className="text-center tracking-widest uppercase text-blue-600 font-bold mb-4">
        {title}
      </h1>
      <div className="text-center">
        {skills.map((skill) => (
          <div className="inline-block border-2 border-blue-600 text-blue-600 py-1 px-3 w-fit rounded-full mr-1 mb-1">
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
}

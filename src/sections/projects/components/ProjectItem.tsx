import { ProjectDataPoint } from "@/data/projects";
import PaddedFlexContainer from "@/shared/PaddedFlexContainer";
import Chip from "@/shared/Chip";
import React from "react";

export default function ProjectItem({
  projectDataPoint: pdp,
}: {
  projectDataPoint: ProjectDataPoint;
}) {
  return (
    <div className="bg-white rounded-lg h-full">
      <img
        className="rounded-t-lg w-full object-cover"
        src={pdp.thumbnailURL}
      />
      <PaddedFlexContainer>
        <h1 className="text-md xl:text-lg 2xl:text-xl font-bold mb-2 lg:mb-4">
          {pdp.title}
        </h1>
        <p className="text-md xl:text-lg mb-5 lg:mb-7">{pdp.description}</p>
        <div>
          {pdp.technologiesUsed.map((tech) => (
            <Chip
              key={tech}
              className="text-xs lg:text-sm mb-1 mr-1 lg:mb-2 lg:mr-2 lg:border-2"
            >
              {tech}
            </Chip>
          ))}
        </div>
      </PaddedFlexContainer>
    </div>
  );
}

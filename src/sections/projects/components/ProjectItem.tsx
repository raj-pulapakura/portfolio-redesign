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
        <h1 className="text-md md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-bold">
          {pdp.title}
        </h1>
        <p className="text-sm md:text-md lg:text-lg xl:text-xl 2xl:text-2xl mb-1">
          {pdp.description}
        </p>
        <div>
          {pdp.technologiesUsed.map((tech) => (
            <Chip className="text-sm md:text-md lg:text-lg xl:text-xl 2xl:text-2xl mb-1 mr-1 md:mb-2 md:mr-2 lg:mb-4 lg:mr-4 lg:border-2">
              {tech}
            </Chip>
          ))}
        </div>
      </PaddedFlexContainer>
    </div>
  );
}

import { ProjectDataPoint } from "@/data/projects";
import Chip from "@/shared/Chip";
import React from "react";

export default function ProjectItem({
  projectDataPoint: pdp,
}: {
  projectDataPoint: ProjectDataPoint;
}) {
  return (
    <div className="bg-white rounded-lg h-full overflow-scroll">
      <img
        className="rounded-t-lg h-1/2 w-full object-cover"
        src={pdp.thumbnailURL}
      />
      <div className="px-5 py-7">
        <h1 className="text-md font-bold mb-2">{pdp.title}</h1>
        <p className="text-sm mb-3">{pdp.description}</p>
        {pdp.technologiesUsed.map((tech) => (
          <Chip className="text-xs">{tech}</Chip>
        ))}
      </div>
    </div>
  );
}

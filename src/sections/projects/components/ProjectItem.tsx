import { ProjectDataPoint } from "@/data/projects";
import Chip from "@/shared/Chip";
import React from "react";

export default function ProjectItem({
  projectDataPoint: pdp,
}: {
  projectDataPoint: ProjectDataPoint;
}) {
  return (
    <div className="bg-white rounded-lg">
      <img className="rounded-t-lg" src={pdp.thumbnailURL} />
      <div className="p-5">
        <div
          style={{ height: "0.1rem" }}
          className="w-full bg-gray-500 mb-3"
        ></div>
        <h1 className="text-md font-bold mb-2">{pdp.title}</h1>
        <p className="text-sm mb-3">{pdp.description}</p>
        {pdp.technologiesUsed.map((tech) => (
          <Chip className="text-xs">{tech}</Chip>
        ))}
      </div>
    </div>
  );
}

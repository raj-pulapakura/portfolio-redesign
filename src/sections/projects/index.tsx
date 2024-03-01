import { rockSalt } from "@/app/layout";
import { projectsData } from "@/data/projects";
import React from "react";
import ProjectItem from "./components/ProjectItem";
import EmblaCarousel from "@/shared/EmblaCarousel";
import EmblaCarouselItem from "@/shared/EmblaCarouselItem";

export default function Projects() {
  return (
    <div className="bg-lime-400 pt-10 pb-10">
      <h1 className={`${rockSalt.className} text-5xl text-center mb-10`}>
        PROJECTS
      </h1>
      <EmblaCarousel>
        {projectsData.map((pdp) => (
          <EmblaCarouselItem key={pdp.description}>
            <ProjectItem projectDataPoint={pdp} />
          </EmblaCarouselItem>
        ))}
      </EmblaCarousel>
    </div>
  );
}

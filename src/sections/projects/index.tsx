import { rockSalt } from "@/app/layout";
import { projectsData } from "@/data/projects";
import React from "react";
import ProjectItem from "./components/ProjectItem";
import EmblaCarousel from "@/shared/EmblaCarousel";
import EmblaCarouselItem from "@/shared/EmblaCarouselItem";

export default function Projects() {
  return (
    <div className="bg-lime-400 px-4 md:px-10 lg:px-14 xl:px-16 2xl:px-20 py-20 md:py-24 lg:py-28 xl:py-32">
      <div className="flex justify-center md:justify-between items-baseline mb-16 md:mb-18 lg:mb-20 xl:mb-24">
        <h1
          className={`${rockSalt.className} text-5xl lg:text-5xl 2xl:text-7xl text-center md:text-left `}
        >
          PROJECTS
        </h1>
        <p className="hidden md:block font-bold text-2xl lg:text-3xl 3xl:text-4xl">
          I like building cool stuff.
        </p>
      </div>
      <EmblaCarousel className="visible md:hidden">
        {projectsData.map((pdp) => (
          <EmblaCarouselItem key={pdp.description}>
            <ProjectItem projectDataPoint={pdp} />
          </EmblaCarouselItem>
        ))}
      </EmblaCarousel>
      <EmblaCarousel className="hidden md:block lg:hidden">
        {projectsData.map((pdp) => (
          <EmblaCarouselItem itemPctWidth="50%" key={pdp.description}>
            <ProjectItem projectDataPoint={pdp} />
          </EmblaCarouselItem>
        ))}
      </EmblaCarousel>
      <EmblaCarousel className="hidden lg:block 2xl:hidden">
        {projectsData.map((pdp) => (
          <EmblaCarouselItem itemPctWidth="33.33%" key={pdp.description}>
            <ProjectItem projectDataPoint={pdp} />
          </EmblaCarouselItem>
        ))}
      </EmblaCarousel>
      <EmblaCarousel className="hidden 2xl:block">
        {projectsData.map((pdp) => (
          <EmblaCarouselItem itemPctWidth="25%" key={pdp.description}>
            <ProjectItem projectDataPoint={pdp} />
          </EmblaCarouselItem>
        ))}
      </EmblaCarousel>
    </div>
  );
}

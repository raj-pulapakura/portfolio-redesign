import { rockSalt } from "@/app/fonts";
import { projectsData } from "@/data/projects";
import React from "react";
import ProjectItem from "./components/ProjectItem";
import EmblaCarousel from "@/shared/EmblaCarousel";
import EmblaCarouselItem from "@/shared/EmblaCarouselItem";
import PaddedContainer from "@/shared/PaddedContainer";
import TitleSubtitleFlex from "@/shared/TitleSubtitleFlex";

export default function Projects() {
  return (
    <PaddedContainer className="bg-lime-400">
      <TitleSubtitleFlex
        title="PROJECTS"
        subtitle="I like building cool shit."
      />
      <EmblaCarousel className="visible md:hidden">
        {projectsData.map((pdp) => (
          <EmblaCarouselItem key={pdp.description}>
            <ProjectItem projectDataPoint={pdp} />
          </EmblaCarouselItem>
        ))}
      </EmblaCarousel>
      <EmblaCarousel className="hidden md:block xl:hidden">
        {projectsData.map((pdp) => (
          <EmblaCarouselItem itemPctWidth="50%" key={pdp.description}>
            <ProjectItem projectDataPoint={pdp} />
          </EmblaCarouselItem>
        ))}
      </EmblaCarousel>
      <EmblaCarousel className="hidden xl:block 2xl:hidden">
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
    </PaddedContainer>
  );
}

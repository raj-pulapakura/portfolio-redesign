import { projectsData } from '../../data/projects';
import EmblaCarousel from '../../shared/carousel/EmblaCarousel';
import EmblaCarouselItem from '../../shared/carousel/EmblaCarouselItem';
import PaddedContainer from '../../shared/containers/PaddedContainer';
import TitleSubtitleFlex from '../../shared/containers/TitleSubtitleFlex';
import ProjectItem from './components/ProjectItem';

export default function Projects() {
  return (
    <PaddedContainer className="bg-background">
      <TitleSubtitleFlex
        title="PROJECTS"
        subtitle="I like building cool stuff."
        className="text-white"
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
      <EmblaCarousel className="hidden xl:block">
        {projectsData.map((pdp) => (
          <EmblaCarouselItem itemPctWidth="33.33%" key={pdp.description}>
            <ProjectItem projectDataPoint={pdp} />
          </EmblaCarouselItem>
        ))}
      </EmblaCarousel>
    </PaddedContainer>
  );
}

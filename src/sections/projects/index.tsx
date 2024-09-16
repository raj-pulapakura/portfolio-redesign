import { projectsData } from '../../data/projects';
import EmblaCarousel from '../../shared/carousel/EmblaCarousel';
import EmblaCarouselItem from '../../shared/carousel/EmblaCarouselItem';
import PaddedContainer from '../../shared/containers/PaddedContainer';
import TitleSubtitleFlex from '../../shared/containers/TitleSubtitleFlex';
import ProjectItem from './components/ProjectItem';

export default function Projects() {
  return (
    <PaddedContainer className="bg-background">
      <div id="projects" className="w-full h-20"></div>

      <TitleSubtitleFlex
        title="PROJECTS"
        subtitle="I like building cool stuff."
        className="text-white"
      />

      <div className="w-10/12 mx-auto">
        <EmblaCarousel>
          {projectsData.map((pdp) => (
            <EmblaCarouselItem key={pdp.description}>
              <ProjectItem projectDataPoint={pdp} />
            </EmblaCarouselItem>
          ))}
        </EmblaCarousel>
      </div>
    </PaddedContainer>
  );
}

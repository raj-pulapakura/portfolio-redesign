import { faCode } from '@fortawesome/free-solid-svg-icons';
import { projectsData } from '../../data/projects';
import EmblaCarousel from '../../shared/carousel/EmblaCarousel';
import TitleSubtitleFlex from '../../shared/containers/TitleSubtitleFlex';
import ProjectItem from './components/ProjectItem';

export default function Projects() {
  return (
    <div className="bg-background py-20">
      <div id="projects" className="w-full h-20"></div>

      <TitleSubtitleFlex
        title="PROJECTS"
        subtitle="I like building cool stuff."
        icon={faCode}
      />

      <div className="w-full lg:w-10/12 mx-auto">
        <EmblaCarousel buttonClassName="text-blue-900">
          {projectsData.map((pdp) => (
            // <EmblaCarouselItem key={pdp.description}>
            <ProjectItem projectDataPoint={pdp} />
            // </EmblaCarouselItem>
          ))}
        </EmblaCarousel>
      </div>
    </div>
  );
}

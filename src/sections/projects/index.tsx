import { projectsData } from '../../data/projects';
import SectionShell from '../../shared/primitives/SectionShell';
import AccentDivider from '../../shared/primitives/AccentDivider';
import ProjectItem from './components/ProjectItem';

export default function Projects() {
  return (
    <SectionShell id="projects" className="py-24">
      <div className="space-y-12">
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-[0.6em] text-secondary">
            Projects
          </p>
          <h2 className="text-3xl sm:text-4xl font-semibold text-primary">
            I like building cool stuff.
          </h2>
          <p className="text-secondary max-w-2xl">
            A sample of AI products, research tools, and full-stack systems
            shipped end-to-end.
          </p>
        </div>

        <AccentDivider />

        <div className="grid gap-8 md:grid-cols-2">
          {projectsData.map((pdp) => (
            <ProjectItem key={pdp.title} projectDataPoint={pdp} />
          ))}
        </div>
      </div>
    </SectionShell>
  );
}

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
            Case Studies
          </p>
          <h2 className="text-3xl sm:text-4xl font-semibold text-primary">
            Production AI and software systems I&apos;ve shipped.
          </h2>
          <p className="text-secondary max-w-2xl">
            Selected projects focused on measurable outcomes, architecture
            tradeoffs, and end-to-end execution.
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

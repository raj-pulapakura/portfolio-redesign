'use client';

import SectionShell from '../../shared/primitives/SectionShell';
import StatCard from '../../shared/primitives/StatCard';
import AccentDivider from '../../shared/primitives/AccentDivider';
import Chip from '../../shared/ui/Chip';
import {
  dataskills,
  fullstackskills,
  mlskills,
} from '../../data/skills';
import { technologies } from '../../data/technologies';
import { projectsData } from '../../data/projects';
import { articlesData } from '../../data/articles';

const skillGroups = [
  { title: 'AI & Machine Learning', items: mlskills },
  { title: 'Full Stack Dev', items: fullstackskills },
  { title: 'Data, Cloud & Infra', items: dataskills },
];

const certificationPaths = [
  'certifications/aws-machine-learning-specialty.png',
  'certifications/azure-ai-engineer-associate.png',
  'certifications/azure-ai-fundamentals.png',
  'certifications/azure-fundamentals.png',
  'certifications/tensorflow-developer-certificate.png',
];

const uniqueSkills = new Set([
  ...mlskills,
  ...fullstackskills,
  ...dataskills,
]);

const stats = [
  {
    label: 'PROJECTS SHIPPED',
    value: projectsData.length,
    helper: 'End-to-end builds',
  },
  {
    label: 'ARTICLES PUBLISHED',
    value: articlesData.length,
    helper: 'Long-form deep dives',
  },
  {
    label: 'TOOLS MASTERED',
    value: uniqueSkills.size,
    helper: 'Across ML + product',
  },
];

export default function Skills() {
  return (
    <SectionShell
      id="skills"
      backgroundClassName="bg-surface"
      className="py-24"
    >
      <div className="space-y-12">
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-[0.6em] text-secondary">
            Skills & Highlights
          </p>
          <h2 className="text-3xl sm:text-4xl font-semibold text-primary">
            Hands-on across ML, product, and scalable infra.
          </h2>
          <p className="text-secondary max-w-2xl">
            From foundation models to production web apps, here’s the toolkit
            powering every build.
          </p>
        </div>

        <div className="grid gap-8 xl:grid-cols-[3fr_2fr]">
          <div className="glass-panel accent-outline rounded-[32px] p-6 md:p-8 space-y-8">
            {skillGroups.map((group) => (
              <div key={group.title} className="space-y-3">
                <p className="text-xs uppercase tracking-[0.5em] text-secondary">
                  {group.title}
                </p>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <Chip key={skill} className="text-[0.65rem]">
                      {skill}
                    </Chip>
                  ))}
                </div>
              </div>
            ))}

            <AccentDivider />

            <div className="space-y-3">
              <p className="text-xs uppercase tracking-[0.5em] text-secondary">
                Tooling Matrix
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {technologies.map((tech) => (
                  <Chip key={tech} className="justify-center text-[0.6rem]">
                    {tech}
                  </Chip>
                ))}
              </div>
            </div>
          </div>

          <div className="glass-panel accent-outline rounded-[32px] p-6 md:p-8 flex flex-col gap-6">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.5em] text-secondary">
                  Certifications
                </p>
                <p className="text-lg font-semibold text-primary">
                  AWS, Azure, TensorFlow
                </p>
              </div>
              <span className="text-xs uppercase tracking-[0.4em] text-accent">
                Verified
              </span>
            </div>
            <div className="flex gap-4 overflow-x-auto no-scrollbar pb-2">
              {certificationPaths.map((path) => (
                <div
                  key={path}
                  className="min-w-[140px] rounded-2xl border border-white/5 bg-muted/60 p-3"
                >
                  <img
                    src={path}
                    alt="Certification badge"
                    className="w-full object-contain"
                  />
                </div>
              ))}
            </div>
            <p className="text-sm text-secondary">
              AWS Machine Learning Specialty, Azure AI Engineer Associate, and
              TensorFlow Developer credentials keep the craft accountable.
            </p>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {stats.map((stat) => (
            <StatCard key={stat.label} {...stat} />
          ))}
        </div>
      </div>
    </SectionShell>
  );
}

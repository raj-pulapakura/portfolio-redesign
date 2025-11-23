'use client';

import { motion } from 'framer-motion';
import { timelineData } from '../../data/timeline';
import SectionShell from '../../shared/primitives/SectionShell';
import AccentDivider from '../../shared/primitives/AccentDivider';
import Chip from '../../shared/ui/Chip';

export default function Journey() {
  return (
    <SectionShell id="journey" className="py-24">
      <div className="space-y-12">
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-[0.6em] text-secondary">
            Journey
          </p>
          <h2 className="text-3xl sm:text-4xl font-semibold text-primary max-w-3xl">
            From first lines of code to shipping AI products.
          </h2>
          <p className="text-secondary max-w-2xl">
            Each chapter builds on the last — internships, hackathons, and
            full-time work shaping the craft.
          </p>
        </div>

        <AccentDivider />

        <div className="relative">
          <div className="hidden sm:block absolute left-4 top-0 bottom-0">
            <div className="w-px h-full bg-border" />
          </div>
          <div className="space-y-10">
            {timelineData.map((entry, index) => (
              <motion.article
                key={`${entry.date}-${entry.title}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: index * 0.03 }}
                className="relative pl-8 sm:pl-16"
              >
                <div className="hidden sm:flex absolute -left-[7px] top-4 h-3 w-3 rounded-full border border-accent bg-background" />
                <div className="glass-panel rounded-3xl border border-white/5 p-6 lg:p-8 space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <p className="text-xs uppercase tracking-[0.5em] text-secondary">
                      {entry.date}
                    </p>
                    <div className="text-[10px] uppercase tracking-[0.5em] text-secondary/70">
                      Node {index + 1}
                    </div>
                  </div>
                  <h3 className="text-2xl font-semibold text-primary">
                    {entry.title}
                  </h3>
                  <div className="text-secondary text-sm leading-relaxed space-y-4">
                    {typeof entry.extraInformation === 'string'
                      ? entry.extraInformation
                      : entry.extraInformation}
                  </div>
                  {entry.technologies && entry.technologies.length > 0 && (
                    <div className="flex flex-wrap gap-2 pt-2">
                      {entry.technologies.map((tech) => (
                        <Chip key={`${entry.title}-${tech}`} className="text-[0.6rem]">
                          {tech}
                        </Chip>
                      ))}
                    </div>
                  )}
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </SectionShell>
  );
}

// Legacy exports retained for backward compatibility with unused timeline components.
export const timelineItemColours = ['bg-accent'];
export const numColors = timelineItemColours.length;

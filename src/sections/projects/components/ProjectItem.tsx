import { faGithub, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ProjectDataPoint } from '../../../data/projects';
import Chip from '../../../shared/ui/Chip';
import { motion } from 'framer-motion';

export default function ProjectItem({
  projectDataPoint: pdp,
}: {
  projectDataPoint: ProjectDataPoint;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      className="glass-panel accent-outline rounded-[32px] overflow-hidden flex flex-col"
    >
      <div className="relative aspect-video overflow-hidden">
        <img
          src={pdp.thumbnailURL}
          alt={pdp.title}
          className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
        />
        <div className="absolute top-4 left-4 rounded-full bg-background/80 px-4 py-1 text-[10px] uppercase tracking-[0.5em] text-secondary">
          {pdp.tags[0] || 'Project'}
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-5 p-6 lg:p-8">
        <div className="space-y-2">
          <p className="text-xs uppercase tracking-[0.4em] text-secondary">
            {pdp.tags.slice(0, 3).join(' • ')}
          </p>
          <h3 className="text-2xl font-semibold text-primary">{pdp.title}</h3>
          <p className="text-secondary text-sm leading-relaxed">
            {pdp.description}
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {pdp.technologiesUsed.map((tech) => (
            <Chip key={`${pdp.title}-${tech}`} className="text-[0.6rem]">
              {tech}
            </Chip>
          ))}
        </div>

        <div className="mt-auto flex items-center justify-between">
          <span className="text-xs uppercase tracking-[0.4em] text-secondary">
            STACK
          </span>
          <div className="flex items-center gap-3">
            {pdp.webURL && (
              <a
                href={pdp.webURL}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/10 p-2 text-secondary transition hover:border-accent hover:text-primary"
                aria-label="View live site"
              >
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
              </a>
            )}
            {pdp.githubURL && (
              <a
                href={pdp.githubURL}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/10 p-2 text-secondary transition hover:border-accent hover:text-primary"
                aria-label="View source on GitHub"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
            )}
            {pdp.videoURL && (
              <a
                href={pdp.videoURL}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/10 p-2 text-secondary transition hover:border-accent hover:text-primary"
                aria-label="Watch demo video"
              >
                <FontAwesomeIcon icon={faYoutube} />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  );
}

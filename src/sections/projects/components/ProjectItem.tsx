import { faGithub, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import IconLink from './IconLink';
import { ProjectDataPoint } from '../../../data/projects';
import Chip from '../../../shared/ui/Chip';
import { useRef } from 'react';
import { motion } from 'framer-motion';

export default function ProjectItem({
  projectDataPoint: pdp,
}: {
  projectDataPoint: ProjectDataPoint;
}) {
  const boundingRef = useRef<DOMRect | null>(null);

  return (
    <div className="flex flex-col lg:flex-row gap-0 lg:gap-10 grow-0 shrink-0 basis-full p-10 lg:p-20">
      <div className="h-full w-full lg:w-2/3 z-50">
        <motion.img
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.25, ease: 'easeInOut' }}
          onMouseLeave={() => (boundingRef.current = null)}
          onMouseEnter={(ev) => {
            boundingRef.current = ev.currentTarget.getBoundingClientRect();
          }}
          className="rounded-t-lg lg:rounded-lg shadow-2xl w-full h-full object-cover hover:[transform:rotateX(var(--x-rotation))_rotateY(var(--y-rotation))_scale(1.05)] transition-transform ease-in-out duration-75"
          src={pdp.thumbnailURL}
        />
      </div>
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.25, ease: 'easeInOut' }}
        className="h-full w-full lg:w-1/3 p-10 bg-primary shadow-2xl rounded-b-lg lg:rounded-lg"
      >
        <h1 className="text-white font-sans text-lg xl:text-xl 2xl:text-2xl font-bold mb-2 lg:mb-4">
          {pdp.title}
        </h1>
        <p className="text-white font-sans text-md xl:text-lg mb-5 lg:mb-7">
          {pdp.description}
        </p>
        <div className="mb-5 lg:mb-7">
          {pdp.technologiesUsed.map((tech) => (
            <Chip
              key={tech}
              className="border-none bg-white text-xs lg:text-sm mb-1 mr-1 lg:mb-2 lg:mr-2 lg:border-2"
            >
              {tech}
            </Chip>
          ))}
        </div>
        <div className="flex gap-5">
          {pdp.githubURL && (
            <a href={pdp.githubURL}>
              <IconLink icon={faGithub} />
            </a>
          )}
          {pdp.webURL && (
            <a href={pdp.webURL}>
              <IconLink icon={faLink} />
            </a>
          )}
          {pdp.videoURL && (
            <a href={pdp.videoURL}>
              <IconLink icon={faYoutube} />
            </a>
          )}
        </div>
      </motion.div>
    </div>
  );
}

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faLinkedin,
  faMedium,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import { faArrowDownLong, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { motion, MotionProps } from 'framer-motion';
import SectionShell from '../../shared/primitives/SectionShell';
import AccentDivider from '../../shared/primitives/AccentDivider';

export interface RegularBlockProps {
  initial: MotionProps['initial'];
  animate: MotionProps['animate'];
  transition?: MotionProps['transition'];
}

const navLinks = [
  { label: '/ SKILLS', target: 'skills' },
  { label: '/ JOURNEY', target: 'journey' },
  { label: '/ PROJECTS', target: 'projects' },
  { label: '/ ARTICLES', target: 'articles' },
];

const socialLinks = [
  {
    label: 'LinkedIn',
    icon: faLinkedin,
    url: 'https://www.linkedin.com/in/rajpulapakura/',
  },
  {
    label: 'YouTube',
    icon: faYoutube,
    url: 'https://www.youtube.com/@rajpulapakura001',
  },
  {
    label: 'GitHub',
    icon: faGithub,
    url: 'https://github.com/raj-pulapakura',
  },
  {
    label: 'Medium',
    icon: faMedium,
    url: 'https://medium.com/@raj.pulapakura',
  },
];

const titleLines = ['AI /', 'Software', 'Engineer'];

const heroMotion = {
  initial: { opacity: 0, y: 32 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, ease: 'easeOut' },
};

const secondaryMotion = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: 'easeOut', delay: 0.2 },
};

const scrollTo = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
};

export default function Intro() {
  return (
    <SectionShell
      id="home"
      className="pt-32 pb-16 lg:pt-40 lg:pb-24 overflow-hidden"
    >
      <div className="grid gap-10 lg:gap-16 items-stretch lg:grid-cols-[3fr_2fr]">
        <motion.div
          {...heroMotion}
          className="flex flex-col justify-center gap-8"
        >
          <p className="text-xs uppercase tracking-[0.6em] text-secondary">
            Raj Pulapakura
          </p>
          <div className="space-y-2">
            {titleLines.map((line) => (
              <h1
                key={line}
                className="text-4xl sm:text-5xl md:text-6xl font-semibold leading-[1.05] text-primary"
              >
                {line}
              </h1>
            ))}
          </div>
          <p className="text-lg text-secondary font-medium">
            Currently working @ Time Under Tension
          </p>
          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => scrollTo('projects')}
              className="rounded-full border border-accent/60 bg-accent/10 px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary transition hover:bg-accent/20"
            >
              / PROJECTS
            </button>
            <button
              onClick={() => scrollTo('articles')}
              className="rounded-full border border-secondary/40 px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-secondary transition hover:text-primary hover:border-accent/60"
            >
              / ARTICLES
            </button>
          </div>
          <AccentDivider className="my-6" />
          <div className="flex flex-wrap gap-4 text-sm text-secondary uppercase tracking-[0.3em]">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => scrollTo(link.target)}
                className="rounded-full border border-transparent px-4 py-2 transition hover:border-accent/60 hover:text-primary"
              >
                {link.label}
              </button>
            ))}
          </div>
        </motion.div>

        <motion.div
          {...secondaryMotion}
          className="glass-panel accent-outline rounded-[32px] p-6 md:p-8 flex flex-col gap-6"
        >
          <div className="relative rounded-3xl overflow-hidden bg-muted/60 border border-white/5 min-h-[320px] flex items-center justify-center">
            <img
              src="/photos/profile-no-bg.png"
              alt="Raj Pulapakura"
              className="w-full max-h-[360px] object-contain mix-blend-screen"
            />
            <span className="absolute top-4 right-4 rounded-full border border-secondary/50 bg-background/80 px-4 py-1 text-xs uppercase tracking-[0.4em] text-secondary">
              AVAILABLE
            </span>
          </div>

          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-secondary">
                Location
              </p>
              <p className="text-xl font-semibold text-primary">
                Melbourne, Australia
              </p>
            </div>
            <FontAwesomeIcon
              icon={faLocationDot}
              className="text-accent text-3xl"
            />
          </div>

          <AccentDivider />

          <div className="flex flex-wrap gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 rounded-full border border-white/5 px-4 py-2 text-sm text-secondary transition hover:border-accent hover:text-primary"
              >
                <FontAwesomeIcon icon={link.icon} />
                <span>{link.label}</span>
              </a>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="mt-12 flex items-center gap-4 text-xs uppercase tracking-[0.4em] text-secondary">
        <span>Scroll</span>
        <div className="h-px flex-1 bg-border" />
        <FontAwesomeIcon icon={faArrowDownLong} className="text-accent" />
      </div>

      <div className="hidden xl:flex flex-col items-center gap-6 absolute right-12 top-1/2 -translate-y-1/2">
        <span className="text-[10px] uppercase tracking-[0.6em] text-secondary">
          Navigate
        </span>
        {navLinks.map((link) => (
          <button
            key={`rail-${link.label}`}
            onClick={() => scrollTo(link.target)}
            className="group flex flex-col items-center gap-3 text-[10px] tracking-[0.4em] text-secondary transition hover:text-primary"
          >
            <span className="h-12 w-px bg-border group-hover:bg-accent" />
            <span className="h-3 w-3 rounded-full border border-secondary group-hover:border-accent group-hover:bg-accent/20" />
            <span>{link.label.replace('/', '').trim()}</span>
          </button>
        ))}
      </div>
    </SectionShell>
  );
}

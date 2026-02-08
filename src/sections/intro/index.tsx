import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faLinkedin,
  faMedium,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import {
  faArrowDownLong,
  faEnvelope,
  faFileArrowDown,
  faLocationDot,
} from '@fortawesome/free-solid-svg-icons';
import { motion, MotionProps } from 'framer-motion';
import SectionShell from '../../shared/primitives/SectionShell';
import AccentDivider from '../../shared/primitives/AccentDivider';
import { EMAIL, EMAIL_HREF, RESUME_URL } from '../../data/profile';

const navLinks = [
  { label: '/ PROJECTS', target: 'projects' },
  { label: '/ JOURNEY', target: 'journey' },
  { label: '/ SKILLS', target: 'skills' },
  { label: '/ CONTACT', target: 'contact' },
];

export interface RegularBlockProps {
  initial: MotionProps['initial'];
  animate: MotionProps['animate'];
  transition?: MotionProps['transition'];
}

const socialLinks = [
  {
    label: 'LinkedIn',
    icon: faLinkedin,
    url: 'https://www.linkedin.com/in/rajpulapakura/',
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
  {
    label: 'YouTube',
    icon: faYoutube,
    url: 'https://www.youtube.com/@rajpulapakura001',
  },
];

const overviewCards = [
  {
    title: 'Now',
    description: 'AI Engineer @ Synogize, building AI product and data solutions.',
    actionLabel: 'View Journey',
    actionType: 'scroll',
    actionTarget: 'journey',
  },
  {
    title: 'Recent',
    description:
      'PLATTII delivery, inference optimization, and enterprise data migration work.',
    actionLabel: 'View Case Studies',
    actionType: 'scroll',
    actionTarget: 'projects',
  },
  {
    title: 'Writing',
    description: 'Technical deep dives on ML systems, LLM apps, and engineering.',
    actionLabel: 'Read Articles',
    actionType: 'scroll',
    actionTarget: 'articles',
  },
  {
    title: 'Connect',
    description: 'Reach out on email or LinkedIn, or download the latest resume.',
    actionLabel: 'Go to Contact',
    actionType: 'scroll',
    actionTarget: 'contact',
  },
] as const;

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
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold leading-[1.05] text-primary">
              AI Engineer building production LLM and ML systems.
            </h1>
            <p className="text-lg text-secondary font-medium max-w-3xl">
              I design and ship full-stack AI products that reduce decision
              latency, improve compliance quality, and make complex workflows
              usable for non-technical teams.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <a
              href={RESUME_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-accent/60 bg-accent/10 px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary transition hover:bg-accent/20"
            >
              <FontAwesomeIcon icon={faFileArrowDown} />
              Resume
            </a>
            <button
              onClick={() => scrollTo('projects')}
              className="rounded-full border border-secondary/40 px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-secondary transition hover:text-primary hover:border-accent/60"
            >
              Case Studies
            </button>
            <button
              onClick={() => scrollTo('contact')}
              className="rounded-full border border-secondary/40 px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-secondary transition hover:text-primary hover:border-accent/60"
            >
              Contact
            </button>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {overviewCards.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-white/10 bg-muted/50 px-4 py-4 space-y-3"
              >
                <p className="text-sm uppercase tracking-[0.25em] text-secondary">
                  {item.title}
                </p>
                <p className="text-sm text-primary leading-relaxed">
                  {item.description}
                </p>
                <button
                  onClick={() => scrollTo(item.actionTarget)}
                  className="text-xs uppercase tracking-[0.2em] text-accent transition hover:text-primary"
                >
                  {item.actionLabel}
                </button>
              </div>
            ))}
          </div>

          <AccentDivider className="my-2" />
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
              src="/photos/profile.png"
              alt="Raj Pulapakura"
              className="w-full max-h-[360px] object-contain"
            />
            <span className="absolute top-4 right-4 rounded-full border border-secondary/50 bg-background/80 px-4 py-1 text-xs uppercase tracking-[0.4em] text-secondary">
              AI + SOFTWARE ENGINEERING
            </span>
          </div>

          <div className="space-y-4">
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
            <a
              href={EMAIL_HREF}
              className="inline-flex items-center gap-2 text-sm text-secondary transition hover:text-primary"
            >
              <FontAwesomeIcon icon={faEnvelope} className="text-accent" />
              {EMAIL}
            </a>
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
    </SectionShell>
  );
}

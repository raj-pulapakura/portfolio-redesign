import {
  faGithub,
  faLinkedin,
  faMedium,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import { faArrowUp, faEnvelope, faFileArrowDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SectionShell from '../../shared/primitives/SectionShell';
import AccentDivider from '../../shared/primitives/AccentDivider';
import { EMAIL, EMAIL_HREF, RESUME_URL } from '../../data/profile';

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

const scrollToTop = () =>
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });

export default function Outro() {
  return (
    <SectionShell
      id="contact"
      backgroundClassName="bg-surface"
      className="py-24"
    >
      <div className="space-y-10 text-center">
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-[0.6em] text-secondary">
            Contact
          </p>
          <h2 className="text-4xl font-semibold text-primary">LET&apos;S CONNECT</h2>
          <p className="text-secondary max-w-2xl mx-auto">
            Based in Melbourne and building across AI and software engineering.
            I usually respond within 24 hours.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.url}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 rounded-full border border-white/10 px-5 py-3 text-sm uppercase tracking-[0.3em] text-secondary transition hover:border-accent hover:text-primary"
            >
              <FontAwesomeIcon icon={link.icon} />
              <span>{link.label}</span>
            </a>
          ))}
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href={RESUME_URL}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-accent bg-accent/10 px-8 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-primary transition hover:bg-accent/20"
          >
            <span className="inline-flex items-center gap-2">
              <FontAwesomeIcon icon={faFileArrowDown} />
              Download Resume
            </span>
          </a>
          <a
            href={EMAIL_HREF}
            className="rounded-full border border-white/10 px-6 py-3 text-sm uppercase tracking-[0.3em] text-secondary transition hover:border-accent hover:text-primary"
          >
            <span className="inline-flex items-center gap-2">
              <FontAwesomeIcon icon={faEnvelope} />
              {EMAIL}
            </span>
          </a>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 rounded-full border border-white/10 px-6 py-3 text-sm uppercase tracking-[0.3em] text-secondary transition hover:border-accent hover:text-primary"
          >
            Back to top
            <FontAwesomeIcon icon={faArrowUp} />
          </button>
        </div>

        <AccentDivider />

        <p className="text-xs uppercase tracking-[0.4em] text-secondary">
          © {new Date().getFullYear()} Raj Pulapakura
        </p>
      </div>
    </SectionShell>
  );
}

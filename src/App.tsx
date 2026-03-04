import {
  type CSSProperties,
  type MouseEvent as ReactMouseEvent,
  useEffect,
  useRef,
  useState,
} from 'react';
import { articlesData } from './data/articles';
import { projectsData } from './data/projects';
import { EMAIL, EMAIL_HREF, RESUME_URL } from './data/profile';
import { dataskills, fullstackskills, mlskills } from './data/skills';

type ProjectMeta = {
  role: string;
  year: string;
};

type ProjectVisualAsset = {
  src: string;
  alt: string;
};

type ExperienceItem = {
  date: string;
  title: string;
  details: string;
};

type PhotoWheelItem = {
  src: string;
  size: 'small' | 'medium' | 'large';
  x: number;
  y: number;
  rotation: number;
  depth: number;
};

const navItems = [
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Capabilities', href: '#capabilities' },
  { label: 'Writing', href: '#writing' },
  { label: 'Contact', href: '#contact' },
];

const projectMeta: ProjectMeta[] = [
  { role: 'AI Engineer', year: '2024' },
  { role: 'ML Systems Engineer', year: '2024' },
  { role: 'Full-Stack Engineer', year: '2023' },
];

const projectVisualAssets: ProjectVisualAsset[] = [
  {
    src: '/projects/clarityscan-hero.png',
    alt: 'ClarityScan project interface preview',
  },
  {
    src: '/projects/image-search-hero.png',
    alt: 'Computer vision image search interface preview',
  },
  {
    src: '/projects/dino-hero.gif',
    alt: 'Gesture detection Dino game animated preview',
  },
];

const experience: ExperienceItem[] = [
  {
    date: '2021',
    title: 'Started building software systems',
    details:
      'Began with Python and small automation projects, then moved quickly into data and machine learning workflows.',
  },
  {
    date: '2024',
    title: 'Internship at A.I.GORITHM',
    details:
      'Built geospatial reporting workflows for agritech clients using Python pipelines, cloud infrastructure, and a Next.js interface.',
  },
  {
    date: '2024',
    title: 'Software Engineer at Time Under Tension',
    details:
      'Delivered client-facing AI applications in legal, retail, and aged care domains with measurable improvements in response time and compliance quality.',
  },
  {
    date: '2025',
    title: 'AI Engineer at Synogize',
    details:
      'Focused on enterprise AI product delivery, data modeling, and performance optimization for Snowflake-integrated solutions.',
  },
];

const socialLinks = [
  { label: 'GitHub', href: 'https://github.com/raj-pulapakura' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/rajpulapakura/' },
  { label: 'Medium', href: 'https://medium.com/@raj.pulapakura' },
  { label: 'YouTube', href: 'https://www.youtube.com/@rajpulapakura001' },
];

const capabilityGroups = [
  {
    title: 'Machine Learning & AI',
    items: mlskills.slice(0, 12),
  },
  {
    title: 'Platform & Data',
    items: dataskills.slice(0, 12),
  },
  {
    title: 'Product Engineering',
    items: fullstackskills.slice(0, 12),
  },
];

const featuredProjects = projectsData.slice(0, 3).map((project, index) => {
  const meta = projectMeta[index] ?? { role: 'Software Engineer', year: '2024' };
  const visualAsset = projectVisualAssets[index];

  return {
    index: String(index + 1).padStart(2, '0'),
    title: project.title,
    description: project.description,
    role: meta.role,
    year: meta.year,
    technologies: project.technologiesUsed.slice(0, 5),
    approach: `Built with ${project.technologiesUsed.slice(0, 4).join(', ')} to keep delivery practical and production-oriented.`,
    result:
      project.impactHighlights[0] ??
      'Shipped a measurable end-to-end solution with clear technical ownership.',
    githubURL: project.githubURL,
    liveURL: project.webURL,
    visualAsset,
  };
});

const latestArticles = articlesData.slice(0, 6);
const photoWheelItems: PhotoWheelItem[] = [
  {
    src: '/photographs/portrait.png',
    size: 'large',
    x: 18,
    y: 24,
    rotation: -8,
    depth: 0.82,
  },
  {
    src: '/photographs/deakin.png',
    size: 'medium',
    x: 39,
    y: 18,
    rotation: 5,
    depth: 0.58,
  },
  {
    src: '/photographs/monster-energy.png',
    size: 'small',
    x: 62,
    y: 17,
    rotation: -4,
    depth: 0.47,
  },
  {
    src: '/photographs/ramen.png',
    size: 'large',
    x: 82,
    y: 28,
    rotation: 8,
    depth: 0.72,
  },
  {
    src: '/photographs/gym.png',
    size: 'medium',
    x: 22,
    y: 70,
    rotation: 6,
    depth: 0.66,
  },
  {
    src: '/photographs/mates.png',
    size: 'medium',
    x: 47,
    y: 74,
    rotation: -3,
    depth: 0.48,
  },
  {
    src: '/photographs/shellfish.png',
    size: 'medium',
    x: 77,
    y: 68,
    rotation: -7,
    depth: 0.96,
  },
];
const photoWheelCloseDurationMs = 760;

function App() {
  const [isPhotoWheelVisible, setIsPhotoWheelVisible] = useState(false);
  const [isPhotoWheelClosing, setIsPhotoWheelClosing] = useState(false);
  const photoWheelStageRef = useRef<HTMLDivElement | null>(null);
  const preloadedPhotoRefs = useRef<HTMLImageElement[]>([]);
  const pointerTargetRef = useRef({ x: 0, y: 0 });
  const pointerCurrentRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const preloadTimeoutId = window.setTimeout(() => {
      const uniquePhotoSources = [...new Set(photoWheelItems.map((item) => item.src))];

      preloadedPhotoRefs.current = uniquePhotoSources.map((src) => {
        const image = new Image();
        image.decoding = 'async';
        image.src = src;
        return image;
      });
    }, 180);

    return () => {
      window.clearTimeout(preloadTimeoutId);
      preloadedPhotoRefs.current = [];
    };
  }, []);

  const handleProfileHover = () => {
    if (isPhotoWheelVisible || isPhotoWheelClosing) {
      return;
    }

    if (!window.matchMedia('(min-width: 1024px)').matches) {
      return;
    }

    setIsPhotoWheelVisible(true);
  };

  const handleClosePhotoWheel = () => {
    if (!isPhotoWheelVisible || isPhotoWheelClosing) {
      return;
    }

    setIsPhotoWheelClosing(true);
  };

  const handlePhotoOverlayMouseDown = (event: ReactMouseEvent<HTMLElement>) => {
    if (!(event.target instanceof Element)) {
      handleClosePhotoWheel();
      return;
    }

    if (event.target.closest('.photo-wheel-card')) {
      return;
    }

    handleClosePhotoWheel();
  };

  useEffect(() => {
    if (!isPhotoWheelClosing) {
      return undefined;
    }

    const timeoutId = window.setTimeout(() => {
      setIsPhotoWheelVisible(false);
      setIsPhotoWheelClosing(false);
    }, photoWheelCloseDurationMs);

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [isPhotoWheelClosing]);

  useEffect(() => {
    if (!isPhotoWheelVisible) {
      return undefined;
    }

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [isPhotoWheelVisible]);

  useEffect(() => {
    if (!isPhotoWheelVisible) {
      return undefined;
    }

    const stage = photoWheelStageRef.current;
    if (!stage) {
      return undefined;
    }

    const updatePointerTarget = (clientX: number, clientY: number) => {
      const x = (clientX / window.innerWidth - 0.5) * 2;
      const y = (clientY / window.innerHeight - 0.5) * 2;
      pointerTargetRef.current = {
        x: Math.max(-1, Math.min(1, x)),
        y: Math.max(-1, Math.min(1, y)),
      };
    };

    const resetPointer = () => {
      pointerTargetRef.current = { x: 0, y: 0 };
    };

    const syncPointer = () => {
      const easing = 0.11;
      const nextX =
        pointerCurrentRef.current.x +
        (pointerTargetRef.current.x - pointerCurrentRef.current.x) * easing;
      const nextY =
        pointerCurrentRef.current.y +
        (pointerTargetRef.current.y - pointerCurrentRef.current.y) * easing;

      pointerCurrentRef.current = {
        x: nextX,
        y: nextY,
      };

      stage.style.setProperty('--pointer-x', `${nextX.toFixed(3)}`);
      stage.style.setProperty('--pointer-y', `${nextY.toFixed(3)}`);

      rafId = window.requestAnimationFrame(syncPointer);
    };

    let rafId = window.requestAnimationFrame(syncPointer);

    const handlePointerMove = (event: PointerEvent) => {
      updatePointerTarget(event.clientX, event.clientY);
    };

    const handleWindowBlur = () => {
      resetPointer();
    };

    const handlePointerCancel = () => {
      resetPointer();
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    window.addEventListener('pointercancel', handlePointerCancel);
    window.addEventListener('blur', handleWindowBlur);

    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointercancel', handlePointerCancel);
      window.removeEventListener('blur', handleWindowBlur);
      window.cancelAnimationFrame(rafId);
      pointerTargetRef.current = { x: 0, y: 0 };
      pointerCurrentRef.current = { x: 0, y: 0 };
      stage.style.setProperty('--pointer-x', '0');
      stage.style.setProperty('--pointer-y', '0');
    };
  }, [isPhotoWheelVisible]);

  useEffect(() => {
    if (!isPhotoWheelVisible) {
      return undefined;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsPhotoWheelClosing(true);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isPhotoWheelVisible]);

  useEffect(() => {
    if (!isPhotoWheelVisible) {
      return undefined;
    }

    const handleResize = () => {
      if (!window.matchMedia('(min-width: 1024px)').matches) {
        setIsPhotoWheelVisible(false);
        setIsPhotoWheelClosing(false);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isPhotoWheelVisible]);

  return (
    <>
      <a href="#home" className="skip-link">
        Skip to content
      </a>

      {isPhotoWheelVisible ? (
        <aside
          className={`photo-wheel-overlay${isPhotoWheelClosing ? ' is-closing' : ''}`}
          role="dialog"
          aria-modal="true"
          aria-label="Rotating photographs showcase"
          onMouseDown={handlePhotoOverlayMouseDown}
        >
          <div
            className="photo-wheel-stage"
            ref={photoWheelStageRef}
            aria-hidden="true"
          >
            <div className="photo-wheel-constellation">
              {photoWheelItems.map((item, index) => {
                const style = {
                  '--x': `${item.x}%`,
                  '--y': `${item.y}%`,
                  '--rotation': `${item.rotation}deg`,
                  '--depth': item.depth,
                  '--stagger': `${index * 70}ms`,
                } as CSSProperties;

                return (
                  <figure
                    key={item.src}
                    className={`photo-wheel-card photo-wheel-card--${item.size}`}
                    style={style}
                  >
                    <img src={item.src} alt="" loading="eager" />
                  </figure>
                );
              })}
            </div>
          </div>
        </aside>
      ) : null}

      <header className="site-header">
        <div className="site-shell">
          <div className="header-grid">
            <p className="brand">RAJ PULAPAKURA</p>
            <nav aria-label="Primary navigation" className="site-nav">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} className="text-link">
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </header>

      <main id="home">
        <section className="section hero" aria-labelledby="hero-title">
          <div className="site-shell">
            <div className="layout-grid hero-grid">
              <h1 id="hero-title" className="hero-title col-8">
                building...
              </h1>
              <figure className="hero-profile col-4" onMouseEnter={handleProfileHover}>
                <img src="/photos/profile.png" alt="Portrait of Raj Pulapakura" />
              </figure>
              <dl className="hero-facts col-8" aria-label="Profile summary">
                <div>
                  <dt>Current Role</dt>
                  <dd>AI Engineer, Synogize</dd>
                </div>
                <div>
                  <dt>Base</dt>
                  <dd>Melbourne, Australia</dd>
                </div>
                <div>
                  <dt>Focus</dt>
                  <dd>AI Product Delivery, ML Systems, Full-Stack Engineering</dd>
                </div>
              </dl>
              <div className="hero-actions col-4">
                <a
                  href={RESUME_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="text-link strong-link"
                >
                  Download Resume
                </a>
                <a href="#projects" className="text-link strong-link">
                  View Selected Projects
                </a>
                <a href={EMAIL_HREF} className="text-link strong-link">
                  {EMAIL}
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="section" aria-labelledby="projects-title">
          <div className="site-shell">
            <div className="layout-grid section-intro">
              <h2 id="projects-title" className="section-title col-12">
                Selected Projects
              </h2>
            </div>

            <ol className="project-list" aria-label="Project case studies">
              {featuredProjects.map((project) => (
                <li key={project.title} className="project-item">
                  <article className="layout-grid project-grid">
                    <p className="project-number col-1">{project.index}</p>

                    <header className="project-header col-5">
                      <h3 className="project-title">{project.title}</h3>
                      <dl className="project-meta">
                        <div>
                          <dt>Role</dt>
                          <dd>{project.role}</dd>
                        </div>
                        <div>
                          <dt>Year</dt>
                          <dd>{project.year}</dd>
                        </div>
                        <div>
                          <dt>Technologies</dt>
                          <dd>{project.technologies.join(', ')}</dd>
                        </div>
                      </dl>
                      <div className="project-links">
                        <a
                          href={project.githubURL}
                          target="_blank"
                          rel="noreferrer"
                          className="text-link"
                        >
                          GitHub
                        </a>
                        {project.liveURL ? (
                          <a
                            href={project.liveURL}
                            target="_blank"
                            rel="noreferrer"
                            className="text-link"
                          >
                            Live Product
                          </a>
                        ) : null}
                      </div>
                    </header>

                    <div className="project-visual col-6">
                      {project.visualAsset ? (
                        <>
                          <img
                            src={project.visualAsset.src}
                            alt={project.visualAsset.alt}
                            className="project-visual-media"
                            loading="lazy"
                          />
                          {project.visualAsset.src.toLowerCase().endsWith('.gif') ? (
                            <span className="project-visual-badge">GIF</span>
                          ) : null}
                        </>
                      ) : (
                        <div className="project-visual-placeholder">
                          <p>Visual Placeholder</p>
                          <p>Project preview image pending final asset handoff.</p>
                        </div>
                      )}
                    </div>

                    <section className="project-block col-4" aria-labelledby={`${project.index}-problem`}>
                      <h4 id={`${project.index}-problem`}>Problem</h4>
                      <p>{project.description}</p>
                    </section>

                    <section className="project-block col-4" aria-labelledby={`${project.index}-approach`}>
                      <h4 id={`${project.index}-approach`}>Approach</h4>
                      <p>{project.approach}</p>
                    </section>

                    <section className="project-block col-4" aria-labelledby={`${project.index}-result`}>
                      <h4 id={`${project.index}-result`}>Result</h4>
                      <p>{project.result}</p>
                    </section>
                  </article>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="writing" className="section" aria-labelledby="writing-title">
          <div className="site-shell">
            <div className="layout-grid section-intro">
              <h2 id="writing-title" className="section-title col-12">
                Writing
              </h2>
            </div>

            <ol className="article-list" aria-label="Recent articles">
              {latestArticles.map((article, index) => (
                <li key={article.title} className="layout-grid article-item">
                  <p className="article-index col-1">
                    {String(index + 1).padStart(2, '0')}
                  </p>
                  <div className="article-content col-11">
                    <p className="article-date">{article.datePublished}</p>
                    <h3>
                      <a
                        href={article.articleURL}
                        target="_blank"
                        rel="noreferrer"
                        className="text-link"
                      >
                        {article.title}
                      </a>
                    </h3>
                    <p>{article.subtitle}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section
          id="experience"
          className="section section-alt"
          aria-labelledby="experience-title"
        >
          <div className="site-shell">
            <div className="layout-grid section-intro">
              <h2 id="experience-title" className="section-title col-12">
                Experience
              </h2>
            </div>

            <ol className="experience-list" aria-label="Professional timeline">
              {experience.map((item, index) => (
                <li key={`${item.date}-${item.title}`} className="layout-grid experience-item">
                  <p className="experience-index col-1">
                    {String(index + 1).padStart(2, '0')}
                  </p>
                  <p className="experience-date col-2">{item.date}</p>
                  <div className="experience-content col-9">
                    <h3>{item.title}</h3>
                    <p>{item.details}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section
          id="capabilities"
          className="section"
          aria-labelledby="capabilities-title"
        >
          <div className="site-shell">
            <div className="layout-grid section-intro">
              <h2 id="capabilities-title" className="section-title col-12">
                Capabilities
              </h2>
            </div>

            <div className="layout-grid capability-grid">
              {capabilityGroups.map((group) => (
                <section key={group.title} className="capability-group col-4">
                  <h3>{group.title}</h3>
                  <ul>
                    {group.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </section>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="section section-alt" aria-labelledby="contact-title">
          <div className="site-shell">
            <div className="layout-grid contact-grid">
              <h2 id="contact-title" className="section-title col-4">
                Contact
              </h2>
              <div className="contact-content col-8">
                <a href={EMAIL_HREF} className="text-link strong-link">
                  {EMAIL}
                </a>
                <a
                  href={RESUME_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="text-link"
                >
                  Resume (PDF)
                </a>
                <div className="contact-links" aria-label="External links">
                  {socialLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      className="text-link"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="site-shell">
          <div className="layout-grid">
            <p className="footer-copy col-12">
              © {new Date().getFullYear()} Raj Pulapakura. Built with the Swiss
              Precision direction.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;

import { RegularBlockProps } from '..';
import { motion, MotionProps } from 'framer-motion';

export default function NavBlock(props: RegularBlockProps) {
  const animation1: MotionProps = {
    initial: { opacity: 0, x: -100 },
    animate: { opacity: 1, x: 0 },
    transition: {
      delay: 2,
      duration: 0.5,
      type: 'spring',
      damping: 10,
      stiffness: 100,
    },
  };

  const animation2: MotionProps = {
    initial: { opacity: 0, x: 100 },
    animate: { opacity: 1, x: 0 },
    transition: {
      delay: 2,
      duration: 0.5,
      type: 'spring',
      damping: 10,
      stiffness: 100,
    },
  };

  const goToElement = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const linkStyle = 'text-accent2 hover:cursor-pointer';

  return (
    <motion.div
      {...props}
      className="bg-primary font-bold text-3xl rounded-lg col-span-8 flex flex-col gap-2 items-center justify-center"
    >
      <motion.p
        {...animation1}
        className={linkStyle}
        onClick={() => goToElement('skills')}
      >
        / SKILLS
      </motion.p>
      <motion.p
        {...animation2}
        className={linkStyle}
        onClick={() => goToElement('journey')}
      >
        / JOURNEY
      </motion.p>
      <motion.p
        {...animation1}
        className={linkStyle}
        onClick={() => goToElement('projects')}
      >
        / PROJECTS
      </motion.p>
      <motion.p
        {...animation2}
        className={linkStyle}
        onClick={() => goToElement('articles')}
      >
        / ARTICLES
      </motion.p>
      <motion.p
        {...animation1}
        className={linkStyle}
        onClick={() => goToElement('videos')}
      >
        / VIDEOS
      </motion.p>
    </motion.div>
  );
}

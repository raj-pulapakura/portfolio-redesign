import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { RegularBlockProps } from '..';
import { motion, MotionProps } from 'framer-motion';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';

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

  const linkStyle =
    'text-primary font-sans text-2xl xl:text-3xl font-bold hover:cursor-pointer';

  return (
    <motion.div
      {...props}
      className="shadow-2xl relative rounded-lg flex items-center justify-center w-full h-full"
    >
      <div className="p-5">
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
      </div>
    </motion.div>
  );
}

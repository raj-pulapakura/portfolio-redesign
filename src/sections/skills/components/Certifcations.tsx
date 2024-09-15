import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion, MotionProps } from 'framer-motion';

export default function Certifcations() {
  const divStyle = 'p-3';
  const divAnimation: MotionProps = {
    initial: { scale: 1.1, opacity: 0 },
    whileInView: { scale: 1, opacity: 1 },
    viewport: { once: true },
    transition: { duration: 1 },
  };

  const certificationPaths = [
    'certifications/aws-machine-learning-specialty.png',
    'certifications/azure-ai-engineer-associate.png',
    'certifications/azure-ai-fundamentals.png',
    'certifications/azure-fundamentals.png',
    'certifications/tensorflow-developer-certificate.png',
  ];

  return (
    <div className="grid grid-cols-2 gap-10">
      {certificationPaths.map((path) => (
        <motion.div className={divStyle} {...divAnimation}>
          <img src={path} alt="certification" />
        </motion.div>
      ))}
      <div className="p-5">
        <button
          className="w-full h-full shadow-2xl rounded-full"
          onClick={() => {
            document
              .getElementById('journey')
              ?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          <FontAwesomeIcon
            icon={faArrowDown}
            className="w-8 h-8 text-primary"
            size="2x"
          />
        </button>
      </div>
    </div>
  );
}

import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion, MotionProps } from 'framer-motion';

export default function Certifcations() {
  const divAnimation: MotionProps = {
    initial: { scale: 1.2, opacity: 0 },
    whileInView: { scale: 1, opacity: 1 },
    transition: { duration: 0.5 },
  };

  const certificationPaths = [
    'certifications/aws-machine-learning-specialty.png',
    'certifications/azure-ai-engineer-associate.png',
    'certifications/azure-ai-fundamentals.png',
    'certifications/azure-fundamentals.png',
    'certifications/tensorflow-developer-certificate.png',
  ];

  return (
    <div className="grid grid-cols-3 gap-2 xl:grid-cols-2 xl:gap-10">
      {certificationPaths.map((path) => (
        <motion.div className="p-3" {...divAnimation}>
          <img className="w-full" src={path} alt="certification" />
        </motion.div>
      ))}
      <motion.div className="p-5" {...divAnimation}>
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
      </motion.div>
    </div>
  );
}

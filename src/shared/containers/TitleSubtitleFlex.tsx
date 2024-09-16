import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion';

export default function TitleSubtitleFlex({
  title,
  className,
  icon,
}: {
  title: string;
  subtitle: string;
  icon?: FontAwesomeIconProps['icon'];
} & JSX.IntrinsicElements['div']) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: -50,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      transition={{ duration: 0.25 }}
      className={`flex justify-center items-center gap-5 text-primary ${className}`}
    >
      {icon && (
        <div className="mr-2">
          <FontAwesomeIcon icon={icon} size="3x" />
        </div>
      )}
      <h1
        className={`font-sans font-bold text-3xl lg:text-4xl 2xl:text-6xl text-center`}
      >
        {title}
      </h1>
    </motion.div>
  );
}

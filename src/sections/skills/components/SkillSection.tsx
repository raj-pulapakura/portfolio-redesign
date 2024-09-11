import Chip from '../../../shared/ui/Chip';
import { motion } from 'framer-motion';

export type SkillSectionProps = JSX.IntrinsicElements['div'] & {
  title: string;
  skills: string[];
  align?: string;
  animation?: string;
};

export default function SkillSection({
  title,
  skills,
  align = 'text-center',
  animation = 'left',
  className,
}: SkillSectionProps) {
  const leftAnimationIntial = { x: -200, opacity: 0 };
  const rightAnimationIntial = { x: 200, opacity: 0 };

  return (
    <motion.div
      className={`h-fit ${className}`}
      initial={
        animation === 'left' ? leftAnimationIntial : rightAnimationIntial
      }
      whileInView={{
        x: 0,
        opacity: 1,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 1,
      }}
    >
      <motion.h1
        className={`${align} tracking-widest uppercase text-background font-bold font-display mb-6 text-lg`}
      >
        {title}
      </motion.h1>
      <div className={align}>
        {skills.map((skill) => (
          <motion.div className="inline">
            <Chip key={skill} className="text-sm mb-1 mr-1 xl:mb-2 xl:mr-2">
              {skill}
            </Chip>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

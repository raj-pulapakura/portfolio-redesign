import Chip from '../../../shared/ui/Chip';
import { motion } from 'framer-motion';

export type SkillSectionProps = JSX.IntrinsicElements['div'] & {
  title: string;
  skills: string[];
  align?: string;
};

export default function SkillSection({
  title,
  skills,
  align = 'text-center',
  className,
}: SkillSectionProps) {
  return (
    <div className={`h-fit ${className}`}>
      <motion.h1
        className={`${align} tracking-widest uppercase text-primary font-bold mb-4 text-lg`}
        initial={{ x: -50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        {title}
      </motion.h1>
      <div className={align}>
        {skills.map((skill, index) => (
          <motion.div
            className="inline"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15, ease: 'easeInOut' }}
          >
            <Chip key={skill} className="text-sm mb-1 mr-1 xl:mb-2 xl:mr-2">
              {skill}
            </Chip>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

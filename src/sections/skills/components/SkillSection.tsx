import Chip from '../../../shared/ui/Chip';

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
      <h1
        className={`${align} tracking-widest uppercase text-blue-600 font-bold mb-4`}
      >
        {title}
      </h1>
      <div className={align}>
        {skills.map((skill) => (
          <Chip key={skill} className="text-sm mb-1 mr-1 xl:mb-2 xl:mr-2">
            {skill}
          </Chip>
        ))}
      </div>
    </div>
  );
}

import Marquee from 'react-fast-marquee';
import { technologies } from '../../../data/technologies';

export default function IconBar({ ...props }: JSX.IntrinsicElements['div']) {
  const width = 35;
  const height = 35;
  return (
    <div {...props}>
      <Marquee>
        {technologies.map((tech) => (
          <img
            key={tech}
            src={`/icons/${tech}.svg`}
            width={width + 'px'}
            height={height + 'px'}
            className="mx-2"
          />
        ))}
      </Marquee>
    </div>
  );
}

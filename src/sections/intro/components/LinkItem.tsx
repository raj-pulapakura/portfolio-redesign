import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from '@fortawesome/react-fontawesome';

export default function LinkItem({
  icon,
  text,
  url,
}: {
  icon: FontAwesomeIconProps['icon'];
  text: string;
  url: string;
}) {
  return (
    <a href={url} target="_blank" rel="noreferrer">
      <div className="flex items-center gap-10 ">
        <FontAwesomeIcon icon={icon} size="2x" />
        <p className="text-xl font-bold text-cream">{text}</p>
      </div>
    </a>
  );
}

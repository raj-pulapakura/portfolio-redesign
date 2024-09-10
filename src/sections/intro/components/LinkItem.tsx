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
    <a
      className="flex justify-center items-center"
      href={url}
      target="_blank"
      rel="noreferrer"
    >
      {/* <div className="flex items-center gap-10 "> */}
      <FontAwesomeIcon className="text-primary" icon={icon} size="5x" />
      {/* </div> */}
    </a>
  );
}

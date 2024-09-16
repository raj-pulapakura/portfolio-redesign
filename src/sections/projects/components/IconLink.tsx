import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from '@fortawesome/react-fontawesome';

export default function IconLink({
  icon,
}: {
  icon: FontAwesomeIconProps['icon'];
}) {
  return (
    <FontAwesomeIcon
      className="hover:scale-110 transition duration-200"
      color="white"
      icon={icon}
      size="2x"
    />
  );
}

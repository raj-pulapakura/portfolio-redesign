import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from '@fortawesome/react-fontawesome';

export type IconButtonProps = Omit<FontAwesomeIconProps, 'icon'> & {
  icon?: FontAwesomeIconProps['icon'];
};

export default function IconButton({
  icon = faArrowDown,
  className,
  ...props
}: IconButtonProps) {
  return (
    <FontAwesomeIcon
      className={`bg-transparent border-accent border-2 text-accent rounded-full  ${className}`}
      icon={icon}
      {...props}
    />
  );
}

'use client';

import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import IconButton, { IconButtonProps } from './IconButton';
import { iconButtonBoxShadow } from '../../data/styles';

export default function ScrollDownIconButton({
  style,
  className,
  ...props
}: IconButtonProps) {
  const handleClick = () => {
    window.scrollBy(0, window.innerHeight);
  };

  return (
    <IconButton
      icon={faChevronDown}
      onClick={handleClick}
      style={{
        boxShadow: iconButtonBoxShadow,
        ...style,
      }}
      className={`p-4 w-8 h-8 md:w-10 md:h-10 lg:w-14 lg:h-14 hover:cursor-pointer ${className}`}
      {...props}
    />
  );
}

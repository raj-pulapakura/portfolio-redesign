import { colors } from '@/data/colors';
import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from '@fortawesome/react-fontawesome';
import React from 'react';

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
      <div className="flex items-center gap-10 text-cream">
        <FontAwesomeIcon icon={icon} color={colors['cream']} size="2x" />
        <p className="text-xl font-bold">{text}</p>
      </div>
    </a>
  );
}

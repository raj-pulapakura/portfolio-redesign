import { colors } from '@/data/colors';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

export default function LocationBlock() {
  return (
    <div
      style={{
        backgroundImage: "url('/photos/landscape3.jpg')",
        backgroundSize: 'cover',
        filter: 'grayscale(1)',
      }}
      className="rounded-lg col-span-6 flex flex-col justify-center items-center gap-10"
    >
      <FontAwesomeIcon icon={faLocationDot} color={colors['cream']} size="3x" />
      <div className="text-center">
        <p className="font-bold text-cream text-xl">Melbourne,</p>
        <p className="font-bold text-cream text-xl">Australia</p>
      </div>
    </div>
  );
}

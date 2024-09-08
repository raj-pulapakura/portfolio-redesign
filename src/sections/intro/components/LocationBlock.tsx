import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function LocationBlock() {
  return (
    <div
      style={{
        backgroundImage: "url('/photos/landscape3.jpg')",
        backgroundSize: 'cover',
        filter: 'grayscale(1)',
      }}
      className="rounded-lg col-span-4 flex flex-col justify-center items-center gap-10"
    >
      <FontAwesomeIcon className="text-cream" icon={faLocationDot} size="3x" />
      <div className="text-center">
        <p className="font-bold text-cream text-2xl">Melbourne,</p>
        <p className="font-bold text-cream text-2xl">Australia</p>
      </div>
    </div>
  );
}

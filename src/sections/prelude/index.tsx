import ScrollDownIconButton from '../../shared/buttons/ScrollDownIconButton';
import HeroSection from './components/HeroSection';

export default function Prelude() {
  return (
    <section
      style={{
        backgroundImage: "url('/photos/landscape2.jpg')",
        backgroundSize: 'cover',
      }}
      className="relative min-h-screen max-h-fit w-full"
    >
      <HeroSection />
      <ScrollDownIconButton className="absolute bottom-10 left-1/2 -translate-x-1/2" />
    </section>
  );
}

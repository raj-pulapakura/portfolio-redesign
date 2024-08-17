import React from 'react';
import HeroSection from './components/hero/HeroSection';
import ScrollDownIconButton from '../../shared/buttons/ScrollDownIconButton';

export default function Intro() {
  return (
    <section
      style={{
        backgroundImage: "url('/photos/landscape1.jpg')",
        backgroundSize: 'cover',
      }}
      className="relative min-h-screen max-h-fit w-full p-5 md:p-10"
    >
      <HeroSection />
      <ScrollDownIconButton className="animate-super-bounce absolute bottom-5 right-5 -translate-y-1/2" />
    </section>
  );
}

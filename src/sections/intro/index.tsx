import React from 'react';
import ProfileBlock from './components/ProfileBlock';
import LinksBlock from './components/LinksBlock';
import TitleBlock from './components/TitleBlock';
import LocationBlock from './components/LocationBlock';
import NavBlock from './components/NavBlock';

export default function Intro() {
  return (
    <section
      className="relative min-h-screen max-h-screen w-full p-5 md:p-10 bg-black grid gap-6 grid-rows-2"
      style={{ gridTemplateColumns: 'repeat(14, minmax(0, 1fr))' }}
    >
      <ProfileBlock />
      {/* <TitleBlock />
      <LinksBlock />
      <LocationBlock />
      <NavBlock /> */}
    </section>
  );
}

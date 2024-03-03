import React from "react";
import BackgroundImage from "./components/BackgroundImage";
import HeroSection from "./components/hero/HeroSection";
import DownButton from "./components/DownButton";

export default function Intro() {
  return (
    <section className="relative h-lvh">
      <BackgroundImage />
      <HeroSection />
      <DownButton />
    </section>
  );
}

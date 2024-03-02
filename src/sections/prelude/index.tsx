import React from "react";
import BackgroundImage from "./components/BackgroundImage";
import HeroSection from "./components/HeroSection";
import DownButton from "./components/DownButton";

export default function Prelude() {
  return (
    <section className="relative">
      <BackgroundImage />
      <HeroSection />
      <DownButton />
    </section>
  );
}

import React from "react";
import BackgroundImage from "./components/BackgroundImage";
import HeroSection from "./components/HeroSection";
import ScrollDownIconButton from "@/shared/ScrollDownIconButton";

export default function Prelude() {
  return (
    <section className="relative">
      <BackgroundImage />
      <HeroSection />
      <ScrollDownIconButton className="my-16 relative left-1/2 -translate-x-1/2" />
    </section>
  );
}

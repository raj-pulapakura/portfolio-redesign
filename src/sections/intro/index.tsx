import Arrow from "@/shared/Arrow";
import React from "react";
// h-lvh w-full object-cover
export default function Intro() {
  return (
    <section className="relative">
      <img src="/photos/landscape1.jpg" className="w-full" />
      <h1 className="text-3xl absolute text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center font-bold text-wrap">
        👋 Hey there, I'm Raj!
      </h1>
      <Arrow className="p-2 w-10 h-10 absolute bottom-5 left-1/2 -translate-x-1/2 -translate-y-1/2" />
    </section>
  );
}

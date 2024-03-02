import React from "react";

export default function HeroSection() {
  return (
    <div className="relative w-full p-5 md:p-10 lg:p-15 xl:p-20 2xl:p-32">
      <h1 className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-white font-bold text-wrap">
        I'm a <span className="text-indigo-600">CREATOR</span> at heart.
      </h1>
      <h2 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl mt-10 text-white  font-bold text-wrap">
        Whether it's projects, articles, or videos, I'm always{" "}
        <span className="text-yellow-600">building</span> something.
      </h2>
    </div>
  );
}

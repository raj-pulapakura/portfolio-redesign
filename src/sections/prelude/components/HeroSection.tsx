import React from "react";

export default function HeroSection() {
  return (
    <div className="relative w-full p-5 md:p-10 lg:p-15 xl:p-20 2xl:p-32">
      <h1 className="text-6xl xl:text-7xl text-white font-bold text-wrap">
        I'm a <span className="text-indigo-600">CREATOR</span> at heart.
      </h1>
      <h2 className="text-5xl xl:text-6xl mt-10 text-white  font-bold text-wrap">
        Whether it's projects, articles, or videos, I'm always{" "}
        <span className="text-yellow-600">building</span> something.
      </h2>
    </div>
  );
}

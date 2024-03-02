import Profile from "@/shared/Profile";
import React from "react";

export default function HeroSection() {
  return (
    <div className="flex flex-col md:flex-row gap-10 justify-center items-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <h1 className="text-7xl md:text-8xl lg:text-9xl text-white md:text-red-500 lg:text-yellow-500 xl:text-blue-500 2xl:text-green-500 text-center font-bold text-wrap">
        Hey there, I'm Raj!
      </h1>
      <Profile useCircle={true} />
    </div>
  );
}

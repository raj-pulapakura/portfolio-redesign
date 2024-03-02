import Profile from "@/shared/Profile";
import React from "react";

export default function HeroSection() {
  return (
    <div className="w-3/4 flex flex-col md:flex-row gap-10 justify-center items-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
      <h1 className="text-7xl md:text-8xl lg:text-9xl xl:text-[10rem] 2xl:text-[12rem] text-white text-center font-bold text-wrap">
        👋 Hey there, I'm Raj!
      </h1>
      <Profile useCircle={true} className="h-full" />
    </div>
  );
}

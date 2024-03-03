"use client";

import Profile from "@/shared/Profile";
import React from "react";
import HeroTitle from "./HeroTitle";
import HeroLinks from "./HeroLinks";
import DownloadResumeButton from "../DownloadResumeButton";

export default function HeroSection() {
  return (
    <div className="w-3/4 flex flex-col md:flex-row gap-10 justify-center items-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
      <div className="bg-slate-200 p-10 lg:p-16 xl:p-18 2xl:p-20 flex flex-col md:flex-row gap-10 md:gap-16 lg:gap-24 xl:gap-32 2xl:gap-40 items-center">
        <div className="flex flex-col items-center gap-10">
          <Profile useCircle={true} useBorder={true} className="h-full" />
          <DownloadResumeButton className="md:hidden">
            My Resume
          </DownloadResumeButton>
        </div>

        <div className="flex flex-col items-center md:items-start gap-10 md:gap-12 lg:gap-14 xl:gap-16 2xl:gap-18">
          <HeroTitle />
          <HeroLinks />
          <DownloadResumeButton className="hidden md:block w-full">
            My Resume
          </DownloadResumeButton>
        </div>
      </div>
    </div>
  );
}

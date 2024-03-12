"use client";

import Profile from "@/shared/ui/Profile";
import React from "react";
import HeroTitle from "./HeroTitle";
import HeroLinks from "./HeroLinks";
import DownloadResumeButton from "../DownloadResumeButton";

export default function HeroSection() {
  return (
    <div className="mx-auto w-fit max-w-4/5 flex flex-col md:flex-row gap-5 justify-center items-center bg-slate-200 p-10 xl:p-12 2xl:p-14 px-12 xl:px-14 2xl:px-16 md:gap-16 lg:gap-18 xl:gap-20 2xl:gap-24">
      <div className="flex flex-col items-center gap-10 ">
        <Profile className="h-full" useCircle={true} useBorder={true} />
        <DownloadResumeButton className="md:hidden">
          My Resume
        </DownloadResumeButton>
      </div>

      <div className="flex flex-col items-center md:items-start gap-7 xl:gap-12 2xl:gap-16">
        <HeroTitle />
        <HeroLinks />
        <DownloadResumeButton className="hidden md:block w-full">
          My Resume
        </DownloadResumeButton>
      </div>
    </div>
  );
}

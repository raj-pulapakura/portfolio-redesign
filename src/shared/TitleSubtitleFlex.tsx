import { rockSalt } from "@/app/layout";
import React from "react";

export default function TitleSubtitleFlex({
  title,
  subtitle,
  className,
  ...props
}: { title: string; subtitle: string } & JSX.IntrinsicElements["div"]) {
  return (
    <div
      className={`flex justify-center md:justify-between items-baseline mb-16 md:mb-18 lg:mb-20 xl:mb-24 ${className}`}
    >
      <h1
        className={`${rockSalt.className} text-5xl lg:text-5xl 2xl:text-7xl text-center md:text-left `}
      >
        {title}
      </h1>
      <p className="hidden md:block font-bold text-2xl lg:text-3xl 3xl:text-4xl">
        {subtitle}
      </p>
    </div>
  );
}

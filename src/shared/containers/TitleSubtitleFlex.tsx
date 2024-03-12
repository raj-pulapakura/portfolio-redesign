import { rockSalt } from "@/app/fonts";
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
        className={`${rockSalt.className} text-3xl lg:text-4xl 2xl:text-5xl text-center md:text-left `}
      >
        {title}
      </h1>
      <p className="hidden md:block font-bold text-xl lg:text-2xl max-w-[50%]">
        {subtitle}
      </p>
    </div>
  );
}

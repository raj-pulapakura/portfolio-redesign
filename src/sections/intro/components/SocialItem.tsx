import { FontAwesomeIconProps } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React, { ReactNode } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SocialItem({
  icon,
  text,
  url,
}: {
  icon: FontAwesomeIconProps["icon"];
  text?: string;
  url?: string;
}) {
  const item = (
    <div className="flex items-center gap-5 md:gap-6 lg:gap-7 xl:gap-9 2xl:gap-10">
      <FontAwesomeIcon icon={icon} className="md:hidden" size="lg" />
      <FontAwesomeIcon
        icon={icon}
        className="hidden md:block 2xl:hidden"
        size="xl"
      />
      <FontAwesomeIcon icon={icon} className="hidden 2xl:block" size="2x" />
      <p className="text-md lg:text-lg xl:text-xl 2xl:text-2xl">{text}</p>
    </div>
  );

  if (url) {
    return (
      <Link href={url} className="hover:cursor-pointer">
        {item}
      </Link>
    );
  }
  return item;
}

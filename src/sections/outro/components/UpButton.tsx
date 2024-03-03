"use client";

import IconButton from "@/shared/IconButton";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import React from "react";

export default function UpButton() {
  const handleClick = () => {
    window.scrollTo({ top: 0 });
  };

  return (
    <IconButton
      icon={faChevronUp}
      onClick={handleClick}
      className="p-2 md:p-2 lg:p-3 xl:p-4 2xl:p-5 w-6 h-6 md:w-10 md:h-10 lg:w-14 lg:h-14 xl:w-18 xl:h-18 2xl:w-20 2xl:h-20 absolute  bottom-5 right-5 -translate-y-1/2 hover:cursor-pointer"
    />
  );
}

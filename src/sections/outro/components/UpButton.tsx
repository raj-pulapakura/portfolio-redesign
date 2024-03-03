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
      className="p-4 w-8 h-8 md:w-10 md:h-10 lg:w-14 lg:h-14 absolute bottom-5 right-5 -translate-y-1/2 hover:cursor-pointer"
    />
  );
}

"use client";

import IconButton from "@/shared/buttons/IconButton";
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
      className="p-4 w-8 h-8 md:w-10 md:h-10 mx-auto mt-16 lg:w-14 lg:h-14 lg:absolute lg:bottom-5 lg:right-5 -translate-y-1/2 hover:cursor-pointer"
    />
  );
}

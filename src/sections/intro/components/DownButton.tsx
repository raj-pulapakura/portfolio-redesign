"use client";

import IconButton from "@/shared/IconButton";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import React from "react";

export default function DownButton() {
  const handleClick = () => {
    window.scrollBy(0, window.innerHeight);
  };

  return (
    <IconButton
      icon={faChevronDown}
      onClick={handleClick}
      style={{ boxShadow: "5px 5px 10px #b8b8b8, -5px -5px 10px #b8b8b8" }}
      className="mt-16 p-4 w-10 h-10 md:w-14 md:h-14 lg:w-20 lg:h-20 absolute animate-super-bounce bottom-10 right-10 -translate-y-1/2 hover:cursor-pointer"
    />
  );
}

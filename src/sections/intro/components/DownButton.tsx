import IconButton from "@/shared/IconButton";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import React from "react";

export default function DownButton() {
  return (
    <IconButton
      icon={faChevronDown}
      className="mt-16 p-4 w-10 h-10 md:w-14 md:h-14 lg:w-20 lg:h-20 absolute bottom-5 left-1/2 -translate-x-1/2 -translate-y-1/2"
    />
  );
}

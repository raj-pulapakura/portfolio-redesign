import IconButton from "@/shared/IconButton";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import React from "react";

export default function DownButton() {
  return (
    <IconButton
      icon={faChevronDown}
      className="p-2 w-10 h-10 absolute bottom-5 left-1/2 -translate-x-1/2 -translate-y-1/2"
    />
  );
}

import {
  faArrowAltCircleDown,
  faArrowCircleDown,
  faArrowDown,
} from "@fortawesome/free-solid-svg-icons";
import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from "@fortawesome/react-fontawesome";
import React from "react";

export default function Arrow({
  className,
  ...props
}: Omit<FontAwesomeIconProps, "icon">) {
  return (
    <FontAwesomeIcon
      className={`bg-white rounded-full  ${className}`}
      icon={faArrowDown}
      {...props}
    />
  );
}

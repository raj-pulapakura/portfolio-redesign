import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from "@fortawesome/react-fontawesome";
import React from "react";

type OptionalIcon = Omit<FontAwesomeIconProps, "icon"> & {
  icon?: FontAwesomeIconProps["icon"];
};

export default function IconButton({
  icon = faArrowDown,
  className,
  ...props
}: OptionalIcon) {
  return (
    <FontAwesomeIcon
      className={`bg-white rounded-full  ${className}`}
      icon={icon}
      {...props}
    />
  );
}

import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from "@fortawesome/react-fontawesome";
import React from "react";

export type IconButtonProps = Omit<FontAwesomeIconProps, "icon"> & {
  icon?: FontAwesomeIconProps["icon"];
};

export default function IconButton({
  icon = faArrowDown,
  className,
  ...props
}: IconButtonProps) {
  return (
    <FontAwesomeIcon
      className={`bg-white rounded-full  ${className}`}
      icon={icon}
      {...props}
    />
  );
}

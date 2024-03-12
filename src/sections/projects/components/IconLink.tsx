import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from "@fortawesome/react-fontawesome";
import React from "react";

export default function IconLink({
  icon,
}: {
  icon: FontAwesomeIconProps["icon"];
}) {
  return (
    <FontAwesomeIcon
      className="hover:scale-110 transition duration-200"
      color="grey"
      icon={icon}
      size="2x"
    />
  );
}

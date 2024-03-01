import { FontawesomeObject } from "@fortawesome/fontawesome-svg-core";
import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React, { ReactNode } from "react";

export default function Social({
  icon,
  url,
}: {
  icon: ReactNode;
  url: string;
}) {
  return <Link href={url}>{icon}</Link>;
}

import { technologies } from "@/data/technologies";
import React from "react";
import Marquee from "react-fast-marquee";

export default function IconBar({ ...props }: JSX.IntrinsicElements["div"]) {
  const width = 12;
  const height = 10;
  return (
    <div {...props}>
      <Marquee>
        {technologies.map((tech) => (
          <img
            src={`/icons/${tech}.svg`}
            className={`w-${width} h-${height} mx-2`}
          />
        ))}
      </Marquee>
    </div>
  );
}

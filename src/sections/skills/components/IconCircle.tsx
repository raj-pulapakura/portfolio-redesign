import { technologies } from "@/data/technologies";
import React from "react";

export default function IconCircle({
  radiusInPixels,
  itemSizeInPixels,
  className,
  ...props
}: {
  radiusInPixels: number;
  itemSizeInPixels: number;
} & JSX.IntrinsicElements["div"]) {
  const items = technologies.map((tech, index) => {
    // Calculate angle for this item
    const angle = (index / technologies.length) * (2 * Math.PI);

    // Calculate x and y position based on angle
    const x =
      ((radiusInPixels * 9) / 10) * Math.cos(angle) - itemSizeInPixels / 2;
    const y =
      ((radiusInPixels * 9) / 10) * Math.sin(angle) - itemSizeInPixels / 2;
    // const x = radiusInPixels;
    // const y = radiusInPixels;

    // Inline styles to position item
    const style = {
      position: "absolute",
      transform: `translate(${x}px, ${y}px)`,
      left: "50%",
      top: "50%",
      width: itemSizeInPixels + "px",
      height: itemSizeInPixels + "px",
    } as React.CSSProperties;

    return <img key={tech} style={style} src={"/icons/" + tech + ".svg"} />;
  });

  return (
    <div
      style={{
        width: radiusInPixels * 2 + "px",
        height: radiusInPixels * 2 + "px",
      }}
      className={`relative w-[radiusInPixels] h-[radiusInPixels] animate-spin-slow rounded-full ${className}`}
      {...props}
    >
      {items}
    </div>
  );
}

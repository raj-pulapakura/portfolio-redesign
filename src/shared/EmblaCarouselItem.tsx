import React, { ReactNode } from "react";

export default function EmblaCarouselItem({
  children,
}: {
  children?: ReactNode;
}) {
  return (
    <div
      style={{
        flexBasis: "100%",
        flexGrow: 0,
        flexShrink: 0,
        minWidth: 0,
        paddingLeft: "1rem",
        paddingRight: "1rem",
      }}
    >
      <h1>{children}</h1>
    </div>
  );
}

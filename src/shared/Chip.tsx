import React, { ReactNode } from "react";

export default function Chip({
  children,
  className,
  ...props
}: JSX.IntrinsicElements["div"] & { children?: ReactNode }) {
  return (
    <div
      className={`inline-block border-2 border-blue-600 text-blue-600 py-1 px-3 w-fit rounded-full mr-1 mb-1 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

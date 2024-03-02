import React from "react";

export default function PaddedContainer({
  className,
  children,
  ...props
}: JSX.IntrinsicElements["div"]) {
  return (
    <div
      className={` px-4 md:px-10 lg:px-14 xl:px-16 2xl:px-20 py-20 md:py-24 lg:py-28 xl:py-32 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

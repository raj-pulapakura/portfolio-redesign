import React from "react";

export default function Card({
  className,
  children,
  ...props
}: JSX.IntrinsicElements["div"]) {
  return (
    <div
      className={`p-5 md:p-7 lg:p-9 xl:p-11 2xl:p-14 flex flex-col gap-2 md:gap-4 lg:gap-6 xl:gap-8 2xl:gap-10 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

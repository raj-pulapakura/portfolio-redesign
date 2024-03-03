import React from "react";

export default function PaddedFlexContainer({
  className,
  children,
  ...props
}: JSX.IntrinsicElements["div"]) {
  return (
    <div
      className={`p-5 md:p-7 lg:p-9 xl:p-11 2xl:p-14 flex flex-col ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

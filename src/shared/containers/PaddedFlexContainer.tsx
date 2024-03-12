import React from "react";

export default function PaddedFlexContainer({
  className,
  children,
  ...props
}: JSX.IntrinsicElements["div"]) {
  return (
    <div
      className={`p-5 md:p-6 lg:p-7 xl:p-8 2xl:p-10 flex flex-col ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

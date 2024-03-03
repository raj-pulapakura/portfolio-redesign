import React from "react";

type ProfileProps = {
  useCircle?: boolean;
  useBorder?: boolean;
} & JSX.IntrinsicElements["img"];

export default function Profile({
  className,
  useCircle = false,
  useBorder = false,
  ...props
}: ProfileProps) {
  const src = useCircle
    ? useBorder
      ? "/photos/profile_circle_border.png"
      : "/photos/profile_circle.png"
    : "/photos/profile.jpg";

  return (
    <img
      src={src}
      className={`max-h-52 max-w-52 md:max-h-72 md:max-w-72 lg:max-h-80 lg:max-w-80 xl:max-h-88 xl:max-w-88 2xl:max-h-96 2xl:max-w-96 ${className}`}
      {...props}
    />
  );
}

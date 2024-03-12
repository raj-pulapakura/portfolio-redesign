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
      className={`max-h-48 max-w-48 lg:max-h-56 lg:max-w-56 xl:max-h-64 xl:max-w-64 ${className}`}
      {...props}
    />
  );
}

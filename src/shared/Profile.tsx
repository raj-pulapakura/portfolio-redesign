import React from "react";

type ProfileProps = { useCircle?: boolean } & JSX.IntrinsicElements["img"];

export default function Profile({
  className,
  useCircle = false,
  ...props
}: ProfileProps) {
  const src = useCircle ? "/photos/profile_circle.png" : "/photos/profile.jpg";

  return (
    <img
      src={src}
      className={`max-h-52 max-w-52 md:max-h-72 md:max-w-72 ${className}`}
      {...props}
    />
  );
}

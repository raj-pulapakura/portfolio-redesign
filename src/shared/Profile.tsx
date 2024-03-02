import React from "react";

type ProfileProps = { useCircle?: boolean } & JSX.IntrinsicElements["img"];

export default function Profile({ useCircle = false, ...props }: ProfileProps) {
  const src = useCircle ? "/photos/profile_circle.png" : "/photos/profile.jpg";

  return <img src={src} {...props} />;
}

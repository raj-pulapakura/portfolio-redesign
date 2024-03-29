import Link, { LinkProps } from "next/link";
import React, { ReactNode } from "react";

export default function UnderlinedLink({
  className,
  href,
  children,
}: {
  className?: string;
  href: string;
  children?: ReactNode;
}) {
  return (
    <Link href={href} className={`underline underline-offset-2 ${className}`}>
      {children}
    </Link>
  );
}

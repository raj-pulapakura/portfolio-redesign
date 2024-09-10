import { ReactNode } from 'react';

export default function Chip({
  children,
  className,
  ...props
}: JSX.IntrinsicElements['div'] & { children?: ReactNode }) {
  return (
    <div
      className={`inline-block border-2 bg-primary font-bold py-1 px-3 w-fit rounded-full ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

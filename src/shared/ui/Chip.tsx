import { ReactNode } from 'react';

export default function Chip({
  children,
  className,
  ...props
}: JSX.IntrinsicElements['div'] & { children?: ReactNode }) {
  return (
    <div
      className={`inline-block bg-background text-primary font-bold font-sans py-2 px-4 w-fit text-md rounded-full ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

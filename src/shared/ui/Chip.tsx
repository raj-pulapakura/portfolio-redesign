import { ReactNode } from 'react';

export default function Chip({
  children,
  className,
  ...props
}: JSX.IntrinsicElements['div'] & { children?: ReactNode }) {
  return (
    <div
      className={`inline-block  bg-background text-primary font-bold py-2 px-4 w-fit text-[1rem] rounded-full ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

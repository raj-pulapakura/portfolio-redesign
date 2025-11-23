import { ReactNode } from 'react';

export default function Chip({
  children,
  className = '',
  ...props
}: JSX.IntrinsicElements['div'] & { children?: ReactNode }) {
  return (
    <div
      className={`inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.3em] text-secondary ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

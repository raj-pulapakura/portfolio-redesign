import type { ReactNode } from 'react';

interface SectionShellProps {
  id?: string;
  className?: string;
  children: ReactNode;
  backgroundClassName?: string;
}

const baseClass =
  'relative w-full px-6 py-20 md:px-10 lg:px-12 xl:px-16 flex justify-center';

export default function SectionShell({
  id,
  className = '',
  children,
  backgroundClassName = 'bg-background',
}: SectionShellProps) {
  const composedClass = `${baseClass} ${backgroundClassName} ${className}`.trim();

  return (
    <section id={id} className={composedClass}>
      <div className="w-full max-w-6xl">{children}</div>
    </section>
  );
}


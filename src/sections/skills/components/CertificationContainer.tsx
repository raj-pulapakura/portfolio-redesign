export default function CertificationContainer({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`${className} col-span-2 flex justify-center items-center`}>
      {children}
    </div>
  );
}

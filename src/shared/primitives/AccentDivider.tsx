interface AccentDividerProps {
  className?: string;
}

export default function AccentDivider({ className = '' }: AccentDividerProps) {
  return (
    <div
      className={`relative h-px w-full overflow-visible ${className}`.trim()}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent to-transparent opacity-60" />
    </div>
  );
}


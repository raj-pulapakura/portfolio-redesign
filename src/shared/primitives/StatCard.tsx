interface StatCardProps {
  label: string;
  value: string | number;
  helper?: string;
}

export default function StatCard({ label, value, helper }: StatCardProps) {
  return (
    <div className="glass-panel accent-outline p-6 rounded-2xl flex flex-col gap-2">
      <span className="text-sm uppercase tracking-[0.3em] text-secondary">
        {label}
      </span>
      <span className="text-3xl font-semibold text-primary">{value}</span>
      {helper && <span className="text-sm text-secondary">{helper}</span>}
    </div>
  );
}


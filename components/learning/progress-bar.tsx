type ProgressBarProps = {
  value: number;
  label: string;
};

export function ProgressBar({ value, label }: ProgressBarProps) {
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between text-sm text-slate">
        <span>{label}</span>
        <span>{Math.round(value * 100)}%</span>
      </div>
      <div className="h-3 overflow-hidden rounded-full bg-white/80 shadow-inner">
        <div
          className="h-full rounded-full bg-gradient-to-r from-pine to-moss transition-all duration-500"
          style={{ width: `${Math.max(value * 100, 6)}%` }}
        />
      </div>
    </div>
  );
}

import { cn } from "@/lib/utils";

type BadgeProps = {
  children: React.ReactNode;
  tone?: "sky" | "pine" | "moss" | "ember";
};

export function Badge({ children, tone = "sky" }: BadgeProps) {
  const tones = {
    sky: "bg-sky/70 text-ink",
    pine: "bg-pine/10 text-pine",
    moss: "bg-moss/15 text-pine",
    ember: "bg-ember/15 text-ember",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em]",
        tones[tone],
      )}
    >
      {children}
    </span>
  );
}

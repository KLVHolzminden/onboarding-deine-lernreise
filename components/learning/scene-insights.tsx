"use client";

import { useMemo, useState } from "react";
import { Compass, Lightbulb, Search } from "lucide-react";
import { Insight } from "@/lib/types";
import { cn } from "@/lib/utils";

type SceneInsightsProps = {
  insights: Insight[];
  openedInsightIds: string[];
  onOpenInsight: (insight: Insight) => void;
};

const categoryMeta = {
  praxis: {
    icon: Compass,
    badge: "Praxis-Insight",
  },
  didaktik: {
    icon: Lightbulb,
    badge: "Didaktik-Insight",
  },
  organisation: {
    icon: Search,
    badge: "Organisations-Insight",
  },
} as const;

export function SceneInsights({
  insights,
  openedInsightIds,
  onOpenInsight,
}: SceneInsightsProps) {
  const [openIds, setOpenIds] = useState<string[]>([]);

  const grouped = useMemo(
    () => ({
      cards: insights.filter((insight) => insight.triggerType === "card"),
      inline: insights.filter((insight) => insight.triggerType === "inline"),
    }),
    [insights],
  );

  if (!insights.length) return null;

  function toggleInsight(insight: Insight) {
    setOpenIds((current) =>
      current.includes(insight.id)
        ? current.filter((entry) => entry !== insight.id)
        : [...current, insight.id],
    );

    if (!openedInsightIds.includes(insight.id)) {
      onOpenInsight(insight);
    }
  }

  return (
    <div className="space-y-4 border-t border-mist pt-4">
      {grouped.cards.length ? (
        <div className="grid gap-3">
          {grouped.cards.map((insight) => {
            const meta = categoryMeta[insight.category];
            const Icon = meta.icon;
            const isOpen = openIds.includes(insight.id);
            const discovered = openedInsightIds.includes(insight.id);

            return (
              <div
                key={insight.id}
                className="rounded-[24px] border border-[#dfe8ee] bg-[#f5f9fc] p-4"
              >
                <button
                  type="button"
                  onClick={() => toggleInsight(insight)}
                  className="flex w-full items-start justify-between gap-4 text-left"
                >
                  <div className="space-y-2">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-slate">
                        <Icon className="h-3.5 w-3.5" />
                        {meta.badge}
                      </span>
                      {discovered ? (
                        <span className="rounded-full bg-[#e8f1eb] px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-ink">
                          entdeckt
                        </span>
                      ) : null}
                    </div>
                    <div>
                      <p className="text-base font-semibold text-ink">{insight.triggerLabel}</p>
                      <p className="mt-1 text-sm leading-6 text-slate">{insight.title}</p>
                    </div>
                  </div>
                  <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-slate">
                    +{insight.points}
                  </span>
                </button>

                {isOpen ? (
                  <div className="mt-4 rounded-[20px] border border-white bg-white/80 p-4">
                    <p className="text-sm font-semibold text-ink">{insight.title}</p>
                    <p className="mt-2 text-sm leading-7 text-slate">{insight.content}</p>
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>
      ) : null}

      {grouped.inline.length ? (
        <div className="flex flex-wrap gap-x-5 gap-y-2">
          {grouped.inline.map((insight) => {
            const isOpen = openIds.includes(insight.id);
            const discovered = openedInsightIds.includes(insight.id);

            return (
              <div key={insight.id} className="w-full">
                <button
                  type="button"
                  onClick={() => toggleInsight(insight)}
                  className={cn(
                    "inline-flex items-center gap-2 text-sm font-medium transition",
                    isOpen || discovered
                      ? "text-ink"
                      : "text-[#496a8e] hover:text-ink",
                  )}
                >
                  <span>{insight.triggerLabel}</span>
                  <span aria-hidden="true">→</span>
                </button>

                {isOpen ? (
                  <div className="mt-3 rounded-[18px] border border-[#dfe8ee] bg-[#f7fafc] p-4">
                    <p className="text-sm font-semibold text-ink">{insight.title}</p>
                    <p className="mt-2 text-sm leading-7 text-slate">{insight.content}</p>
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>
      ) : null}
    </div>
  );
}

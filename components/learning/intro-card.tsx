"use client";

import { ArrowRight } from "lucide-react";
import { IntroScene } from "@/lib/types";
import { SceneInsights } from "@/components/learning/scene-insights";
import { SceneShell } from "@/components/learning/scene-shell";

type IntroCardProps = {
  scene: IntroScene;
  openedInsightIds: string[];
  onOpenInsight: (insightId: string, points: number) => void;
  onComplete: () => void;
};

export function IntroCard({
  scene,
  openedInsightIds,
  onOpenInsight,
  onComplete,
}: IntroCardProps) {
  return (
    <SceneShell {...scene}>
      <div className="grid gap-4 md:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-3xl bg-sand/60 p-5">
          <p className="text-sm leading-7 text-slate">
            {scene.context ??
              "Diese Szene gibt dir einen klaren Orientierungsimpuls, bevor es in die nächste Aktivierung geht."}
          </p>
        </div>
        <div className="rounded-3xl bg-ink p-5 text-white">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/70">
            Was dich hier erwartet
          </p>
          <div className="mt-3 space-y-3">
            {scene.highlights?.map((highlight) => (
              <div key={highlight} className="flex gap-3 text-sm leading-6 text-white/90">
                <ArrowRight className="mt-1 h-4 w-4 shrink-0" />
                <span>{highlight}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {scene.insights?.length ? (
        <SceneInsights
          insights={scene.insights}
          openedInsightIds={openedInsightIds}
          onOpenInsight={(insight) => onOpenInsight(insight.id, insight.points)}
        />
      ) : null}

      <div className="pt-2">
        <button
          type="button"
          onClick={onComplete}
          className="rounded-full bg-ink px-5 py-3 text-sm font-semibold text-white transition hover:bg-pine"
        >
          Weiter
        </button>
      </div>
    </SceneShell>
  );
}

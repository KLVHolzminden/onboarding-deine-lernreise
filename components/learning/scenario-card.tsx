"use client";

import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { SceneInsights } from "@/components/learning/scene-insights";
import { ScenarioScene } from "@/lib/types";
import { cn } from "@/lib/utils";
import { SceneShell } from "@/components/learning/scene-shell";

type ScenarioCardProps = {
  scene: ScenarioScene;
  savedAnswer?: string;
  openedInsightIds: string[];
  onOpenInsight: (insightId: string, points: number) => void;
  onComplete: (answer: string) => void;
};

export function ScenarioCard({
  scene,
  savedAnswer,
  openedInsightIds,
  onOpenInsight,
  onComplete,
}: ScenarioCardProps) {
  const [selected, setSelected] = useState<string>(savedAnswer ?? "");
  const active = scene.options.find((option) => option.id === selected);

  return (
    <SceneShell {...scene}>
      <div className="grid gap-4">
        {scene.options.map((option) => {
          const isSelected = selected === option.id;
          return (
            <button
              key={option.id}
              type="button"
              onClick={() => setSelected(option.id)}
              className={cn(
                "rounded-3xl border px-5 py-5 text-left transition duration-200",
                isSelected
                  ? "border-pine bg-pine/6 shadow-sm"
                  : "border-mist bg-sand/30 hover:border-sky hover:bg-sky/20",
              )}
            >
              <div className="flex items-start justify-between gap-4">
                <p className="text-base leading-7 text-ink">{option.label}</p>
                {isSelected ? <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-pine" /> : null}
              </div>
            </button>
          );
        })}
      </div>

      {active ? (
        <div className="rounded-3xl border border-pine/15 bg-pine/5 p-5">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-pine">Feedback</p>
          <p className="mt-2 text-base leading-7 text-ink">{active.insight}</p>
        </div>
      ) : null}

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
          disabled={!selected}
          onClick={() => onComplete(selected)}
          className="rounded-full bg-ink px-5 py-3 text-sm font-semibold text-white transition hover:bg-pine disabled:cursor-not-allowed disabled:bg-slate/40"
        >
          Antwort sichern
        </button>
      </div>
    </SceneShell>
  );
}

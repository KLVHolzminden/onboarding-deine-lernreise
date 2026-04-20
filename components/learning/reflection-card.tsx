"use client";

import { useState } from "react";
import { SceneInsights } from "@/components/learning/scene-insights";
import { ReflectionScene } from "@/lib/types";
import { SceneShell } from "@/components/learning/scene-shell";

type ReflectionCardProps = {
  scene: ReflectionScene;
  savedReflections: Record<string, string>;
  openedInsightIds: string[];
  onOpenInsight: (insightId: string, points: number) => void;
  onComplete: (answer: Record<string, string>) => void;
};

export function ReflectionCard({
  scene,
  savedReflections,
  openedInsightIds,
  onOpenInsight,
  onComplete,
}: ReflectionCardProps) {
  const [values, setValues] = useState<Record<string, string>>(
    scene.prompts.reduce<Record<string, string>>((accumulator, prompt) => {
      accumulator[prompt.id] = savedReflections[prompt.id] ?? "";
      return accumulator;
    }, {}),
  );

  const canSave = Object.values(values).some((value) => value.trim().length > 0);

  return (
    <SceneShell {...scene}>
      <div className="grid gap-4">
        {scene.prompts.map((prompt) => (
          <label key={prompt.id} className="grid gap-2">
            <span className="text-sm font-semibold text-ink">{prompt.label}</span>
            <textarea
              value={values[prompt.id] ?? ""}
              onChange={(event) =>
                setValues((current) => ({
                  ...current,
                  [prompt.id]: event.target.value,
                }))
              }
              rows={4}
              placeholder={prompt.placeholder}
              className="min-h-[120px] rounded-3xl border border-mist bg-sand/30 px-4 py-4 text-base leading-7 text-ink outline-none transition focus:border-pine"
            />
          </label>
        ))}
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
          disabled={!canSave}
          onClick={() => onComplete(values)}
          className="rounded-full bg-ink px-5 py-3 text-sm font-semibold text-white transition hover:bg-pine disabled:cursor-not-allowed disabled:bg-slate/40"
        >
          Reflexion festhalten
        </button>
      </div>
    </SceneShell>
  );
}

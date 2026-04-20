"use client";

import { useMemo, useState } from "react";
import { ArrowDown, ArrowUp } from "lucide-react";
import { SceneInsights } from "@/components/learning/scene-insights";
import { OrderingScene } from "@/lib/types";
import { SceneShell } from "@/components/learning/scene-shell";

type OrderingCardProps = {
  scene: OrderingScene;
  savedAnswer?: string[];
  openedInsightIds: string[];
  onOpenInsight: (insightId: string, points: number) => void;
  onComplete: (answer: string[]) => void;
};

export function OrderingCard({
  scene,
  savedAnswer,
  openedInsightIds,
  onOpenInsight,
  onComplete,
}: OrderingCardProps) {
  const initialSteps = useMemo(() => {
    if (!savedAnswer?.length) return scene.steps;
    return savedAnswer
      .map((id) => scene.steps.find((step) => step.id === id))
      .filter(Boolean) as OrderingScene["steps"];
  }, [savedAnswer, scene.steps]);

  const [steps, setSteps] = useState(initialSteps);

  const orderIds = steps.map((step) => step.id);
  const isCorrect = JSON.stringify(orderIds) === JSON.stringify(scene.correctOrder);

  function move(index: number, direction: -1 | 1) {
    const nextIndex = index + direction;
    if (nextIndex < 0 || nextIndex >= steps.length) return;
    const cloned = [...steps];
    const temp = cloned[index];
    cloned[index] = cloned[nextIndex];
    cloned[nextIndex] = temp;
    setSteps(cloned);
  }

  return (
    <SceneShell {...scene}>
      <div className="space-y-3">
        {steps.map((step, index) => (
          <div
            key={step.id}
            className="flex items-center justify-between gap-4 rounded-3xl border border-mist bg-sand/35 px-5 py-4"
          >
            <div className="flex items-center gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-sm font-semibold text-ink shadow-sm">
                {index + 1}
              </div>
              <p className="text-base leading-7 text-ink">{step.label}</p>
            </div>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => move(index, -1)}
                className="rounded-full border border-mist bg-white p-2 text-slate transition hover:border-pine hover:text-pine"
              >
                <ArrowUp className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={() => move(index, 1)}
                className="rounded-full border border-mist bg-white p-2 text-slate transition hover:border-pine hover:text-pine"
              >
                <ArrowDown className="h-4 w-4" />
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="rounded-3xl border border-pine/15 bg-pine/5 p-5">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-pine">Feedback</p>
        <p className="mt-2 text-base leading-7 text-ink">
          {isCorrect ? scene.feedback.success : scene.feedback.gentle}
        </p>
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
          onClick={() => onComplete(orderIds)}
          className="rounded-full bg-ink px-5 py-3 text-sm font-semibold text-white transition hover:bg-pine"
        >
          Reihenfolge speichern
        </button>
      </div>
    </SceneShell>
  );
}

"use client";

import { useMemo, useState } from "react";
import { SceneInsights } from "@/components/learning/scene-insights";
import { MatchingScene } from "@/lib/types";
import { SceneShell } from "@/components/learning/scene-shell";

type MatchingCardProps = {
  scene: MatchingScene;
  savedAnswer?: Record<string, string>;
  openedInsightIds: string[];
  onOpenInsight: (insightId: string, points: number) => void;
  onComplete: (answer: Record<string, string>) => void;
};

export function MatchingCard({
  scene,
  savedAnswer,
  openedInsightIds,
  onOpenInsight,
  onComplete,
}: MatchingCardProps) {
  const [assignments, setAssignments] = useState<Record<string, string>>(savedAnswer ?? {});

  const complete = useMemo(
    () => scene.pairs.every((pair) => assignments[pair.id]),
    [assignments, scene.pairs],
  );

  const score = useMemo(() => {
    return scene.pairs.filter((pair) => assignments[pair.id] === scene.answers[pair.id]).length;
  }, [assignments, scene.answers, scene.pairs]);

  const message =
    score === scene.pairs.length ? scene.feedback.success : scene.feedback.gentle;

  return (
    <SceneShell {...scene}>
      <div className="grid gap-4">
        {scene.pairs.map((pair) => (
          <div
            key={pair.id}
            className="grid gap-3 rounded-3xl border border-mist bg-sand/35 p-4 md:grid-cols-[1fr_240px]"
          >
            <p className="text-base leading-7 text-ink">{pair.label}</p>
            <select
              value={assignments[pair.id] ?? ""}
              onChange={(event) =>
                setAssignments((current) => ({
                  ...current,
                  [pair.id]: event.target.value,
                }))
              }
              className="rounded-2xl border border-mist bg-white px-4 py-3 text-sm text-ink outline-none transition focus:border-pine"
            >
              <option value="">Bitte zuordnen</option>
              {scene.targets.map((target) => (
                <option key={target.id} value={target.id}>
                  {target.label}
                </option>
              ))}
            </select>
          </div>
        ))}
      </div>

      <div className="rounded-3xl border border-sky bg-sky/35 p-5">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ink">Orientierung</p>
        <div className="mt-3 grid gap-3 md:grid-cols-3">
          {scene.targets.map((target) => (
            <div key={target.id} className="rounded-2xl bg-white/75 p-4">
              <p className="font-semibold text-ink">{target.label}</p>
              {target.description ? (
                <p className="mt-1 text-sm leading-6 text-slate">{target.description}</p>
              ) : null}
            </div>
          ))}
        </div>
      </div>

      {complete ? (
        <div className="rounded-3xl border border-pine/15 bg-pine/5 p-5">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-pine">Feedback</p>
          <p className="mt-2 text-base leading-7 text-ink">{message}</p>
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
          disabled={!complete}
          onClick={() => onComplete(assignments)}
          className="rounded-full bg-ink px-5 py-3 text-sm font-semibold text-white transition hover:bg-pine disabled:cursor-not-allowed disabled:bg-slate/40"
        >
          Zuordnung speichern
        </button>
      </div>
    </SceneShell>
  );
}

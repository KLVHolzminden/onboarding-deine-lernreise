"use client";

import { CheckCircle2, PlayCircle } from "lucide-react";
import { Chapter } from "@/lib/types";
import { InsightCounter } from "@/components/learning/insight-counter";
import { cn, countChapterCompletion, countChapterInsights } from "@/lib/utils";

type ChapterSidebarProps = {
  chapters: Chapter[];
  currentSceneId: string | null;
  completedSceneIds: string[];
  openedInsightIds: string[];
  onJumpToScene: (sceneId: string) => void;
};

export function ChapterSidebar({
  chapters,
  currentSceneId,
  completedSceneIds,
  openedInsightIds,
  onJumpToScene,
}: ChapterSidebarProps) {
  return (
    <aside className="max-h-[78vh] space-y-4 overflow-y-auto rounded-[28px] border border-white/70 bg-white/92 p-5 shadow-card backdrop-blur">
      <div className="space-y-1">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate">
          Lernreise
        </p>
        <h2 className="font-display text-2xl text-ink">Episoden</h2>
      </div>

      <div className="space-y-3">
        {chapters.map((chapter, index) => {
          const chapterSceneIds = chapter.scenes.map((scene) => scene.id);
          const completion = countChapterCompletion(chapterSceneIds, completedSceneIds);
          const insights = countChapterInsights(chapter, openedInsightIds);
          const isActive = chapterSceneIds.includes(currentSceneId ?? "");

          return (
            <button
              key={chapter.id}
              type="button"
              onClick={() => onJumpToScene(chapter.scenes[0]?.id)}
              className={cn(
                "w-full rounded-3xl border px-4 py-4 text-left transition duration-200",
                isActive
                  ? "border-pine/30 bg-pine/5 shadow-sm"
                  : "border-mist bg-sand/30 hover:border-sky hover:bg-sky/25",
              )}
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate">
                    Kapitel {index + 1}
                  </p>
                  <h3 className="mt-1 text-base font-semibold text-ink">{chapter.shortTitle}</h3>
                  <p className="mt-1 text-sm leading-6 text-slate">{chapter.objective}</p>
                </div>
                {completion.ratio === 1 ? (
                  <CheckCircle2 className="mt-1 h-5 w-5 text-pine" />
                ) : (
                  <PlayCircle className="mt-1 h-5 w-5 text-slate" />
                )}
              </div>
              <div className="mt-3 h-2 overflow-hidden rounded-full bg-mist">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-pine to-moss"
                  style={{ width: `${completion.ratio * 100}%` }}
                />
              </div>
              <div className="mt-3">
                <InsightCounter
                  discovered={insights.discovered}
                  total={insights.total}
                  points={insights.points}
                  compact
                />
              </div>
            </button>
          );
        })}
      </div>
    </aside>
  );
}

"use client";

import { ArrowRight, RotateCcw } from "lucide-react";
import { Chapter } from "@/lib/types";
import { InsightCounter } from "@/components/learning/insight-counter";

type ChapterSummaryCardProps = {
  chapter: Chapter;
  discovered: number;
  total: number;
  points: number;
  onContinue: () => void;
  onReviewChapter: () => void;
};

export function ChapterSummaryCard({
  chapter,
  discovered,
  total,
  points,
  onContinue,
  onReviewChapter,
}: ChapterSummaryCardProps) {
  return (
    <section className="rounded-[32px] border border-white/70 bg-white/90 p-6 shadow-soft backdrop-blur md:p-8">
      <div className="grid gap-6 md:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-5">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-pine">
            Kapitel abgeschlossen
          </p>
          <h2 className="font-display text-4xl leading-tight text-ink">{chapter.title}</h2>
          <p className="text-lg leading-8 text-slate">
            Du hast dieses Kapitel abgeschlossen und dabei freiwillige Einblicke in Praxis,
            Didaktik und Organisation gesammelt.
          </p>

          <InsightCounter discovered={discovered} total={total} points={points} />

          <div className="rounded-[24px] border border-[#e6ebef] bg-[#f8fafb] p-5">
            <p className="text-sm leading-7 text-slate">
              {discovered < total
                ? "Es wartet noch mindestens ein weiterer Insight auf dich. Du kannst später noch einmal in dieses Kapitel zurückspringen."
                : "Du hast alle verfügbaren Insights dieses Kapitels entdeckt. Das stärkt deine Orientierung für den nächsten Abschnitt."}
            </p>
          </div>
        </div>

        <div className="space-y-4 rounded-[28px] bg-ink p-6 text-white shadow-card">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/70">
            Dein nächster Schritt
          </p>
          <div className="space-y-3 text-sm leading-6 text-white/88">
            <p>Du kannst direkt in das nächste Kapitel weitergehen.</p>
            <p>
              Oder du springst noch einmal zurück und entdeckst weitere Insights in diesem
              Abschnitt.
            </p>
          </div>

          <div className="space-y-3 pt-2">
            <button
              type="button"
              onClick={onContinue}
              className="flex w-full items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-ink transition hover:bg-sand"
            >
              Weiter zum nächsten Kapitel
              <ArrowRight className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={onReviewChapter}
              className="flex w-full items-center justify-center gap-2 rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-white transition hover:border-white/40 hover:bg-white/5"
            >
              <RotateCcw className="h-4 w-4" />
              Kapitel erneut ansehen
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

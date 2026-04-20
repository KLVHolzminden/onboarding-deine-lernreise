"use client";

import { Download, RotateCcw } from "lucide-react";
import { InsightCounter } from "@/components/learning/insight-counter";
import { Course, ProgressState } from "@/lib/types";
import { countTotalInsights, summarizeProfile } from "@/lib/utils";

type CompletionViewProps = {
  course: Course;
  progress: ProgressState;
  onRestart: () => void;
};

export function CompletionView({ course, progress, onRestart }: CompletionViewProps) {
  const reflections = Object.entries(progress.reflections).filter(([, value]) => value.trim());
  const profile = summarizeProfile(progress.reflections);
  const insightSummary = countTotalInsights(course, progress.openedInsightIds);
  const award =
    insightSummary.discovered >= Math.max(1, insightSummary.total - 2)
      ? "Didaktik-Scout"
      : insightSummary.discovered >= Math.ceil(insightSummary.total / 2)
        ? "Praxis-Entdecker*in"
        : "Neugierig unterwegs";

  function exportReflections() {
    const content = [
      course.title,
      course.subtitle,
      "",
      "Persönliches Abschlussprofil",
      profile,
      "",
      "Insight-Zusammenfassung",
      `${insightSummary.discovered} von ${insightSummary.total} Insights entdeckt`,
      `${progress.insightPoints} Insight-Punkte gesammelt`,
      "",
      "Reflexionsnotizen",
      ...reflections.map(([key, value]) => `${key}: ${value}`),
    ].join("\n");

    const blob = new Blob([content], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = "lsb-lernreise-reflexion.txt";
    anchor.click();
    URL.revokeObjectURL(url);
  }

  return (
    <section className="rounded-[32px] border border-white/70 bg-white/90 p-6 shadow-soft backdrop-blur md:p-8">
      <div className="grid gap-6 md:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-5">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-pine">
            Abschluss
          </p>
          <h2 className="font-display text-4xl leading-tight text-ink">
            Dein Startprofil als Referent*in
          </h2>
          <p className="text-lg leading-8 text-ink/90">{profile}</p>

          <div className="rounded-3xl border border-pine/15 bg-pine/5 p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-pine">
              Was du gelernt hast
            </p>
            <div className="mt-3 grid gap-3 text-base leading-7 text-ink">
              <p>Du hast die Rolle als Lernbegleitung klarer gefasst.</p>
              <p>Du kannst Organisation, Lehrteam und Zuständigkeiten besser einordnen.</p>
              <p>Du hast Methoden, Haltung und nächste Schritte für deinen Einstieg reflektiert.</p>
            </div>
          </div>

          <div className="rounded-3xl border border-[#dfe8ee] bg-[#f6fafc] p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate">
              Exploration
            </p>
            <div className="mt-3">
              <InsightCounter
                discovered={insightSummary.discovered}
                total={insightSummary.total}
                points={progress.insightPoints}
              />
            </div>
            <p className="mt-4 text-sm leading-6 text-slate">
              Du hast nicht nur den Lernpfad durchlaufen, sondern auch zusätzliche Einblicke
              entdeckt. Das ist eine gute Grundlage für deinen Start als Referent*in.
            </p>
          </div>
        </div>

        <div className="space-y-4 rounded-[28px] bg-ink p-6 text-white shadow-card">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/70">
              Empfehlungskarten
            </p>
            <div className="mt-4 space-y-3 text-sm leading-6 text-white/90">
              <p>
                Hospitation: Schau bei einem Lehrgang mit dem Fokus auf Einstiege und Aktivierung
                mit.
              </p>
              <p>
                Team-Teaching: Plane einen ersten Einsatz gemeinsam mit einer erfahrenen Person.
              </p>
              <p>
                Nachbereitung: Vereinbare ein kurzes Auswertungsgespräch nach deinem ersten
                Lehrgang.
              </p>
              <p>
                Weiterqualifizierung: Nutze passende Fortbildungen und Kontakte im Sportbund als
                Anschluss.
              </p>
            </div>
          </div>

          <div className="rounded-3xl bg-white/8 p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/70">
              Ruhige Auszeichnung
            </p>
            <p className="mt-3 text-xl font-semibold">{award}</p>
            <p className="mt-2 text-sm leading-6 text-white/80">
              Deine zusätzlich entdeckten Insights zeigen, dass du Inhalte nicht nur bearbeitet,
              sondern aktiv erkundet hast.
            </p>
          </div>

          <div className="space-y-3 pt-2">
            <button
              type="button"
              onClick={exportReflections}
              className="flex w-full items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-ink transition hover:bg-sand"
            >
              <Download className="h-4 w-4" />
              Reflexion als Text exportieren
            </button>
            <button
              type="button"
              onClick={onRestart}
              className="flex w-full items-center justify-center gap-2 rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-white transition hover:border-white/40 hover:bg-white/5"
            >
              <RotateCcw className="h-4 w-4" />
              Lernreise neu starten
            </button>
          </div>
        </div>
      </div>

      {reflections.length ? (
        <div className="mt-6 rounded-3xl border border-mist bg-sand/35 p-5">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate">
            Deine Notizen
          </p>
          <div className="mt-3 grid gap-3 md:grid-cols-2">
            {reflections.map(([key, value]) => (
              <div key={key} className="rounded-2xl bg-white/80 p-4">
                <p className="text-sm font-semibold text-ink">{key}</p>
                <p className="mt-2 text-sm leading-6 text-slate">{value}</p>
              </div>
            ))}
          </div>
        </div>
      ) : null}
    </section>
  );
}

"use client";

import { ArrowRight, Compass, Power, Sparkles, Users2 } from "lucide-react";
import { Course, ProgressState } from "@/lib/types";
import { ProgressBar } from "@/components/learning/progress-bar";

type StartScreenProps = {
  course: Course;
  progress: ProgressState;
  onStart: () => void;
  onResume: () => void;
  onClose?: () => void;
  notice?: string | null;
};

export function StartScreen({
  course,
  progress,
  onStart,
  onResume,
  onClose,
  notice,
}: StartScreenProps) {
  const totalScenes = course.chapters.flatMap((chapter) => chapter.scenes).length;
  const hasProgress = progress.started && progress.completedSceneIds.length > 0;
  const progressValue = totalScenes ? progress.completedSceneIds.length / totalScenes : 0;

  return (
    <section className="rounded-[36px] border border-white/70 bg-white/85 p-6 shadow-soft backdrop-blur md:p-8">
      <div className="grid gap-8 md:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-6">
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-pine">
              LandesSportBund Niedersachsen e.V.
            </p>
            <div className="flex flex-wrap gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate">
              <span className="rounded-full bg-sand px-3 py-1">Testversion</span>
              <span className="rounded-full bg-sand px-3 py-1">Interaktive Lernreise</span>
              <span className="rounded-full bg-sand px-3 py-1">ca. 20 Minuten</span>
            </div>
            <h1 className="max-w-[12ch] font-display text-5xl leading-[1.02] text-ink [text-wrap:balance] md:max-w-[11ch] md:text-6xl">
              {course.title}
            </h1>
            <p className="max-w-[34rem] text-lg leading-8 text-slate">{course.intro}</p>
            <p className="max-w-[34rem] text-base leading-7 text-slate">
              Eine ruhige, szenariobasierte Lernumgebung f\u00fcr den Einstieg neuer Referierender
              im LSB Niedersachsen.
            </p>
            {notice ? (
              <div className="max-w-[34rem] rounded-3xl border border-pine/15 bg-pine/5 px-4 py-3 text-sm leading-6 text-ink">
                {notice}
              </div>
            ) : null}
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <div className="peripheral-ui rounded-3xl bg-sand/60 p-5">
              <Compass className="h-6 w-6 text-pine" />
              <h2 className="mt-3 text-lg font-semibold text-ink">Orientierung</h2>
              <p className="mt-2 text-sm leading-6 text-slate">
                Du lernst das System, die Rollen und die Unterst\u00fctzung passend zu echten
                Situationen kennen.
              </p>
            </div>
            <div className="peripheral-ui rounded-3xl bg-sky/40 p-5">
              <Users2 className="h-6 w-6 text-ink" />
              <h2 className="mt-3 text-lg font-semibold text-ink">Handlungssicherheit</h2>
              <p className="mt-2 text-sm leading-6 text-slate">
                Entscheidungen, Mini-F\u00e4lle und Reflexionen bereiten dich auf deinen ersten
                Lehrgang vor.
              </p>
            </div>
            <div className="peripheral-ui rounded-3xl bg-pine p-5 text-white">
              <Sparkles className="h-6 w-6" />
              <h2 className="mt-3 text-lg font-semibold">Motivation</h2>
              <p className="mt-2 text-sm leading-6 text-white/85">
                Die App st\u00e4rkt dein Rollenbild und endet mit einem realistischen n\u00e4chsten
                Schritt.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            <button
              type="button"
              onClick={hasProgress ? onResume : onStart}
              className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white transition hover:bg-pine"
            >
              {hasProgress ? "Lernreise fortsetzen" : "Lernreise starten"}
              <ArrowRight className="h-4 w-4" />
            </button>
            {hasProgress ? (
              <button
                type="button"
                onClick={onStart}
                className="peripheral-ui rounded-full border border-mist bg-white px-6 py-3 text-sm font-semibold text-ink transition hover:border-pine hover:text-pine"
              >
                Neu beginnen
              </button>
            ) : null}
            {onClose ? (
              <button
                type="button"
                onClick={onClose}
                className="peripheral-ui inline-flex items-center gap-2 rounded-full border border-mist bg-white px-6 py-3 text-sm font-semibold text-ink transition hover:border-rose-300 hover:text-rose-700"
              >
                <Power className="h-4 w-4" />
                Schlie\u00dfen
              </button>
            ) : null}
          </div>
        </div>

        <div className="space-y-5 rounded-[32px] bg-ink p-6 text-white shadow-card">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/65">
              Lernarchitektur
            </p>
            <div className="mt-4 space-y-4 text-sm leading-6 text-white/88">
              <p>Situation oder Fall</p>
              <p>Entscheidung, Zuordnung oder Reaktion</p>
              <p>Direktes Feedback</p>
              <p>Merksatz und Transfer in die Praxis</p>
            </div>
          </div>

          <div className="peripheral-ui rounded-3xl bg-white/8 p-5">
            <ProgressBar value={progressValue} label="Dein aktueller Stand" />
            <p className="mt-4 text-sm leading-6 text-white/75">
              {hasProgress
                ? "Du kannst an deiner letzten Stelle weitermachen. Fortschritt und Reflexionen werden lokal in diesem Browser gespeichert."
                : "Die Lernreise umfasst 6 Episoden mit kompakten Mikro-Szenen, wechselnden Aktivierungsformen und einer klaren Lernarchitektur."}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Home, PanelsTopLeft, Power, X } from "lucide-react";
import { ChapterSummaryCard } from "@/components/learning/chapter-summary-card";
import { ChapterSidebar } from "@/components/learning/chapter-sidebar";
import { CompletionView } from "@/components/learning/completion-view";
import { InsightCounter } from "@/components/learning/insight-counter";
import { IntroCard } from "@/components/learning/intro-card";
import { MatchingCard } from "@/components/learning/matching-card";
import { OrderingCard } from "@/components/learning/ordering-card";
import { ProgressBar } from "@/components/learning/progress-bar";
import { ReflectionCard } from "@/components/learning/reflection-card";
import { ScenarioCard } from "@/components/learning/scenario-card";
import { StartScreen } from "@/components/learning/start-screen";
import { onboardingCourse } from "@/data/course";
import { STORAGE_KEY, defaultProgress, readProgress, writeProgress } from "@/lib/storage";
import { Course, ProgressState, Scene, SceneResponseValue } from "@/lib/types";
import {
  countChapterInsights,
  flattenScenes,
  getChapterForScene,
  getCompletionRatio,
  getSceneIndex,
} from "@/lib/utils";

const course: Course = onboardingCourse;
const allScenes = flattenScenes(course);
const allSceneIds = new Set(allScenes.map((scene) => scene.id));
const allInsightIds = new Set(
  course.chapters.flatMap((chapter) =>
    chapter.scenes.flatMap((scene) => (scene.insights ?? []).map((insight) => insight.id)),
  ),
);

function mergeCompleted(existing: string[], sceneId: string) {
  return existing.includes(sceneId) ? existing : [...existing, sceneId];
}

function normalizeProgressState(initial: ProgressState): ProgressState {
  const validCompleted = initial.completedSceneIds.filter((id) => allSceneIds.has(id));
  const validAnswers = Object.fromEntries(
    Object.entries(initial.answers).filter(([id]) => allSceneIds.has(id)),
  );
  const validOpenedInsights = initial.openedInsightIds.filter((id) => allInsightIds.has(id));

  const currentSceneId =
    initial.currentSceneId && allSceneIds.has(initial.currentSceneId)
      ? initial.currentSceneId
      : validCompleted.length === allScenes.length
        ? allScenes[allScenes.length - 1]?.id ?? null
        : allScenes.find((scene) => !validCompleted.includes(scene.id))?.id ??
          allScenes[0]?.id ??
          null;

  return {
    ...initial,
    completedSceneIds: validCompleted,
    answers: validAnswers,
    openedInsightIds: validOpenedInsights,
    insightPoints: initial.insightPoints ?? validOpenedInsights.length,
    currentSceneId,
    started: initial.started || validCompleted.length > 0,
  };
}

export function LearningApp() {
  const [hydrated, setHydrated] = useState(false);
  const [progress, setProgress] = useState<ProgressState>(defaultProgress);
  const [view, setView] = useState<"start" | "journey" | "chapterSummary" | "done">("start");
  const [isEpisodePanelOpen, setIsEpisodePanelOpen] = useState(false);
  const [summaryChapterId, setSummaryChapterId] = useState<string | null>(null);
  const [closeNotice, setCloseNotice] = useState<string | null>(null);
  const [localAppControlsEnabled, setLocalAppControlsEnabled] = useState(false);
  const progressRef = useRef(progress);
  const localAppControlsEnabledRef = useRef(localAppControlsEnabled);

  useEffect(() => {
    progressRef.current = progress;
  }, [progress]);

  useEffect(() => {
    localAppControlsEnabledRef.current = localAppControlsEnabled;
  }, [localAppControlsEnabled]);

  useEffect(() => {
    const initial = normalizeProgressState(readProgress());
    setProgress(initial);
    if (initial.completedSceneIds.length === allScenes.length) {
      setView("done");
    } else if (initial.started && initial.currentSceneId) {
      setView("journey");
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    writeProgress({
      ...progress,
      updatedAt: new Date().toISOString(),
    });
  }, [hydrated, progress]);

  useEffect(() => {
    if (!hydrated || typeof window === "undefined") return;

    let cancelled = false;
    let heartbeatInterval: number | null = null;

    async function sendHeartbeat() {
      try {
        const response = await fetch("/api/local-app/heartbeat", {
          method: "POST",
          cache: "no-store",
        });

        if (!response.ok) {
          throw new Error("heartbeat_failed");
        }

        const payload = (await response.json()) as { enabled?: boolean };
        if (!cancelled) {
          setLocalAppControlsEnabled(Boolean(payload.enabled));
        }
      } catch {
        if (!cancelled) {
          setLocalAppControlsEnabled(false);
        }
      }
    }

    function persistAndShutdown() {
      writeProgress({
        ...progressRef.current,
        updatedAt: new Date().toISOString(),
      });

      if (!localAppControlsEnabledRef.current) {
        return;
      }

      if (navigator.sendBeacon) {
        navigator.sendBeacon("/api/local-app/shutdown");
        return;
      }

      void fetch("/api/local-app/shutdown", {
        method: "POST",
        cache: "no-store",
        keepalive: true,
      });
    }

    void sendHeartbeat();
    heartbeatInterval = window.setInterval(() => {
      void sendHeartbeat();
    }, 8000);

    window.addEventListener("pagehide", persistAndShutdown);
    window.addEventListener("beforeunload", persistAndShutdown);

    return () => {
      cancelled = true;
      if (heartbeatInterval) {
        window.clearInterval(heartbeatInterval);
      }
      window.removeEventListener("pagehide", persistAndShutdown);
      window.removeEventListener("beforeunload", persistAndShutdown);
    };
  }, [hydrated]);

  const currentIndex = useMemo(
    () => getSceneIndex(course, progress.currentSceneId),
    [progress.currentSceneId],
  );

  const currentScene: Scene | undefined = currentIndex >= 0 ? allScenes[currentIndex] : undefined;
  const completionRatio = getCompletionRatio(course, progress.completedSceneIds);
  const currentChapter = getChapterForScene(course, progress.currentSceneId);
  const currentChapterInsights = currentChapter
    ? countChapterInsights(currentChapter, progress.openedInsightIds)
    : { discovered: 0, total: 0, points: 0 };

  async function handleCloseApp() {
    writeProgress({
      ...progressRef.current,
      updatedAt: new Date().toISOString(),
    });

    if (!localAppControlsEnabledRef.current) {
      setIsEpisodePanelOpen(false);
      setSummaryChapterId(null);
      setCloseNotice(
        "Fortschritt gespeichert. Du kannst dieses Fenster jetzt schlie\u00dfen oder die Lernreise sp\u00e4ter fortsetzen.",
      );
      setView("start");
      return;
    }

    try {
      await fetch("/api/local-app/shutdown", {
        method: "POST",
        cache: "no-store",
        keepalive: true,
      });
    } catch {
      // The local app may already be shutting down before the request resolves.
    }

    if (typeof window !== "undefined") {
      window.close();
      window.setTimeout(() => {
        if (!window.closed) {
          window.location.href = "about:blank";
        }
      }, 300);
    }
  }

  function startJourney(reset = false) {
    const firstSceneId = allScenes[0]?.id ?? null;
    const nextProgress = reset
      ? {
          ...defaultProgress,
          started: true,
          currentSceneId: firstSceneId,
          startedAt: new Date().toISOString(),
        }
      : {
          ...progress,
          started: true,
          currentSceneId: progress.currentSceneId ?? firstSceneId,
          startedAt: progress.startedAt ?? new Date().toISOString(),
        };

    setCloseNotice(null);
    setProgress(nextProgress);
    setSummaryChapterId(null);
    setView("journey");
  }

  function jumpToScene(sceneId: string) {
    setCloseNotice(null);
    setProgress((current) => ({
      ...current,
      currentSceneId: sceneId,
    }));
    setSummaryChapterId(null);
    setIsEpisodePanelOpen(false);
    setView("journey");
  }

  function goToNextScene() {
    const nextScene = allScenes[currentIndex + 1];
    if (!nextScene) {
      setSummaryChapterId(null);
      setView("done");
      return;
    }

    setProgress((current) => ({
      ...current,
      currentSceneId: nextScene.id,
    }));
  }

  function goToPreviousScene() {
    const previousScene = allScenes[currentIndex - 1];
    if (!previousScene) {
      setSummaryChapterId(null);
      setCloseNotice(null);
      setView("start");
      return;
    }

    setProgress((current) => ({
      ...current,
      currentSceneId: previousScene.id,
    }));
  }

  function handleOpenInsight(insightId: string, points: number) {
    setProgress((current) => {
      if (current.openedInsightIds.includes(insightId)) {
        return current;
      }

      return {
        ...current,
        openedInsightIds: [...current.openedInsightIds, insightId],
        insightPoints: current.insightPoints + points,
      };
    });
  }

  function handleSceneComplete(
    value?: SceneResponseValue,
    reflections?: Record<string, string>,
  ) {
    if (!currentScene) return;

    const nextScene = allScenes[currentIndex + 1];
    const currentChapterEntry = getChapterForScene(course, currentScene.id);
    const nextChapterEntry = nextScene ? getChapterForScene(course, nextScene.id) : null;
    const chapterEndsHere =
      Boolean(currentChapterEntry) &&
      Boolean(nextChapterEntry) &&
      currentChapterEntry?.id !== nextChapterEntry?.id;

    setProgress((current) => ({
      ...current,
      completedSceneIds: mergeCompleted(current.completedSceneIds, currentScene.id),
      answers:
        value !== undefined
          ? {
              ...current.answers,
              [currentScene.id]: value,
            }
          : current.answers,
      reflections: reflections
        ? {
            ...current.reflections,
            ...reflections,
          }
        : current.reflections,
      currentSceneId: nextScene?.id ?? currentScene.id,
    }));

    if (!nextScene) {
      setSummaryChapterId(null);
      setView("done");
    } else if (chapterEndsHere && currentChapterEntry) {
      setSummaryChapterId(currentChapterEntry.id);
      setView("chapterSummary");
    }
  }

  function restartJourney() {
    setCloseNotice(null);
    setProgress({
      ...defaultProgress,
      started: false,
      currentSceneId: null,
    });
    setView("start");
    setSummaryChapterId(null);
    if (typeof window !== "undefined") {
      window.localStorage.removeItem(STORAGE_KEY);
    }
  }

  function renderScene(scene: Scene) {
    switch (scene.type) {
      case "intro":
      case "infoCard":
      case "summary":
      case "callToAction":
        return (
          <IntroCard
            key={scene.id}
            scene={scene}
            openedInsightIds={progress.openedInsightIds}
            onOpenInsight={handleOpenInsight}
            onComplete={() => handleSceneComplete()}
          />
        );
      case "scenario":
      case "multipleChoice":
        return (
          <ScenarioCard
            key={scene.id}
            scene={scene}
            savedAnswer={progress.answers[scene.id] as string | undefined}
            openedInsightIds={progress.openedInsightIds}
            onOpenInsight={handleOpenInsight}
            onComplete={(answer) => handleSceneComplete(answer)}
          />
        );
      case "matching":
        return (
          <MatchingCard
            key={scene.id}
            scene={scene}
            savedAnswer={progress.answers[scene.id] as Record<string, string> | undefined}
            openedInsightIds={progress.openedInsightIds}
            onOpenInsight={handleOpenInsight}
            onComplete={(answer) => handleSceneComplete(answer)}
          />
        );
      case "ordering":
        return (
          <OrderingCard
            key={scene.id}
            scene={scene}
            savedAnswer={progress.answers[scene.id] as string[] | undefined}
            openedInsightIds={progress.openedInsightIds}
            onOpenInsight={handleOpenInsight}
            onComplete={(answer) => handleSceneComplete(answer)}
          />
        );
      case "reflection":
        return (
          <ReflectionCard
            key={scene.id}
            scene={scene}
            savedReflections={progress.reflections}
            openedInsightIds={progress.openedInsightIds}
            onOpenInsight={handleOpenInsight}
            onComplete={(answer) => handleSceneComplete(answer, answer)}
          />
        );
      default:
        return null;
    }
  }

  if (!hydrated) {
    return <main className="min-h-screen bg-sand" />;
  }

  const summaryChapter = summaryChapterId
    ? course.chapters.find((chapter) => chapter.id === summaryChapterId) ?? null
    : null;

  return (
    <main className="min-h-screen px-4 py-6 md:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl space-y-6">
        <header
          className={`flex flex-col gap-4 rounded-[28px] border border-white/70 bg-white/70 px-5 py-4 shadow-card backdrop-blur md:flex-row md:items-center md:justify-between ${
            view === "journey" || view === "start" ? "peripheral-ui" : ""
          }`}
        >
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate">
              LSB Niedersachsen
            </p>
            <h1 className="font-display text-2xl text-ink md:text-3xl">{course.title}</h1>
          </div>
          <div className="w-full max-w-md">
            <ProgressBar value={completionRatio} label="Gesamtfortschritt" />
          </div>
        </header>

        {view === "start" ? (
          <StartScreen
            course={course}
            progress={progress}
            onStart={() => startJourney(true)}
            onResume={() => startJourney(false)}
            onClose={handleCloseApp}
            notice={closeNotice}
          />
        ) : null}

        {view === "journey" && currentScene ? (
          <div className="relative overflow-hidden rounded-[36px] border border-white/60 bg-[linear-gradient(180deg,rgba(17,32,51,0.06),rgba(255,255,255,0.7))] px-4 py-4 shadow-soft md:px-6 md:py-6">
            <div className="pointer-events-none absolute inset-x-10 top-10 h-40 rounded-full bg-sky/45 blur-3xl" />
            <div className="pointer-events-none absolute bottom-8 right-10 h-48 w-48 rounded-full bg-moss/15 blur-3xl" />

            {isEpisodePanelOpen ? (
              <div className="absolute inset-0 z-20 bg-ink/18 backdrop-blur-[2px]" />
            ) : null}

            <div className="relative z-10 mx-auto max-w-5xl space-y-5">
              <div className="peripheral-ui flex flex-wrap items-center justify-between gap-3 rounded-[28px] border border-white/75 bg-white/78 px-5 py-4 shadow-card backdrop-blur">
                <div className="space-y-1">
                  <p className="text-sm font-semibold text-slate">
                    Szene {currentIndex + 1} von {allScenes.length}
                  </p>
                  <p className="text-sm text-slate">{currentChapter?.title ?? ""}</p>
                </div>

                <div className="flex flex-wrap items-center gap-2">
                  {currentChapter ? (
                    <InsightCounter
                      discovered={currentChapterInsights.discovered}
                      total={currentChapterInsights.total}
                      points={currentChapterInsights.points}
                      compact
                    />
                  ) : null}
                  <button
                    type="button"
                    onClick={() => setIsEpisodePanelOpen(true)}
                    className="inline-flex items-center gap-2 rounded-full border border-mist bg-white px-4 py-2 text-sm font-semibold text-ink transition hover:border-pine hover:text-pine"
                  >
                    <PanelsTopLeft className="h-4 w-4" />
                    Episoden
                  </button>
                  <button
                    type="button"
                    onClick={() => setView("start")}
                    className="inline-flex items-center gap-2 rounded-full border border-mist bg-white px-4 py-2 text-sm font-semibold text-ink transition hover:border-pine hover:text-pine"
                  >
                    <Home className="h-4 w-4" />
                    Start
                  </button>
                  <button
                    type="button"
                    onClick={goToPreviousScene}
                    className="inline-flex items-center gap-2 rounded-full border border-mist bg-white px-4 py-2 text-sm font-semibold text-ink transition hover:border-pine hover:text-pine"
                  >
                    <ChevronLeft className="h-4 w-4" />
                    Zur\u00fcck
                  </button>
                  <button
                    type="button"
                    onClick={handleCloseApp}
                    className="inline-flex items-center gap-2 rounded-full border border-mist bg-white px-4 py-2 text-sm font-semibold text-ink transition hover:border-rose-300 hover:text-rose-700"
                  >
                    <Power className="h-4 w-4" />
                    Schlie\u00dfen
                  </button>
                  <button
                    type="button"
                    onClick={goToNextScene}
                    className="inline-flex items-center gap-2 rounded-full bg-ink px-4 py-2 text-sm font-semibold text-white transition hover:bg-pine"
                  >
                    Weiter
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-[minmax(0,1fr)_260px]">
                <div className="min-w-0">{renderScene(currentScene)}</div>
                <aside className="hidden self-start md:block">
                  <div className="peripheral-ui rounded-[28px] border border-white/70 bg-white/62 p-5 shadow-card backdrop-blur">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate">
                      Fokusmodus
                    </p>
                    <div className="mt-4 space-y-4">
                      <div>
                        <p className="text-sm font-semibold text-ink">Insights im Blick</p>
                        <p className="mt-2 text-sm leading-6 text-slate">
                          Die Hauptlernreise funktioniert ohne Zusatzebene. Wenn du weiter klickst,
                          entdeckst du freiwillige Einblicke mit echtem Mehrwert.
                        </p>
                      </div>
                      {currentChapter ? (
                        <InsightCounter
                          discovered={currentChapterInsights.discovered}
                          total={currentChapterInsights.total}
                          points={currentChapterInsights.points}
                        />
                      ) : null}
                    </div>
                  </div>
                </aside>
              </div>
            </div>

            {isEpisodePanelOpen ? (
              <div className="absolute inset-0 z-30 flex items-start justify-center px-4 py-6 md:px-8">
                <div
                  data-active="true"
                  className="peripheral-ui w-full max-w-2xl rounded-[32px] border border-white/70 bg-sand/95 p-5 shadow-soft backdrop-blur"
                >
                  <div className="mb-4 flex items-center justify-between gap-3">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate">
                        Episoden\u00fcbersicht
                      </p>
                      <h2 className="font-display text-2xl text-ink">Lernreise auf einen Blick</h2>
                    </div>
                    <button
                      type="button"
                      onClick={() => setIsEpisodePanelOpen(false)}
                      className="inline-flex items-center gap-2 rounded-full border border-mist bg-white px-4 py-2 text-sm font-semibold text-ink transition hover:border-pine hover:text-pine"
                    >
                      <X className="h-4 w-4" />
                      Schlie\u00dfen
                    </button>
                  </div>

                  {currentScene ? (
                    <ChapterSidebar
                      chapters={course.chapters}
                      currentSceneId={currentScene.id}
                      completedSceneIds={progress.completedSceneIds}
                      openedInsightIds={progress.openedInsightIds}
                      onJumpToScene={jumpToScene}
                    />
                  ) : null}
                </div>
              </div>
            ) : null}
          </div>
        ) : null}

        {view === "chapterSummary" && summaryChapter ? (
          <ChapterSummaryCard
            chapter={summaryChapter}
            {...countChapterInsights(summaryChapter, progress.openedInsightIds)}
            onContinue={() => {
              setSummaryChapterId(null);
              setView("journey");
            }}
            onReviewChapter={() => {
              if (!summaryChapter.scenes[0]?.id) return;
              jumpToScene(summaryChapter.scenes[0].id);
            }}
          />
        ) : null}

        {view === "done" ? (
          <CompletionView course={course} progress={progress} onRestart={restartJourney} />
        ) : null}
      </div>
    </main>
  );
}

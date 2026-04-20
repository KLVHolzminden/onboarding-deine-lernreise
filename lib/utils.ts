import { Chapter, Course, Insight, Scene } from "@/lib/types";

export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function flattenScenes(course: Course): Scene[] {
  return course.chapters.flatMap((chapter) => chapter.scenes);
}

export function flattenInsights(course: Course): Insight[] {
  return flattenScenes(course).flatMap((scene) => scene.insights ?? []);
}

export function getSceneIndex(course: Course, sceneId: string | null) {
  const scenes = flattenScenes(course);
  return scenes.findIndex((scene) => scene.id === sceneId);
}

export function getCompletionRatio(course: Course, completedSceneIds: string[]) {
  const total = flattenScenes(course).length;
  if (!total) return 0;
  return completedSceneIds.length / total;
}

export function getChapterForScene(course: Course, sceneId: string | null) {
  return course.chapters.find((chapter) =>
    chapter.scenes.some((scene) => scene.id === sceneId),
  );
}

export function countChapterInsights(chapter: Chapter, openedInsightIds: string[]) {
  const chapterInsights = chapter.scenes.flatMap((scene) => scene.insights ?? []);
  const discovered = chapterInsights.filter((insight) => openedInsightIds.includes(insight.id));
  const points = discovered.reduce((sum, insight) => sum + insight.points, 0);

  return {
    discovered: discovered.length,
    total: chapterInsights.length,
    points,
  };
}

export function countTotalInsights(course: Course, openedInsightIds: string[]) {
  const insights = flattenInsights(course);
  const discovered = insights.filter((insight) => openedInsightIds.includes(insight.id));
  const points = discovered.reduce((sum, insight) => sum + insight.points, 0);

  return {
    discovered: discovered.length,
    total: insights.length,
    points,
  };
}

export function countChapterCompletion(
  chapterSceneIds: string[],
  completedSceneIds: string[],
) {
  const completed = chapterSceneIds.filter((id) => completedSceneIds.includes(id)).length;
  return {
    completed,
    total: chapterSceneIds.length,
    ratio: chapterSceneIds.length ? completed / chapterSceneIds.length : 0,
  };
}

export function summarizeProfile(reflections: Record<string, string>) {
  const joined = Object.values(reflections)
    .map((entry) => entry.trim())
    .filter(Boolean);

  if (!joined.length) {
    return "Du hast die Lernreise abgeschlossen. Für deinen Einstieg lohnt sich jetzt ein konkreter erster Praxisschritt.";
  }

  const confidenceWords = ["staerke", "aktiv", "struktur", "praxis", "ruhe", "team"];
  const lower = joined.join(" ").toLowerCase();
  const confidence = confidenceWords.filter((word) => lower.includes(word)).length;

  if (confidence >= 2) {
    return "Dein Profil zeigt bereits viele Anknüpfungspunkte für einen sicheren Einstieg. Besonders hilfreich wird für dich ein früher Praxiseinsatz im Team sein.";
  }

  return "Dein Profil wirkt reflektiert und lernorientiert. Ein guter nächster Schritt ist eine begleitete Hospitation mit anschließendem Austausch.";
}

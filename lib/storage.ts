import { ProgressState } from "@/lib/types";

export const STORAGE_KEY = "lsb-referierende-lernreise";

export const defaultProgress: ProgressState = {
  started: false,
  currentSceneId: null,
  completedSceneIds: [],
  answers: {},
  reflections: {},
  openedInsightIds: [],
  insightPoints: 0,
};

export function readProgress(): ProgressState {
  if (typeof window === "undefined") {
    return defaultProgress;
  }

  const raw = window.localStorage.getItem(STORAGE_KEY);
  if (!raw) return defaultProgress;

  try {
    return {
      ...defaultProgress,
      ...JSON.parse(raw),
    } as ProgressState;
  } catch {
    return defaultProgress;
  }
}

export function writeProgress(state: ProgressState) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

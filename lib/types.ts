export type SceneType =
  | "intro"
  | "scenario"
  | "multipleChoice"
  | "matching"
  | "ordering"
  | "reflection"
  | "infoCard"
  | "summary"
  | "callToAction";

export type SceneResponseValue = string | string[] | Record<string, string>;

export type InsightCategory = "praxis" | "didaktik" | "organisation";

export type InsightTriggerType = "card" | "inline";

export type Insight = {
  id: string;
  category: InsightCategory;
  triggerType: InsightTriggerType;
  triggerLabel: string;
  title: string;
  content: string;
  points: number;
};

export type BaseScene = {
  id: string;
  type: SceneType;
  title: string;
  eyebrow?: string;
  prompt: string;
  context?: string;
  coachNote?: string;
  takeaway?: string;
  transferQuestion?: string;
  estimatedMinutes?: number;
  insights?: Insight[];
};

export type ChoiceOption = {
  id: string;
  label: string;
  insight: string;
  isBest?: boolean;
};

export type ScenarioScene = BaseScene & {
  type: "scenario" | "multipleChoice";
  options: ChoiceOption[];
};

export type MatchingPair = {
  id: string;
  label: string;
};

export type MatchingTarget = {
  id: string;
  label: string;
  description?: string;
};

export type MatchingScene = BaseScene & {
  type: "matching";
  pairs: MatchingPair[];
  targets: MatchingTarget[];
  answers: Record<string, string>;
  feedback: {
    success: string;
    gentle: string;
  };
};

export type OrderingStep = {
  id: string;
  label: string;
};

export type OrderingScene = BaseScene & {
  type: "ordering";
  steps: OrderingStep[];
  correctOrder: string[];
  feedback: {
    success: string;
    gentle: string;
  };
};

export type ReflectionPrompt = {
  id: string;
  label: string;
  placeholder: string;
};

export type ReflectionScene = BaseScene & {
  type: "reflection";
  prompts: ReflectionPrompt[];
};

export type IntroScene = BaseScene & {
  type: "intro" | "infoCard" | "summary" | "callToAction";
  highlights?: string[];
};

export type Scene =
  | ScenarioScene
  | MatchingScene
  | OrderingScene
  | ReflectionScene
  | IntroScene;

export type Chapter = {
  id: string;
  title: string;
  shortTitle: string;
  description: string;
  objective: string;
  accent: "sky" | "pine" | "moss" | "ember";
  scenes: Scene[];
};

export type Course = {
  id: string;
  title: string;
  subtitle: string;
  organization: string;
  intro: string;
  chapters: Chapter[];
};

export type ProgressState = {
  started: boolean;
  currentSceneId: string | null;
  completedSceneIds: string[];
  answers: Record<string, SceneResponseValue>;
  reflections: Record<string, string>;
  openedInsightIds: string[];
  insightPoints: number;
  startedAt?: string;
  updatedAt?: string;
};

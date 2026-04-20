import { chapter1 } from "@/data/chapters/chapter-1";
import { chapter2 } from "@/data/chapters/chapter-2";
import { chapter3 } from "@/data/chapters/chapter-3";
import { chapter4 } from "@/data/chapters/chapter-4";
import { chapter5 } from "@/data/chapters/chapter-5";
import { chapter6 } from "@/data/chapters/chapter-6";
import { Course } from "@/lib/types";

export const onboardingCourse: Course = {
  id: "lsb-referierende-onboarding",
  title: "Dein Weg in den ersten Lehrgang",
  subtitle: "Szenariobasierte Lernreise für neue Referierende",
  organization: "LandesSportBund Niedersachsen e.V.",
  intro:
    "Diese App verbindet Orientierung, Motivation und Handlungssicherheit für deinen Einstieg als Referent*in.",
  chapters: [chapter1, chapter2, chapter3, chapter4, chapter5, chapter6],
};

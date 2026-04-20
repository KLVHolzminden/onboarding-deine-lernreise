"use client";

import { motion } from "framer-motion";
import { ArrowRight, Clock3 } from "lucide-react";
import { Badge } from "@/components/learning/badge";
import { cn } from "@/lib/utils";

type SceneShellProps = {
  eyebrow?: string;
  title: string;
  prompt: string;
  context?: string;
  takeaway?: string;
  transferQuestion?: string;
  estimatedMinutes?: number;
  accent?: "sky" | "pine" | "moss" | "ember";
  children: React.ReactNode;
};

export function SceneShell({
  eyebrow,
  title,
  prompt,
  context,
  takeaway,
  transferQuestion,
  estimatedMinutes,
  accent = "sky",
  children,
}: SceneShellProps) {
  return (
    <motion.section
      key={title}
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.28, ease: "easeOut" }}
      className="rounded-[32px] border border-white/70 bg-white/90 p-6 shadow-soft backdrop-blur md:p-8"
    >
      <div className="space-y-5">
        <div className="flex flex-wrap items-center justify-between gap-3">
          {eyebrow ? <Badge tone={accent}>{eyebrow}</Badge> : <span />}
          {estimatedMinutes ? (
            <div className="inline-flex items-center gap-2 rounded-full bg-sand px-3 py-1 text-sm text-slate">
              <Clock3 className="h-4 w-4" />
              <span>{estimatedMinutes} Min.</span>
            </div>
          ) : null}
        </div>

        <div className="max-w-[60rem] space-y-3">
          <h2 className="max-w-[18ch] font-display text-[2.45rem] leading-[1.06] text-ink [text-wrap:balance] md:max-w-[22ch] md:text-[3rem]">
            {title}
          </h2>
          <p className="text-lg leading-8 text-ink/90">{prompt}</p>
          {context ? <p className="text-base leading-7 text-slate">{context}</p> : null}
        </div>

        {children}

        {(takeaway || transferQuestion) && (
          <div className="grid gap-4 pt-2 md:grid-cols-2">
            {takeaway ? (
              <div className="rounded-3xl border border-pine/10 bg-pine/5 p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-pine">
                  Merksatz
                </p>
                <p className="mt-2 text-base leading-7 text-ink">{takeaway}</p>
              </div>
            ) : null}

            {transferQuestion ? (
              <div className={cn("rounded-3xl border border-ember/10 bg-ember/5 p-5")}>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ember">
                  Transfer
                </p>
                <div className="mt-2 flex gap-3 text-base leading-7 text-ink">
                  <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-ember" />
                  <p>{transferQuestion}</p>
                </div>
              </div>
            ) : null}
          </div>
        )}
      </div>
    </motion.section>
  );
}

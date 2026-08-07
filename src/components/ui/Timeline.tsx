import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { fadeUp } from "@/lib/animations";
import type { Milestone } from "@/types";

export function Timeline({ milestones }: { milestones: Milestone[] }) {
  return (
    <ol className="relative space-y-10 border-l border-border-subtle pl-8 md:pl-12">
      {milestones.map((milestone, i) => (
        <li key={milestone.year} className="relative">
          <AnimatedSection variants={fadeUp} delay={i * 0.05}>
            <span className="absolute -left-[41px] top-1 flex h-5 w-5 items-center justify-center rounded-full border-2 border-terracotta-500 bg-surface md:-left-[57px]" />
            <p className="text-sm font-semibold uppercase tracking-wide text-terracotta-600">
              {milestone.year}
            </p>
            <h3 className="mt-1 text-xl text-espresso-950">{milestone.title}</h3>
            <p className="mt-2 max-w-xl text-sm leading-relaxed text-charcoal-700">
              {milestone.description}
            </p>
          </AnimatedSection>
        </li>
      ))}
    </ol>
  );
}

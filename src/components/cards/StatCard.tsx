"use client";

import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";

export function StatCard({
  value,
  suffix,
  label,
}: {
  value: number;
  suffix?: string;
  label: string;
}) {
  const ref = useRef<HTMLParagraphElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { duration: 1600, bounce: 0 });

  useEffect(() => {
    if (inView) motionValue.set(value);
  }, [inView, motionValue, value]);

  useEffect(() => {
    return spring.on("change", (latest) => {
      if (ref.current) {
        ref.current.firstChild!.textContent = Math.round(latest).toLocaleString("en-IN");
      }
    });
  }, [spring]);

  return (
    <div className="min-w-0 text-center md:text-left">
      <p ref={ref} className="text-4xl text-espresso-950 md:text-5xl">
        <span>0</span>
        <span className="text-terracotta-500">{suffix}</span>
      </p>
      <p className="mt-2 text-sm uppercase tracking-wide text-charcoal-700">{label}</p>
    </div>
  );
}

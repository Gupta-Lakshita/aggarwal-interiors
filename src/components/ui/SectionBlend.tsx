export function SectionBlend({ from, to }: { from: string; to: string }) {
  return (
    <div
      aria-hidden
      className="h-10 w-full md:h-16"
      style={{
        background: `linear-gradient(in oklch to bottom, var(--color-${from}), var(--color-${to}))`,
      }}
    />
  );
}

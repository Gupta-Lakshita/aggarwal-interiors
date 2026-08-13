export function SectionBlend({ from, to }: { from: string; to: string }) {
  return (
    <div
      aria-hidden
      className="h-16 w-full md:h-24"
      style={{
        background: `linear-gradient(to bottom, var(--color-${from}), var(--color-${to}))`,
      }}
    />
  );
}

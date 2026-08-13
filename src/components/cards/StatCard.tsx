export function StatCard({
  value,
  suffix,
  label,
}: {
  value: number;
  suffix?: string;
  label: string;
}) {
  return (
    <div className="min-w-0 text-center md:text-left">
      <p className="text-4xl text-espresso-950 md:text-5xl">
        {value.toLocaleString("en-IN")}
        <span className="text-terracotta-500">{suffix}</span>
      </p>
      <p className="mt-2 text-sm uppercase tracking-wide text-charcoal-700">{label}</p>
    </div>
  );
}

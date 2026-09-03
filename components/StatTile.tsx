export default function StatTile({
  value,
  label,
}: {
  value: string;
  label: string;
}) {
  return (
    <div className="border-l border-ink-200 pl-5">
      <p className="font-serif text-4xl text-ink-950 sm:text-5xl">{value}</p>
      <p className="mt-1 text-sm text-ink-500">{label}</p>
    </div>
  );
}

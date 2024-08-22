export default function AboutCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="space-y-2">
      <h2 className="font-bold">{title}</h2>
      <p className="text-xs font-light italic">{description}</p>
    </div>
  );
}

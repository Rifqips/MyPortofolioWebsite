interface Props {
  title: string;
  subtitle?: string;
}

export default function SectionHeading({
  title,
  subtitle,
}: Props) {
  return (
    <div className="mb-14">
      <p className="mb-3 font-mono text-sm text-sky-400">
        {subtitle}
      </p>

      <h2 className="text-3xl font-bold md:text-4xl">
        {title}
      </h2>
    </div>
  );
}
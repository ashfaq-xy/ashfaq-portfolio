interface SectionHeadingProps {
  label?: string;
  title: string;
  subtitle?: string;
}

export default function SectionHeading({ label, title, subtitle }: SectionHeadingProps) {
  return (
    <div className="mb-10">
      {label && (
        <p className="text-accent text-xs font-semibold tracking-[0.15em] uppercase mb-3">
          {label}
        </p>
      )}
      <h2 className="text-3xl md:text-4xl font-bold text-text-primary tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-text-muted text-base mt-3 max-w-xl leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}

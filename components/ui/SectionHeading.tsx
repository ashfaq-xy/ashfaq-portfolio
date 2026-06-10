interface SectionHeadingProps {
  label?: string;
  title: string;
  highlight?: string;
  subtitle?: string;
}

export default function SectionHeading({ label, title, highlight, subtitle }: SectionHeadingProps) {
  return (
    <div className="mb-12">
      {label && (
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-px bg-accent/50" />
          <p className="text-accent text-xs font-semibold tracking-[0.2em] uppercase">
            {label}
          </p>
        </div>
      )}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-[1.1]">
        {title}
        {highlight && (
          <>
            {" "}
            <span className="gradient-text">{highlight}</span>
          </>
        )}
      </h2>
      {subtitle && (
        <p className="text-[#6b7094] text-base sm:text-lg mt-4 max-w-xl leading-relaxed font-light">
          {subtitle}
        </p>
      )}
    </div>
  );
}

interface SkillPillProps {
  name: string;
  variant?: "default" | "accent" | "green";
}

export default function SkillPill({ name, variant = "default" }: SkillPillProps) {
  const variants = {
    default:
      "bg-bg-elevated border-[rgba(255,255,255,0.1)] text-text-muted",
    accent:
      "bg-accent-dim border-[rgba(108,142,245,0.2)] text-accent",
    green:
      "bg-tag-green-dim border-[rgba(62,207,142,0.2)] text-tag-green",
  };

  return (
    <span
      className={`inline-flex items-center px-3 py-1 text-xs font-medium rounded-md border transition-colors duration-200 ${variants[variant]}`}
    >
      {name}
    </span>
  );
}

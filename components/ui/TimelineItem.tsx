import { Experience } from "@/lib/types";
import { Briefcase, GraduationCap } from "lucide-react";

interface TimelineItemProps {
  item: Experience;
}

export default function TimelineItem({ item }: TimelineItemProps) {
  const Icon = item.type === "work" ? Briefcase : GraduationCap;

  return (
    <div className="relative flex gap-6 pb-10 last:pb-0 group">
      {/* Vertical line */}
      <div className="flex flex-col items-center">
        <div className="w-10 h-10 rounded-full bg-bg-elevated border border-[rgba(255,255,255,0.1)] flex items-center justify-center flex-shrink-0 group-hover:border-accent/40 transition-colors duration-300">
          <Icon size={16} className="text-accent" />
        </div>
        <div className="w-px flex-1 bg-[rgba(255,255,255,0.07)] mt-3" />
      </div>

      {/* Content */}
      <div className="flex-1 pt-1.5">
        <p className="text-xs font-medium text-accent tracking-wide mb-1">
          {item.period}
        </p>
        <h3 className="text-base font-semibold text-text-primary mb-0.5">
          {item.role}
        </h3>
        <p className="text-sm text-text-muted mb-3">{item.company}</p>
        <ul className="space-y-2">
          {item.description.map((point, i) => (
            <li key={i} className="text-sm text-text-muted leading-relaxed flex gap-2">
              <span className="text-text-subtle mt-1.5 flex-shrink-0">·</span>
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

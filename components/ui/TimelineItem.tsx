import { Experience } from "@/lib/types";
import { Briefcase, GraduationCap } from "lucide-react";

interface TimelineItemProps {
  item: Experience;
}

export default function TimelineItem({ item }: TimelineItemProps) {
  const Icon = item.type === "work" ? Briefcase : GraduationCap;

  return (
    <div className="relative flex gap-5 pb-12 last:pb-0 group">
      {/* Vertical line + icon */}
      <div className="flex flex-col items-center">
        <div className="w-10 h-10 rounded-xl bg-[#12121A] border border-[rgba(108,142,245,0.15)] flex items-center justify-center flex-shrink-0 group-hover:border-accent/40 group-hover:shadow-[0_0_20px_rgba(108,142,245,0.1)] transition-all duration-300">
          <Icon size={16} className="text-accent" />
        </div>
        <div className="w-px flex-1 bg-gradient-to-b from-[rgba(108,142,245,0.15)] to-transparent mt-3" />
      </div>

      {/* Content */}
      <div className="flex-1 pt-1">
        <p className="text-xs font-bold text-accent tracking-wide mb-1.5 font-mono">
          {item.period}
        </p>
        <h3 className="text-lg font-bold text-white mb-0.5">
          {item.role}
        </h3>
        <p className="text-sm text-[#5a6080] mb-4">{item.company}</p>
        <ul className="space-y-2.5">
          {item.description.map((point, i) => (
            <li key={i} className="text-sm text-[#6b7094] leading-relaxed flex gap-3">
              <span className="text-accent/40 mt-1.5 flex-shrink-0 text-xs">▸</span>
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

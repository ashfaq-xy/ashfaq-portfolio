import { ExternalLink, Clock } from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";
import { Project } from "@/lib/types";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  if (project.comingSoon) {
    return (
      <div className="relative bg-[#0e0e16] border border-[rgba(255,255,255,0.04)] rounded-2xl p-7 opacity-50">
        <div className="absolute top-5 right-5 flex items-center gap-1.5 px-3 py-1 bg-[#16161e] rounded-full">
          <Clock size={11} className="text-[#3a3f5a]" />
          <span className="text-[10px] font-semibold text-[#3a3f5a] tracking-[0.1em] uppercase">
            Coming soon
          </span>
        </div>
        <h3 className="text-lg font-bold text-[#4a4f6a] mb-2 pr-28">{project.title}</h3>
        <p className="text-sm text-[#3a3f5a] leading-relaxed mb-5">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span key={tag} className="px-2.5 py-1 text-[11px] font-medium rounded-md bg-[#12121A] text-[#3a3f5a] border border-[rgba(255,255,255,0.04)]">
              {tag}
            </span>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="group glow-card p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_40px_rgba(108,142,245,0.08)]">
      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-accent transition-colors duration-300">
        {project.title}
      </h3>
      <p className="text-sm text-[#6b7094] leading-relaxed mb-6">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-6">
        {project.tags.map((tag) => (
          <span key={tag} className="px-3 py-1 text-[11px] font-semibold rounded-md bg-[rgba(108,142,245,0.08)] text-accent border border-[rgba(108,142,245,0.12)]">
            {tag}
          </span>
        ))}
      </div>
      <div className="flex gap-4">
        {project.github && (
          <a href={project.github} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-[#5a6080] hover:text-accent transition-colors"
            aria-label={`View ${project.title} on GitHub`}>
            <GithubIcon size={16} /><span>Source Code</span>
          </a>
        )}
        {project.liveDemo && (
          <a href={project.liveDemo} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-[#5a6080] hover:text-accent transition-colors"
            aria-label={`View live demo of ${project.title}`}>
            <ExternalLink size={16} /><span>Live Demo</span>
          </a>
        )}
      </div>
    </div>
  );
}

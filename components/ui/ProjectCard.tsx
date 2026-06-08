import { ExternalLink, Clock } from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";
import { Project } from "@/lib/types";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div
      className={`group relative bg-bg-surface border rounded-xl p-6 transition-all duration-300 ${
        project.comingSoon
          ? "border-[rgba(255,255,255,0.05)] opacity-60"
          : "border-[rgba(255,255,255,0.07)] hover:border-accent/30 hover:-translate-y-1"
      }`}
    >
      {project.comingSoon && (
        <div className="absolute top-4 right-4 flex items-center gap-1.5 px-2.5 py-1 bg-bg-elevated rounded-md">
          <Clock size={12} className="text-text-subtle" />
          <span className="text-[11px] font-medium text-text-subtle tracking-wide uppercase">
            Coming soon
          </span>
        </div>
      )}

      <h3 className="text-lg font-semibold text-text-primary mb-2 pr-24">
        {project.title}
      </h3>

      <p className="text-sm text-text-muted leading-relaxed mb-5">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2 mb-5">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="px-2.5 py-0.5 text-[11px] font-medium rounded-md bg-accent-dim text-accent border border-[rgba(108,142,245,0.15)]"
          >
            {tag}
          </span>
        ))}
      </div>

      {!project.comingSoon && (
        <div className="flex gap-3">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-text-muted hover:text-accent transition-colors"
              aria-label={`View ${project.title} on GitHub (opens in new tab)`}
            >
              <GithubIcon size={15} />
              <span>GitHub</span>
            </a>
          )}
          {project.liveDemo && (
            <a
              href={project.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-text-muted hover:text-accent transition-colors"
              aria-label={`View live demo of ${project.title} (opens in new tab)`}
            >
              <ExternalLink size={15} />
              <span>Live Demo</span>
            </a>
          )}
        </div>
      )}
    </div>
  );
}

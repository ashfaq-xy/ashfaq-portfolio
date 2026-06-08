import type { Metadata } from "next";
import SectionHeading from "@/components/ui/SectionHeading";
import ProjectCard from "@/components/ui/ProjectCard";
import { projects } from "@/lib/data";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "AI/ML and development projects by Md Ashfaq — from hackathon chatbots to data analysis.",
};

export default function ProjectsPage() {
  return (
    <section className="py-20">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeading
          label="Selected work"
          title="Projects"
          subtitle="Things I've built and am currently working on. More coming soon as I learn and ship."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

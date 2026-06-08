import { ArrowRight } from "lucide-react";
import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import SkillPill from "@/components/ui/SkillPill";
import { skills } from "@/lib/data";

export default function SkillsPreview() {
  const languages = skills.filter((s) => s.category === "language");
  const tools = skills.filter((s) => s.category === "tool").slice(0, 5);

  return (
    <section className="py-20 border-t border-[rgba(255,255,255,0.05)]">
      <div className="max-w-4xl mx-auto px-6">
        <SectionHeading
          label="Technical skills"
          title="What I work with"
          subtitle="Languages, tools, and environments I use regularly."
        />

        <div className="mb-6">
          <p className="text-xs font-semibold text-text-subtle tracking-[0.12em] uppercase mb-3">
            Languages
          </p>
          <div className="flex flex-wrap gap-2">
            {languages.map((skill) => (
              <SkillPill key={skill.name} name={skill.name} variant="accent" />
            ))}
          </div>
        </div>

        <div className="mb-8">
          <p className="text-xs font-semibold text-text-subtle tracking-[0.12em] uppercase mb-3">
            Tools &amp; environments
          </p>
          <div className="flex flex-wrap gap-2">
            {tools.map((skill) => (
              <SkillPill key={skill.name} name={skill.name} />
            ))}
          </div>
        </div>

        <Link
          href="/skills"
          className="inline-flex items-center gap-2 text-sm text-accent hover:underline underline-offset-4 transition-colors"
        >
          View all skills & certifications
          <ArrowRight size={14} />
        </Link>
      </div>
    </section>
  );
}

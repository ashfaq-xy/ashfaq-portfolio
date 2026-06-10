import { ArrowRight } from "lucide-react";
import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import { skills } from "@/lib/data";

export default function SkillsPreview() {
  const languages = skills.filter((s) => s.category === "language");
  const tools = skills.filter((s) => s.category === "tool").slice(0, 5);

  return (
    <section className="relative py-24">
      <div className="section-line" />
      <div className="max-w-5xl mx-auto px-6 pt-24">
        <SectionHeading
          label="Technical skills"
          title="What I work with"
          highlight="daily."
          subtitle="Languages, tools, and environments I use regularly."
        />

        <div className="mb-8">
          <p className="text-[10px] font-bold text-[#4a4f6a] tracking-[0.2em] uppercase mb-4">
            Languages
          </p>
          <div className="flex flex-wrap gap-2.5">
            {languages.map((skill) => (
              <span
                key={skill.name}
                className="px-4 py-2 text-sm font-medium rounded-lg bg-[rgba(108,142,245,0.08)] text-accent border border-[rgba(108,142,245,0.15)] hover:bg-[rgba(108,142,245,0.14)] hover:shadow-[0_0_20px_rgba(108,142,245,0.08)] transition-all duration-300"
              >
                {skill.name}
              </span>
            ))}
          </div>
        </div>

        <div className="mb-10">
          <p className="text-[10px] font-bold text-[#4a4f6a] tracking-[0.2em] uppercase mb-4">
            Tools & environments
          </p>
          <div className="flex flex-wrap gap-2.5">
            {tools.map((skill) => (
              <span
                key={skill.name}
                className="px-4 py-2 text-sm font-medium rounded-lg bg-[#12121A] text-[#7a7f9a] border border-[rgba(255,255,255,0.06)] hover:border-[rgba(255,255,255,0.12)] hover:text-white transition-all duration-300"
              >
                {skill.name}
              </span>
            ))}
          </div>
        </div>

        <Link
          href="/skills"
          className="group inline-flex items-center gap-2 text-sm font-medium text-accent hover:gap-3 transition-all duration-300"
        >
          View all skills & certifications
          <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </section>
  );
}

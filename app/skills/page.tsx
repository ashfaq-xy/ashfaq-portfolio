import type { Metadata } from "next";
import SectionHeading from "@/components/ui/SectionHeading";
import SkillPill from "@/components/ui/SkillPill";
import { skills } from "@/lib/data";
import { Award } from "lucide-react";

export const metadata: Metadata = {
  title: "Skills",
  description:
    "Technical skills, tools, and certifications of Md Ashfaq — Python, Java, Jupyter, Azure, and more.",
};

export default function SkillsPage() {
  const languages = skills.filter((s) => s.category === "language");
  const tools = skills.filter((s) => s.category === "tool");
  const certs = skills.filter((s) => s.category === "certification");

  return (
    <section className="py-20">
      <div className="max-w-4xl mx-auto px-6">
        <SectionHeading
          label="Technical expertise"
          title="Skills & Certifications"
          subtitle="Languages, tools, and credentials I bring to the table."
        />

        {/* Languages */}
        <div className="mb-10">
          <h3 className="text-xs font-semibold text-text-subtle tracking-[0.12em] uppercase mb-4">
            Languages
          </h3>
          <div className="flex flex-wrap gap-2.5">
            {languages.map((skill) => (
              <SkillPill key={skill.name} name={skill.name} variant="accent" />
            ))}
          </div>
        </div>

        {/* Tools & Environments */}
        <div className="mb-10">
          <h3 className="text-xs font-semibold text-text-subtle tracking-[0.12em] uppercase mb-4">
            Tools &amp; environments
          </h3>
          <div className="flex flex-wrap gap-2.5">
            {tools.map((skill) => (
              <SkillPill key={skill.name} name={skill.name} />
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <h3 className="text-xs font-semibold text-text-subtle tracking-[0.12em] uppercase mb-4">
            Certifications
          </h3>
          <div className="space-y-3">
            {certs.map((cert) => (
              <div
                key={cert.name}
                className="flex items-start gap-3 bg-bg-surface rounded-lg border border-[rgba(255,255,255,0.06)] p-4"
              >
                <div className="w-8 h-8 rounded-md bg-tag-green-dim flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Award size={14} className="text-tag-green" />
                </div>
                <div>
                  <p className="text-sm font-medium text-text-primary">
                    {cert.name}
                  </p>
                  <p className="text-xs text-text-muted">
                    {cert.issuer}
                    {cert.year && ` · ${cert.year}`}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

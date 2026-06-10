import type { Metadata } from "next";
import SectionHeading from "@/components/ui/SectionHeading";
import { skills } from "@/lib/data";
import { Award } from "lucide-react";

export const metadata: Metadata = {
  title: "Skills",
  description: "Technical skills, tools, and certifications of Md Ashfaq.",
};

export default function SkillsPage() {
  const languages = skills.filter((s) => s.category === "language");
  const tools = skills.filter((s) => s.category === "tool");
  const certs = skills.filter((s) => s.category === "certification");

  return (
    <section className="relative py-24">
      <div className="max-w-4xl mx-auto px-6">
        <SectionHeading
          label="Technical expertise"
          title="Skills &"
          highlight="Certifications"
          subtitle="Languages, tools, and credentials I bring to the table."
        />

        {/* Languages */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-6 h-px bg-accent/30" />
            <p className="text-[10px] font-bold text-[#4a4f6a] tracking-[0.2em] uppercase">Languages</p>
          </div>
          <div className="flex flex-wrap gap-3">
            {languages.map((skill) => (
              <span key={skill.name}
                className="px-5 py-2.5 text-sm font-medium rounded-xl bg-[rgba(108,142,245,0.08)] text-accent border border-[rgba(108,142,245,0.15)] hover:bg-[rgba(108,142,245,0.14)] hover:shadow-[0_0_25px_rgba(108,142,245,0.1)] transition-all duration-300">
                {skill.name}
              </span>
            ))}
          </div>
        </div>

        {/* Tools */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-6 h-px bg-accent/30" />
            <p className="text-[10px] font-bold text-[#4a4f6a] tracking-[0.2em] uppercase">Tools & Environments</p>
          </div>
          <div className="flex flex-wrap gap-3">
            {tools.map((skill) => (
              <span key={skill.name}
                className="px-5 py-2.5 text-sm font-medium rounded-xl bg-[#12121A] text-[#7a7f9a] border border-[rgba(255,255,255,0.06)] hover:border-[rgba(255,255,255,0.15)] hover:text-white transition-all duration-300">
                {skill.name}
              </span>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <div className="flex items-center gap-3 mb-5">
            <div className="w-6 h-px bg-accent/30" />
            <p className="text-[10px] font-bold text-[#4a4f6a] tracking-[0.2em] uppercase">Certifications</p>
          </div>
          <div className="space-y-3">
            {certs.map((cert) => (
              <div key={cert.name} className="glow-card flex items-center gap-4 p-5 transition-all duration-300">
                <div className="w-10 h-10 rounded-xl bg-[rgba(62,207,142,0.08)] border border-[rgba(62,207,142,0.15)] flex items-center justify-center flex-shrink-0">
                  <Award size={16} className="text-emerald-400" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">{cert.name}</p>
                  <p className="text-xs text-[#5a6080]">{cert.issuer}{cert.year && ` · ${cert.year}`}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

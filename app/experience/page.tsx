import type { Metadata } from "next";
import SectionHeading from "@/components/ui/SectionHeading";
import TimelineItem from "@/components/ui/TimelineItem";
import { experience, education } from "@/lib/data";

export const metadata: Metadata = {
  title: "Experience & Education",
  description: "Professional experience and academic background of Md Ashfaq.",
};

export default function ExperiencePage() {
  return (
    <section className="relative py-24">
      <div className="max-w-3xl mx-auto px-6">
        <SectionHeading
          label="Background"
          title="Experience &"
          highlight="Education"
          subtitle="Where I've worked and what I've studied."
        />

        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-6 h-px bg-accent/30" />
            <p className="text-[10px] font-bold text-[#4a4f6a] tracking-[0.2em] uppercase">
              Work experience
            </p>
          </div>
          <div>
            {experience.map((item) => (
              <TimelineItem key={item.id} item={item} />
            ))}
          </div>
        </div>

        <div className="section-line mb-16" />

        <div>
          <div className="flex items-center gap-3 mb-8">
            <div className="w-6 h-px bg-accent/30" />
            <p className="text-[10px] font-bold text-[#4a4f6a] tracking-[0.2em] uppercase">
              Education
            </p>
          </div>
          <div>
            {education.map((item) => (
              <TimelineItem key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

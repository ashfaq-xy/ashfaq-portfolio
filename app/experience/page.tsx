import type { Metadata } from "next";
import SectionHeading from "@/components/ui/SectionHeading";
import TimelineItem from "@/components/ui/TimelineItem";
import { experience, education } from "@/lib/data";

export const metadata: Metadata = {
  title: "Experience & Education",
  description:
    "Professional experience and academic background of Md Ashfaq — BCA graduate, MCA student at SRM.",
};

export default function ExperiencePage() {
  return (
    <section className="py-20">
      <div className="max-w-3xl mx-auto px-6">
        <SectionHeading
          label="Background"
          title="Experience & Education"
          subtitle="Where I've worked and what I've studied."
        />

        {/* Experience */}
        <div className="mb-16">
          <h3 className="text-xs font-semibold text-text-subtle tracking-[0.12em] uppercase mb-6">
            Work experience
          </h3>
          <div>
            {experience.map((item) => (
              <TimelineItem key={item.id} item={item} />
            ))}
          </div>
        </div>

        {/* Education */}
        <div>
          <h3 className="text-xs font-semibold text-text-subtle tracking-[0.12em] uppercase mb-6">
            Education
          </h3>
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

import SectionHeading from "@/components/ui/SectionHeading";
import { personalInfo, stats } from "@/lib/data";

export default function AboutSection() {
  return (
    <section className="py-20 border-t border-[rgba(255,255,255,0.05)]">
      <div className="max-w-4xl mx-auto px-6">
        <SectionHeading
          label="About me"
          title="A bit about myself"
        />

        <p className="text-base text-text-muted leading-[1.8] mb-10 max-w-2xl">
          {personalInfo.about}
        </p>

        <div className="grid grid-cols-3 gap-4 max-w-md">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-bg-surface rounded-lg border border-[rgba(255,255,255,0.06)] p-4 text-center"
            >
              <p className="text-2xl font-bold text-accent mb-1">{stat.value}</p>
              <p className="text-[11px] font-medium text-text-subtle tracking-wide uppercase">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

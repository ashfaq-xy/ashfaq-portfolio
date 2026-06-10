import SectionHeading from "@/components/ui/SectionHeading";
import { personalInfo, stats } from "@/lib/data";

export default function AboutSection() {
  return (
    <section className="relative py-24">
      <div className="section-line" />
      <div className="max-w-5xl mx-auto px-6 pt-24">
        <SectionHeading
          label="About me"
          title="A bit about"
          highlight="myself"
        />

        <div className="grid lg:grid-cols-[1fr,auto] gap-12 items-start">
          <p className="text-base sm:text-lg text-[#7a7f9a] leading-[1.9] font-light">
            {personalInfo.about}
          </p>

          {/* Stats cards */}
          <div className="flex lg:flex-col gap-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="glow-card flex-1 p-5 text-center transition-all duration-300"
              >
                <p className="text-3xl font-extrabold gradient-text mb-1">{stat.value}</p>
                <p className="text-[10px] font-semibold text-[#4a4f6a] tracking-[0.15em] uppercase">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

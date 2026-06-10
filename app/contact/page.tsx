import type { Metadata } from "next";
import SectionHeading from "@/components/ui/SectionHeading";
import { Mail, MapPin, ExternalLink } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import { personalInfo, socialLinks } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Md Ashfaq — open to AI/ML internships and collaborations.",
};

const contactItems = [
  {
    icon: <Mail size={20} />,
    label: "Email",
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
    external: false,
  },
  {
    icon: <LinkedinIcon size={20} />,
    label: "LinkedIn",
    value: "linkedin.com/in/work-mdashfaq",
    href: socialLinks.find((l) => l.icon === "linkedin")?.url || "#",
    external: true,
  },
  {
    icon: <GithubIcon size={20} />,
    label: "GitHub",
    value: "github.com/ashfaq-xy",
    href: socialLinks.find((l) => l.icon === "github")?.url || "#",
    external: true,
  },
];

export default function ContactPage() {
  return (
    <section className="relative py-24">
      <div className="max-w-3xl mx-auto px-6">
        <SectionHeading
          label="Let's connect"
          title="Ready to build something"
          highlight="great?"
          subtitle="I'm open to internship roles and collaborations — feel free to reach out."
        />

        <div className="space-y-4 mb-12">
          {contactItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noopener noreferrer" : undefined}
              className="group glow-card flex items-center gap-5 p-6 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_40px_rgba(108,142,245,0.06)]"
              aria-label={`${item.label}: ${item.value}`}
            >
              <div className="w-12 h-12 rounded-xl bg-[rgba(108,142,245,0.08)] border border-[rgba(108,142,245,0.15)] flex items-center justify-center text-accent flex-shrink-0 group-hover:shadow-[0_0_20px_rgba(108,142,245,0.15)] transition-all duration-300">
                {item.icon}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[10px] font-bold text-[#4a4f6a] tracking-[0.2em] uppercase mb-0.5">
                  {item.label}
                </p>
                <p className="text-sm font-medium text-white truncate">{item.value}</p>
              </div>
              {item.external && (
                <ExternalLink size={14} className="text-[#3a3f5a] group-hover:text-accent transition-colors flex-shrink-0" />
              )}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2.5 text-sm text-[#4a4f6a]">
          <MapPin size={14} />
          <span>{personalInfo.location} · {personalInfo.availability}</span>
        </div>
      </div>
    </section>
  );
}

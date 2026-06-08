import type { Metadata } from "next";
import SectionHeading from "@/components/ui/SectionHeading";
import { Mail, MapPin, ExternalLink } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import { personalInfo, socialLinks } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Md Ashfaq — open to AI/ML internships, collaborations, and opportunities.",
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
    value: "linkedin.com/in/mdashfaq",
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
    <section className="py-20">
      <div className="max-w-3xl mx-auto px-6">
        <SectionHeading
          label="Let's connect"
          title="Get in touch"
          subtitle="I'm open to internship roles and collaborations — feel free to reach out."
        />

        <div className="space-y-4 mb-10">
          {contactItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noopener noreferrer" : undefined}
              className="flex items-center gap-4 bg-bg-surface rounded-xl border border-[rgba(255,255,255,0.06)] p-5 hover:border-accent/30 hover:bg-bg-elevated transition-all duration-200 group"
              aria-label={`${item.label}: ${item.value}${item.external ? " (opens in new tab)" : ""}`}
            >
              <div className="w-10 h-10 rounded-lg bg-accent-dim flex items-center justify-center text-accent flex-shrink-0">
                {item.icon}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-medium text-text-subtle tracking-wide uppercase mb-0.5">
                  {item.label}
                </p>
                <p className="text-sm text-text-primary truncate">{item.value}</p>
              </div>
              {item.external && (
                <ExternalLink
                  size={14}
                  className="text-text-subtle group-hover:text-accent transition-colors flex-shrink-0"
                />
              )}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2 text-sm text-text-subtle">
          <MapPin size={14} />
          <span>{personalInfo.location} · {personalInfo.availability}</span>
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";
import { Download, ArrowRight, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import Button from "@/components/ui/Button";
import { personalInfo, socialLinks } from "@/lib/data";

const iconMap: Record<string, React.ReactNode> = {
  github: <GithubIcon size={18} />,
  linkedin: <LinkedinIcon size={18} />,
  mail: <Mail size={18} />,
};

export default function HeroSection() {
  return (
    <section className="min-h-[85vh] flex items-center py-20">
      <div className="w-full max-w-6xl mx-auto px-6 flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">
        {/* Text */}
        <div className="flex-1 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent-dim border border-[rgba(108,142,245,0.2)] mb-6">
            <span className="w-2 h-2 rounded-full bg-tag-green animate-pulse" />
            <span className="text-xs font-medium text-accent">
              Available for opportunities
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-bold text-text-primary tracking-tight leading-[1.1] mb-4">
            {personalInfo.name}
          </h1>

          <p className="text-lg sm:text-xl text-accent font-medium mb-3">
            {personalInfo.tagline}
          </p>

          <p className="text-base text-text-muted leading-relaxed max-w-lg mx-auto lg:mx-0 mb-8">
            {personalInfo.heroSubtitle}
          </p>

          <div className="flex flex-wrap gap-3 justify-center lg:justify-start mb-8">
            <Button href={personalInfo.resumeUrl} variant="primary" download>
              <Download size={16} />
              Download CV
            </Button>
            <Button href="/contact" variant="outline">
              Get in touch
              <ArrowRight size={16} />
            </Button>
          </div>

          {/* Social icons */}
          <div className="flex gap-3 justify-center lg:justify-start">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target={link.icon !== "mail" ? "_blank" : undefined}
                rel={link.icon !== "mail" ? "noopener noreferrer" : undefined}
                className="w-10 h-10 rounded-lg bg-bg-surface border border-[rgba(255,255,255,0.07)] flex items-center justify-center text-text-muted hover:text-accent hover:border-accent/30 transition-all duration-200"
                aria-label={`${link.name} profile`}
              >
                {iconMap[link.icon]}
              </a>
            ))}
          </div>
        </div>

        {/* Profile image */}
        <div className="relative flex-shrink-0">
          <div className="w-56 h-56 sm:w-64 sm:h-64 lg:w-72 lg:h-72 rounded-2xl overflow-hidden border-2 border-[rgba(255,255,255,0.08)] shadow-[0_0_60px_rgba(108,142,245,0.08)]">
            <Image
              src={personalInfo.profileImage}
              alt="Md Ashfaq, AI/ML developer"
              width={288}
              height={288}
              priority
              className="w-full h-full object-cover"
            />
          </div>
          {/* Decorative accent */}
          <div className="absolute -z-10 -bottom-3 -right-3 w-full h-full rounded-2xl border border-accent/20" />
        </div>
      </div>
    </section>
  );
}

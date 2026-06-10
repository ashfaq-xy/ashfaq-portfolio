import Image from "next/image";
import { Download, ArrowRight, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import Button from "@/components/ui/Button";
import { personalInfo, socialLinks } from "@/lib/data";
import TypingText from "@/components/ui/TypingText";

const iconMap: Record<string, React.ReactNode> = {
  github: <GithubIcon size={18} />,
  linkedin: <LinkedinIcon size={18} />,
  mail: <Mail size={18} />,
};

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center hero-glow overflow-hidden">
      {/* Decorative grid */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'linear-gradient(rgba(108,142,245,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(108,142,245,0.3) 1px, transparent 1px)',
        backgroundSize: '60px 60px'
      }} />
      
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-16">
        {/* Text */}
        <div className="flex-1 text-center lg:text-left">
          {/* Status badge */}
          <div className="animate-in animate-delay-1 inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[rgba(108,142,245,0.08)] border border-[rgba(108,142,245,0.15)] mb-8">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400"></span>
            </span>
            <span className="text-xs font-medium text-[#8fa4f0] tracking-wide">
              Available for opportunities
            </span>
          </div>

          {/* Name — large, bold */}
          <h1 className="animate-in animate-delay-2 text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.05] mb-2">
            <span className="text-white">Md </span>
            <span className="gradient-text">Ashfaq</span>
          </h1>

          {/* Typing role animation */}
          <div className="animate-in animate-delay-3 h-10 flex items-center justify-center lg:justify-start mb-4">
            <span className="text-lg sm:text-xl font-mono text-[#5a6080]">$ </span>
            <TypingText
              texts={["Aspiring AI/ML Developer", "Python Enthusiast", "Data Analysis", "MCA Student @ SRM"]}
              className="text-lg sm:text-xl font-mono text-accent"
            />
          </div>

          {/* Subtitle */}
          <p className="animate-in animate-delay-4 text-base sm:text-lg text-[#6b7094] leading-relaxed max-w-lg mx-auto lg:mx-0 mb-8 font-light">
            Turning data into insight, one model at a time.
          </p>

          {/* CTA buttons */}
          <div className="animate-in animate-delay-5 flex flex-wrap gap-3 justify-center lg:justify-start mb-10">
            <Button href={personalInfo.resumeUrl} variant="primary" size="lg" download>
              <Download size={16} />
              Download CV
            </Button>
            <Button href="/contact" variant="outline" size="lg">
              Get in touch
              <ArrowRight size={16} />
            </Button>
          </div>

          {/* Social icons */}
          <div className="animate-in animate-delay-5 flex gap-3 justify-center lg:justify-start">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target={link.icon !== "mail" ? "_blank" : undefined}
                rel={link.icon !== "mail" ? "noopener noreferrer" : undefined}
                className="w-11 h-11 rounded-xl bg-[#12121A] border border-[rgba(255,255,255,0.06)] flex items-center justify-center text-[#5a6080] hover:text-accent hover:border-accent/30 hover:shadow-[0_0_20px_rgba(108,142,245,0.1)] transition-all duration-300"
                aria-label={`${link.name} profile`}
              >
                {iconMap[link.icon]}
              </a>
            ))}
          </div>
        </div>

        {/* Profile image */}
        <div className="animate-in animate-delay-3 relative flex-shrink-0">
          <div className="relative w-60 h-60 sm:w-72 sm:h-72 lg:w-80 lg:h-80">
            {/* Glow behind image */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/20 via-purple-500/10 to-transparent blur-2xl scale-110" />
            
            {/* Image container */}
            <div className="relative w-full h-full rounded-2xl overflow-hidden border border-[rgba(255,255,255,0.08)]">
              <Image
                src={personalInfo.profileImage}
                alt="Md Ashfaq, AI/ML developer"
                width={320}
                height={320}
                priority
                className="w-full h-full object-cover"
              />
              {/* Bottom gradient fade */}
              <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#0A0A0F]/60 to-transparent" />
            </div>

            {/* Corner decorations */}
            <div className="absolute -top-2 -right-2 w-6 h-6 border-t-2 border-r-2 border-accent/40 rounded-tr-lg" />
            <div className="absolute -bottom-2 -left-2 w-6 h-6 border-b-2 border-l-2 border-accent/40 rounded-bl-lg" />
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0A0A0F] to-transparent" />
    </section>
  );
}

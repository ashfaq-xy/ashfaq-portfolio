import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import { socialLinks } from "@/lib/data";

const iconMap: Record<string, React.ReactNode> = {
  github: <GithubIcon size={15} />,
  linkedin: <LinkedinIcon size={15} />,
  mail: <Mail size={15} />,
};

export default function Footer() {
  return (
    <footer className="border-t border-[rgba(255,255,255,0.04)] py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs text-[#3a3f5a] font-mono">
          © {new Date().getFullYear()} Md Ashfaq · Built with Next.js
        </p>
        <div className="flex items-center gap-2">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target={link.icon !== "mail" ? "_blank" : undefined}
              rel={link.icon !== "mail" ? "noopener noreferrer" : undefined}
              className="w-8 h-8 rounded-lg flex items-center justify-center text-[#3a3f5a] hover:text-accent hover:bg-[rgba(108,142,245,0.06)] transition-all duration-300"
              aria-label={`${link.name} profile`}
            >
              {iconMap[link.icon]}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

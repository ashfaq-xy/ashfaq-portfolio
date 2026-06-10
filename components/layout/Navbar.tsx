"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/experience", label: "Experience" },
  { href: "/skills", label: "Skills" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#0A0A0F]/70 backdrop-blur-2xl border-b border-[rgba(255,255,255,0.04)] shadow-[0_4px_30px_rgba(0,0,0,0.3)]"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        <Link
          href="/"
          className="text-sm font-extrabold tracking-[0.12em] uppercase text-white hover:text-accent transition-colors duration-300"
        >
          Ashfaq<span className="text-accent">.</span>dev
        </Link>

        <div className="hidden md:flex items-center gap-0.5">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-4 py-2 text-[13px] font-medium rounded-lg transition-all duration-300 ${
                  isActive
                    ? "text-accent"
                    : "text-[#5a6080] hover:text-white"
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-4 h-0.5 rounded-full bg-accent" />
                )}
              </Link>
            );
          })}
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg text-[#5a6080] hover:text-white transition-colors"
          aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {mobileOpen && (
        <div className="md:hidden bg-[#0A0A0F]/95 backdrop-blur-2xl border-t border-[rgba(255,255,255,0.04)]">
          <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col gap-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-3 text-sm font-medium rounded-lg transition-all duration-200 ${
                    isActive
                      ? "text-accent bg-[rgba(108,142,245,0.08)]"
                      : "text-[#5a6080] hover:text-white hover:bg-[#12121A]"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
}

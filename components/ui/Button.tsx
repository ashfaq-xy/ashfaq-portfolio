import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  external?: boolean;
  download?: boolean;
  className?: string;
  onClick?: () => void;
}

export default function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  external = false,
  download = false,
  className = "",
  onClick,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 font-medium rounded-lg transition-all duration-200 active:scale-[0.97] focus-visible:ring-2 focus-visible:ring-accent focus-visible:outline-none";

  const variants = {
    primary:
      "bg-accent text-white hover:bg-[#5A7DE3] shadow-[0_0_20px_rgba(108,142,245,0.15)]",
    outline:
      "border border-[rgba(255,255,255,0.14)] text-text-primary hover:bg-bg-elevated hover:border-[rgba(255,255,255,0.22)]",
    ghost:
      "text-text-muted hover:text-text-primary hover:bg-bg-elevated",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-2.5 text-sm",
    lg: "px-8 py-3 text-base",
  };

  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    if (external || download) {
      return (
        <a
          href={href}
          className={classes}
          target={external ? "_blank" : undefined}
          rel={external ? "noopener noreferrer" : undefined}
          download={download}
          aria-label={external ? `${children} (opens in new tab)` : undefined}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
}

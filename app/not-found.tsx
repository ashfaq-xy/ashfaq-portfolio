import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <section className="min-h-[70vh] flex items-center justify-center hero-glow">
      <div className="text-center px-6">
        <p className="text-8xl font-extrabold gradient-text mb-4">404</p>
        <h1 className="text-xl font-bold text-white mb-2">Page not found</h1>
        <p className="text-sm text-[#5a6080] mb-10 max-w-sm mx-auto">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link href="/"
          className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold rounded-xl bg-accent text-white hover:bg-[#5A7DE3] shadow-[0_0_25px_rgba(108,142,245,0.15)] transition-all active:scale-[0.97]">
          <ArrowLeft size={16} />
          Back to home
        </Link>
      </div>
    </section>
  );
}

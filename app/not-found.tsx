import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <section className="min-h-[60vh] flex items-center justify-center">
      <div className="text-center px-6">
        <p className="text-6xl font-bold text-accent mb-4">404</p>
        <h1 className="text-xl font-semibold text-text-primary mb-2">
          Page not found
        </h1>
        <p className="text-sm text-text-muted mb-8 max-w-sm mx-auto">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-2.5 text-sm font-medium rounded-lg bg-accent text-white hover:bg-[#5A7DE3] transition-colors active:scale-[0.97]"
        >
          <ArrowLeft size={16} />
          Back to home
        </Link>
      </div>
    </section>
  );
}

import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: {
    default: "Md Ashfaq — AI/ML Developer",
    template: "%s | Md Ashfaq",
  },
  description:
    "MCA student at SRM building AI/ML projects. Skilled in Python, Azure AI, and data analysis. Open to internships and collaborations.",
  keywords: [
    "AI developer",
    "ML developer",
    "Python",
    "Azure",
    "MCA",
    "SRM",
    "internship",
    "machine learning",
    "portfolio",
  ],
  authors: [{ name: "Md Ashfaq" }],
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    title: "Md Ashfaq — AI/ML Developer",
    description:
      "MCA student at SRM building AI/ML projects. Skilled in Python, Azure AI, and data analysis.",
    siteName: "Md Ashfaq Portfolio",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans bg-bg-primary text-text-primary min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

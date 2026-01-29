import "./globals.css";
import { Outfit } from "next/font/google";
import type { Metadata } from "next";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Easy Education | AI-Powered Learning Ecosystem",
  description: "Future-ready learning ecosystem powered by adaptive AI systems. Personalized. Adaptive. Future-proof.",
  keywords: ["AI Learning", "Education", "Online Learning", "Adaptive Learning", "AI Tutor"],
  authors: [{ name: "Easy Education" }],
  openGraph: {
    title: "Easy Education | AI-Powered Learning Ecosystem",
    description: "Future-ready learning ecosystem powered by adaptive AI systems.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={outfit.variable}>
      <body className="antialiased">
        {/* Background Orbs */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
          <div className="bg-orb bg-orb-1"></div>
          <div className="bg-orb bg-orb-2"></div>
          <div className="bg-orb bg-orb-3"></div>
        </div>

        {children}
      </body>
    </html>
  );
}

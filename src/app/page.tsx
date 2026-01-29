"use client";
import { modules } from "@/data/learning";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import LearningCoreScroll from "@/components/LearningCoreScroll";
import LearningTextOverlays from "@/components/LearningTextOverlays";
import FeaturesSection from "@/components/FeaturesSection";
import StatsSection from "@/components/StatsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Page() {
  const module = modules[0];

  return (
    <main className="relative">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <HeroSection />

      {/* Scrollytelling Canvas Experience */}
      <section id="how-it-works" className="relative">
        <LearningCoreScroll
          folder={module.folderPath}
          totalFrames={module.totalFrames}
        />
        <LearningTextOverlays sections={module.sections} />
      </section>

      {/* Features Section */}
      <FeaturesSection />

      {/* Stats Section */}
      <StatsSection stats={module.stats} />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* CTA Section */}
      <CTASection />

      {/* Footer */}
      <Footer />
    </main>
  );
}

"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { LearningSection } from "@/data/learning";

interface LearningTextOverlaysProps {
    sections: LearningSection[];
}

export default function LearningTextOverlays({ sections }: LearningTextOverlaysProps) {
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        offset: ["start start", "end end"]
    });

    return (
        <div ref={containerRef} className="overlay-text">
            {sections.map((section, index) => {
                const sectionProgress = 1 / (sections.length + 1);
                const start = index * sectionProgress;
                const peak = start + sectionProgress / 2;
                const end = start + sectionProgress;

                return (
                    <SectionText
                        key={index}
                        section={section}
                        scrollYProgress={scrollYProgress}
                        start={start}
                        peak={peak}
                        end={end}
                    />
                );
            })}
        </div>
    );
}

interface SectionTextProps {
    section: LearningSection;
    scrollYProgress: any;
    start: number;
    peak: number;
    end: number;
}

function SectionText({ section, scrollYProgress, start, peak, end }: SectionTextProps) {
    const opacity = useTransform(
        scrollYProgress,
        [start, peak - 0.02, peak, peak + 0.02, end],
        [0, 1, 1, 1, 0]
    );

    const y = useTransform(
        scrollYProgress,
        [start, peak, end],
        [50, 0, -50]
    );

    const scale = useTransform(
        scrollYProgress,
        [start, peak, end],
        [0.9, 1, 0.9]
    );

    return (
        <motion.div
            style={{ opacity, y, scale }}
            className="absolute text-center max-w-4xl px-6"
        >
            <motion.h1
                className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6"
                style={{
                    background: 'linear-gradient(135deg, #fff 0%, #a5b4fc 50%, #8b5cf6 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                }}
            >
                {section.title}
            </motion.h1>
            <motion.p className="text-xl md:text-2xl text-white/70 font-light max-w-2xl mx-auto">
                {section.subtitle}
            </motion.p>

            {/* Decorative Elements */}
            <div className="mt-8 flex justify-center gap-2">
                <span className="w-12 h-1 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full" />
                <span className="w-6 h-1 bg-white/30 rounded-full" />
                <span className="w-3 h-1 bg-white/20 rounded-full" />
            </div>
        </motion.div>
    );
}

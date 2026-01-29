"use client";
import { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

interface LearningCoreScrollProps {
    folder: string;
    totalFrames: number;
}

export default function LearningCoreScroll({ folder, totalFrames }: LearningCoreScrollProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const imagesRef = useRef<HTMLImageElement[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [loadProgress, setLoadProgress] = useState(0);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // Preload all images
    useEffect(() => {
        let loadedCount = 0;
        const images: HTMLImageElement[] = [];

        for (let i = 1; i <= totalFrames; i++) {
            const img = new Image();
            const frameNum = String(i).padStart(3, '0');
            img.src = `${folder}/ezgif-frame-${frameNum}.jpg`;

            img.onload = () => {
                loadedCount++;
                setLoadProgress(Math.round((loadedCount / totalFrames) * 100));
                if (loadedCount === totalFrames) {
                    setIsLoading(false);
                }
            };

            img.onerror = () => {
                loadedCount++;
                setLoadProgress(Math.round((loadedCount / totalFrames) * 100));
            };

            images.push(img);
        }

        imagesRef.current = images;
    }, [folder, totalFrames]);

    // Canvas rendering
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        handleResize();
        window.addEventListener("resize", handleResize);

        const unsubscribe = scrollYProgress.on("change", (progress) => {
            const frameIndex = Math.min(
                totalFrames - 1,
                Math.floor(progress * totalFrames)
            );

            const img = imagesRef.current[frameIndex];
            if (!img || !img.complete) return;

            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Calculate scaling to cover the canvas
            const scale = Math.max(
                canvas.width / img.width,
                canvas.height / img.height
            );

            const x = (canvas.width - img.width * scale) / 2;
            const y = (canvas.height - img.height * scale) / 2;

            ctx.drawImage(img, x, y, img.width * scale, img.height * scale);
        });

        return () => {
            window.removeEventListener("resize", handleResize);
            unsubscribe();
        };
    }, [scrollYProgress, totalFrames]);

    // Scroll progress indicator
    const progressBarWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

    return (
        <div ref={containerRef} className="scroll-container">
            {/* Loading Screen */}
            {isLoading && (
                <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e]">
                    <div className="text-center">
                        <div className="mb-8">
                            <span className="text-5xl font-bold text-gradient">Easy Education</span>
                        </div>
                        <div className="w-64 h-2 bg-white/10 rounded-full overflow-hidden">
                            <motion.div
                                className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"
                                initial={{ width: "0%" }}
                                animate={{ width: `${loadProgress}%` }}
                                transition={{ duration: 0.3 }}
                            />
                        </div>
                        <p className="mt-4 text-white/60">Loading experience... {loadProgress}%</p>
                    </div>
                </div>
            )}

            {/* Progress Bar */}
            <div className="fixed top-0 left-0 right-0 h-1 z-50 bg-white/10">
                <motion.div
                    className="h-full bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500"
                    style={{ width: progressBarWidth }}
                />
            </div>

            {/* Sticky Canvas */}
            <div className="sticky-canvas">
                <canvas
                    ref={canvasRef}
                    className="w-full h-full"
                    style={{ background: 'transparent' }}
                />

                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0f0c29]/80 pointer-events-none" />
            </div>
        </div>
    );
}

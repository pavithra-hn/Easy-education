"use client";
import { motion } from "framer-motion";

export default function HeroSection() {
    return (
        <section className="relative min-h-screen flex items-center justify-center px-6 pt-24 pb-16">
            {/* Content */}
            <div className="max-w-5xl mx-auto text-center z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8"
                    >
                        <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                        <span className="text-white/70 text-sm">AI-Powered Learning Ecosystem</span>
                    </motion.div>

                    {/* Main Heading */}
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight">
                        <span className="text-white">Learn Smarter</span>
                        <br />
                        <span className="text-gradient">Not Harder</span>
                    </h1>

                    {/* Subheading */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-xl md:text-2xl text-white/60 max-w-2xl mx-auto mb-12"
                    >
                        Experience personalized learning powered by advanced AI that adapts to your unique style,
                        pace, and goals.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                    >
                        <motion.button
                            whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(99, 102, 241, 0.6)" }}
                            whileTap={{ scale: 0.98 }}
                            className="btn-primary text-white text-lg px-8 py-4 w-full sm:w-auto"
                        >
                            Start Learning Free
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.98 }}
                            className="glass px-8 py-4 rounded-full text-white font-semibold hover:bg-white/10 transition-all w-full sm:w-auto"
                        >
                            See How It Works
                        </motion.button>
                    </motion.div>
                </motion.div>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1.2 }}
                    className="absolute bottom-8 left-1/2 -translate-x-1/2"
                >
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        className="flex flex-col items-center gap-2"
                    >
                        <span className="text-white/40 text-sm">Scroll to explore</span>
                        <div className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center pt-2">
                            <motion.div
                                animate={{ y: [0, 12, 0] }}
                                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                                className="w-1.5 h-1.5 rounded-full bg-white/60"
                            />
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}

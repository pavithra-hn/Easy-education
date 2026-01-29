"use client";
import { motion } from "framer-motion";

export default function CTASection() {
    return (
        <section className="py-32 px-6 relative overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 via-purple-600/20 to-pink-600/20" />
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 blur-[120px] opacity-30"
                />
            </div>

            <div className="max-w-4xl mx-auto text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="inline-block px-4 py-2 rounded-full bg-white/10 text-white/80 text-sm font-medium mb-8">
                        🚀 Start your journey today
                    </span>

                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                        Ready to Transform
                        <br />
                        <span className="text-gradient">Your Learning Journey?</span>
                    </h2>

                    <p className="text-xl text-white/60 mb-10 max-w-2xl mx-auto">
                        Join thousands of learners who are already mastering new skills with the power of AI.
                        Your future starts here.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <motion.button
                            whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(99, 102, 241, 0.6)" }}
                            whileTap={{ scale: 0.98 }}
                            className="btn-primary text-white text-lg px-10 py-4 w-full sm:w-auto"
                        >
                            Get Started Free
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.98 }}
                            className="glass px-10 py-4 rounded-full text-white font-semibold hover:bg-white/10 transition-all w-full sm:w-auto flex items-center justify-center gap-2"
                        >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                            </svg>
                            Watch Demo
                        </motion.button>
                    </div>

                    {/* Trust Indicators */}
                    <div className="mt-12 flex flex-wrap justify-center items-center gap-8 text-white/50 text-sm">
                        <div className="flex items-center gap-2">
                            <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span>No credit card required</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span>Free forever plan</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span>Cancel anytime</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

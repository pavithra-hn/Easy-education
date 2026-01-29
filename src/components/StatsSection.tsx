"use client";
import { motion } from "framer-motion";
import { LearningStat } from "@/data/learning";

interface StatsSectionProps {
    stats: LearningStat[];
}

export default function StatsSection({ stats }: StatsSectionProps) {
    return (
        <section className="py-24 px-6 relative">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Transforming Education at Scale
                    </h2>
                    <p className="text-white/60 max-w-xl mx-auto">
                        Our AI-powered platform delivers measurable results that speak for themselves.
                    </p>
                </motion.div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ scale: 1.05 }}
                            className="stats-card"
                        >
                            <span className="text-4xl mb-4 block">{stat.icon}</span>
                            <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white to-indigo-300 bg-clip-text text-transparent mb-2">
                                {stat.value}
                            </div>
                            <div className="text-white/50 text-sm uppercase tracking-wider">
                                {stat.label}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Additional Large Stats */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="mt-16 grid md:grid-cols-3 gap-8 text-center"
                >
                    <div className="glass rounded-2xl p-8">
                        <div className="text-5xl font-bold text-gradient mb-2">50K+</div>
                        <div className="text-white/60">Active Learners</div>
                    </div>
                    <div className="glass rounded-2xl p-8">
                        <div className="text-5xl font-bold text-gradient mb-2">98%</div>
                        <div className="text-white/60">Satisfaction Rate</div>
                    </div>
                    <div className="glass rounded-2xl p-8">
                        <div className="text-5xl font-bold text-gradient mb-2">500+</div>
                        <div className="text-white/60">AI-Powered Courses</div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

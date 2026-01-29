"use client";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        setIsScrolled(latest > 50);
    });

    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className={`fixed top-0 w-full z-50 px-6 py-4 transition-all duration-300 ${isScrolled
                    ? "glass bg-black/30"
                    : "bg-transparent"
                }`}
        >
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                {/* Logo */}
                <motion.div
                    className="flex items-center gap-3"
                    whileHover={{ scale: 1.02 }}
                >
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg shadow-indigo-500/30">
                        <span className="text-white font-bold text-lg">E</span>
                    </div>
                    <span className="font-bold text-xl bg-gradient-to-r from-white to-indigo-200 bg-clip-text text-transparent">
                        Easy Education
                    </span>
                </motion.div>

                {/* Navigation Links */}
                <div className="hidden md:flex items-center gap-8">
                    <NavLink href="#features">Features</NavLink>
                    <NavLink href="#how-it-works">How It Works</NavLink>
                    <NavLink href="#testimonials">Success Stories</NavLink>
                    <NavLink href="#pricing">Pricing</NavLink>
                </div>

                {/* CTA Button */}
                <motion.button
                    whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(99, 102, 241, 0.5)" }}
                    whileTap={{ scale: 0.98 }}
                    className="btn-primary text-white text-sm"
                >
                    Start Learning
                </motion.button>
            </div>
        </motion.nav>
    );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
    return (
        <motion.a
            href={href}
            className="text-white/70 hover:text-white transition-colors duration-200 text-sm font-medium relative group"
            whileHover={{ y: -2 }}
        >
            {children}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-pink-500 group-hover:w-full transition-all duration-300" />
        </motion.a>
    );
}

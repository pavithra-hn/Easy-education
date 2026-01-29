"use client";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Footer() {
    const [email, setEmail] = useState("");

    const footerLinks = {
        platform: [
            { name: "AI Learning Paths", href: "#" },
            { name: "Courses", href: "#" },
            { name: "AI Tutor", href: "#" },
            { name: "Certifications", href: "#" },
            { name: "Enterprise", href: "#" },
        ],
        company: [
            { name: "About", href: "#" },
            { name: "Careers", href: "#" },
            { name: "Blog", href: "#" },
            { name: "Press", href: "#" },
        ],
        support: [
            { name: "Help Center", href: "#" },
            { name: "Contact Us", href: "#" },
            { name: "Community", href: "#" },
            { name: "Status", href: "#" },
        ],
        legal: [
            { name: "Privacy", href: "#" },
            { name: "Terms", href: "#" },
            { name: "Cookies", href: "#" },
        ],
    };

    return (
        <footer className="relative bg-black/40 border-t border-white/10">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-indigo-950/30 to-transparent pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 py-16 relative z-10">
                {/* Main Footer Content */}
                <div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-12">
                    {/* Brand Column */}
                    <div className="col-span-2">
                        <motion.div
                            className="flex items-center gap-3 mb-6"
                            whileHover={{ scale: 1.02 }}
                        >
                            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg shadow-indigo-500/30">
                                <span className="text-white font-bold text-lg">E</span>
                            </div>
                            <span className="font-bold text-xl text-white">
                                Easy Education
                            </span>
                        </motion.div>
                        <p className="text-white/50 mb-6 max-w-xs leading-relaxed">
                            The future of learning is here. AI-powered education that adapts to you.
                        </p>

                        {/* Newsletter */}
                        <div className="mb-6">
                            <h4 className="text-white font-semibold mb-3">Stay Updated</h4>
                            <div className="flex gap-2">
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Enter your email"
                                    className="flex-1 px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-indigo-500/50 transition-colors"
                                />
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="px-4 py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-medium"
                                >
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </motion.button>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="flex gap-4">
                            {["twitter", "linkedin", "github", "youtube"].map((social) => (
                                <motion.a
                                    key={social}
                                    href="#"
                                    whileHover={{ scale: 1.1, y: -2 }}
                                    className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 transition-colors"
                                >
                                    <SocialIcon name={social} />
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    {/* Links Columns */}
                    <div>
                        <h4 className="text-white font-semibold mb-4">Platform</h4>
                        <ul className="space-y-3">
                            {footerLinks.platform.map((link) => (
                                <li key={link.name}>
                                    <a href={link.href} className="text-white/50 hover:text-white transition-colors text-sm">
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold mb-4">Company</h4>
                        <ul className="space-y-3">
                            {footerLinks.company.map((link) => (
                                <li key={link.name}>
                                    <a href={link.href} className="text-white/50 hover:text-white transition-colors text-sm">
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold mb-4">Support</h4>
                        <ul className="space-y-3">
                            {footerLinks.support.map((link) => (
                                <li key={link.name}>
                                    <a href={link.href} className="text-white/50 hover:text-white transition-colors text-sm">
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold mb-4">Legal</h4>
                        <ul className="space-y-3">
                            {footerLinks.legal.map((link) => (
                                <li key={link.name}>
                                    <a href={link.href} className="text-white/50 hover:text-white transition-colors text-sm">
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-white/40 text-sm">
                        © 2026 Easy Education. All rights reserved.
                    </p>
                    <div className="flex items-center gap-6 text-white/40 text-sm">
                        <span className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                            All systems operational
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    );
}

function SocialIcon({ name }: { name: string }) {
    const icons: Record<string, JSX.Element> = {
        twitter: (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
            </svg>
        ),
        linkedin: (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
        ),
        github: (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
            </svg>
        ),
        youtube: (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
        ),
    };

    return icons[name] || null;
}

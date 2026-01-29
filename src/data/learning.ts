export interface LearningSection {
    title: string;
    subtitle: string;
}

export interface LearningStat {
    label: string;
    value: string;
    icon: string;
}

export interface LearningModule {
    id: string;
    title: string;
    subtitle: string;
    description: string;
    folderPath: string;
    totalFrames: number;
    gradient: string;
    sections: LearningSection[];
    stats: LearningStat[];
}

export const modules: LearningModule[] = [
    {
        id: "core",
        title: "AI Learning Core",
        subtitle: "Where knowledge becomes intelligence.",
        description:
            "A unified learning ecosystem powered by adaptive AI systems that understand your unique learning style.",
        folderPath: "/images/core",
        totalFrames: 186,
        gradient: "linear-gradient(135deg, #6366f1, #8b5cf6)",
        stats: [
            { label: "Automation", value: "100%", icon: "⚡" },
            { label: "Adaptivity", value: "Real-time", icon: "🔄" },
            { label: "Scalability", value: "Infinite", icon: "📈" },
            { label: "Personalization", value: "AI-Driven", icon: "🎯" },
        ],
        sections: [
            {
                title: "Knowledge Emergence",
                subtitle: "Learning that evolves with you. Every interaction builds understanding."
            },
            {
                title: "Structured Intelligence",
                subtitle: "Curriculum meets cognition. AI-crafted pathways for mastery."
            },
            {
                title: "AI Guidance",
                subtitle: "Invisible mentors, always active. 24/7 personalized support."
            },
            {
                title: "Future-Ready Skills",
                subtitle: "Designed for tomorrow's world. Skills that matter."
            },
            {
                title: "Adaptive Mastery",
                subtitle: "Progress at your pace. The system learns as you learn."
            },
        ],
    },
];

export const features = [
    {
        icon: "🧠",
        title: "Neural Learning Paths",
        description: "AI-generated curriculum that adapts in real-time to your progress and learning style."
    },
    {
        icon: "🎯",
        title: "Precision Assessment",
        description: "Smart evaluations that identify knowledge gaps and optimize your learning journey."
    },
    {
        icon: "💬",
        title: "24/7 AI Tutor",
        description: "Instant answers to your questions with contextual explanations tailored to you."
    },
    {
        icon: "📊",
        title: "Progress Analytics",
        description: "Deep insights into your learning patterns with actionable recommendations."
    },
    {
        icon: "🌐",
        title: "Global Learning Network",
        description: "Connect with learners worldwide and collaborate on projects."
    },
    {
        icon: "🏆",
        title: "Skill Certification",
        description: "Industry-recognized certifications that validate your expertise."
    },
];

export const testimonials = [
    {
        name: "Sarah Chen",
        role: "Data Scientist at Google",
        quote: "Easy Education transformed my learning journey. The AI tutor understood exactly where I struggled.",
        avatar: "SC"
    },
    {
        name: "Marcus Johnson",
        role: "Software Engineer",
        quote: "The adaptive learning paths saved me months of unfocused studying. Truly revolutionary.",
        avatar: "MJ"
    },
    {
        name: "Elena Rodriguez",
        role: "Product Manager",
        quote: "I went from beginner to job-ready in 6 months. The personalization is incredible.",
        avatar: "ER"
    },
];

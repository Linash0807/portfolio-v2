import * as React from "react";
import { motion } from "framer-motion";
import { Monitor, Server, ShieldCheck, Wrench, Award, Zap, Users, MessageSquare, Cpu, Globe, Cloud, Shield } from "lucide-react";

const skillCategories = [
    {
        title: "LANGUAGES & CORE CS",
        icon: <Monitor className="w-5 h-5 text-blue-600" />,
        skills: [
            { name: "C++, Python, JavaScript", level: 90, status: "Advanced" },
            { name: "DSA & Algorithms", level: 95, status: "Expert" },
            { name: "DBMS & Operating Systems", level: 85, status: "Advanced" }
        ]
    },
    {
        title: "WEB & BACKEND",
        icon: <Server className="w-5 h-5 text-blue-600" />,
        skills: [
            { name: "React.js & Node.js", level: 85, status: "Advanced" },
            { name: "Express.js & MongoDB", level: 80, status: "Intermediate" },
            { name: "Firebase & REST APIs", level: 85, status: "Advanced" }
        ]
    }
];

const Skills = () => {
    return (
        <section id="skills" className="py-24 px-4 bg-[#f8f9fa]">
            <div className="max-w-6xl mx-auto space-y-24">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-black/5 pb-12 gap-6">
                    <div className="space-y-4">
                        <h2 className="text-xs font-mono font-black text-primary uppercase tracking-[0.2em]">TECH STACK</h2>
                        <h3 className="text-3xl md:text-5xl lg:text-6xl font-black text-[#1a1a1a]">Expertise in <br className="hidden md:block" />Modern Technologies</h3>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
                    {skillCategories.map((category, idx) => (
                        <div key={idx} className="glass-card p-10 md:p-14 rounded-[3rem] bg-white shadow-sm space-y-12">
                            <h4 className="text-xs font-mono font-black text-primary uppercase tracking-widest">{category.title}</h4>
                            <div className="space-y-10">
                                {category.skills.map((skill, sIdx) => (
                                    <div key={sIdx} className="space-y-4">
                                        <div className="flex justify-between items-end">
                                            <span className="text-base font-bold text-[#1a1a1a]">{skill.name}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Achievements: Competitive Programming */}
                <div className="pt-24 border-t border-black/5 space-y-16">
                    <div className="flex items-center gap-4">
                        <Award className="w-6 h-6 text-primary" />
                        <h3 className="text-xs font-mono font-black text-primary uppercase tracking-[0.2em]">PROGRAMMING ACHIEVEMENTS</h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { title: "CodeChef", value: "1500+ Rating", sub: "Global Challenge" },
                            { title: "Codeforces", value: "350+ Problems", sub: "Algorithms Specialist" },
                            { title: "LeetCode", value: "120+ Solved", sub: "Logic & DSA" }
                        ].map((ach, idx) => (
                            <div key={idx} className="glass-card p-10 rounded-[2.5rem] bg-white shadow-sm border-none text-center space-y-4">
                                <h4 className="text-[10px] font-mono font-black text-[#5c6c7b] uppercase tracking-widest">{ach.title}</h4>
                                <p className="text-2xl font-black text-primary">{ach.value}</p>
                                <p className="text-xs font-bold text-text-sub">{ach.sub}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Tools & DevOps */}
                <div className="pt-24 border-t border-black/5 space-y-16">
                    <div className="flex items-center gap-4">
                        <Wrench className="w-6 h-6 text-primary" />
                        <h3 className="text-xs font-mono font-black text-primary uppercase tracking-[0.2em]">TOOLS & DEVOPS</h3>
                    </div>
                    <div className="flex flex-wrap gap-4">
                        {["Git & GitHub", "Firebase", "VS Code", "Figma", "Docker", "AWS", "Zscaler"].map((tool, idx) => (
                            <div key={idx} className="bg-white px-8 py-5 rounded-2xl border border-black/5 text-sm font-bold text-[#1a1a1a] shadow-sm hover:border-primary/20 hover:text-primary transition-all cursor-default">
                                {tool}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Core Competencies & Certifications */}
                <div className="grid grid-cols-1 lg:grid-cols-1 gap-16 lg:gap-24 pt-24">
                    <div className="space-y-16">
                        <div className="flex items-center gap-4">
                            <ShieldCheck className="w-6 h-6 text-primary" />
                            <h3 className="text-xs font-mono font-black text-primary uppercase tracking-[0.2em]">CORE COMPETENCIES & ACHIEVEMENTS</h3>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {[
                                { title: "Algorithmic Efficiency", icon: <Cpu className="w-6 h-6" />, desc: "Expertise in DSA & Optimization", color: "bg-blue-100 text-blue-700" },
                                { title: "Critical Problem Solving", icon: <Zap className="w-6 h-6" />, desc: "First-principles engineering", color: "bg-amber-100 text-amber-700" },
                                { title: "Agile Collaboration", icon: <Users className="w-6 h-6" />, desc: "Team-oriented development", color: "bg-emerald-100 text-emerald-700" },
                                { title: "Technical Communication", icon: <MessageSquare className="w-6 h-6" />, desc: "Clear & concise documentation", color: "bg-purple-100 text-purple-700" }
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    className="p-6 md:p-14 rounded-[3rem] bg-white shadow-2xl shadow-black/[0.02] border border-black/5 relative overflow-hidden group"
                                >
                                    <div className={`w-14 h-14 rounded-2xl ${item.color} flex items-center justify-center transition-transform group-hover:scale-110`}>
                                        {item.icon}
                                    </div>
                                    <div className="space-y-2 md:space-y-3">
                                        <h4 className="text-xl md:text-2xl font-black text-[#1a1a1a]">{item.title}</h4>
                                        <p className="text-sm md:text-lg text-text-sub leading-relaxed font-medium">{item.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {[
                                { title: "Google AI-ML", icon: <Globe className="w-6 h-6" />, sub: "Internship Certification", color: "bg-blue-600" },
                                { title: "AWS AI-ML", icon: <Cloud className="w-6 h-6" />, sub: "Academy Accreditation", color: "bg-orange-500" },
                                { title: "Zscaler Cloud", icon: <Shield className="w-6 h-6" />, sub: "Security Specialization", color: "bg-indigo-600" },
                                { title: "Responsive Design", icon: <Monitor className="w-6 h-6" />, sub: "FreeCodeCamp Certified", color: "bg-emerald-600" }
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    whileHover={{ scale: 1.02 }}
                                    className="relative overflow-hidden p-8 rounded-[2.5rem] bg-[#0a0f1c] text-white space-y-6 shadow-xl border border-white/5"
                                >
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 blur-2xl" />
                                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center shadow-lg`} style={{ backgroundColor: item.color }}>
                                        {React.cloneElement(item.icon as any, { className: "w-6 h-6 text-white" })}
                                    </div>
                                    <div className="space-y-1">
                                        <h4 className="text-md font-black tracking-tight">{item.title}</h4>
                                        <p className="text-[10px] font-mono font-bold text-gray-300 uppercase tracking-widest">{item.sub}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Skills;

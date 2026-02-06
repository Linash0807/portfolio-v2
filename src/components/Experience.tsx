import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, CheckCircle2, Check, ArrowRight } from "lucide-react";

const events = [
    {
        type: "ACADEMIC",
        role: "Secondary School Certificate (SSC)",
        company: "Pollocs School",
        period: "Completed 2021",
        details: [
            "Score: 100% (10/10 GPA)",
            "Foundation in mathematics and science with top honors."
        ],
        icon: <GraduationCap className="w-4 h-4" />,
        badgeBg: "bg-emerald-50 text-emerald-600"
    },
    {
        type: "ACADEMIC",
        role: "Intermediate (Class XII)",
        company: "Ascent Junior College",
        period: "2021 — 2023",
        details: [
            "Score: 96%",
            "Specialized in MPC (Mathematics, Physics, Chemistry)."
        ],
        icon: <GraduationCap className="w-4 h-4" />,
        badgeBg: "bg-indigo-50 text-indigo-600"
    },
    {
        type: "ACADEMIC",
        role: "B.Tech in Computer Science and Engineering",
        company: "Vignan's Institute of Information Technology",
        period: "2023 — 2027",
        details: [
            "Current CGPA: 9.1",
            "Specializing in MERN stack and Algorithmic design."
        ],
        icon: <GraduationCap className="w-4 h-4" />,
        badgeBg: "bg-emerald-50 text-emerald-600"
    }
];

const Experience = () => {
    return (
        <section id="experience" className="py-24 px-4 bg-white">
            <div className="max-w-6xl mx-auto space-y-24">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-black/5 pb-12 gap-6">
                    <div className="space-y-4">
                        <h2 className="text-xs font-mono font-black text-primary uppercase tracking-[0.2em]">PATHWAY</h2>
                        <h3 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#1a1a1a]">Academic Journey</h3>
                    </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {[
                        { label: "PROJECTS", value: "3 Major" },
                        { label: "CGPA", value: "9.1/10" },
                        { label: "CODECHEF", value: "1500+" },
                        { label: "LEETCODE", value: "120+" }
                    ].map((stat, i) => (
                        <div key={i} className="glass-card p-10 rounded-[2.5rem] border-none bg-[#f8f9fa] shadow-sm group hover:bg-white transition-all">
                            <p className="text-[10px] font-mono font-black text-text-sub uppercase mb-4 tracking-widest group-hover:text-primary transition-colors">{stat.label}</p>
                            <p className="text-4xl font-black text-primary">{stat.value}</p>
                        </div>
                    ))}
                </div>

                {/* Timeline */}
                <div className="relative space-y-24 before:absolute before:inset-0 md:before:left-1/2 md:before:-ml-px before:ml-5 before:h-full before:w-0.5 before:bg-[#f0f0f0]">
                    {events.map((event, idx) => (
                        <div key={idx} className="relative flex items-start md:items-center md:justify-center">
                            {/* Mobile View / Side Content View */}
                            <div className={`flex flex-col md:flex-row items-start md:items-center w-full gap-8 md:gap-0 ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>

                                {/* Content Card */}
                                <div className={`flex-1 w-full md:w-[45%] ml-12 md:ml-0 ${idx % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16 md:text-left'}`}>
                                    <motion.div
                                        initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        className="space-y-4"
                                    >
                                        <div className={`flex items-center gap-3 mb-2 md:justify-end ${idx % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
                                            <span className={`text-[10px] font-black px-3 py-1 rounded-full ${event.badgeBg}`}>{event.type}</span>
                                            <span className="text-[10px] font-bold text-text-sub uppercase tracking-wider">{event.period}</span>
                                        </div>
                                        <h3 className="text-2xl font-black text-[#1a1a1a]">{event.role}</h3>
                                        <p className={`text-base font-bold text-primary flex items-center gap-2 ${idx % 2 === 0 ? 'md:justify-end' : 'md:justify-start md:flex-row-reverse'}`}>
                                            {event.company} <CheckCircle2 className="w-4 h-4" />
                                        </p>

                                        <div className="bg-[#f8f9fa] p-8 lg:p-10 rounded-[2.5rem] space-y-6 border border-black/5 text-left shadow-sm inline-block w-full">
                                            {event.details.map((detail, dIdx) => (
                                                <div key={dIdx} className="flex gap-4 text-base text-text-sub leading-relaxed font-medium">
                                                    <div className="mt-1.5 w-5 h-5 rounded-full bg-primary flex items-center justify-center shrink-0 shadow-lg shadow-primary/20">
                                                        <Check className="w-3 h-3 text-white" />
                                                    </div>
                                                    {detail}
                                                </div>
                                            ))}
                                        </div>
                                    </motion.div>
                                </div>

                                {/* Center Dot */}
                                <div className="absolute left-0 md:left-1/2 md:-ml-6 flex items-center justify-center w-12 h-12 rounded-full bg-primary text-white shadow-[0_0_20px_rgba(0,82,204,0.3)] z-10 shrink-0 outline outline-8 outline-white">
                                    {React.cloneElement(event.icon as any, { className: "w-5 h-5" })}
                                </div>

                                {/* Empty space for alternating */}
                                <div className="hidden md:block flex-1 w-[45%]" />
                            </div>
                        </div>
                    ))}
                </div>

                {/* Footer CTA */}
                <div className="text-center py-24 lg:py-32 bg-white rounded-[4rem] border border-black/5 shadow-2xl shadow-black/[0.02] mt-24">
                    <div className="space-y-8 max-w-3xl mx-auto px-4">
                        <h2 className="text-xs font-mono font-black text-primary uppercase tracking-[0.2em]">NEXT STEPS</h2>
                        <h3 className="text-4xl md:text-6xl font-black text-[#1a1a1a] leading-tight">
                            Ready to bring <br className="hidden md:block" />
                            <span className="text-primary italic">high-energy</span> to your team?
                        </h3>
                        <p className="text-lg text-text-sub font-medium max-w-xl mx-auto">
                            I am currently open for junior developer roles and engineering internships where I can contribute to impactful projects.
                        </p>
                        <div className="pt-8">
                            <a
                                href="#contact"
                                className="inline-flex items-center gap-4 px-12 py-6 bg-primary text-white rounded-2xl font-black text-xl shadow-xl shadow-primary/20 hover:scale-[1.05] active:scale-95 transition-all group"
                            >
                                <span>CONTACT FOR INTERVIEW</span>
                                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;

import { motion } from "framer-motion";
import { Briefcase, Award, Check } from "lucide-react";

const leadershipRoles = [
    {
        role: "Event Manager",
        company: "Google Developer Group (GDG)",
        period: "2025 — Present",
        details: [
            "Organized multiple technical events, hackathons, and workshops fostering student developer community engagement.",
            "Coordinated with industry professionals and speakers for knowledge-sharing sessions."
        ],
        icon: <Briefcase className="w-5 h-5 text-blue-700" />,
        badgeBg: "bg-blue-100 text-blue-700"
    },
    {
        role: "Club Manager",
        company: "Student Activity Council (SAC)",
        period: "2025 — Present",
        details: [
            "Coordinating between various student clubs and the college administration for event approvals.",
            "Leading a team of students for campus-wide cultural and technical initiatives."
        ],
        icon: <Award className="w-5 h-5 text-emerald-700" />,
        badgeBg: "bg-emerald-100 text-emerald-700"
    },
    {
        role: "Team Lead",
        company: "Vizag Volunteers Organisation",
        period: "2025 — Present",
        details: [
            "Led logistics for national para sports events and community service initiatives.",
            "Coordinated a Guinness World Record attempt for the largest yoga gathering with 100+ volunteers."
        ],
        icon: <Award className="w-5 h-5 text-orange-700" />,
        badgeBg: "bg-orange-100 text-orange-700"
    }
];

const Leadership = () => {
    return (
        <section id="leadership" className="py-24 px-4 bg-[#f8f9fa]">
            <div className="max-w-6xl mx-auto space-y-24">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-black/5 pb-12 gap-6">
                    <div className="space-y-4">
                        <h2 className="text-xs font-mono font-black text-primary uppercase tracking-[0.2em]">IMPACT</h2>
                        <h3 className="text-3xl md:text-5xl lg:text-6xl font-black text-[#1a1a1a]">Leadership & <br className="hidden md:block" />Community Impact</h3>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {leadershipRoles.map((role, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4 }}
                            className="glass-card p-6 md:p-10 rounded-[2rem] md:rounded-[3rem] bg-white shadow-2xl shadow-black/[0.02] border-none space-y-4 md:space-y-8 h-full flex flex-col"
                        >
                            <div className="flex items-center justify-between">
                                <div className={`w-14 h-14 rounded-2xl ${role.badgeBg} flex items-center justify-center`}>
                                    {role.icon}
                                </div>
                                <span className="text-[10px] font-black font-mono text-text-sub uppercase tracking-widest">{role.period}</span>
                            </div>

                            <div className="space-y-4 flex-1">
                                <h4 className="text-xl md:text-2xl font-black text-[#1a1a1a]">{role.role}</h4>
                                <p className="text-sm md:text-base font-bold text-primary">{role.company}</p>

                                <div className="space-y-3 md:space-y-4 pt-2 md:pt-4">
                                    {role.details.map((detail, dIdx) => (
                                        <div key={dIdx} className="flex gap-3 text-xs md:text-sm text-text-sub leading-relaxed font-medium">
                                            <div className="mt-1 w-3.5 h-3.5 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                                                <Check className="w-1.5 h-1.5 text-primary" />
                                            </div>
                                            {detail}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Leadership;

import { motion } from "framer-motion";
import { Brain, Terminal, Sparkles } from "lucide-react";

const curiosities = [
    {
        icon: <Terminal className="w-5 h-5 text-blue-500" />,
        title: "Origins",
        text: "My first line of code was a 'Hello World' in C++ that took 5 hours to debug because of a missing semicolon.",
        iconBg: "bg-blue-50"
    },
    {
        icon: <Brain className="w-5 h-5 text-emerald-500" />,
        title: "Philosophy",
        text: "I believe in building software that is scalable, clean, and actually solves human problems.",
        iconBg: "bg-emerald-50"
    }
];

const About = () => {
    return (
        <section id="about" className="py-24 px-4 bg-white relative">
            <div className="max-w-6xl mx-auto">

                <div className="flex flex-col items-center text-center max-w-4xl mx-auto space-y-8 md:space-y-12">
                    {/* The Narrative */}
                    <div className="space-y-6 md:space-y-10">
                        <p className="text-xl sm:text-3xl md:text-4xl lg:text-5xl text-[#1a1a1a] font-black leading-[1.1] tracking-tighter">
                            Building scalable solutions <br />
                            <span className="text-primary italic">driven by algorithms.</span>
                        </p>
                        <div className="space-y-4 md:space-y-6">
                            <p className="text-base md:text-xl text-text-sub font-medium leading-relaxed">
                                I am a <span className="text-[#1a1a1a] font-bold">Computer Science undergraduate</span> with strong foundations in the MERN stack, Data Structures, and Algorithms. I'm experienced in building scalable web applications and integrating real-time services.
                            </p>
                            <p className="text-sm md:text-lg text-text-sub leading-relaxed font-medium">
                                My approach combines technical rigor with a passion for competitive programming. I focus on solving algorithmic problems and applying technical skills in real-world engineering environments. Currently based in Visakhapatnam, India.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Curiosities */}
                <div className="pt-16 md:pt-24 border-t border-black/5 space-y-12 md:space-y-16">
                    <div className="flex items-center gap-4">
                        <Sparkles className="w-6 h-6 text-primary" />
                        <h2 className="text-xs font-mono font-black text-primary uppercase tracking-[0.2em]">CURIOSITIES</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
                        {curiosities.map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 5 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4 }}
                                className="space-y-4 md:space-y-6 group"
                            >
                                <div className={`w-14 h-14 md:w-16 md:h-16 rounded-2xl md:rounded-3xl ${item.iconBg} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                                    {item.icon}
                                </div>
                                <div className="space-y-2 md:space-y-3">
                                    <h3 className="text-lg md:text-2xl font-black text-[#1a1a1a]">{item.title}</h3>
                                    <p className="text-sm md:text-lg text-text-sub leading-relaxed font-medium">{item.text}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;

import React, { useState } from "react";
import { Linkedin, Github, Twitter, MapPin, Mail, Sparkles, ArrowRight, Award, AlertCircle, Loader2, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Contact = () => {
    const [status, setStatus] = useState<"IDLE" | "SUBMITTING" | "SUCCESS" | "ERROR">("IDLE");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus("SUBMITTING");
        const form = e.currentTarget;
        const data = Object.fromEntries(new FormData(form).entries());

        try {
            const response = await fetch(form.action, {
                method: form.method,
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                setStatus("SUCCESS");
                form.reset();
                setTimeout(() => setStatus("IDLE"), 5000);
            } else {
                const result = await response.json();
                console.error("Formspree Error:", result);
                setStatus("ERROR");
            }
        } catch (error) {
            console.error("Submission Error:", error);
            setStatus("ERROR");
        }
    };

    return (
        <section id="contact" className="py-24 px-4 bg-[#f8f9fa]">
            <div className="max-w-6xl mx-auto space-y-24">
                {/* Section Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-black/5 pb-12 gap-8">
                    <div className="space-y-4">
                        <h2 className="text-xs font-mono font-black text-primary uppercase tracking-[0.2em]">REACH OUT</h2>
                        <h3 className="text-3xl md:text-6xl lg:text-7xl font-black text-[#1a1a1a]">Let's Build <br className="hidden md:block" />Something Great.</h3>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
                    {/* Contact Form */}
                    <div className="lg:col-span-12 space-y-12">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                            <div className="space-y-8 md:space-y-12">
                                <p className="text-xl md:text-3xl text-text-sub font-medium leading-relaxed max-w-xl">
                                    I'm currently looking for <span className="text-primary italic">new opportunities</span>. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                                </p>

                                {/* Professional Info Grid */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
                                    {[
                                        { label: "EMAIL", value: "yashashchandrasrinivas2006@gmail.com", icon: <Mail className="w-5 h-5" /> },
                                        { label: "LOCATION", value: "Visakhapatnam, India", icon: <MapPin className="w-5 h-5" /> },
                                        { label: "AVAILABILITY", value: "Ready to Start", icon: <Sparkles className="w-5 h-5" /> },
                                        { label: "CGPA", value: "9.1 Academic", icon: <Award className="w-5 h-5" /> }
                                    ].map((info, idx) => (
                                        <div key={idx} className="space-y-2 md:space-y-3">
                                            <div className="flex items-center gap-3">
                                                <div className="w-8 h-8 rounded-lg bg-primary/5 flex items-center justify-center text-primary">
                                                    {info.icon}
                                                </div>
                                                <p className="text-[10px] font-mono font-black text-[#5c6c7b] uppercase tracking-widest leading-none mt-1">
                                                    {info.label}
                                                </p>
                                            </div>
                                            <p className="text-base md:text-lg font-bold text-[#1a1a1a] leading-tight break-all">{info.value}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="relative">
                                <AnimatePresence mode="wait">
                                    {status === "SUCCESS" ? (
                                        <motion.div
                                            key="success"
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            exit={{ opacity: 0, scale: 0.9 }}
                                            className="bg-white p-6 md:p-14 rounded-[2rem] md:rounded-[3rem] shadow-2xl shadow-black/[0.03] flex flex-col items-center text-center space-y-6 min-h-[400px] md:min-h-[500px] justify-center"
                                        >
                                            <div className="w-16 h-16 md:w-20 md:h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mb-4">
                                                <Check className="w-8 h-8 md:w-10 md:h-10" />
                                            </div>
                                            <h4 className="text-xl md:text-3xl font-black text-[#1a1a1a]">Message Sent!</h4>
                                            <p className="text-sm md:text-lg text-text-sub font-medium max-w-sm">
                                                Thanks for reaching out! I've received your message and will get back to you as soon as possible.
                                            </p>
                                            <button
                                                onClick={() => setStatus("IDLE")}
                                                className="text-primary font-black text-sm uppercase tracking-widest hover:underline pt-4"
                                            >
                                                SEND ANOTHER MESSAGE
                                            </button>
                                        </motion.div>
                                    ) : (
                                        <motion.form
                                            key="form"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            onSubmit={handleSubmit}
                                            action="https://formspree.io/f/mgolwqye"
                                            method="POST"
                                            className="space-y-6 md:space-y-8 bg-white p-6 md:p-14 rounded-[2rem] md:rounded-[3rem] shadow-2xl shadow-black/[0.03]"
                                        >
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                                                <div className="space-y-3">
                                                    <label className="text-[10px] font-mono font-black text-[#5c6c7b] uppercase tracking-widest ml-1">Name</label>
                                                    <input type="text" name="name" required placeholder="Your Name" className="w-full bg-[#f4f7f9] border-none rounded-2xl p-4 md:p-5 text-base font-medium focus:ring-2 focus:ring-primary/20 transition-all" />
                                                </div>
                                                <div className="space-y-3">
                                                    <label className="text-[10px] font-mono font-black text-[#5c6c7b] uppercase tracking-widest ml-1">Email</label>
                                                    <input type="email" name="email" required placeholder="Your Email" className="w-full bg-[#f4f7f9] border-none rounded-2xl p-4 md:p-5 text-base font-medium focus:ring-2 focus:ring-primary/20 transition-all" />
                                                </div>
                                            </div>
                                            <div className="space-y-3">
                                                <label className="text-[10px] font-mono font-black text-[#5c6c7b] uppercase tracking-widest ml-1">Message</label>
                                                <textarea rows={5} name="message" required placeholder="Tell me about your project..." className="w-full bg-[#f4f7f9] border-none rounded-3xl p-5 md:p-6 text-base font-medium focus:ring-2 focus:ring-primary/20 transition-all resize-none"></textarea>
                                            </div>

                                            {status === "ERROR" && (
                                                <div className="flex items-center gap-3 text-red-600 bg-red-50 p-4 rounded-xl">
                                                    <AlertCircle className="w-5 h-5" />
                                                    <p className="text-sm font-bold">Something went wrong. Please try again.</p>
                                                </div>
                                            )}

                                            <button
                                                type="submit"
                                                disabled={status === "SUBMITTING"}
                                                className="w-full py-6 md:py-8 bg-primary text-white rounded-[2rem] font-black text-lg md:text-xl flex items-center justify-center gap-4 hover:shadow-2xl hover:shadow-primary/30 transition-all hover:scale-[1.01] active:scale-95 group overflow-hidden relative disabled:opacity-70 disabled:cursor-not-allowed"
                                            >
                                                <span className="relative z-10">
                                                    {status === "SUBMITTING" ? "SENDING..." : "SEND MESSAGE"}
                                                </span>
                                                {status === "SUBMITTING" ? (
                                                    <Loader2 className="w-6 h-6 animate-spin relative z-10" />
                                                ) : (
                                                    <ArrowRight className="w-6 h-6 relative z-10 group-hover:translate-x-2 transition-transform" />
                                                )}
                                                <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                                            </button>
                                        </motion.form>
                                    )}
                                </AnimatePresence>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Social Networks Consistently Aligned */}
                <div className="pt-24 border-t border-black/5">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                        <div className="flex items-center gap-12">
                            {[
                                { icon: <Linkedin className="w-6 h-6" />, href: "https://www.linkedin.com/in/vanamu-yashash-chandra-srinivas-74787329b/", label: "LINKEDIN" },
                                { icon: <Github className="w-6 h-6" />, href: "https://github.com/Linash0807", label: "GITHUB" },
                                { icon: <Twitter className="w-6 h-6" />, href: "#", label: "TWITTER" }
                            ].map((social, idx) => (
                                <a key={idx} href={social.href} className="flex flex-col items-center gap-2 group transition-all">
                                    <div className="p-4 bg-white rounded-2xl shadow-sm border border-black/5 text-[#1a1a1a] group-hover:text-primary group-hover:-translate-y-1 transition-all">
                                        {social.icon}
                                    </div>
                                    <span className="text-[8px] font-mono font-black tracking-widest opacity-0 group-hover:opacity-100 transition-opacity uppercase">{social.label}</span>
                                </a>
                            ))}
                        </div>

                        <div className="text-right">
                            <p className="text-xs font-mono font-black text-[#1a1a1a] uppercase tracking-[0.2em] mb-2 text-center md:text-right">Yashash Chandra © 2026</p>
                            <p className="text-[10px] font-mono font-bold text-text-sub uppercase tracking-widest text-center md:text-right">Full-Stack Developer & Competitive Programmer • Based in Vizag, India</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;

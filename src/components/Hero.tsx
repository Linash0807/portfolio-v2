import { motion } from "framer-motion";
import { Mail, Sparkles, FileText } from "lucide-react";
import React, { useState } from "react";
import Magnetic from "./Magnetic"; // Added Magnetic import
import DotGrid from "./DotGrid";

const Hero = () => {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e: React.MouseEvent) => {
        const { clientX, clientY } = e;
        setMousePos({ x: clientX, y: clientY });
    };

    const letterVariants: any = {
        initial: { y: 20, opacity: 0 },
        animate: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.4, ease: [0.33, 1, 0.68, 1] }
        }
    };

    return (
        <section
            onMouseMove={handleMouseMove}
            className="relative min-h-screen flex flex-col items-center justify-center px-4 py-20 bg-white text-[#0a0a0a]"
        >
            {/* Cinematic Background */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                {/* Animated Gradient Mesh */}
                <div className="gradient-mesh" />

                {/* Interactive Dot Grid */}
                <DotGrid
                    dotSize={1.5}
                    dotSpacing={25}
                    dotColor="rgba(0, 82, 204, 0.4)"
                    rectWidth={250}
                    rectHeight={250}
                />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full noise-subtle opacity-5" />

                {/* Enhanced Floating Elements with Scale & Blur */}
                {[...Array(6)].map((_, i) => (
                    <motion.div
                        key={i}
                        animate={{
                            y: [0, -40, 0],
                            x: [0, 20, 0],
                            rotate: [0, 10, 0],
                            scale: [1, 1.1, 1],
                            opacity: [0.03, 0.1, 0.03]
                        }}
                        transition={{
                            duration: 10 + i * 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                        className="absolute hidden lg:block particle-glow"
                        style={{
                            top: `${20 + i * 12}%`,
                            left: `${15 + (i % 3) * 30}%`,
                            width: `${100 + i * 50}px`,
                            height: `${100 + i * 50}px`,
                            background: 'radial-gradient(circle, rgba(0, 82, 204, 0.15) 0%, transparent 70%)',
                            borderRadius: '50%'
                        }}
                    />
                ))}

                {/* Spotlight Halo - Follows Mouse */}
                <motion.div
                    className="hidden lg:block spotlight-halo"
                    animate={{
                        x: mousePos.x - 400,
                        y: mousePos.y - 400
                    }}
                    transition={{
                        type: "spring",
                        damping: 30,
                        stiffness: 200,
                        mass: 0.5
                    }}
                />

                {/* Enhanced Mouse Reactive Gradient */}
                <div
                    className="hidden lg:block absolute inset-0 glow-overlay"
                    style={{ '--x': `${mousePos.x}px`, '--y': `${mousePos.y}px` } as any}
                />
            </div>


            <div className="flex flex-col items-center text-center space-y-10 md:space-y-16 lg:space-y-24">
                {/* Visual Anchor: Character/Photo */}
                <motion.div className="relative"
                    style={{ perspective: 1000 }}
                >
                    <motion.div
                        whileHover={{ rotateY: 15, rotateX: -15, scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        className="relative z-10 cursor-pointer"
                    >
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            className="w-32 h-32 md:w-52 md:h-52 lg:w-64 lg:h-64 rounded-full border-4 border-white overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] relative"
                        >
                            <img
                                src="https://drive.google.com/thumbnail?id=1Cj2LR1zv8OOy6kxpibQw-WFI9tknnQz1&sz=w1000"
                                alt="Yashash Chandra"
                                className="w-full h-full object-cover object-top scale-110 transition-transform duration-500 hover:scale-125"
                            />
                        </motion.div>
                        <div className="absolute bottom-4 right-4 w-8 h-8 bg-[#00c853] border-4 border-white rounded-full shadow-lg" />
                    </motion.div>

                    {/* Pulsing Aura */}
                    <motion.div
                        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.2, 0.5] }}
                        transition={{ duration: 4, repeat: Infinity }}
                        className="absolute inset-0 bg-primary/20 rounded-full blur-3xl -z-10"
                    />
                </motion.div>

                <div className="space-y-8">
                    <Magnetic strength={0.1}>
                        <h1 className="flex flex-wrap justify-center gap-x-4 md:gap-x-6 cursor-default">
                            {(["Yashash", "Chandra"]).map((word, wordIdx) => (
                                <span key={wordIdx} className="inline-flex whitespace-nowrap overflow-visible py-2">
                                    {word.split("").map((char, charIdx) => (
                                        <motion.span
                                            key={charIdx}
                                            variants={letterVariants}
                                            whileHover={{
                                                y: -8,
                                                color: "#3b82f6",
                                                transition: { type: "spring", stiffness: 400, damping: 10 }
                                            }}
                                            className="text-3xl sm:text-6xl md:text-8xl lg:text-8xl font-black text-[#1a1a1a] select-none display-block"
                                        >
                                            {char}
                                        </motion.span>
                                    ))}
                                </span>
                            ))}
                        </h1>
                    </Magnetic>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1 }}
                        className="flex flex-col items-center gap-6"
                    >
                        <p className="text-base md:text-3xl lg:text-4xl text-text-sub max-w-2xl font-medium leading-tight">
                            Crafting <span className="text-primary italic">modern web experiences</span> through algorithms and logic.
                        </p>
                        <div className="flex items-center gap-4 bg-[#f4f7f9] px-6 py-2 rounded-full border border-black/5">
                            <Sparkles className="w-5 h-5 text-primary rotate-12" />
                            <span className="text-xs md:text-sm font-mono font-black text-text-sub uppercase tracking-wider">Visakhapatnam • India</span>
                        </div>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1.2 }}
                    className="flex flex-wrap items-center justify-center gap-6 md:gap-8 pb-12"
                >
                    <Magnetic strength={0.2}>
                        <a
                            href="/resume.pdf"
                            download="Yashash_Chandra_Resume.pdf"
                            className="px-10 md:px-14 py-5 md:py-6 bg-primary text-white rounded-2xl font-black shadow-2xl shadow-primary/30 hover:shadow-primary/50 transition-all flex items-center gap-4 text-lg md:text-xl group overflow-hidden relative"
                        >
                            <span className="relative z-10 uppercase tracking-tight">Download CV</span>
                            <FileText className="w-5 h-5 md:w-6 md:h-6 relative z-10 group-hover:rotate-12 transition-transform" />
                            <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                        </a>
                    </Magnetic>

                    <Magnetic strength={0.4}>
                        <a
                            href="#contact"
                            className="w-16 h-16 md:w-20 md:h-20 bg-[#f4f7f9] text-text-main rounded-2xl hover:bg-[#e9eff3] transition-all border border-black/5 flex items-center justify-center shadow-lg hover:border-primary/20 group"
                        >
                            <Mail className="w-6 h-6 md:w-8 md:h-8 group-hover:scale-110 transition-transform" />
                        </a>
                    </Magnetic>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            >
                <div className="w-0.5 h-16 bg-gradient-to-b from-primary to-transparent" />
                <span className="text-[10px] font-mono font-black text-text-sub uppercase tracking-widest">SCROLL</span>
            </motion.div>
        </section>
    );
};

export default Hero;

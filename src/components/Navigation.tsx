import { motion } from "framer-motion";
import { Home, Briefcase, User, MessageSquare, Award } from "lucide-react";

const navItems = [
    { icon: <Home className="w-5 h-5" />, label: "HOME", href: "#hero" },
    { icon: <Briefcase className="w-5 h-5" />, label: "PROJECTS", href: "#projects" },
    { icon: <Briefcase className="w-5 h-5" />, label: "ACADEMIC", href: "#experience" },
    { icon: <Award className="w-5 h-5" />, label: "LEADERSHIP", href: "#leadership" },
    { icon: <User className="w-5 h-5" />, label: "ABOUT", href: "#about" },
    { icon: <MessageSquare className="w-5 h-5" />, label: "CONTACT", href: "#contact" },
];

const Navigation = () => {
    return (
        <nav className="fixed bottom-0 left-0 w-full p-4 md:p-6 z-50 md:max-w-md md:left-1/2 md:-translate-x-1/2">
            <motion.div
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="bg-white/80 backdrop-blur-md border border-black/5 flex items-center justify-around py-3 md:py-4 px-4 md:px-8 rounded-full shadow-xl shadow-black/5"
            >
                {navItems.map((item, idx) => (
                    <a
                        key={idx}
                        href={item.href}
                        className="flex flex-col items-center gap-1 group transition-colors text-text-sub hover:text-primary active:scale-95"
                    >
                        <div className="w-4 h-4 md:w-5 md:h-5">
                            {item.icon}
                        </div>
                        <span className="text-[7px] md:text-[8px] font-bold tracking-[0.1em]">{item.label}</span>
                    </a>
                ))}
            </motion.div>
        </nav>
    );
};

export default Navigation;

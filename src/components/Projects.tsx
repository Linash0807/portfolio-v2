import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
    {
        title: "Career Dost",
        subtitle: "Student Dashboard | MERN Stack",
        description: "A full-stack student dashboard to track academic progress, tasks, and career milestones. Features daily streak tracking, progress visualization, and real-time notifications.",
        tags: ["React", "Node.js", "MongoDB", "Express"],
        stats: "40% Engagement Increase",
        github: "https://github.com/Linash0807/career",
        live: "https://career-dost-1.onrender.com/",
        image: "/career-dost.jpeg"
    },
    {
        title: "Swasthkhet",
        subtitle: "Digital Agriculture Platform | MERN Stack",
        description: "AI-integrated agritech platform featuring Gemini-powered crop disease diagnosis, a farming assistant chatbot, and weather analytics. Built with TypeScript and Shadcn UI.",
        tags: ["TypeScript", "Gemini AI", "Tailwind", "Recharts"],
        stats: "AI Health Monitoring",
        github: "https://github.com/Linash0807/Swast",
        live: "https://swast.onrender.com",
        image: "/swasthkhet.jpeg"
    },
    {
        title: "Voice of Her",
        subtitle: "Women Empowerment Platform | Firebase",
        description: "Comprehensive platform with modules for health, safety, and economic awareness. Features an emergency alert system with Aadhaar-based verification and real-time tracking.",
        tags: ["Firebase", "JavaScript", "Geo-tracking", "Security"],
        stats: "Real-time Safety",
        github: "#",
        live: "#",
        image: "/voice-of-her.jpeg"
    }
];

const Projects = () => {
    return (
        <section id="projects" className="py-24 px-4 bg-white relative">
            <div className="max-w-6xl mx-auto space-y-24">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-black/5 pb-12 gap-6">
                    <div className="space-y-4">
                        <h2 className="text-xs font-mono font-black text-primary uppercase tracking-[0.2em]">WORK</h2>
                        <h3 className="text-3xl md:text-5xl lg:text-6xl font-black text-[#1a1a1a]">Selected <br className="hidden md:block" />Featured Projects</h3>
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-16 md:gap-24">
                    {projects.map((project, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            className={`flex flex-col ${idx % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 lg:gap-20 items-center`}
                        >
                            {/* Visual Side */}
                            <div className="w-full lg:w-1/2 group">
                                <div className="relative aspect-[16/10] bg-[#f0f4f8] rounded-[3rem] overflow-hidden shadow-2xl shadow-black/[0.05] border border-black/5">
                                    {/* Fallback Placeholder */}
                                    <div className="absolute inset-0 flex items-center justify-center text-primary/10 font-black text-8xl md:text-[12rem] select-none tracking-tighter">
                                        0{idx + 1}
                                    </div>

                                    {/* Project Image */}
                                    <motion.img
                                        src={project.image}
                                        alt={project.title}
                                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        onError={(e) => {
                                            (e.currentTarget as HTMLImageElement).style.display = 'none';
                                        }}
                                    />

                                    {/* Overlay effects */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                                    <div className="absolute inset-0 p-6 md:p-12 pointer-events-none">
                                        <div className="w-full h-full border border-white/30 rounded-2xl md:rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </div>
                                </div>
                            </div>

                            {/* Info Side */}
                            <div className="w-full lg:w-1/2 space-y-6 md:space-y-8 px-4 lg:px-0">
                                <div className="space-y-3">
                                    <p className="text-[10px] font-mono font-black text-primary uppercase tracking-widest leading-none">{project.subtitle}</p>
                                    <h4 className="text-3xl md:text-5xl font-black text-[#1a1a1a] tracking-tight">{project.title}</h4>
                                </div>
                                <p className="text-base md:text-lg text-text-sub leading-relaxed font-medium">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-3">
                                    {project.tags.map((tag, tIdx) => (
                                        <span key={tIdx} className="bg-[#f4f7f9] px-4 py-2 rounded-xl text-xs font-bold text-[#1a1a1a] border border-black/5">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <div className="pt-6 flex items-center gap-6">
                                    <a href={project.live} className="flex items-center gap-3 text-sm font-black text-primary group underline-offset-8 hover:underline">
                                        LIVE DEMO <ExternalLink className="w-4 h-4" />
                                    </a>
                                    <a href={project.github} className="flex items-center gap-3 text-sm font-black text-text-sub group hover:text-primary transition-colors">
                                        <Github className="w-4 h-4" /> SOURCE CODE
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;

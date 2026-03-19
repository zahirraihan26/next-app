"use client";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

const blogs = [
    {
        id: 1,
        title: "Top 10 Trends in AI & Machine Learning for 2024",
        excerpt:
            "Discover the latest neural architectures and methodologies transforming the landscape of artificial intelligence.",
        date: "Oct 24, 2023",
        category: "AI Tech",
        gradient: "from-violet-600 to-fuchsia-600",
    },
    {
        id: 2,
        title: "How to Build an Adaptive Learning AI Engine",
        excerpt:
            "Effective strategies to structure your deep learning models to personalize educational experiences instantly.",
        date: "Nov 12, 2023",
        category: "Development",
        gradient: "from-cyan-600 to-blue-600",
    },
    {
        id: 3,
        title: "The Future of Prompt Engineering Careers",
        excerpt:
            "Insights into the booming job market, emerging skills, and what it takes to succeed as a prompt engineer.",
        date: "Dec 05, 2023",
        category: "Career",
        gradient: "from-emerald-600 to-teal-600",
    },
];

export default function Blog() {
    const containerVariants = {
        hidden: {},
        visible: {
            transition: { staggerChildren: 0.15 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

    return (
        <section className="relative py-24 bg-[#030014] overflow-hidden">
            {/* Background Glow */}
            <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="relative max-w-7xl mx-auto px-4 z-10">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
                        Latest <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-cyan-400">Insights</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        Stay updated with our newest research, updates, and deep dives into the AI ecosystem.
                    </p>
                </motion.div>

                <motion.div 
                    className="grid grid-cols-1 md:grid-cols-3 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                >
                    {blogs.map((blog) => (
                        <motion.div
                            key={blog.id}
                            variants={itemVariants}
                            className="group bg-[#0a0a0a]/60 backdrop-blur-md rounded-2xl overflow-hidden shadow-sm hover:shadow-[0_0_25px_rgba(139,92,246,0.15)] transition duration-500 border border-white/10 hover:border-violet-500/40 flex flex-col"
                        >
                            {/* Thumbnail Placeholder with Gradient */}
                            <div className={`h-48 w-full bg-gradient-to-r ${blog.gradient} relative overflow-hidden`}>
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
                                {/* Tech overlay pattern */}
                                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-30 mix-blend-overlay"></div>
                            </div>

                            <div className="p-8 flex-1 flex flex-col relative z-20 -mt-6 bg-[#0a0a0a] rounded-t-2xl border-t border-white/5">
                                <div className="flex justify-between items-center text-sm text-gray-400 mb-4">
                                    <span className="bg-violet-500/20 text-violet-300 border border-violet-500/30 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide">
                                        {blog.category}
                                    </span>
                                    <span>{blog.date}</span>
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-3 line-clamp-2 group-hover:text-cyan-400 transition-colors">
                                    {blog.title}
                               </h3>
                                <p className="text-gray-400 mb-6 line-clamp-3 leading-relaxed">
                                    {blog.excerpt}
                                </p>
                                <div className="mt-auto">
                                    <a
                                        href="#"
                                        className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-semibold group/link"
                                    >
                                        Read Article 
                                        <FaArrowRight className="ml-2 w-4 h-4 transform group-hover/link:translate-x-1 transition-transform" />
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

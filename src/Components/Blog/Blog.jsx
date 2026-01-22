"use client";
import { FaArrowRight } from "react-icons/fa";

const blogs = [
    {
        id: 1,
        title: "Top 10 Trends in E-Learning for 2024",
        excerpt:
            "Discover the latest technologies and methodologies transforming the landscape of online education.",
        date: "Oct 24, 2023",
        category: "EdTech",
        gradient: "from-blue-400 to-purple-500",
    },
    {
        id: 2,
        title: "How to Stay Motivated While Learning Online",
        excerpt:
            "Effective strategies to keep your momentum going and achieve your learning goals from home.",
        date: "Nov 12, 2023",
        category: "Productivity",
        gradient: "from-purple-400 to-pink-500",
    },
    {
        id: 3,
        title: "The Future of Web Development Careers",
        excerpt:
            "Insights into the job market, emerging skills, and what it takes to succeed as a developer.",
        date: "Dec 05, 2023",
        category: "Career",
        gradient: "from-pink-400 to-orange-500",
    },
];

export default function Blog() {
    return (
        <section className="py-20 bg-zinc-50 dark:bg-black">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-zinc-900 dark:text-white">
                    Latest Articles & News
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {blogs.map((blog) => (
                        <div
                            key={blog.id}
                            className="bg-white dark:bg-zinc-900 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition duration-300 border border-zinc-200 dark:border-zinc-800 flex flex-col"
                        >
                            {/* Thumbnail Placeholder with Gradient */}
                            <div
                                className={`h-48 w-full bg-gradient-to-r ${blog.gradient}`}
                            ></div>

                            <div className="p-6 flex-1 flex flex-col">
                                <div className="flex justify-between items-center text-sm text-zinc-500 dark:text-zinc-400 mb-3">
                                    <span className="bg-zinc-100 dark:bg-zinc-800 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide">
                                        {blog.category}
                                    </span>
                                    <span>{blog.date}</span>
                                </div>
                                <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-2 line-clamp-2">
                                    {blog.title}
                                </h3>
                                <p className="text-zinc-600 dark:text-zinc-300 mb-4 line-clamp-3">
                                    {blog.excerpt}
                                </p>
                                <div className="mt-auto">
                                    <a
                                        href="#"
                                        className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold"
                                    >
                                        Read Article <FaArrowRight className="ml-2 w-4 h-4" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

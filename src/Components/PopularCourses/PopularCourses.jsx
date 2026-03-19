"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const PopularCourses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    // Fetch courses from backend
    const fetchCourses = async () => {
      try {
        const res = await fetch("https://my-fast-next-server.vercel.app/courses");
        const data = await res.json();
        setCourses(data.slice(0, 6)); // Only take the first 6 courses
      } catch (error) {
        console.error("Failed to fetch courses:", error);
      }
    };

    fetchCourses();
  }, []);

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
    <div className="relative min-h-screen py-24 px-4 sm:px-6 lg:px-8 bg-[#030014]">
      {/* Background Glow */}
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[120px] pointer-events-none"></div>

      {/* Header Section */}
      <div className="relative max-w-7xl mx-auto text-center z-10 mb-16">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Trending <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-violet-400">All Programs</span>
          </h2>
          <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
            Join visionary students globally who are mastering these highly demanded futuristic skills.
          </p>
        </motion.div>
      </div>

      {/* Courses Grid */}
      <motion.div
        className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {courses.map((course) => (
          <motion.div
            key={course._id}
            variants={itemVariants}
            className="group bg-[#0a0a0a]/60 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden hover:border-cyan-500/50 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)] transition-all duration-300"
          >
            {/* Course Image/Video */}
            <div className="h-56 bg-[#111] relative overflow-hidden">
              <div
                className="w-full h-full bg-cover bg-center group-hover:scale-110 transition-transform duration-700"
                style={{ backgroundImage: `url(${course.image})` }}
              >
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent"></div>
            </div>

            {/* Card Content */}
            <div className="p-6">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-violet-500/20 text-violet-300 border border-violet-500/30">
                {course.category || "Artificial Intelligence"}
              </span>
              <h3 className="mt-4 text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors line-clamp-2">
                {course.title}
              </h3>
              <p className="mt-2 text-gray-400 text-sm flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-500"></span>
                {course.instructor || "EduAI Core Instructor"}
              </p>

              <div className="mt-6 flex items-center justify-between">
                <p className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-violet-400">
                  ${course.price || "0"}
                </p>
                <Link href={`/courses/${course._id}`}>
                  <button className="py-2.5 px-5 rounded-lg text-sm font-semibold text-white bg-white/5 border border-white/10 hover:bg-cyan-500 hover:border-cyan-400 hover:shadow-[0_0_15px_rgba(6,182,212,0.4)] transition-all duration-300">
                    View Details
                  </button>
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default PopularCourses;

"use client";
import React from 'react';
import { motion } from "framer-motion";

export default function TestimonialsPage() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const testimonials = [
    {
      text: "The AI learning paths transformed my career. The platform adapts to my pace, and the insights are always cutting-edge.",
      initials: "SJ",
      name: "Sarah Johnson",
      role: "AI Engineer",
      color: "from-violet-500 to-fuchsia-500"
    },
    {
      text: "I've tried many platforms, but this one's AI tutor is stands out. The interactive experience is completely unmatched.",
      initials: "MC",
      name: "Michael Chen",
      role: "Data Scientist",
      color: "from-cyan-500 to-blue-500"
    },
    {
      text: "The flexible, adaptive learning fits my schedule perfectly. I could reskill from UX to Prompt Engineering seamlessly.",
      initials: "ER",
      name: "Emily Rodriguez",
      role: "AI Product Designer",
      color: "from-emerald-500 to-teal-500"
    }
  ];

  return (
    <div className="relative py-24 px-4 bg-[#030014] overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-violet-600/10 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl font-extrabold text-center mb-4 text-white">
            What Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-cyan-400">Pioneers</span> Say
          </h2>
          <p className="text-center mb-16 text-lg text-gray-400 max-w-2xl mx-auto">
            Join thousands of visionary learners who achieved their goals using our advanced platform.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="group relative bg-[#0a0a0a]/60 backdrop-blur-md rounded-2xl p-8 border border-white/5 hover:border-violet-500/30 hover:shadow-[0_0_30px_rgba(139,92,246,0.1)] transition-all duration-300"
            >
              <div className="absolute top-0 right-10 w-20 h-1 bg-gradient-to-r from-transparent via-violet-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

              <div className="flex text-cyan-400 mb-6 text-sm tracking-widest">
                ★★★★★
              </div>
              <p className="mb-8 text-gray-300 leading-relaxed italic relative z-10">
                "{t.text}"
              </p>

              <div className="flex items-center gap-4 mt-auto">
                <div className={`bg-gradient-to-br ${t.color} text-white h-12 w-12 flex items-center justify-center rounded-full font-bold shadow-lg`}>
                  {t.initials}
                </div>
                <div>
                  <h4 className="font-semibold text-white group-hover:text-cyan-300 transition-colors">{t.name}</h4>
                  <p className="text-sm text-violet-400">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

"use client"
import React from "react";
import { FaBook, FaUsers, FaAward, FaClock } from "react-icons/fa";
import { motion } from "framer-motion";

export default function WhyChoose() {
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

  const features = [
    {
      icon: FaBook,
      title: "Expert-Led AI Courses",
      desc: "Learn advanced concepts from industry pioneers with deep tech experience."
    },
    {
      icon: FaUsers,
      title: "Global Network",
      desc: "Connect instantly with thousands of learners in our cutting-edge community."
    },
    {
      icon: FaAward,
      title: "Verified Credentials",
      desc: "Earn blockchain-verified certificates recognized by top tech companies."
    },
    {
      icon: FaClock,
      title: "24/7 AI Assistance",
      desc: "Get instant help at your own pace with our unlimited AI-driven tutoring."
    }
  ];

  return (
    <div className="relative py-24 bg-[#030014]">
      {/* Background Glow */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-violet-600/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Why Choose <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-cyan-400">EduPlatform </span>
          </h2>
          <p className="text-gray-400 mb-16 max-w-2xl mx-auto text-lg">
            We provide everything you need to accelerate your learning journey and succeed in the age of Digital Transformation .
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group bg-[#0a0a0a]/80 backdrop-blur-md p-8 rounded-2xl border border-white/10 hover:border-violet-500/50 hover:shadow-[0_0_30px_rgba(139,92,246,0.15)] transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div className="w-14 h-14 rounded-xl bg-violet-500/20 border border-violet-500/30 flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-[0_0_15px_rgba(139,92,246,0.2)]">
                <feature.icon className="text-cyan-400 text-2xl group-hover:text-cyan-300" />
              </div>
              <h3 className="font-semibold text-white text-xl mb-3">{feature.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

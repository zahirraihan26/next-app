"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-[#030014]">
      {/* Dynamic Background Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-violet-600/20 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="inline-block mb-6 px-4 py-1.5 rounded-full border border-violet-500/30 bg-violet-500/10 backdrop-blur-sm text-violet-300 text-sm font-medium tracking-wide"
        >
          ✨ The Next Generation of Learning
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight text-white leading-tight"
        >
          Master the Future with <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-400 via-cyan-400 to-violet-400 animate-gradient-x text-glow">
            EduPlatform
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="text-lg md:text-xl mb-10 text-gray-400 max-w-2xl mx-auto leading-relaxed"
        >
          Unlock your potential with our advanced driven courses. Experience personalized learning paths, interactive modules, and cutting-edge technology.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link href="/courses">
            <button className="px-8 py-4 bg-gradient-to-r from-violet-600 to-cyan-600 rounded-full font-semibold text-white hover:shadow-[0_0_20px_rgba(139,92,246,0.5)] transition-all duration-300 transform hover:-translate-y-1">
              Explore Courses
            </button>
          </Link>
          <Link href="/about">
            <button className="px-8 py-4 bg-white/5 backdrop-blur-md border border-white/10 rounded-full font-semibold text-white hover:bg-white/10 transition-all duration-300">
              Learn More
            </button>
          </Link>
        </motion.div>
      </div>

      {/* Decorative Grid */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-20 pointer-events-none"></div>
    </div>
  );
}

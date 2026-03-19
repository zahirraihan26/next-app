"use client";
import { motion } from "framer-motion";

export default function Newsletter() {
  return (
    <section className="relative py-24 bg-[#030014] overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-600/20 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="relative max-w-5xl mx-auto px-4 z-10 text-center">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
           className="bg-[#0a0a0a]/80 backdrop-blur-xl border border-white/10 rounded-3xl p-10 md:p-16 shadow-[0_0_40px_rgba(139,92,246,0.15)]"
        >
          <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 text-sm font-medium tracking-wide">
            📡 Get Connected
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Initialize Your <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-cyan-400">Future</span>
          </h2>
          
          <p className="text-gray-400 mb-10 max-w-2xl mx-auto text-lg leading-relaxed">
            Subscribe to our global network. Receive cutting-edge updates, exclusive beta access to new AI courses, and industry-leading research artifacts.
          </p>
          
          <form className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-2xl mx-auto relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-violet-500 to-cyan-500 rounded-full opacity-0 group-hover:opacity-30 blur transition duration-500"></div>
            <input
              type="email"
              placeholder="Enter your transmission address..."
              className="relative w-full sm:w-[400px] px-8 py-4 bg-[#050505] border border-white/10 text-white placeholder-gray-500 rounded-full focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all shadow-inner"
              required
            />
            <button
              type="submit"
              className="relative w-full sm:w-auto px-10 py-4 bg-gradient-to-r from-violet-600 to-cyan-600 text-white font-bold rounded-full hover:shadow-[0_0_20px_rgba(6,182,212,0.5)] transition-all transform hover:-translate-y-1 active:translate-y-0"
            >
              Sync Now
            </button>
          </form>
          
          <p className="mt-6 text-xs text-gray-500 tracking-wider uppercase">
            Encrypted End-to-End. No Spam algorithms.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

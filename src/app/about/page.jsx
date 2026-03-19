"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaRocket, FaUsers, FaBrain, FaGlobe } from "react-icons/fa";

const stats = [
  { label: "Students Enrolled", value: "50K+", icon: FaUsers },
  { label: "AI-Powered Courses", value: "200+", icon: FaBrain },
  { label: "Countries Reached", value: "80+", icon: FaGlobe },
  { label: "Completion Rate", value: "94%", icon: FaRocket },
];

const team = [
  { name: "Dr. Aisha Rahman", role: "CEO & AI Vision Lead", initials: "AR", gradient: "from-violet-500 to-fuchsia-500" },
  { name: "Prof. Tanvir Hossain", role: "Head of Curriculum", initials: "TH", gradient: "from-cyan-500 to-blue-500" },
  { name: "Riya Chowdhury", role: "Lead AI Engineer", initials: "RC", gradient: "from-emerald-500 to-teal-500" },
];

export default function AboutPage() {
  return (
    <div className="bg-[#030014] min-h-screen text-white">

      {/* Hero */}
      <section className="relative py-28 px-4 overflow-hidden text-center">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-violet-600/20 rounded-full blur-[150px] pointer-events-none"></div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative z-10 max-w-4xl mx-auto"
        >
          <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-violet-500/30 bg-violet-500/10 text-violet-300 text-sm font-medium">
            🤖 Our Mission
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
            Shaping the{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-cyan-400">
              Future of Learning
            </span>
          </h1>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto leading-relaxed">
            We are a team of AI researchers, educators, and engineers on a mission to democratize world-class education through the power of artificial intelligence.
          </p>
        </motion.div>
      </section>

      {/* Stats */}
      <section className="relative py-16 px-4 border-y border-white/5 bg-[#050510]">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col items-center text-center group"
            >
              <div className="w-12 h-12 mb-4 rounded-xl bg-violet-500/20 border border-violet-500/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                <s.icon className="text-cyan-400 text-xl" />
              </div>
              <p className="text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-cyan-400">{s.value}</p>
              <p className="text-gray-400 text-sm mt-1">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="relative py-24 px-4 overflow-hidden">
        <div className="absolute right-0 top-1/4 w-[400px] h-[400px] bg-cyan-600/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-[#0a0a0a]/60 backdrop-blur-md p-10 rounded-2xl border border-white/10 hover:border-violet-500/40 transition-colors"
          >
            <div className="w-12 h-12 mb-6 rounded-xl bg-violet-500/20 border border-violet-500/30 flex items-center justify-center">
              <FaRocket className="text-violet-400 text-xl" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
            <p className="text-gray-400 leading-relaxed">
              To break educational barriers worldwide by delivering personalized, AI-powered learning experiences that adapt to every individual learner's unique needs, pace, and aspirations.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-[#0a0a0a]/60 backdrop-blur-md p-10 rounded-2xl border border-white/10 hover:border-cyan-500/40 transition-colors"
          >
            <div className="w-12 h-12 mb-6 rounded-xl bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center">
              <FaBrain className="text-cyan-400 text-xl" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
            <p className="text-gray-400 leading-relaxed">
              To become the world's most trusted AI learning platform, where every human can access cutting-edge knowledge, develop future-proof skills, and transform their life trajectory.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team */}
      <section className="relative py-24 px-4 bg-[#050510]">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Meet Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-cyan-400">Team</span></h2>
            <p className="text-gray-400 text-lg mb-16 max-w-xl mx-auto">The brilliant minds behind EduPlatform AI.</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="group bg-[#0a0a0a]/60 backdrop-blur-md p-8 rounded-2xl border border-white/10 hover:border-violet-500/40 hover:shadow-[0_0_25px_rgba(139,92,246,0.1)] transition-all"
              >
                <div className={`bg-gradient-to-br ${member.gradient} text-white h-20 w-20 flex items-center justify-center rounded-2xl font-bold text-2xl mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
                  {member.initials}
                </div>
                <h4 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">{member.name}</h4>
                <p className="text-violet-400 text-sm mt-1">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-white mb-6">Ready to <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-cyan-400">Begin?</span></h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">Join over 50,000 learners who are already building their AI-powered future.</p>
          <Link href="/courses">
            <button className="px-10 py-4 bg-gradient-to-r from-violet-600 to-cyan-600 rounded-full font-semibold text-white hover:shadow-[0_0_25px_rgba(139,92,246,0.5)] transition-all transform hover:-translate-y-1">
              Explore Courses
            </button>
          </Link>
        </motion.div>
      </section>
    </div>
  );
}

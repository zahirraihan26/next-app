"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  FaBrain,
  FaRobot,
  FaChartLine,
  FaCertificate,
  FaUsers,
  FaCode,
} from "react-icons/fa";

const services = [
  {
    icon: FaBrain,
    title: "Personalized All Programs",
    desc: "Our neural engine adapts every course to your learning speed, style, and goals — ensuring maximum knowledge retention.",
    gradient: "from-violet-500 to-fuchsia-500",
    border: "hover:border-violet-500/50",
    glow: "hover:shadow-[0_0_30px_rgba(139,92,246,0.15)]",
  },
  {
    icon: FaRobot,
    title: "24/7 Tutor",
    desc: "Get instant, context-aware answers to all your questions through our proprietary AI assistant — available at any hour.",
    gradient: "from-cyan-500 to-blue-500",
    border: "hover:border-cyan-500/50",
    glow: "hover:shadow-[0_0_30px_rgba(6,182,212,0.15)]",
  },
  {
    icon: FaCertificate,
    title: "Blockchain Certification",
    desc: "Earn tamper-proof, blockchain-verified certificates recognized by global tech companies and Fortune 500 hiring teams.",
    gradient: "from-emerald-500 to-teal-500",
    border: "hover:border-emerald-500/50",
    glow: "hover:shadow-[0_0_30px_rgba(16,185,129,0.15)]",
  },
  {
    icon: FaChartLine,
    title: "Performance Analytics",
    desc: "Real-time insights and predictive analytics to track your learning progress and identify areas for improvement.",
    gradient: "from-orange-500 to-amber-500",
    border: "hover:border-orange-500/50",
    glow: "hover:shadow-[0_0_30px_rgba(249,115,22,0.15)]",
  },
  {
    icon: FaUsers,
    title: "Expert Mentorship",
    desc: "Get direct access to industry experts for live 1-on-1 mentoring sessions, code reviews, and career guidance.",
    gradient: "from-rose-500 to-pink-500",
    border: "hover:border-rose-500/50",
    glow: "hover:shadow-[0_0_30px_rgba(244,63,94,0.15)]",
  },
  {
    icon: FaCode,
    title: "Live Coding Labs",
    desc: "Hands-on coding environments running directly in your browser — no setup required, just code and learn instantly.",
    gradient: "from-sky-500 to-indigo-500",
    border: "hover:border-sky-500/50",
    glow: "hover:shadow-[0_0_30px_rgba(14,165,233,0.15)]",
  },
];

const steps = [
  { step: "01", title: "Sign Up", desc: "Create your free account in 30 seconds and unlock your personalized dashboard." },
  { step: "02", title: "Choose Your Path", desc: "Our AI recommends the perfect learning track tailored to your goals and skill level." },
  { step: "03", title: "Learn with AI", desc: "Study through adaptive modules, interactive labs, and real-time AI assistance." },
  { step: "04", title: "Get Certified", desc: "Complete your path and receive your blockchain-verified certificate of mastery." },
];

export default function ServicesPage() {
  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <div className="bg-[#030014] min-h-screen text-white">
      {/* Hero */}
      <section className="relative py-28 px-4 overflow-hidden text-center">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-cyan-600/15 rounded-full blur-[150px] pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-violet-600/10 rounded-full blur-[100px] pointer-events-none"></div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative z-10 max-w-4xl mx-auto"
        >
          <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 text-sm font-medium">
            🛠️ What We Offer
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
            Premium{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-violet-400">
              All Programs
            </span>
          </h1>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto leading-relaxed">
            Everything you need to upskill, reskill, and transform your career in the age of Digital Transformation.
          </p>
        </motion.div>
      </section>

      {/* Services Grid */}
      <section className="relative py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            {services.map((service, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className={`group bg-[#0a0a0a]/60 backdrop-blur-md p-8 rounded-2xl border border-white/10 ${service.border} ${service.glow} transition-all duration-300 relative overflow-hidden`}
              >
                <div className="absolute inset-0 bg-gradient-to-b from-white/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient} bg-opacity-20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
                  <service.icon className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">{service.title}</h3>
                <p className="text-gray-400 leading-relaxed text-sm">{service.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section className="relative py-24 px-4 bg-[#050510] border-y border-white/5 overflow-hidden">
        <div className="absolute left-0 top-1/2 w-[500px] h-[500px] bg-violet-600/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
              How It <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-cyan-400">Works</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">Your journey to AI mastery in four simple steps.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {steps.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="relative text-center group"
              >
                {/* Connector Line */}
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-[60%] right-0 h-[1px] bg-gradient-to-r from-violet-500/50 to-transparent"></div>
                )}
                <div className="w-16 h-16 rounded-2xl bg-violet-500/20 border border-violet-500/30 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(139,92,246,0.2)]">
                  <span className="text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-cyan-400">{s.step}</span>
                </div>
                <h4 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">{s.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{s.desc}</p>
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
          <h2 className="text-4xl font-bold text-white mb-4">
            Start Your <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-violet-400">All Programs</span> Today
          </h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            Join thousands of learners already leveraging the power of All Programs to transform their careers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/register">
              <button className="px-10 py-4 bg-gradient-to-r from-cyan-600 to-violet-600 rounded-full font-semibold text-white hover:shadow-[0_0_25px_rgba(6,182,212,0.5)] transition-all transform hover:-translate-y-1">
                Get Started Free
              </button>
            </Link>
            <Link href="/courses">
              <button className="px-10 py-4 bg-white/5 border border-white/10 rounded-full font-semibold text-white hover:bg-white/10 transition-all">
                Browse Courses
              </button>
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}

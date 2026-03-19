"use client";
import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
    {
        question: "How do I enroll in an driven course?",
        answer:
            "To enroll, create your pioneer account, browse our advanced AI catalog, select your desired curriculum, and click 'Enroll Now'. Our system instantly provisions your personalized learning environment.",
    },
    {
        question: "Are the certifications industry-recognized?",
        answer:
            "Yes! Upon successfully completing a course and passing the automated assessments, you receive a blockchain-verified certificate recognized by leading tech companies globally.",
    },
    {
        question: "Is the  learning platform mobile-friendly?",
        answer:
            "Absolutely. Our platform utilizes responsive design natively, meaning you can access your AI-tutored sessions on any smartphone, tablet, or desktop seamlessly.",
    },
    {
        question: "What payment methods are supported for pro tiers?",
        answer:
            "We accept major credit cards, modern crypto payments (BTC, ETH, USDC), and region-specific secure payment gateways for maximum flexibility.",
    },
    {
        question: "How does the  personalized learning path work?",
        answer:
            "Our proprietary neural engine analyzes your learning speed, quiz results, and interaction patterns to dynamically adjust the curriculum, ensuring optimal retention and mastery.",
    },
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="relative py-24 bg-[#030014] overflow-hidden">
            <div className="absolute top-1/4 left-0 w-[400px] h-[400px] bg-cyan-600/10 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="relative max-w-4xl mx-auto px-4 z-10">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
                        Frequently Asked <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-violet-400">Questions</span>
                    </h2>
                    <p className="text-gray-400 text-lg">
                        Everything you need to know about navigating the future of education.
                    </p>
                </motion.div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="border border-white/10 bg-[#0a0a0a]/60 backdrop-blur-md rounded-xl overflow-hidden hover:border-violet-500/40 transition-colors duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.5)]"
                        >
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full flex justify-between items-center p-5 text-left bg-transparent transition group"
                            >
                                <span className={`text-lg font-medium transition-colors duration-300 ${openIndex === index ? "text-cyan-400" : "text-gray-300 group-hover:text-white"}`}>
                                    {faq.question}
                                </span>
                                <div className={`flex items-center justify-center w-8 h-8 rounded-full transition-colors duration-300 ${openIndex === index ? "bg-cyan-500/20 text-cyan-400" : "bg-white/5 text-gray-400 group-hover:bg-white/10"}`}>
                                    {openIndex === index ? <FaChevronUp className="w-3 h-3" /> : <FaChevronDown className="w-3 h-3" />}
                                </div>
                            </button>

                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                    >
                                        <div className="p-5 pt-0 text-gray-400 border-t border-white/5 mt-2 bg-[#050505]/40 text-base leading-relaxed">
                                            <p className="pt-3">{faq.answer}</p>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

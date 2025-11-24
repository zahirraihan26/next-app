"use client"
import React from "react";
import { FaBook, FaUsers, FaAward, FaClock } from "react-icons/fa";
import { motion } from "framer-motion";

export default function WhyChoose() {
  return (
    <div className="py-16">
      <div className="mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-4">Why Choose Us</h2>
        <p className="text-gray-600 mb-12">
          We provide everything you need to succeed in your learning journey
        </p>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <motion.div
            className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-blue-400 w-12 h-12 flex items-center justify-center rounded-md mb-4 mx-auto">
              <FaBook size={20} />
            </div>
            <h3 className="font-semibold text-gray-500 text-lg mb-2">Expert-Led Courses</h3>
            <p className="text-gray-500 text-sm">
              Learn from industry professionals with years of real-world experience
            </p>
          </motion.div>

          <motion.div
            className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="bg-blue-400 w-12 h-12 flex items-center justify-center rounded-md mb-4 mx-auto">
              <FaUsers size={20} />
            </div>
            <h3 className="font-semibold text-gray-500 text-lg mb-2">Active Community</h3>
            <p className="text-gray-500 text-sm">
              Connect with thousands of learners and grow together
            </p>
          </motion.div>

          <motion.div
            className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="bg-blue-400 w-12 h-12 flex items-center justify-center rounded-md mb-4 mx-auto">
              <FaAward size={20} />
            </div>
            <h3 className="font-semibold text-gray-500 text-lg mb-2">Certified Learning</h3>
            <p className="text-gray-500 text-sm">
              Earn recognized certificates upon course completion
            </p>
          </motion.div>

          <motion.div
            className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <div className="bg-blue-400 w-12 h-12 flex items-center justify-center rounded-md mb-4 mx-auto">
              <FaClock size={20} />
            </div>
            <h3 className="font-semibold text-gray-500 text-lg mb-2">Lifetime Access</h3>
            <p className="text-gray-500 text-sm">
              Learn at your own pace with unlimited course access
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

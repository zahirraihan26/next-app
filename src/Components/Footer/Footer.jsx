import React from "react";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative bg-[#030014] text-gray-400 py-12 border-t border-white/10 overflow-hidden">
      {/* Decorative top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-50"></div>

      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-10 relative z-10">

        {/* Logo / About */}
        <div>
          <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-cyan-400">EduPlatform </h2>
          <p className="mt-4 text-sm leading-relaxed text-gray-500">
            Empowering the future of learning through artificial intelligence and advanced digital platforms.
          </p>

          {/* Social Icons */}
          <div className="flex space-x-5 mt-6 text-xl">
            <FaFacebook className="hover:text-cyan-400 hover:text-glow-cyan transition-all cursor-pointer" />
            <FaInstagram className="hover:text-cyan-400 hover:text-glow-cyan transition-all cursor-pointer" />
            <FaGithub className="hover:text-cyan-400 hover:text-glow-cyan transition-all cursor-pointer" />
            <FaLinkedin className="hover:text-cyan-400 hover:text-glow-cyan transition-all cursor-pointer" />
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-3 text-sm">
            <li><Link href="/" className="hover:text-cyan-400 transition-colors">Home</Link></li>
            <li><Link href="/about" className="hover:text-cyan-400 transition-colors">About Us</Link></li>
            <li><Link href="/services" className="hover:text-cyan-400 transition-colors">Services</Link></li>
            <li><Link href="/products" className="hover:text-cyan-400 transition-colors">Products</Link></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Support</h3>
          <ul className="space-y-3 text-sm">
            <li><Link href="/faq" className="hover:text-cyan-400 transition-colors">FAQ</Link></li>
            <li><Link href="/help" className="hover:text-cyan-400 transition-colors">Help Center</Link></li>
            <li><Link href="/contact" className="hover:text-cyan-400 transition-colors">Contact Us</Link></li>
            <li><Link href="/privacy" className="hover:text-cyan-400 transition-colors">Privacy Policy</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
          <ul className="space-y-3 text-sm text-gray-500">
            <li>Email: <span className="text-gray-400">support@eduai.com</span></li>
            <li>Phone: <span className="text-gray-400">+880 1234-567890</span></li>
            <li>Address: <span className="text-gray-400">Dhaka, Bangladesh</span></li>
          </ul>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="mt-12 border-t border-white/10 pt-6 text-center text-sm text-gray-600">
        © {new Date().getFullYear()} EduPlatform . All rights reserved.
      </div>
    </footer>
  );
}

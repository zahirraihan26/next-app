"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FaBook } from "react-icons/fa";
import { auth } from "@/app/firebase/config";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    await signOut(auth);
    setOpen(false);
    router.push("/login");
  };

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-[#030014]/70 border-b border-white/10 transition-all duration-300">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
        <div className="flex items-center gap-2 group cursor-pointer">
          <FaBook className="text-2xl text-cyan-400 group-hover:text-glow-cyan transition-all" />
          <Link href="/" className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-cyan-400 group-hover:text-glow transition-all">
            EduPlatform
          </Link>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-6 text-sm font-medium text-gray-300">
          <li><Link href="/" className="hover:text-cyan-400 transition-colors">Home</Link></li>
          <li><Link href="/courses" className="hover:text-cyan-400 transition-colors">Courses</Link></li>
          <li><Link href="/add" className="hover:text-cyan-400 transition-colors">Add Courses</Link></li>
          <li><Link href="/manage" className="hover:text-cyan-400 transition-colors">Manage</Link></li>
          <li><Link href="/about" className="hover:text-cyan-400 transition-colors">About</Link></li>
          <li><Link href="/services" className="hover:text-cyan-400 transition-colors">Services</Link></li>
        </ul>

        {/* Auth Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          {user ? (
            <button onClick={handleLogout} className="px-5 py-2 text-sm border border-white/20 rounded-full hover:bg-white/5 hover:border-white/40 transition-all text-white">
              Logout
            </button>
          ) : (
            <>
              <Link href="/login" className="px-5 py-2 text-sm text-gray-300 hover:text-white transition-colors">Login</Link>
              <Link href="/register" className="px-5 py-2 text-sm bg-gradient-to-r from-violet-600 to-cyan-600 rounded-full hover:shadow-[0_0_15px_rgba(139,92,246,0.5)] transition-all text-white font-medium">
                Register
              </Link>
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-3xl">☰</button>
      </div>

      {/* Mobile Dropdown */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 absolute w-full bg-[#030014]/95 backdrop-blur-xl border-b border-white/10 ${open ? "max-h-[500px]" : "max-h-0"}`}>
        <ul className="flex flex-col space-y-4 p-6 text-sm text-gray-300">
          <li><Link href="/" onClick={() => setOpen(false)} className="hover:text-cyan-400 block pb-2 border-b border-white/5">Home</Link></li>
          <li><Link href="/courses" onClick={() => setOpen(false)} className="hover:text-cyan-400 block pb-2 border-b border-white/5">Courses</Link></li>
          <li><Link href="/add" onClick={() => setOpen(false)} className="hover:text-cyan-400 block pb-2 border-b border-white/5">Add Courses</Link></li>
          <li><Link href="/manage" onClick={() => setOpen(false)} className="hover:text-cyan-400 block pb-2 border-b border-white/5">Manage</Link></li>
          <li><Link href="/about" onClick={() => setOpen(false)} className="hover:text-cyan-400 block pb-2 border-b border-white/5">About</Link></li>
          <li><Link href="/services" onClick={() => setOpen(false)} className="hover:text-cyan-400 block pb-2 border-b border-white/5">Services</Link></li>

          <hr className="my-2 border-white/10" />

          {user ? (
            <button onClick={handleLogout} className="px-4 py-3 border border-white/20 rounded-lg text-center font-medium">
              Logout
            </button>
          ) : (
            <div className="flex flex-col gap-3 pt-2">
              <Link href="/login" onClick={() => setOpen(false)} className="px-4 py-3 border border-white/20 rounded-lg text-center font-medium">Login</Link>
              <Link href="/register" onClick={() => setOpen(false)} className="px-4 py-3 bg-gradient-to-r from-violet-600 to-cyan-600 rounded-lg text-center font-medium text-white shadow-[0_0_15px_rgba(139,92,246,0.5)]">Register</Link>
            </div>
          )}
        </ul>
      </div>
    </nav>
  );
}

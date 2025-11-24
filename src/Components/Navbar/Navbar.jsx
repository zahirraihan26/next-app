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
    <nav className="sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
        <div className="flex items-center gap-2">
          <FaBook className="text-2xl text-blue-600" />
          <Link href="/" className="text-2xl font-bold text-blue-600">
            EduPlatform
          </Link>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-6 text-lg font-medium">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/courses">Courses</Link></li>
           <li><Link href="/add">Add Courses</Link></li>
          <li><Link href="/manage">Manage Courses </Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/services">Services</Link></li>
         
        </ul>

        {/* Auth Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          {user ? (
            <button onClick={handleLogout} className="px-4 py-2 border rounded-md">
              Logout
            </button>
          ) : (
            <>
              <Link href="/login" className="px-4 py-2 border rounded-md">Login</Link>
              <Link href="/register" className="px-4 py-2 bg-blue-600 rounded-md hover:bg-blue-700">
                Register
              </Link>
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-3xl">☰</button>
      </div>

      {/* Mobile Dropdown */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ${open ? "max-h-[500px]" : "max-h-0"}`}>
        <ul className="flex flex-col space-y-4 p-4 text-lg">
          <li><Link href="/" onClick={() => setOpen(false)}>Home</Link></li>
          <li><Link href="/about" onClick={() => setOpen(false)}>About Us</Link></li>
          <li><Link href="/products" onClick={() => setOpen(false)}>Products</Link></li>
          <li><Link href="/services" onClick={() => setOpen(false)}>Services</Link></li>
          <li><Link href="/contact" onClick={() => setOpen(false)}>Contact</Link></li>

          <hr className="my-2" />

          {user ? (
            <button onClick={handleLogout} className="px-4 py-2 border rounded-md">
              Logout
            </button>
          ) : (
            <>
              <Link href="/login" onClick={() => setOpen(false)} className="px-4 py-2 border rounded-md">Login</Link>
              <Link href="/register" onClick={() => setOpen(false)} className="px-4 py-2 bg-blue-600 rounded-md">Register</Link>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
}

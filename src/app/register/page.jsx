'use client'
import { useState } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth, provider } from '@/app/firebase/config';
import { useRouter } from 'next/navigation';
import { signInWithPopup } from "firebase/auth";
import { motion } from "framer-motion";
import Link from 'next/link';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [createUserWithEmailAndPassword, user, loading, error] = useCreateUserWithEmailAndPassword(auth);
  const router = useRouter();

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const res = await createUserWithEmailAndPassword(email, password);
      if (res) {
        sessionStorage.setItem('user', true);
        setEmail('');
        setPassword('');
        router.push('/');
      }
    } catch (e) {
      console.error(e);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      if (result) {
        sessionStorage.setItem('user', true);
        router.push('/');
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-[#030014] overflow-hidden px-4">
      {/* Dynamic Background Elements */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-cyan-600/20 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-violet-600/10 rounded-full blur-[100px] pointer-events-none"></div>

      <motion.div 
        initial={{ opacity: 0, y: 20, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="relative z-10 bg-[#0a0a0a]/60 backdrop-blur-xl p-10 rounded-2xl shadow-[0_0_40px_rgba(6,182,212,0.1)] border border-white/10 w-full max-w-md"
      >
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-violet-400 mb-2">
            Create Pioneer Account
          </h1>
          <p className="text-gray-400 text-sm">Join the next generation of learning</p>
        </div>

        {error && <p className="text-red-400 text-sm mb-4 text-center">{error.message}</p>}

        <form onSubmit={handleSignUp} className="space-y-4">
          <div>
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-4 bg-[#050505] border border-white/10 rounded-xl outline-none text-white placeholder-gray-500 focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all shadow-inner"
              required
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-4 bg-[#050505] border border-white/10 rounded-xl outline-none text-white placeholder-gray-500 focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all shadow-inner"
              required
            />
          </div>
          
          <button
            type="submit"
            disabled={loading}
            className="w-full p-4 mt-2 bg-gradient-to-r from-cyan-600 to-violet-600 rounded-xl text-white font-semibold hover:shadow-[0_0_20px_rgba(6,182,212,0.5)] transition-all transform hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Creating Identity..." : "Sign Up"}
          </button>
        </form>

        <div className="mt-6 flex items-center justify-center gap-3">
          <div className="h-[1px] w-full bg-white/10"></div>
          <span className="text-gray-500 text-sm">Or</span>
          <div className="h-[1px] w-full bg-white/10"></div>
        </div>

        <button 
          onClick={handleGoogleSignIn}
          className="w-full p-4 mt-6 bg-white/5 border border-white/10 rounded-xl text-white font-medium hover:bg-white/10 transition-colors flex items-center justify-center gap-3"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
          </svg>
          Continue with Google
        </button>

        <p className="mt-8 text-center text-gray-400 text-sm">
          Already have an account? <Link href="/login" className="text-violet-400 hover:text-violet-300 font-medium transition-colors">Sign in</Link>
        </p>
      </motion.div>
    </div>
  );
};

export default SignUp;

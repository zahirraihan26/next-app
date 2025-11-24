'use client'
import { useState } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth , provider } from '@/app/firebase/config';
import { useRouter } from 'next/navigation'; // ✅ Import useRouter
import { signInWithPopup } from "firebase/auth"

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [createUserWithEmailAndPassword] = useCreateUserWithEmailAndPassword(auth);
  const router = useRouter(); // ✅ define router

  const handleSignUp = async () => {
    try {
      const res = await createUserWithEmailAndPassword(email, password);
      console.log({ res });
      setEmail('');
      setPassword('');
      router.push('/'); // ✅ redirect after signup
    } catch (e) {
      console.error(e);
    }
  };

  const handleGoogleSignIn = async () => {
      try {
        const result = await signInWithPopup(auth, provider);
        console.log(result);
        sessionStorage.setItem('user', true)
        router.push('/')
      } catch (error) {
        console.error(error);
      }
     }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="bg-gray-800 p-10 rounded-lg shadow-xl w-96">
        <h1 className="text-white text-2xl mb-5">Sign Up</h1>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 mb-4 bg-gray-700 rounded outline-none text-white placeholder-gray-500"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-3 mb-4 bg-gray-700 rounded outline-none text-white placeholder-gray-500"
        />
        <button
          onClick={handleSignUp}
          className="w-full p-3 bg-indigo-600 rounded text-white hover:bg-indigo-500"
        >
          Sign Up
        </button>
        <button 
          onClick={handleGoogleSignIn}
          className="w-full p-3 mt-5 bg-indigo-600 rounded text-white hover:bg-indigo-500"
        >
          Sign in with Google
        </button>
      </div>
    </div>
  );
};

export default SignUp;

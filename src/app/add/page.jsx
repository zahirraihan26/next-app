"use client"
import React, { useEffect, useState } from 'react'
import{useAuthState} from 'react-firebase-hooks/auth'
import { auth } from '@/app/firebase/config' 
import { useRouter } from 'next/navigation'

export default function Postpage() {
  const [user] =useAuthState(auth)
  const router =useRouter()
  console.log({user})

    useEffect(() => {
    if (!user) {
      router.push('/register')
    }
  }, [user, router])

  const [data, setData] = useState({
    title: "",
    shortDesc: "",
    fullDesc: "",
    price: "",
    date: "",
    priority: "",
    image: ""
  })

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("http://localhost:5000/courses", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data)
    });

    const result = await res.json();
    console.log(result)
    alert("Course Added Successfully!")
  }

  return (
    <div className="max-w-lg mx-auto p-6 bg-gray-900 text-white rounded-lg shadow-lg mt-8">
  <h2 className="text-2xl font-bold mb-6 text-teal-400 text-center">Add Course</h2>

  <form onSubmit={handleSubmit} className="space-y-4">

    <input 
      type="text" 
      name="title" 
      placeholder="Title"
      className="w-full p-3 rounded-md border border-gray-700 bg-gray-800 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition"
      value={data.title} 
      onChange={handleChange} 
      required 
    />

    <input 
      type="text" 
      name="shortDesc" 
      placeholder="Short Description"
      className="w-full p-3 rounded-md border border-gray-700 bg-gray-800 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition"
      value={data.shortDesc} 
      onChange={handleChange} 
      required 
    />

    <textarea 
      name="fullDesc" 
      placeholder="Full Description"
      className="w-full p-3 rounded-md border border-gray-700 bg-gray-800 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition"
      rows={4} 
      value={data.fullDesc} 
      onChange={handleChange} 
    />

    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <input 
        type="number" 
        name="price" 
        placeholder="Price"
        className="w-full p-3 rounded-md border border-gray-700 bg-gray-800 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition"
        value={data.price} 
        onChange={handleChange} 
      />

      <input 
        type="date" 
        name="date"
        className="w-full p-3 rounded-md border border-gray-700 bg-gray-800 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition"
        value={data.date} 
        onChange={handleChange} 
      />
    </div>

    <select 
      name="priority" 
      className="w-full p-3 rounded-md border border-gray-700 bg-gray-800 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition"
      value={data.priority} 
      onChange={handleChange}
    >
      <option value="">Select Priority</option>
      <option value="low">Low</option>
      <option value="normal">Normal</option>
      <option value="high">High</option>
    </select>

    <input 
      type="text" 
      name="image" 
      placeholder="Image URL"
      className="w-full p-3 rounded-md border border-gray-700 bg-gray-800 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition"
      value={data.image} 
      onChange={handleChange} 
    />

    <button 
      type="submit"
      className="w-full bg-teal-500 hover:bg-teal-600 transition text-white font-semibold p-3 rounded-md shadow-md"
    >
      Submit
    </button>
  </form>
</div>

  )
}


"use client"
import React, { useState } from 'react'

export default function Postpage() {

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
    <div className="max-w-xl mx-auto p-6">
      <h2 className="text-xl font-bold mb-4">Add Courses</h2>

      <form onSubmit={handleSubmit} className="space-y-3">

        <input type="text" name="title" placeholder="Title"
          className="border w-full p-2"
          value={data.title} onChange={handleChange} required />

        <input type="text" name="shortDesc" placeholder="Short Description"
          className="border w-full p-2"
          value={data.shortDesc} onChange={handleChange} required />

        <textarea name="fullDesc" placeholder="Full Description"
          className="border w-full p-2"
          rows={3} value={data.fullDesc} onChange={handleChange} />

        <input type="number" name="price" placeholder="Price"
          className="border w-full p-2"
          value={data.price} onChange={handleChange} />

        <input type="date" name="date"
          className="border w-full p-2"
          value={data.date} onChange={handleChange} />

        <select name="priority" className="bg-black border w-full p-2"
          value={data.priority} onChange={handleChange}>
          <option value="">Select priority</option>
          <option value="low">Low</option>
          <option value="normal">Normal</option>
          <option value="high">High</option>
        </select>

        <input type="text" name="image" placeholder="Image URL"
          className="border w-full p-2"
          value={data.image} onChange={handleChange} />

        <button type="submit"
          className="bg-blue-600 text-white p-2 rounded">
          Submit
        </button>
      </form>
    </div>
  )
}


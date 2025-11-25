"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const PopularCourses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    // Fetch courses from backend
    const fetchCourses = async () => {
      try {
        const res = await fetch("https://my-fast-next-server.vercel.app/courses");
        const data = await res.json();
        setCourses(data.slice(0, 6)); // Only take the first 6 courses
      } catch (error) {
        console.error("Failed to fetch courses:", error);
      }
    };

    fetchCourses();
  }, []);

  return (
    <div className=" min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-white sm:text-5xl">
          Popular Courses
        </h2>
        <p className="mt-4 text-xl text-gray-400">
          Join thousands of students learning these trending courses
        </p>
      </div>

      {/* Courses Grid */}
      <div className="max-w-7xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {courses.map((course) => (
          <div
            key={course._id}
            className="bg-gray-800 rounded-xl shadow-2xl overflow-hidden transform hover:scale-105 transition duration-300"
          >
            {/* Course Image/Video */}
            <div className="h-48 bg-black flex items-center justify-center">
              <div
                className="w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url(${course.image})` }}
              >

              </div>
            </div>

            {/* Card Content */}
            <div className="p-6">
              <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-blue-600 text-white">
                {course.category || "Development"}
              </span>
              <h3 className="mt-3 text-2xl font-semibold text-white">
                {course.title}
              </h3>
              <p className="mt-1 text-gray-400 text-sm">
                {course.instructor || "Unknown Instructor"}
              </p>
              <p className="mt-4 text-3xl font-bold text-cyan-400">
                ${course.price || "0"}
              </p>
              <Link href={`/courses/${course._id}`}>
                <button className="mt-6 w-full py-3 px-4 border border-transparent rounded-lg shadow-sm text-base font-medium text-white bg-cyan-500 hover:bg-cyan-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 focus:ring-offset-gray-900 transition duration-150">
                  View Details
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default PopularCourses;

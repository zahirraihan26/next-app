'use client'
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { FaEye, FaRegTrashAlt } from 'react-icons/fa';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '@/app/firebase/config';
import { useRouter } from 'next/navigation';

export default function ManageCoursesPage() {
  const [courses, setCourses] = useState([]);
  const [user] = useAuthState(auth);
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push('/register');
    }
  }, [user, router]);

  // Fetch courses on Client
  useEffect(() => {
    async function loadCourses() {
      const res = await fetch('https://my-fast-next-server.vercel.app/courses');
      const data = await res.json();
      setCourses(data);
    }
    loadCourses();
  }, []);

  const handleDelete = async (id) => {
    const confirmDelete = confirm("Are you sure you want to delete this course?");
    if (!confirmDelete) return;

    try {
      const res = await fetch(`https://my-fast-next-server.vercel.app/courses/${id}`, {
        method: 'DELETE',
      });

      if (!res.ok) {
        throw new Error('Failed to delete the course');
      }

      // Remove deleted course from state
      setCourses(courses.filter(course => course._id !== id));
      alert("Course deleted successfully!");
    } catch (error) {
      console.error(error);
      alert("Error deleting course");
    }
  };


  return (
    <div className="p-4 sm:p-8 min-h-screen bg-gray-900 text-white">

      <div className="flex flex-col sm:flex-row justify-between items-start mb-6 sm:mb-8">
        <div className="mb-4 sm:mb-0">
          <h1 className="text-2xl sm:text-4xl font-bold mb-1">Manage Courses</h1>
          <p className="text-gray-300">View and manage all your courses</p>
        </div>
        <Link href="/add" className="flex items-center justify-center sm:justify-start space-x-2 px-4 py-2 bg-teal-500 font-semibold rounded-md shadow-lg hover:bg-teal-600 transition duration-150">
          <span>Add New Course</span>
        </Link>
      </div>

      <div className="overflow-x-auto bg-gray-800 p-4 rounded-lg shadow-md">
        <table className="min-w-full divide-y divide-gray-700 text-sm sm:text-base">
          <thead>
            <tr className="text-left font-medium text-gray-300">
              <th className="py-3 pr-4 w-1/4">Title</th>
              <th className="py-3 pr-4 w-1/4">Priority</th>
              <th className="py-3 pr-4 w-1/6">Price</th>
              <th className="py-3 pr-4 w-1/6">Date</th>
              <th className="py-3 w-1/12 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-700">
            {courses.map((course) => (
              <tr key={course._id} className="hover:bg-gray-700 transition duration-150">
                <td className="py-3 pr-4 font-semibold">{course.title}</td>
                <td className="py-3 pr-4">{course.priority}</td>
                <td className="py-3 pr-4">${course.price}</td>
                <td className="py-3 pr-4">{course.date}</td>
                <td className="py-3 text-right flex justify-end space-x-2">
                  <Link href={`/courses/${course._id}`} className="p-2 hover:text-teal-500 transition duration-150">
                    <FaEye />
                  </Link>
                  <button onClick={() => handleDelete(course._id)} className="p-2 bg-red-500 rounded-md hover:bg-red-600 transition duration-150">
                    <FaRegTrashAlt />
                  </button>

                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

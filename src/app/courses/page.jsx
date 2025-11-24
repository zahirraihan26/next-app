import React from 'react';
import getAllcourse from '../../../lib/gateallcourse';
import Link from 'next/link';

export default async function Page() {
    const courses = await getAllcourse();
    console.log(courses);

    return (
        <div className="p-6">
            <div className="flex items-center justify-center mb-8">
                <h2 className="text-3xl font-bold">All Courses</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {courses?.map((course) => (
                    <div
                        key={course._id}
                        className=" rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
                    >
                        <img
                            src={course.image || '/mnt/data/dd11aff2-727c-4bd4-b17d-ebce494e7af7.png'}
                            alt={course.title}
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                            <span className="inline-block bg-blue-400 text-white text-xs px-2 py-1 rounded-full mb-2">
                                {course.genre || 'Development'}
                            </span>
                            <h3 className="text-lg font-semibold mb-1">{course.title}</h3>
                            <p className="text-gray-500 text-sm mb-2">{course.shortDesc || 'Course description here'}</p>
                            <p className="text-xl font-bold text-green-500">${course.price || '50000'}</p>
                            <Link
                                href={`/courses/${course._id}`}
                                className="mt-4 inline-block w-full text-center bg-blue-400 text-white py-2 rounded-lg hover:bg-blue-500 transition-colors"
                            >
                                View Details
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

import Link from "next/link";

export default async function DetailPage({ params }) {
    // unwrap the params promise
    const { id } = await params;

    const res = await fetch(`http://localhost:5000/courses/${id}`, {
        cache: 'no-store',
    });

    const course = await res.json();


    const category = course.title|| "Development";
    const duration = course.priority|| "8 weeks";
    const students = course.students || "1,234 students";
    const instructor = course.shortDesc || "Instructor Name";

    return (
         <div className="min-h-screen bg-gray-500">
            {/* Banner */}
           <div className="h-64 bg-cover bg-center relative" style={{ backgroundImage: `url(${course.image || '/placeholder-banner.jpg'})` }}>
                 <div className="absolute inset-0 bg-gradient-to-t from-gray-900/30 to-purple-500/50"></div>
            </div>

            <div className="max-w-7xl  p-6 sticky top-6 mx-auto px-4 sm:px-6 lg:px-8 -mt-48">
                {/* Back button */}
                <Link
                    href="/courses"
                    className="inline-block px-4 py-2 mb-8 text-sm font-medium text-gray-700 bg-white rounded-lg shadow hover:bg-gray-100"
                >
                    ← Back to Courses
                </Link>

                <div className="flex flex-col lg:flex-row gap-8 ">
                    {/* Main content */}
                    <div className="lg:w-2/3 bg-white p-6 rounded-xl shadow-lg">
                        <span className="inline-block bg-blue-100 text-blue-800 text-xs font-medium px-3 py-1 rounded-full mb-4">
                            {category}
                        </span>

                        <h1 className="text-4xl font-extrabold text-gray-900 mb-2">{course.title || "Course Title"}</h1>
                        <p className="text-gray-500 mb-6">{instructor}</p>

                        {/* Stats */}
                        <div className="flex items-center space-x-6 text-sm text-gray-600 mb-10">
                            <div className="flex items-center"><span className="mr-2">🕒</span>{duration}</div>
                            <div className="flex items-center"><span className="mr-2">👥</span>{students}</div>
                            <div className="flex items-center"><span className="mr-2">📜</span>Certificate included</div>
                        </div>

                        {/* About */}
                        <div className="mb-6">
                            <h2 className="text-2xl font-bold text-gray-900 mb-3">About This Course</h2>
                            <p className="text-gray-600 leading-relaxed">
                                {course.fullDesc || course.shortDesc || "No detailed description provided."}
                            </p>
                        </div>

                        
                    </div>

                    {/* Sidebar */}
                    <div className="lg:w-1/3">
                        <div className="bg-white p-6 rounded-xl shadow-lg sticky top-6 border border-gray-100">
                            <div className="text-4xl font-extrabold text-blue-600 mb-6 text-center">
                                ${course.price?.toLocaleString() || "N/A"}
                            </div>

                            <button className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 rounded-lg transition duration-200 mb-3">
                                Enroll Now
                            </button>

                            <button className="w-full bg-white border border-gray-300 text-gray-700 font-bold py-3 rounded-lg hover:bg-gray-50 transition duration-200 mb-6">
                                Add to Wishlist
                            </button>

                            <h3 className="text-md font-semibold text-gray-800 mb-3">This course includes:</h3>
                            <ul className="space-y-2 text-sm text-gray-600">
                                <li>✓ Lifetime access</li>
                                <li>✓ 30-day money-back guarantee</li>
                                <li>✓ Certificate of completion</li>
                                <li>✓ Access on mobile and desktop</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

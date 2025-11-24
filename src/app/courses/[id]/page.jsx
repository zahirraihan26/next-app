export default async function DetailPage({ params }) {
    // unwrap the params promise
    const { id } = await params;

    const res = await fetch(`http://localhost:5000/courses/${id}`, {
        cache: 'no-store',
    });

    const course = await res.json();

    return (
        <div className="max-w-7xl mx-auto p-6 bg-gray-900 rounded-lg">
            <h2 className="text-2xl font-bold mb-4 text-white">{course.title}</h2>
            <p className="text-white mb-2"><strong>Short:</strong> {course.shortDesc}</p>
            <p className="text-white mb-2"><strong>Full Description:</strong> {course.fullDesc}</p>
            <p className="text-white mb-2"><strong>Price:</strong> ${course.price}</p>
            <p className="text-white mb-2"><strong>Priority:</strong> {course.priority}</p>
            <p className="text-white mb-2"><strong>Date:</strong> {course.date}</p>
        </div>
    );
}

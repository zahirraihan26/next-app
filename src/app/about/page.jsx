import React from "react";

export default function Page() {
  return (
    <div className="min-h-screen  py-16 px-6">
      <div className="max-w-4xl mx-auto  shadow-lg rounded-xl p-10">
        <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">
          About Us
        </h1>
        
        <p className="text-gray-600 leading-relaxed mb-4">
          Welcome to our platform! We are dedicated to providing the best learning
          experience and resources to help individuals grow and develop new skills.
          Our mission is to empower learners through high-quality educational content.
        </p>

        <p className="text-gray-600 leading-relaxed mb-4">
          Our team is passionate about building a community where knowledge is easily 
          accessible and enjoyable. We continuously strive to improve, adapt, and 
          create better features for our users.
        </p>

        <p className="text-gray-600 leading-relaxed">
          Thank you for being part of our journey. Together, we are growing, 
          learning, and moving forward.
        </p>

        <div className="mt-10 text-center">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
}

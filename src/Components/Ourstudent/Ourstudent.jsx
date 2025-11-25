"use client";
import React from 'react';

export default function TestimonialsPage() {
  return (
    <div className=" py-20 px-4">
      <div className="max-w-6xl mx-auto">

        {/* Title */}
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-4">
          What Our Students Say
        </h2>
        <p className="text-center mb-14 text-lg">
          Join thousands of satisfied learners who achieved their goals
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          <div className="border rounded-xl p-6 shadow-sm hover:shadow-md transition">
            <div className="flex text-cyan-500 mb-3 text-xl">
              ⭐⭐⭐⭐⭐
            </div>
            <p className=" mb-6">
              The courses here transformed my career. The instructors are top-notch
              and the content is always up-to-date.
            </p>
            <div className="flex items-center gap-3">
              <div className="bg-cyan-500 text-white h-12 w-12 flex items-center justify-center rounded-full font-bold">
                SJ
              </div>
              <div>
                <h4 className="font-semibold">Sarah Johnson</h4>
                <p className="text-sm ">Software Developer</p>
              </div>
            </div>
          </div>

          <div className="border rounded-xl p-6 shadow-sm hover:shadow-md transition">
            <div className="flex text-cyan-500 mb-3 text-xl">
              ⭐⭐⭐⭐⭐
            </div>
            <p className="- mb-6">
              Ive tried many platforms, but this one stands out.
               The learning experience is unmatched .
            </p>
            <div className="flex items-center gap-3">
              <div className="bg-cyan-500 text-white h-12 w-12 flex items-center justify-center rounded-full font-bold">
                MC
              </div>
              <div>
                <h4 className="font-semibold">Michael Chen</h4>
                <p className="text-sm ">Product Manager</p>
              </div>
            </div>
          </div>

          <div className="border rounded-xl p-6 shadow-sm hover:shadow-md transition">
            <div className="flex text-cyan-500 mb-3 text-xl">
              ⭐⭐⭐⭐⭐
            </div>
            <p className=" mb-6">
              Flexible learning that fits my schedule. I could learn
              while working full-time and switch careers successfully.
            </p>
            <div className="flex items-center gap-3">
              <div className="bg-cyan-500 text-white h-12 w-12 flex items-center justify-center rounded-full font-bold">
                ER
              </div>
              <div>
                <h4 className="font-semibold">Emily Rodriguez</h4>
                <p className="text-sm text-gray-500">UX Designer</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

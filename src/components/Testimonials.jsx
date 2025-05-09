import React from "react";

const testimonials = [
  {
    name: "Nikita R.",
    role: "Software Engineer",
    company: "Tech Corp",
    comment: "Got instant payment, super fast process!",
  },
  {
    name: "Ravi S.",
    role: "Product Manager",
    company: "Innovate Ltd.",
    comment: "Resold 3 licenses, best experience ever!",
  },
];

const Testimonials = () => (
  <section
    id="testimonials"
    className="py-32 bg-gradient-to-br from-pink-200 to-purple-300 text-center"
  >
    <h2 className="text-4xl font-extrabold text-indigo-800 mb-16">What Our Users Say</h2>
    <div className="grid md:grid-cols-2 gap-16 max-w-7xl mx-auto">
      {testimonials.map((t, idx) => (
        <div
          key={idx}
          className="bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 duration-300"
        >
          <p className="text-lg italic mb-6">“{t.comment}”</p>
          <div className="flex flex-col items-center">
            <span className="block font-semibold text-indigo-700 text-xl mb-2">{t.name}</span>
            <span className="block text-indigo-500 text-md mb-1">{t.role}</span>
            <span className="block text-indigo-400 text-md">{t.company}</span>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Testimonials;

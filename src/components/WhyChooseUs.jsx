import React from "react";
import { FaDollarSign, FaShieldAlt, FaUsers, FaMoneyCheckAlt } from "react-icons/fa";

const points = [
  {
    icon: <FaDollarSign className="text-indigo-600 text-3xl mb-4" />,
    title: "Best Resale Value",
    description: "We guarantee top resale value for your unused licenses.",
  },
  {
    icon: <FaMoneyCheckAlt className="text-indigo-600 text-3xl mb-4" />,
    title: "Instant & Secure Payments",
    description: "Fast and safe transactions straight to your account.",
  },
  {
    icon: <FaUsers className="text-indigo-600 text-3xl mb-4" />,
    title: "Verified Buyer Network",
    description: "Trusted network of buyers ensures a quick sale.",
  },
  {
    icon: <FaShieldAlt className="text-indigo-600 text-3xl mb-4" />,
    title: "No Hidden Charges",
    description: "Transparent pricing, always. No surprises.",
  },
];

const WhyChooseUs = () => (
  <section id="why" className="py-20 px-6 bg-indigo-50 text-center">
    <h2 className="text-4xl font-bold mb-12 text-indigo-700">
      Why Choose SoftSell?
    </h2>
    <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
      {points.map((point, idx) => (
        <div
          key={idx}
          className="bg-white rounded-xl p-8 shadow-lg transform hover:scale-105 hover:shadow-indigo-300 transition-all duration-300"
        >
          {point.icon}
          <h3 className="text-xl font-semibold mb-2">{point.title}</h3>
          <p className="text-gray-600">{point.description}</p>
        </div>
      ))}
    </div>
  </section>
);

export default WhyChooseUs;

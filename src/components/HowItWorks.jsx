import React from "react";
import { FaUpload, FaSearchDollar, FaMoneyBillWave } from "react-icons/fa";

const steps = [
  {
    icon: <FaUpload />,
    title: "Upload License",
    desc: "Submit your software license details in just a few clicks.",
  },
  {
    icon: <FaSearchDollar />,
    title: "Get Offer",
    desc: "Receive the best price estimate from our expert evaluators.",
  },
  {
    icon: <FaMoneyBillWave />,
    title: "Get Paid",
    desc: "Accept the offer and receive instant payment securely.",
  },
];

const HowItWorks = () => (
  <section id="how" className="py-20 px-6 bg-gradient-to-br from-indigo-50 to-purple-100 text-gray-800 text-center">
    <h2 className="text-4xl font-bold mb-14 text-indigo-700">How It Works</h2>
    <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto">
      {steps.map((step, idx) => (
        <div
          key={idx}
          className="p-8 rounded-2xl shadow-xl bg-white border-t-4 border-indigo-500 hover:border-pink-400 transition-all transform hover:scale-105 duration-300"
        >
          <div className="text-5xl text-indigo-600 mb-6">{step.icon}</div>
          <h3 className="text-2xl font-semibold mb-3">{step.title}</h3>
          <p className="text-gray-600 text-md">{step.desc}</p>
        </div>
      ))}
    </div>
  </section>
);

export default HowItWorks;

import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    licenseType: "",
    message: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent!");
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-100">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-blue-900">Contact Us</h2>
        <p className="text-gray-600 mt-2">We’d love to hear from you!</p>
      </div>

      <form onSubmit={handleSubmit} className="max-w-2xl mx-auto bg-white p-10 rounded-2xl shadow-xl space-y-8">
        {/* Reusable Form Field */}
        {[
          { label: "Your Name", name: "name", type: "text" },
          { label: "Your Email", name: "email", type: "email" },
          { label: "Your Company", name: "company", type: "text" },
        ].map((field) => (
          <div key={field.name} className="relative">
            <input
              type={field.type}
              name={field.name}
              value={formData[field.name]}
              onChange={handleChange}
              required
              className="peer w-full border border-gray-300 px-4 pt-6 pb-2 text-sm rounded-md placeholder-transparent focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder={field.label}
            />
            <label
              htmlFor={field.name}
              className="absolute left-4 top-2 text-gray-500 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-blue-500"
            >
              {field.label}
            </label>
          </div>
        ))}

        {/* License Type Dropdown */}
        <div className="relative">
          <select
            name="licenseType"
            value={formData.licenseType}
            onChange={handleChange}
            required
            className="peer w-full border border-gray-300 px-4 pt-6 pb-2 text-sm rounded-md bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option value="" disabled hidden></option>
            <option value="Windows">Windows</option>
            <option value="Office">Microsoft Office</option>
            <option value="Adobe">Adobe</option>
          </select>
          <label
            htmlFor="licenseType"
            className="absolute left-4 top-2 text-gray-500 text-sm transition-all peer-focus:text-blue-500 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm"
          >
            License Type
          </label>
        </div>

        {/* Message */}
        <div className="relative">
          <textarea
            name="message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            required
            className="peer w-full border border-gray-300 px-4 pt-6 pb-2 text-sm rounded-md placeholder-transparent focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Your Message"
          />
          <label
            htmlFor="message"
            className="absolute left-4 top-2 text-gray-500 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-blue-500"
          >
            Your Message
          </label>
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-all transform hover:scale-105"
          >
            Send Message
          </button>
        </div>
      </form>
    </section>
  );
};

export default Contact;

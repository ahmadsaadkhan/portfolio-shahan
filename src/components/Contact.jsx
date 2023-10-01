"use client"

import { useState } from "react";
import { emailHandler } from "../app/api/email_api";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }
  const submitForm = async (e) => {
    e.preventDefault();
    await emailHandler();
    // try {
    //   const response = await fetch('/api/email_api', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({ key: 'value' }),
    //   });

    //   if (response.ok) {
    //     const data = await response.json();
    //     console.log('Response from POST:', data);
    //   } else {
    //     console.error('Failed to send POST request');
    //   }
    // } catch (error) {
    //   console.error('Error sending POST request:', error);
    // }
  }
  return (
    <section id="contact" className="relative">
      <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
        <form
          name="contact"
          onSubmit={submitForm}
          className="flex flex-col items-center md:ml-auto w-full md:py-8 mt-8 md:mt-0">
          <h2 className="text-white sm:text-4xl text-3xl mb-1 font-medium title-font">
            Hire Me
          </h2>
          <div className="md:w-1/3 sm:w-full relative mb-4">
            <label htmlFor="name" className="leading-7 text-sm text-gray-400">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="md:w-1/3 sm:w-full relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-400">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="md:w-1/3 sm:w-full relative mb-4">
            <label
              htmlFor="message"
              className="leading-7 text-sm text-gray-400">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
            />
          </div>
          <button
            type="submit"
            className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
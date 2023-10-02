"use client"

import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitText, setSubmitText] = useState('Submit');
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }
  const submitForm = async (e) => {
    e.preventDefault();
    setSubmitText('Wait...');
    setButtonDisabled(true)
    await fetch("/api/email", {
      method: "POST",
      body: JSON.stringify(formData),
    }).then((response) => {
      if (!response.ok) {
        toast.error("An error has occurred. Please try again later.", {
          position: toast.POSITION.TOP_CENTER
        });
      }
      return response.json()
    }).then((data) => {
      if (data.message === 'Success') {
        toast.success("Your email has been sent successfully.", {
          position: toast.POSITION.TOP_CENTER
        });
      }
      if (data.message === 'Failed') {
        toast.error("Your email was not sent successfully.", {
          position: toast.POSITION.TOP_CENTER
        });
      }
    })
    setSubmitText('Submit');
    setButtonDisabled(false)
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
            disabled={buttonDisabled}
            className={`text-white border-0 py-2 px-6 focus:outline-none rounded text-lg ${!buttonDisabled ? ' bg-indigo-500 hover:bg-indigo-600' : 'bg-gray-500 cursor-not-allowed'}`}>
            {submitText}
          </button>
        </form>
      </div>
      <ToastContainer />
    </section>
  );
}
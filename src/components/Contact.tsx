import Link from "next/dist/client/link";
import React from "react";
import { CiLocationOn, CiMail, CiPhone } from "react-icons/ci";

const Contact = () => {
  return (
    <div className="h-screen flex flex-col items-start justify-start p-2 md:p-10 bg-gradient-to-b from-gray-100 to-purple-100 text-gray-800">
      <h1 className="text-xl md:text-4xl font-bold mb-4">Contact</h1>
      <div className="flex flex-col md:flex-row h-screen w-full">
        <div className="flex items-center justify-start ml-3 md:justify-center w-full md:w-[30%]">
          <ul className="mt-4 text-md md:text-xl space-y-4 md:space-y-6 list-none">
            <li className="flex items-start gap-3">
              <CiLocationOn
                className="text-2xl md:text-3xl text-gray-600 mt-3 bg-amber-50 border border-gray-300 rounded 
  hover:bg-amber-100 hover:scale-110 hover:rotate-6 
  transition-transform duration-300 ease-in-out p-1"
              />
              <div>
                <strong>Address</strong>
                <p className="text-gray-700">Neshman Iqbal Phase 1, Lahore</p>
              </div>
            </li>

            <li className="flex items-start gap-3">
              <Link href="https://wa.me/923085171091" target="_blank">
                <CiPhone
                  className="text-2xl md:text-3xl text-gray-600 mt-3 bg-amber-50 border border-gray-300 rounded 
  hover:bg-amber-100 hover:scale-110 hover:rotate-6 
  transition-transform duration-300 ease-in-out p-1"
                />
              </Link>
              <div>
                <strong>Call</strong>
                <p className="text-gray-700">+92 308 5171091</p>
              </div>
            </li>

            <li className="flex items-start gap-3">
              <Link href="mailto:haroontalib8029@gmail.com">
                <CiMail
                  className="text-2xl md:text-3xl text-gray-600 mt-3 bg-amber-50 border border-gray-300 rounded 
  hover:bg-amber-100 hover:scale-110 hover:rotate-6 
  transition-transform duration-300 ease-in-out p-1"
                />
              </Link>
              <div>
                <strong>Email</strong>
                <p className="text-gray-700">haroontalib8029@gmail.com</p>
              </div>
            </li>
          </ul>
        </div>
        <div className="flex flex-col items-center justify-center w-full md:w-[70%]">
          <form className="w-full md:max-w-2xl mx-auto bg-transparent p-2 md:p-8 space-y-2 md:space-y-6">
            {/* Two inputs side by side */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-6">
              <div>
                <input
                  type="text"
                  id="firstName"
                  placeholder="Name"
                  className="w-full border border-gray-300 rounded-md px-2 md:px-4 py-1 md:py-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
                />
              </div>

              <div>
                <input
                  type="email"
                  id="email"
                  placeholder="Email"
                  className="w-full border border-gray-300 rounded-md px-2 md:px-4 py-1 md:py-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
                />
              </div>
            </div>

            {/* Single input below */}
            <div>
              <input
                type="text"
                id="subject"
                placeholder="Subject"
                className="w-full border border-gray-300 rounded-md px-2 md:px-4 py-1 md:py-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
              />
            </div>

            {/* Textarea below */}
            <div>
              <textarea
                id="message"
                rows={3}
                placeholder="Message..."
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-400 resize-none"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-purple-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-purple-700 transition-colors duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";

const Hero = () => {
  return (
    <div className="relative h-screen flex items-center justify-center bg-gradient-to-b from-gray-100 via-purple-100 to-gray-50">
      {/* Profile Image */}
      <Image
        src="/haroon1.png"
        alt="My Profile Picture"
        width={750}
        height={740}
        className="ml-20 mb-20  opacity-50"
      />

      <div className="absolute h-screen flex flex-col items-start justify-center z-20">
        <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-800 via-black to-gray-800 bg-clip-text text-transparent mb-1 mt-4 pl-10">
          Muhammad Haroon Talib
        </h1>
        <p className="text-xl pl-10 text-gray-800">Software Engineer</p>
        <div className="flex space-x-6 text-3xl text-gray-700 ml-48">
          <Link
            href="https://www.linkedin.com/in/muhammad-haroon-talib-710300279/"
            target="_blank"
            className="hover:text-blue-700 transition-colors duration-300"
          >
            <FaLinkedin />
          </Link>

          <Link
            href="https://www.facebook.com/chharoonazad.azad.5"
            target="_blank"
            className="hover:text-blue-600 transition-colors duration-300"
          >
            <FaFacebook />
          </Link>

          <Link
            href="https://www.instagram.com/chharoonazad/?utm_source=qr&igsh=cnp6NXNpejF1cHdv#"
            target="_blank"
            className="hover:text-pink-600 transition-colors duration-300"
          >
            <FaInstagram />
          </Link>
          <Link
            href="https://wa.me/923085171091"
            target="_blank"
            className="hover:text-green-600 transition-colors duration-300"
          >
            <FaWhatsapp />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;

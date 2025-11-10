"use client"; // needed for Framer Motion in Next.js App Router
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";

const Hero = () => {
  return (
    <div className="relative h-screen flex items-center justify-center bg-gradient-to-b from-gray-100 via-purple-100 to-gray-50 overflow-hidden">
      {/* Profile Image with fade-in effect */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 0.5, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <Image
          src="/haroon1.png"
          alt="My Profile Picture"
          width={750}
          height={740}
          className="ml-20 mb-20"
        />
      </motion.div>

      {/* Text and Social Icons */}
      <motion.div
        initial={{ opacity: 0, y: 100 }} // start below
        animate={{ opacity: 1, y: 0 }} // move up smoothly
        transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
        className="absolute h-screen flex flex-col items-start justify-center z-20"
      >
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-5xl font-bold bg-gradient-to-r from-purple-800 via-black to-gray-800 bg-clip-text text-transparent mb-1 mt-4 pl-10"
        >
          Muhammad Haroon Talib
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-xl pl-10 text-gray-800"
        >
          Software Engineer
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex space-x-6 text-3xl text-gray-700 ml-48 mt-4"
        >
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
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;

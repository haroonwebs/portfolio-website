import React from "react";
import Image from "next/image";

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
        <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-800 via-black to-gray-800 bg-clip-text text-transparent mb-4 pl-10">
          Muhammad Haroon Talib
        </h1>
        <p className="text-xl pl-10 text-gray-800">Software Engineer</p>
      </div>
    </div>
  );
};

export default Hero;

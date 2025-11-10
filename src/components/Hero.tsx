import React from "react";

const Hero = () => {
  return (
    <div className="h-screen flex flex-col items-start justify-center bg-gradient-to-b from-gray-100 to-purple-100 text-gray-800">
      <h1 className="text-5xl text- font-bold bg-gradient-to-r from-purple-800 via-black to-gray-800 bg-clip-text text-transparent mb-4 pl-10">
        Muhammad Haroon Talib
      </h1>
      <p className="text-xl pl-10">Software Engineer</p>
    </div>
  );
};

export default Hero;

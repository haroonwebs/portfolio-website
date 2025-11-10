"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-200px" });

  return (
    <div
      id="projects"
      ref={ref}
      className="h-screen flex flex-col p-10 bg-gradient-to-b from-gray-100 via-purple-100 to-gray-50 text-gray-800"
    >
      <h1 className="text-4xl font-bold mb-4">Projects</h1>

      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}} // animate only when visible
        transition={{ duration: 1, delay: 0.5 }}
        className="grid grid-cols-3 justify-center items-center gap-10 mt-10"
      >
        <Project
          icon={
            <Image
              src="/homeLoop.png"
              alt="Home Buyer Loop"
              width={150}
              height={150}
            />
          }
          name="Home Buyer Loop"
        />
        <Project
          icon={
            <Image
              src="/toughcookies.jpeg"
              alt="Tough Cookies"
              width={150}
              height={150}
            />
          }
          name="Tough Cookies"
        />
        <Project
          icon={
            <Image
              src="/shippingmadegood.png"
              alt="Shipping Made Good"
              width={150}
              height={150}
            />
          }
          name="Shipping Made Good"
        />
      </motion.div>
    </div>
  );
};

const Project = ({ icon, name }: { icon: React.ReactNode; name: string }) => (
  <div className="flex flex-col justify-center items-center hover:scale-130 transition-transform duration-300">
    {icon}
    <strong>{name}</strong>
  </div>
);

export default Projects;

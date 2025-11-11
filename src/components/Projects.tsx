"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

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
        className="grid grid-cols-3 justify-center items-center gap-6 mt-10"
      >
        <Project
          icon={
            <Image
              src="/home.jpg"
              alt="Home Buyer Loop"
              width={200}
              height={200}
            />
          }
          name="Home Buyer Loop"
          link="https://homebuyerloop.com"
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
          link="https://toughcookies.com"
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
          link="https://shippingmadegood.com"
        />
      </motion.div>
    </div>
  );
};

const Project = ({
  icon,
  name,
  link,
}: {
  icon: React.ReactNode;
  name: string;
  link: string;
}) => (
  <Link
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className="flex flex-col justify-center items-center hover:scale-110 transition-transform duration-300 p-4 rounded-lg hover:bg-purple-50"
  >
    {icon}
    <strong className="mt-2">{name}</strong>
  </Link>
);

export default Projects;

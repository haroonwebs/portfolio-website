"use client";
import { useState, useEffect } from "react";
import { HiOutlineHomeModern } from "react-icons/hi2";
import { CiUser } from "react-icons/ci";
import { GrServices } from "react-icons/gr";
import { TfiGallery } from "react-icons/tfi";
import { MdContactPhone } from "react-icons/md";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Sidebar() {
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "about", "skills", "projects", "contact"];
      const scrollPos = window.scrollY + 200;

      for (let section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const bottom = top + el.offsetHeight;
          if (scrollPos >= top && scrollPos < bottom) {
            setActive(section);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <aside className="fixed left-[-35px] top-40 h-screen w-64 text-gray-800 flex flex-col items-center justify-between py-10">
      <div className="flex flex-col items-center">
        <nav className="flex flex-col space-y-10 text-lg">
          <Link
            href="#hero"
            className={`flex items-center gap-2  hover:text-purple-100 ${
              active === "hero" ? "text-purple-200 font-bold" : ""
            }`}
          >
            <HiOutlineHomeModern />{" "}
            <motion.span
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              Home
            </motion.span>
          </Link>
          <Link
            href="#about"
            className={`flex items-center gap-2  hover:text-purple-100 ${
              active === "about" ? "text-purple-200 font-bold" : ""
            }`}
          >
            <CiUser />{" "}
            <motion.span
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              About
            </motion.span>
          </Link>
          <Link
            href="#skills"
            className={`flex items-center gap-2  hover:text-purple-100 ${
              active === "skills" ? "text-purple-200 font-bold" : ""
            }`}
          >
            <GrServices />{" "}
            <motion.span
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              Skills
            </motion.span>
          </Link>
          <Link
            href="#projects"
            className={`flex items-center gap-2  hover:text-purple-100 ${
              active === "projects" ? "text-purple-200 font-bold" : ""
            }`}
          >
            <TfiGallery />{" "}
            <motion.span
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              Projects
            </motion.span>
          </Link>
          <Link
            href="#contact"
            className={`flex items-center gap-2 hover:text-purple-100 ${
              active === "contact" ? "text-purple-200 font-bold" : ""
            }`}
          >
            <MdContactPhone />{" "}
            <motion.span
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              Contact
            </motion.span>
          </Link>
        </nav>
      </div>
    </aside>
  );
}

"use client";
import { useState, useEffect } from "react";
import { HiOutlineHomeModern } from "react-icons/hi2";
import { CiUser } from "react-icons/ci";
import { GrServices } from "react-icons/gr";
import { TfiGallery } from "react-icons/tfi";
import { MdContactPhone } from "react-icons/md";

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
          <a
            href="#hero"
            className={`flex items-center gap-2  hover:text-purple-100 ${
              active === "hero" ? "text-purple-200 font-bold" : ""
            }`}
          >
            <HiOutlineHomeModern /> <span>Home</span>
          </a>
          <a
            href="#about"
            className={`flex items-center gap-2  hover:text-purple-100 ${
              active === "about" ? "text-purple-200 font-bold" : ""
            }`}
          >
            <CiUser /> <span>About</span>
          </a>
          <a
            href="#skills"
            className={`flex items-center gap-2  hover:text-purple-100 ${
              active === "skills" ? "text-purple-200 font-bold" : ""
            }`}
          >
            <GrServices /> <span>Skills</span>
          </a>
          <a
            href="#projects"
            className={`flex items-center gap-2  hover:text-purple-100 ${
              active === "projects" ? "text-purple-200 font-bold" : ""
            }`}
          >
            <TfiGallery /> <span>Projects</span>
          </a>
          <a
            href="#contact"
            className={`flex items-center gap-2 hover:text-purple-100 ${
              active === "contact" ? "text-purple-200 font-bold" : ""
            }`}
          >
            <MdContactPhone /> <span>Contact</span>
          </a>
        </nav>
      </div>
    </aside>
  );
}

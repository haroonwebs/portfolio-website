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

  const linkVariants = {
    inactive: { opacity: 0.6, x: 0, scale: 1 },
    active: { opacity: 1, x: 10, scale: 1.1 },
  };

  return (
    <aside className="fixed left-[-35px] top-40 h-screen w-64 text-gray-800 flex flex-col items-center justify-between py-10">
      <div className="flex flex-col items-center">
        <nav className="flex flex-col space-y-10 text-lg">
          {[
            { id: "hero", label: "Home", icon: <HiOutlineHomeModern /> },
            { id: "about", label: "About", icon: <CiUser /> },
            { id: "skills", label: "Skills", icon: <GrServices /> },
            { id: "projects", label: "Projects", icon: <TfiGallery /> },
            { id: "contact", label: "Contact", icon: <MdContactPhone /> },
          ].map((item) => (
            <Link key={item.id} href={`#${item.id}`}>
              <motion.div
                variants={linkVariants}
                animate={active === item.id ? "active" : "inactive"}
                transition={{ type: "spring", stiffness: 120, damping: 12 }}
                className={`flex items-center gap-2 cursor-pointer ${
                  active === item.id
                    ? "text-purple-600 font-bold"
                    : "text-gray-700"
                }`}
              >
                {item.icon}
                <span>{item.label}</span>
              </motion.div>
            </Link>
          ))}
        </nav>
      </div>
    </aside>
  );
}

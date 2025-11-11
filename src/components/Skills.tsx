"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaPython, FaReact, FaNodeJs } from "react-icons/fa";
import { TiHtml5 } from "react-icons/ti";
import { SiCss3, SiMui } from "react-icons/si";
import {
  TbBrandNextjs,
  TbBrandDjango,
  TbBrandTypescript,
  TbBrandJavascript,
} from "react-icons/tb";

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-200px" });

  return (
    <div
      id="skills"
      ref={ref}
      className="h-screen flex flex-col p-2 md:p-10 bg-gradient-to-b from-gray-100 to-purple-100 text-gray-800"
    >
      <h1 className="text-xl md:text-4xl font-bold mb-4">Skills</h1>

      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}} // animate only when visible
        transition={{ duration: 1, delay: 0.5 }}
        className="grid grid-cols-2 md:grid-cols-5 justify-center items-center gap-6 md:gap-10 mt-10"
      >
        <Skill
          icon={<TbBrandJavascript className="text-4xl md:text-9xl" />}
          name="JavaScript"
        />
        <Skill
          icon={<FaPython className="text-4xl md:text-9xl" />}
          name="Python"
        />
        <Skill
          icon={<TiHtml5 className="text-4xl md:text-9xl" />}
          name="HTML5"
        />
        <Skill icon={<SiCss3 className="text-4xl md:text-9xl" />} name="CSS3" />
        <Skill
          icon={<FaReact className="text-4xl md:text-9xl" />}
          name="React"
        />
        <Skill
          icon={<TbBrandNextjs className="text-4xl md:text-9xl" />}
          name="Next.js"
        />
        <Skill
          icon={<TbBrandDjango className="text-4xl md:text-9xl" />}
          name="Django"
        />
        <Skill
          icon={<FaNodeJs className="text-4xl md:text-9xl" />}
          name="Node.js"
        />
        <Skill
          icon={<SiMui className="text-4xl md:text-9xl" />}
          name="Material-UI"
        />
        <Skill
          icon={<TbBrandTypescript className="text-4xl md:text-9xl" />}
          name="TypeScript"
        />
      </motion.div>
    </div>
  );
};

const Skill = ({ icon, name }: { icon: React.ReactNode; name: string }) => (
  <div className="flex flex-col justify-center items-center">
    {icon}
    <strong>{name}</strong>
  </div>
);

export default Skills;

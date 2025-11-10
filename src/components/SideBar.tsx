import { HiOutlineHomeModern } from "react-icons/hi2";
import { CiUser } from "react-icons/ci";
import { GrServices } from "react-icons/gr";
import { TfiGallery } from "react-icons/tfi";
import { MdContactPhone } from "react-icons/md";

export default function Sidebar() {
  return (
    <aside className="fixed left-[-35px] top-40 h-screen w-64 text-gray-400 flex flex-col items-center justify-between py-10">
      <div className="flex flex-col items-center">
        <nav className="flex flex-col space-y-10 text-lg">
          <a
            href="#hero"
            className="flex items-center gap-2 hover:text-blue-400"
          >
            <HiOutlineHomeModern /> <span>Home</span>
          </a>
          <a
            href="#about"
            className="flex items-center gap-2 hover:text-blue-400"
          >
            <CiUser /> <span>About</span>
          </a>
          <a
            href="#skills"
            className="flex items-center gap-2 hover:text-blue-400"
          >
            <GrServices /> <span>Skills</span>
          </a>
          <a
            href="#projects"
            className="flex items-center gap-2 hover:text-blue-400"
          >
            <TfiGallery /> <span>Projects</span>
          </a>
          <a
            href="#contact"
            className="flex items-center gap-2 hover:text-blue-400"
          >
            <MdContactPhone /> <span>Contact</span>
          </a>
        </nav>
      </div>
    </aside>
  );
}

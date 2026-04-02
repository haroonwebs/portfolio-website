import Image from "next/image";
import { FaSchool, FaUserTie } from "react-icons/fa";

const About = () => {
  return (
    <div className="h-screen flex flex-col items-start justify-start p-2 md:p-10 space-y-2 md:space-y-10 bg-linear-to-b from-white via-purple-800 to-black text-white">
      <h1 className="text-xl md:text-4xl font-bold text-black">About</h1>
      <p className="text-md md:text-xl md:mb-6 text-black">
        Software Engineer with 1+ years of hands-on experience in full-stack web
        development using the MERN stack (MongoDB, Express.js, React.js,
        Node.js). I’m passionate about building responsive, scalable, and
        user-focused applications that deliver real impact. Alongside my core
        expertise, I have experience working with PostgreSQL and SQL databases,
        and a growing interest in backend development with Django. I enjoy
        collaborating in dynamic environments, learning new technologies, and
        turning ideas into reliable, high-quality software solutions.
      </p>
      <div className="flex items-start mt-2 md:mt-6 space-y-6">
        <Image
          src="/haroon1.png"
          alt="My Profile Picture"
          width={500}
          height={500}
          className="hidden md:block rounded-lg border-r-2 border-solid border-gray-400 mr-6"
        />
        <div className="w-full">
          <h1 className="w-full text-md md:text-2xl font-bold bg-linear-to-r from-white via-gray-400 to-gray-800 bg-clip-text text-transparent">
            Web Developer | Programmer
          </h1>
          <div className="flex mt-4 space-x-10 md:space-x-30 ">
            <ul className="mt-4 text-md md:text-xl space-y-4  md:space-y-6 list-inside">
              <li>
                <strong>Education:</strong> BSCS - Computer Science
              </li>
              <li>
                <strong>University:</strong> Islamia University of Bahawalpur
              </li>
              <li>
                <strong>Date of Birth:</strong> 13/07/1999
              </li>
              <li>
                <strong>Professional Exp :</strong> 1+ years
              </li>
            </ul>
            <ul className="mt-4 text-md md:text-xl space-y-4 md:space-y-6 list-inside">
              <li className="text-md md:text-xl tracking-tighter">
                <strong>CGP :</strong> 3.47
              </li>
              <li>
                <FaSchool />
              </li>
              <li>
                <strong>Age :</strong> 26
              </li>
              <li>
                <FaUserTie className="text-md text-3xl" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

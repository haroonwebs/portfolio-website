import { LuUniversity } from "react-icons/lu";
import { FaUserTie, FaUserGraduate, FaGraduationCap } from "react-icons/fa";

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
      <div className="grid grid-cols-2 md:grid-cols-4 justify-center items-center gap-6 md:gap-10 md:mt-10">
        <div className="flex flex-col items-center mt-4 space-y-4 md:space-y-6">
          <FaUserGraduate className="text-4xl md:text-9xl" />
          BSCS-Computer Science
        </div>
        <div className="flex flex-col items-center mt-4 space-y-4 md:space-y-6 ">
          <LuUniversity className="text-4xl md:text-9xl" />
          Islamia University of Bahawalpur
        </div>
        <div className="flex flex-col items-center mt-4  space-y-4 md:space-y-6">
          <FaGraduationCap className="text-4xl md:text-9xl" />
          CGP: 3.47
        </div>
        <div className="flex flex-col items-center mt-4 text-md md:text-xl space-y-4 md:space-y-6 ">
          <FaUserTie className="text-4xl md:text-9xl" />
          Exp: 1+ years
        </div>
      </div>
    </div>
  );
};

export default About;

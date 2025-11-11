import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import About from "../components/About";
import Sidebar from "@/components/SideBar";

export default function Home() {
  return (
    <main className="flex flex-col md:flex-row">
      <div className="hidden md:flex">
        <Sidebar />
      </div>
      <div className="md:ml-64 w-full scroll-smooth">
        <section id="hero">
          <Hero />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </div>
    </main>
  );
}

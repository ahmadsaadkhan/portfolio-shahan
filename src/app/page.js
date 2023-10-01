import About from "../components/About";
import Contact from "../components/Contact";
import Projects from "../components/Projects";
import Skills from "../components/Skills";

export default function Home() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <About />
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
}

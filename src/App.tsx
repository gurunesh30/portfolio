import "./styles.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { TooltipProvider } from "./components/ui/tooltip";

export function App() {
  return (
    <TooltipProvider>
      <div className="min-h-screen bg-[#faf7f3]">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
        </main>
        <Footer />
      </div>
    </TooltipProvider>
  );
}

export default App;

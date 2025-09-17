import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./sections/Home";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Contact from "./sections/Contact";
import BackToTop from "./components/BackToTop";
import ParticlesBG from "./components/ParticlesBG";


export default function App() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      document.documentElement.style.setProperty("--motion-off", "1");
    }
    document.body.style.minHeight = "100dvh";
  }, []);

  return (
    <>
      <Navbar />
      <ParticlesBG count={70} speed={0.3} connect={false} />
      <main className="has-fixed-header">
        <Home />
        <About />
        <Skills />
        <Contact />
      </main>
      <footer className="py-8 text-center subtle">
        <p>© {new Date().getFullYear()} Eliel • Construído com React + Vite</p>
      </footer>
      <BackToTop />
    </>
  );
}

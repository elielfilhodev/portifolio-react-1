import { motion } from "framer-motion";
import Carousel from "../components/Carousel";
import { projects } from "../data/projects";
import TextReveal from "../components/TextReveal";

export default function Home(){
  return (
    <section id="home" className="section">
      <div className="container max-w-6xl grid items-center gap-6">
        <div className="text-center">
          {/* Título letra-a-letra */}
          <TextReveal
            text="Eliel — Desenvolvedor Full Stack Java"
            by="char"
            as="h1"
            className="text-4xl md:text-5xl font-extrabold tracking-tight"
            delay={0.1}
            duration={0.5}
            stagger={0.02}
          />
          {/* Subtítulo palavra-a-palavra */}
          <TextReveal
            text="Foco em React, Java, Spring Boot e bancos relacionais/noSQL. Projetos escaláveis, UX afiada e entrega com SLA."
            by="word"
            as="p"
            className="mt-3 subtle max-w-2xl mx-auto"
            delay={0.2}
            duration={0.45}
            stagger={0.03}
          />
        </div>

        <Carousel items={projects} />
      </div>
    </section>
  );
}

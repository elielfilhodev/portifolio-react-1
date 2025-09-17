import { motion } from "framer-motion";
import Carousel from "../components/Carousel";
import { projects } from "../data/projects";
import TextReveal from "../components/TextReveal";

export default function Home() {
  return (
    <section id="home" className="section flex items-center justify-center">
      <div className="container max-w-6xl text-center flex flex-col items-center gap-6">
        <TextReveal
          text="Eliel — Desenvolvedor Full Stack Java"
          as="h1"
          className="text-4xl md:text-5xl font-extrabold tracking-tight"
          by="char"
        />
        <TextReveal
          text="Foco em React, Java, Spring Boot e bancos relacionais/noSQL. Projetos escaláveis, UX afiada e entrega com SLA."
          as="p"
          className="mt-3 subtle max-w-2xl"
          by="word"
        />
        <Carousel items={projects} />
      </div>
    </section>

  );
}

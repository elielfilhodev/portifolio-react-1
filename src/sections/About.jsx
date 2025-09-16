// src/sections/About.jsx
import Section from '../components/Section'
import TextReveal from '../components/TextReveal' // <-- ADICIONE

export default function About(){
  return (
    <Section id="sobre" title="Sobre">
      <div className="grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2 card p-6">
          <TextReveal
            text="Minha jornada: formação em programação full stack, com ênfase em Java e React. Atuei em projetos pessoais e freelances entregando landing pages, portais e APIs REST. Estudo contínuo de engenharia de software, clean code e arquitetura."
            by="word"
            as="p"
            className="subtle"
          />
        </div>
        <aside className="card p-6">
          <h3 className="font-semibold mb-2">Highlights</h3>
          <ul className="list-disc pl-5 subtle">
            <li>Front-end: React, Tailwind, Sass, Bootstrap, JavaScript</li>
            <li>Back-end: Java, Spring Boot</li>
            <li>Databases: SQL Server, MySQL, MongoDB</li>
            <li>Ferramentas: Git, GitHub, VS Code, Visual Studio, Node.js</li>
          </ul>
        </aside>
      </div>
    </Section>
  )
}

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaCode, FaMobile, FaServer } from 'react-icons/fa';
import { SiHtml5, SiSass, SiJavascript, SiCss3, SiTailwindcss, SiNextdotjs, SiTypescript } from 'react-icons/si';
import './Projects.css';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Landing Page The Last of Us',
      description: 'Landing Page desenvolvida para a produtora Sony, usando Html, Sass, JavaScript e Gulp.',
      image: '/images/projects/tlou.png',
      technologies: ['Html', 'Sass', 'JavaScript', 'Gulp'],
      icons: [SiHtml5, SiSass, SiJavascript],
      category: 'Landing Page',
      github: 'https://github.com/elielfilhodev/tlou-landing-page',
      live: 'https://tlou-landing-page.vercel.app/',
      featured: true
    },
    {
      id: 2,
      title: 'Proenças Modas',
      description: 'Site de e-commerce desenvolvido para a loja Proencas Modas, usando html, css, JavaScript e banco de dados em firebase.',
      image: '/images/projects/pmodas.png',
      technologies: ['html', 'css', 'javascript'],
      icons: [SiHtml5, SiCss3, SiJavascript],
      category: 'frontend',
      github: 'https://github.com/elielfilhodev/proencasmoda',
      live: 'https://proencasmodas.netlify.app/',
      featured: true
    },
    {
      id: 6,
      title: 'Landing Page Luthieria',
      description: 'Landing Page desenvolvida para a empresa Luthieria, usando Html, Css, JavaScript.',
      image: '/images/projects/eliel.png',
      technologies: ['React Native', 'Node.js', 'PostgreSQL'],
      icons: [SiHtml5, SiCss3, SiJavascript],
      category: 'Landing Page',
      github: 'https://github.com/elielfilhodev/hossony-luthierblog',
      live: 'https://luthierhossony.com/',
      featured: true
    },
    {
      id: 7,
      title: 'App Mobile Controle Financeiro',
      description: 'App Web Mobile, para controle financeiro com integração API do google acconts do firebase e banco de dados firestore',
      image: '/images/projects/app.png',
      technologies: ['Html', 'Bootstrap', 'JavaScript'],
      icons: [SiHtml5, SiCss3, SiJavascript],
      category: 'mobile',
      github: 'https://github.com/elielfilhodev/appmobile',
      live: 'https://appmobile-ten.vercel.app/',
      featured: true
    },
    {
      id: 3,
      title: 'Lorem Fotografia',
      description: 'Landing Page desenvolvida para a empresa Lorem Fotografia, usando Html, Sass, JavaScript e Gulp.',
      image: '/images/projects/foto.png',
      technologies: ['Html', 'Sass', 'JavaScript', 'Gulp'],
      icons: [SiHtml5, SiSass, SiJavascript],
      category: 'Landing Page',
      github: 'https://github.com/elielfilhodev/portifoliofoto',
      live: 'https://portifoliofoto.vercel.app/',
      featured: false
    },
    {
      id: 4,
      title: 'Ecommerce Adna Proenças Moda',
      description: 'Ecommerce desenvolvido para a loja Adna Proenças Moda, usando React, Chart.js e OpenWeather API.',
      image: '/images/projects/adna.png',
      technologies: ['Html', 'Css', 'JavaScript'],
      icons: [SiHtml5, SiCss3, SiJavascript],
      category: 'frontend',
      github: 'https://github.com/elielfilhodev/ecommerceadna',
      live: 'https://ecommerceadna.vercel.app/',
      featured: false
    },
    {
      id: 5,
      title: 'Landing Page Pet Shop',
      description: 'Landing Page desenvolvida para a empresa Pet Shop, usando Next.js, Tailwind CSS e TypeScript.',
      image: '/images/projects/petdev.png',
      technologies: ['Next.js', 'Tailwind CSS', 'TypeScript'],
      icons: [SiNextdotjs, SiTailwindcss, SiTypescript],
      category: 'Landing Page',
      github: 'https://github.com/elielfilhodev/landing-page-pet',
      live: 'https://landing-page-pet-plum.vercel.app/',
      featured: false
    },


  ];

  const filters = [
    { key: 'all', label: 'Todos', icon: FaCode },
    { key: 'frontend', label: 'Frontend', icon: FaCode },
    { key: 'backend', label: 'Backend', icon: FaServer },
    { key: 'fullstack', label: 'Full Stack', icon: FaCode },
    { key: 'mobile', label: 'Mobile', icon: FaMobile }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="projects" className="projects section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Projetos</h2>
          <p className="section-subtitle">
            Alguns dos projetos que desenvolvi para demonstrar minhas habilidades
          </p>
        </motion.div>

        <motion.div
          className="projects-filters"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {filters.map((filter) => (
            <motion.button
              key={filter.key}
              className={`filter-btn ${activeFilter === filter.key ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter.key)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <filter.icon className="filter-icon" />
              {filter.label}
            </motion.button>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            className="projects-grid"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                className={`project-card ${project.featured ? 'featured' : ''}`}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                layout
              >
                <div className="project-image">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="project-img"
                    onLoad={() => console.log('Imagem carregada:', project.image)}
                    onError={(e) => {
                      console.log('Erro ao carregar imagem:', project.image);
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div className="project-placeholder" style={{ display: 'none' }}>
                    <FaCode className="placeholder-icon" />
                  </div>
                  {project.featured && (
                    <div className="featured-badge">Destaque</div>
                  )}
                </div>

                <div className="project-content">
                  <div className="project-header">
                    <h3 className="project-title">{project.title}</h3>
                    <div className="project-links">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                        aria-label="Ver código no GitHub"
                      >
                        <FaGithub />
                      </a>
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                        aria-label="Ver projeto ao vivo"
                      >
                        <FaExternalLinkAlt />
                      </a>
                    </div>
                  </div>

                  <p className="project-description">{project.description}</p>

                  <div className="project-technologies">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="project-icons">
                    {project.icons.map((Icon, index) => (
                      <Icon key={index} className="tech-icon" />
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        <motion.div
          className="projects-cta"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p>Interessado em ver mais projetos?</p>
          <motion.a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaGithub />
            Ver no GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;

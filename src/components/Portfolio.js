import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaExternalLinkAlt, FaCode, FaServer, FaMobile, FaWrench } from 'react-icons/fa';
import styles from './Portfolio.module.css';

const Portfolio = ({ onSectionChange }) => {
  const portfolioRef = useRef(null);
  const [activeFilter, setActiveFilter] = useState('all');

  useEffect(() => {
    const handleScroll = () => {
      const portfolioElement = portfolioRef.current;
      if (portfolioElement) {
        const rect = portfolioElement.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
          onSectionChange('portfolio');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [onSectionChange]);

  const projects = [
    {
      id: 1,
      title: 'Sistema de E-commerce',
      category: 'web',
      description: 'Plataforma completa de vendas online com carrinho, pagamentos e painel administrativo.',
      techs: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      icon: FaCode
    },
    {
      id: 2,
      title: 'Dashboard Analytics',
      category: 'web',
      description: 'Dashboard interativo para análise de dados com gráficos e relatórios em tempo real.',
      techs: ['React', 'Chart.js', 'Python', 'PostgreSQL'],
      icon: FaServer
    },
    {
      id: 3,
      title: 'App Mobile de Delivery',
      category: 'mobile',
      description: 'Aplicativo móvel para delivery com geolocalização e notificações push.',
      techs: ['React Native', 'Firebase', 'Maps API'],
      icon: FaMobile
    },
    {
      id: 4,
      title: 'Manutenção de Notebooks',
      category: 'ti',
      description: 'Serviços especializados de manutenção, reparo e upgrade de notebooks.',
      techs: ['Hardware', 'Software', 'Recuperação'],
      icon: FaWrench
    }
  ];

  const filters = [
    { id: 'all', label: 'Todos' },
    { id: 'web', label: 'Web Dev' },
    { id: 'mobile', label: 'Mobile' },
    { id: 'ti', label: 'TI' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="portfolio" ref={portfolioRef} className={styles.portfolioSection}>
      <div className={styles.container}>
        <motion.div
          className={styles.sectionHeader}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className={styles.sectionTitle}>Meu Portfólio</h2>
          <p className={styles.sectionSubtitle}>
            Projetos que demonstram minha expertise em desenvolvimento e TI
          </p>
        </motion.div>

        <motion.div
          className={styles.filterTabs}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {filters.map((filter) => (
            <motion.button
              key={filter.id}
              className={`${styles.filterTab} ${activeFilter === filter.id ? styles.active : ''}`}
              onClick={() => setActiveFilter(filter.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {filter.label}
            </motion.button>
          ))}
        </motion.div>

        <motion.div
          className={styles.projectsGrid}
          layout
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <AnimatePresence>
            {filteredProjects.map((project) => {
              const Icon = project.icon;
              return (
                <motion.div
                  key={project.id}
                  className={styles.projectCard}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5 }}
                  whileHover={{ y: -10 }}
                >
                  <div className={styles.projectImage}>
                    <Icon className={styles.projectIcon} />
                  </div>
                  
                  <div className={styles.projectContent}>
                    <div className={styles.projectCategory}>
                      {project.category === 'web' && 'Desenvolvimento Web'}
                      {project.category === 'mobile' && 'Mobile'}
                      {project.category === 'ti' && 'TI & Hardware'}
                    </div>
                    
                    <h3 className={styles.projectTitle}>{project.title}</h3>
                    
                    <p className={styles.projectDescription}>{project.description}</p>
                    
                    <div className={styles.projectTechs}>
                      {project.techs.map((tech, index) => (
                        <span key={index} className={styles.techTag}>{tech}</span>
                      ))}
                    </div>
                    
                    <div className={styles.projectLinks}>
                      <button
                        className={styles.projectLink}
                        onClick={() => window.open('#', '_blank')}
                      >
                        <FaExternalLinkAlt />
                        Ver Projeto
                      </button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
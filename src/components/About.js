import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaServer, FaWrench, FaShieldAlt } from 'react-icons/fa';
import styles from './About.module.css';

const About = ({ onSectionChange }) => {
  const aboutRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const aboutElement = aboutRef.current;
      if (aboutElement) {
        const rect = aboutElement.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
          onSectionChange('about');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [onSectionChange]);

  const skills = [
    {
      icon: FaCode,
      title: 'Desenvolvimento Frontend',
      description: 'React, JavaScript, HTML/CSS, TypeScript, interfaces modernas e responsivas'
    },
    {
      icon: FaServer,
      title: 'Desenvolvimento Backend',
      description: 'Node.js, Python, APIs REST, SQL, bancos de dados e arquitetura de sistemas'
    },
    {
      icon: FaWrench,
      title: 'Manutenção de Hardware',
      description: 'Reparo de notebooks, upgrades, formatação e recuperação de dados'
    },
    {
      icon: FaShieldAlt,
      title: 'Segurança e Backup',
      description: 'Proteção de dados, backup seguro e recuperação de sistemas'
    }
  ];

  return (
    <section id="about" ref={aboutRef} className={styles.aboutSection}>
      <div className={styles.container}>
        <motion.div
          className={styles.sectionHeader}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className={styles.sectionTitle}>Sobre Mim</h2>
          <p className={styles.sectionSubtitle}>
            Conheça minha jornada como desenvolvedor e técnico em TI
          </p>
        </motion.div>

        <div className={styles.aboutContent}>
          <motion.div
            className={styles.aboutText}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3>Minha História</h3>
            <p>
              Sou Eliel Filho, um apaixonado por tecnologia com mais de 3 anos de experiência 
              em desenvolvimento web e serviços de TI. Minha jornada começou com a curiosidade 
              de entender como as coisas funcionam por trás das telas.
            </p>
            <p>
              Como desenvolvedor fullstack, crio soluções web modernas e eficientes, sempre 
              buscando as melhores práticas e tecnologias mais recentes. Como técnico em TI, 
              ofereço serviços completos de manutenção e reparo de equipamentos.
            </p>
            <p>
              Meu objetivo é sempre entregar qualidade, inovação e confiabilidade em cada 
              projeto, seja desenvolvendo uma aplicação web ou resolvendo problemas técnicos.
            </p>
            
            <div className={styles.statsGrid}>
              <div className={styles.statItem}>
                <span className={styles.number}>10+</span>
                <span className={styles.label}>Projetos Concluídos</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.number}>3+</span>
                <span className={styles.label}>Anos de Experiência</span>
              </div>
            </div>
          </motion.div>
        </div>

        <div className={styles.skillsGrid}>
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={index}
                className={styles.skillCard}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <Icon className={styles.icon} />
                <h4>{skill.title}</h4>
                <p>{skill.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
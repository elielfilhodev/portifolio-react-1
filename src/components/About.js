import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaCode, FaRocket, FaHeart } from 'react-icons/fa';
import './About.css';

const About = () => {
  const education = [
    {
      institution: 'ETEC - Taquarituba',
      degree: 'Ensino Médio integrado com curso técnico em análise e desenvolvimento de sistemas',
      period: '2019 - 2021',
      description: 'Formação sólida em fundamentos da computação, desenvolvimento de aplicações web e análise de software.'
    },
    {
      institution: 'EBAC - Escola Britânica de Artes Criativas e Tecnologia',
      degree: 'Full Stack Java',
      period: '2024 - Atualmente',
      description: 'Cursando Full Stack Java, React, Spring Boot, entre outras tecnologias e metodologias de desenvolvimento de software.'
    }
  ];

  const achievements = [
    {
      icon: FaCode,
      title: '5+ Anos',
      description: 'Experiência em desenvolvimento'
    },
    {
      icon: FaRocket,
      title: '5+ Projetos',
      description: 'Entregues com sucesso'
    },
    {
      icon: FaHeart,
      title: '100%',
      description: 'Satisfação dos clientes'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="about" className="about section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Sobre Mim</h2>
          <p className="section-subtitle">
            Conheça um pouco da minha jornada e paixão pela tecnologia
          </p>
        </motion.div>

        <div className="about-content">
          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.h3
              className="about-title"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Desenvolvedor apaixonado por criar soluções inovadoras
            </motion.h3>

            <motion.p
              className="about-description"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Sou um desenvolvedor full stack com mais de 5 anos de experiência, 
              especializado em criar aplicações web modernas e performáticas. 
              Minha paixão está em transformar ideias complexas em soluções elegantes 
              e funcionais que fazem a diferença na vida das pessoas.
            </motion.p>

            <motion.p
              className="about-description"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Trabalho principalmente com React, Node.js, TypeScript e bancos de dados modernos. 
              Sempre busco aprender novas tecnologias e aplicar as melhores práticas de desenvolvimento 
              para entregar produtos de alta qualidade.
            </motion.p>

            <motion.div
              className="about-achievements"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  className="achievement-item"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                >
                  <achievement.icon className="achievement-icon" />
                  <div className="achievement-content">
                    <h4 className="achievement-title">{achievement.title}</h4>
                    <p className="achievement-description">{achievement.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            className="about-education"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.h3
              className="education-title"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <FaGraduationCap className="title-icon" />
              Formação Acadêmica
            </motion.h3>

            <motion.div
              className="education-timeline"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  className="education-item"
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="education-period">{edu.period}</div>
                  <div className="education-content">
                    <h4 className="education-degree">{edu.degree}</h4>
                    <p className="education-institution">{edu.institution}</p>
                    <p className="education-description">{edu.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

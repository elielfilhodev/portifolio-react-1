import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FaReact, 
  FaNodeJs, 
  FaJs, 
  FaPython, 
  FaGitAlt, 
  FaDatabase,
  FaHtml5,
  FaJava,
  FaCss3Alt,
} from 'react-icons/fa';
import { 
  SiSpringboot,
  SiTypescript, 
  SiNextdotjs, 
  SiMongodb, 
  SiPostgresql,
  SiPostman,
  SiVisualstudiocode,
  SiIntellijidea,
  SiEclipseide,
  SiTailwindcss,
  SiSass,
  SiFigma,
  SiMicrosoftsqlserver,
} from 'react-icons/si';
import './Skills.css';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('frontend');

  const skillCategories = {
    frontend: {
      title: 'Frontend',
      icon: FaReact,
      skills: [
        { name: 'Sass', icon: SiSass, level: 90, color: '#CC6699' },
        { name: 'JavaScript', icon: FaJs, level: 90, color: '#F7DF1E' },
        { name: 'HTML5', icon: FaHtml5, level: 90, color: '#E34F26' },
        { name: 'CSS3', icon: FaCss3Alt, level: 90, color: '#1572B6' },
        { name: 'TypeScript', icon: SiTypescript, level: 70, color: '#3178C6' },
        { name: 'React', icon: FaReact, level: 60, color: '#61DAFB' },
        { name: 'Tailwind CSS', icon: SiTailwindcss, level: 60, color: '#06B6D4' },
        { name: 'Next.js', icon: SiNextdotjs, level: 20, color: '#000000' }
      ]
    },
    backend: {
      title: 'Backend',
      icon: FaNodeJs,
      skills: [
        { name: 'Node.js', icon: FaNodeJs, level: 90, color: '#339933' },
        { name: 'Java', icon: FaJava, level: 80, color: '#FF6B6B' },
        { name: 'Spring Boot', icon: SiSpringboot, level: 80, color: '#FF6B6B' },
        { name: 'Python', icon: FaPython, level: 60, color: '#3776AB' }
      ]
    },
    database: {
      title: 'Database',
      icon: FaDatabase,
      skills: [
        { name: 'SQL Server', icon: SiMicrosoftsqlserver, level: 90, color: '#4479A1' },
        { name: 'PostgreSQL', icon: SiPostgresql, level: 80, color: '#336791' },
        { name: 'MongoDB', icon: SiMongodb, level: 60, color: '#47A248' }
      ]
    },
    tools: {
      title: 'Ferramentas',
      icon: FaGitAlt,
      skills: [
        { name: 'VS Code', icon: SiVisualstudiocode, level: 90, color: '#007ACC' },
        { name: 'IntelliJ IDEA', icon: SiIntellijidea, level: 90, color: '#DB413D' },
        { name: 'Git', icon: FaGitAlt, level: 90, color: '#F05032' },
        { name: 'Postman', icon: SiPostman, level: 80, color: '#FF6C37' },
        { name: 'Eclipse', icon: SiEclipseide, level: 70, color: '#2671E5' },
        { name: 'Figma', icon: SiFigma, level: 50, color: '#0ACF83' },
      ]
    }
  };

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="skills" className="skills section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Habilidades</h2>
          <p className="section-subtitle">
            Tecnologias e ferramentas que domino para criar soluções incríveis
          </p>
        </motion.div>

        <motion.div
          className="skills-categories"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {Object.entries(skillCategories).map(([key, category]) => (
            <motion.button
              key={key}
              className={`category-btn ${activeCategory === key ? 'active' : ''}`}
              onClick={() => setActiveCategory(key)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <category.icon className="category-icon" />
              {category.title}
            </motion.button>
          ))}
        </motion.div>

        <motion.div
          className="skills-content"
          key={activeCategory}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="skills-grid"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {skillCategories[activeCategory].skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                className="skill-card"
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <div className="skill-header">
                  <div className="skill-icon" style={{ color: skill.color }}>
                    <skill.icon />
                  </div>
                  <h4 className="skill-name">{skill.name}</h4>
                </div>
                
                <div className="skill-progress">
                  <div className="progress-bar">
                    <motion.div
                      className="progress-fill"
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      style={{ backgroundColor: skill.color }}
                    />
                  </div>
                  <span className="skill-level">{skill.level}%</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          className="skills-summary"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="summary-card">
            <h3>Por que escolher essas tecnologias?</h3>
            <p>
              Cada tecnologia foi escolhida cuidadosamente para criar soluções modernas, 
              escaláveis e performáticas. Foco sempre nas melhores práticas e nas 
              tecnologias mais atuais do mercado.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;

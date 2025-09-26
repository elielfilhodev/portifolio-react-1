import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaServer, FaWrench, FaMobile, FaShieldAlt, FaDatabase } from 'react-icons/fa';
import styles from './Services.module.css';

const Services = ({ onSectionChange }) => {
  const servicesRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const servicesElement = servicesRef.current;
      if (servicesElement) {
        const rect = servicesElement.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
          onSectionChange('services');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [onSectionChange]);

  const services = [
    {
      icon: FaCode,
      title: 'Desenvolvimento Frontend',
      description: 'Interfaces modernas e responsivas com React, JavaScript e CSS avançado'
    },
    {
      icon: FaServer,
      title: 'Desenvolvimento Backend',
      description: 'APIs robustas e escaláveis com Node.js, Python e bancos de dados'
    },
    {
      icon: FaMobile,
      title: 'Aplicações Mobile',
      description: 'Apps responsivos e PWA para dispositivos móveis'
    },
    {
      icon: FaDatabase,
      title: 'Banco de Dados',
      description: 'Design e otimização de bancos de dados SQL e NoSQL'
    },
    {
      icon: FaWrench,
      title: 'Manutenção de Notebooks',
      description: 'Reparo, limpeza e otimização de notebooks e computadores'
    },
    {
      icon: FaShieldAlt,
      title: 'Recuperação de Dados',
      description: 'Backup e recuperação segura de arquivos importantes'
    }
  ];

  return (
    <section id="services" ref={servicesRef} className={styles.servicesSection}>
      <div className={styles.container}>
        <motion.div
          className={styles.sectionHeader}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className={styles.sectionTitle}>Meus Serviços</h2>
          <p className={styles.sectionSubtitle}>
            Soluções completas em desenvolvimento web e serviços de TI
          </p>
        </motion.div>

        <div className={styles.servicesGrid}>
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                className={styles.serviceCard}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <div className={styles.serviceIcon}>
                  <Icon />
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
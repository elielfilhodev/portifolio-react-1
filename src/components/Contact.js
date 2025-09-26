import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaLinkedin, FaGithub, FaPaperPlane, FaCheckCircle, FaExclamationCircle } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import styles from './Contact.module.css';

const Contact = ({ onSectionChange }) => {
  const contactRef = useRef(null);
  const formRef = useRef(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [messageStatus, setMessageStatus] = useState(null);

  // Configurações do EmailJS - SUBSTITUA PELOS SEUS IDs
  const EMAILJS_SERVICE_ID = 'service_i3vdg3r'; // Substitua pelo seu Service ID
  const EMAILJS_TEMPLATE_ID = 'template_on95xy8'; // Substitua pelo seu Template ID
  const EMAILJS_PUBLIC_KEY = 'gHuIYaAydLbw3EKiA'; // Substitua pela sua Public Key

  useEffect(() => {
    const handleScroll = () => {
      const contactElement = contactRef.current;
      if (contactElement) {
        const rect = contactElement.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
          onSectionChange('contact');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [onSectionChange]);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessageStatus(null);

    try {
      const result = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formData,
        EMAILJS_PUBLIC_KEY
      );

      if (result.status === 200) {
        setMessageStatus({
          type: 'success',
          message: 'Mensagem enviada com sucesso! Entrarei em contato em breve.'
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
      }
    } catch (error) {
      console.error('Erro ao enviar email:', error);
      setMessageStatus({
        type: 'error',
        message: 'Erro ao enviar mensagem. Tente novamente ou entre em contato diretamente.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" ref={contactRef} className={styles.contactSection}>
      <div className={styles.container}>
        <motion.div
          className={styles.sectionHeader}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className={styles.sectionTitle}>Vamos Conversar</h2>
          <p className={styles.sectionSubtitle}>
            Pronto para transformar suas ideias em realidade? Entre em contato!
          </p>
        </motion.div>

        <div className={styles.contactContent}>
          <motion.div
            className={styles.contactInfo}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3>Entre em Contato</h3>
            <p>
              Estou sempre aberto a novos projetos e desafios. Se você tem uma ideia 
              ou precisa de serviços de desenvolvimento ou TI, não hesite em me contatar. 
              Vamos conversar sobre como posso ajudar você!
            </p>

            <div className={styles.contactMethods}>
              <div className={styles.contactMethod}>
                <FaWhatsapp className={styles.icon} />
                <div className={styles.content}>
                  <h4>WhatsApp</h4>
                  <a href="https://wa.me/5514999061535" target="_blank" rel="noopener noreferrer">
                    +55 14 99906-1535
                  </a>
                </div>
              </div>

              <div className={styles.contactMethod}>
                <FaEnvelope className={styles.icon} />
                <div className={styles.content}>
                  <h4>Email</h4>
                  <a href="mailto:elielfilhodev@hotmail.com">
                    elielfilhodev@hotmail.com
                  </a>
                </div>
              </div>

              <div className={styles.contactMethod}>
                <FaMapMarkerAlt className={styles.icon} />
                <div className={styles.content}>
                  <h4>Localização</h4>
                  <span>Taquarituba, SP - Brasil</span>
                </div>
              </div>
            </div>

            <div className={styles.socialLinks}>
              <h4>Redes Sociais</h4>
              <div className={styles.socialGrid}>
                <a
                  href="https://github.com/elielfilhodev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                >
                  <FaGithub />
                </a>
                <a
                  href="https://www.linkedin.com/in/eliel-filho-8083a3359"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                >
                  <FaLinkedin />
                </a>
                <a
                  href="https://wa.me/5514999061535"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                >
                  <FaWhatsapp />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            className={styles.contactForm}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3>Envie uma Mensagem</h3>
            <form ref={formRef} onSubmit={handleSubmit}>
              <div className={styles.formGroup}>
                <label htmlFor="name">Nome *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Seu nome completo"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="seu@email.com"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="subject">Assunto *</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="Qual é o assunto?"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="message">Mensagem *</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Conte-me sobre seu projeto ou dúvida..."
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                />
              </div>

              {messageStatus && (
                <motion.div
                  className={`${styles.messageStatus} ${styles[messageStatus.type]}`}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {messageStatus.type === 'success' ? (
                    <FaCheckCircle className={styles.statusIcon} />
                  ) : (
                    <FaExclamationCircle className={styles.statusIcon} />
                  )}
                  <span>{messageStatus.message}</span>
                </motion.div>
              )}

              <motion.button
                type="submit"
                className={styles.submitButton}
                disabled={isSubmitting}
                whileHover={{ scale: isSubmitting ? 1 : 1.05 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.95 }}
              >
                {isSubmitting ? (
                  <>
                    <motion.div
                      className={styles.loadingSpinner}
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    />
                    Enviando...
                  </>
                ) : (
                  <>
                    <FaPaperPlane />
                    Enviar Mensagem
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
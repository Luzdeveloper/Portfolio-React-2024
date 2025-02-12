import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import '../styles/contact.css';
import { motion } from 'framer-motion';

export const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_USER_ID
      )
      .then(
        () => {
          alert('Message envoyé avec succès !');
          form.current.reset(); // Réinitialiser le formulaire
        },
        (error) => {
          alert('Erreur lors de l\'envoi du message :', error.text);
        }
      );
  };

  return (
    <motion.section
      id="Contact"
      className="contact"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h2>Contactez-moi</h2>
      <form ref={form} onSubmit={sendEmail}>
        <label>Nom</label>
        <input type="text" name="user_name" required />
        <label>Email</label>
        <input type="email" name="user_email" required />
        <label>Message</label>
        <textarea name="message" required />
        <button type="submit">Envoyer</button>
      </form>
    </motion.section>
  );
};
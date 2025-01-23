import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import '../styles/contact.css';

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
          console.log('SUCCESS!');
          alert('Envoyé avec succès!');
          form.current.reset(); 
        },
        (error) => {
          console.log('FAILED...', error.text);
          alert('Erreur lors de l&apos envoie du mail.');
        }
      );
  };

  return (
    <section id="Contact" className="contact-section">
      <h2>Contactez moi</h2>
      <form ref={form} onSubmit={sendEmail}>
        <div>
          <label>Nom:</label>
          <input type="text" name="user_name" required />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" name="user_email" required />
        </div>
        <div>
          <label>Message:</label>
          <textarea name="message" required />
        </div>
        <button type="submit">Envoyer</button>
      </form>
    </section>
  );
};

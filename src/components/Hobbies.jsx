import '../styles/hobbies.css';
import { motion } from 'framer-motion';

export function Hobbies() {
  return (
    <section id="Hobbies">
      
      <div className="hobbies-container">
        <h2 className="titlehobbies">Mes Passions</h2>
        <div className="hobbiesCard">
        <motion.div
          className="hobby-card"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="hobby-icon">📚</div>
          <div className="hobby-title">La lecture</div>
          <div className="hobby-description">Un auteur a conseillé Bernard Werber</div>
        </motion.div>
        <motion.div
          className="hobby-card"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="hobby-icon">🎬</div>
          <div className="hobby-title">Les films et series</div>
          <div className="hobby-description">J&apos;aime le cinéma en général me détendre devant un bon film humoristique comme very bad trip a des films plus serieux comme la liste de schindler qui m&apos;aura marqué, en série je regarde un peu de tout allant de The walking dead, a des series biopic comme the playlist qui retrace la création de spotify</div>
        </motion.div>
        <motion.div
          className="hobby-card"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="hobby-icon">🎹</div>
          <div className="hobby-title">Jouer du piano</div>
          <div className="hobby-description">Actuellement j&apos;apprend un peu le piano</div>
        </motion.div>
        </div>
      </div>
    </section>
  );
}
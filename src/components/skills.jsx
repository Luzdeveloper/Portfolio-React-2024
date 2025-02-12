import '../styles/skills.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faJs, faReact, faGitAlt, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { motion } from 'framer-motion';

export function Skills() {
  const [skills] = useState([
    { icon: faHtml5, name: 'HTML5' },
    { icon: faCss3Alt, name: 'CSS3' },
    { icon: faJs, name: 'JavaScript' },
    { icon: faReact, name: 'React' },
    { icon: faGitAlt, name: 'Git' },
    { icon: faGithub, name: 'GitHub' },
  ]);

  return (
    <section id="Compétences" className="skills">
      <h2 className="titleSkills"><FontAwesomeIcon icon={faLaptopCode} /> Compétences</h2>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="skills-item"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <FontAwesomeIcon icon={skill.icon} size="3x" />
            <p>{skill.name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
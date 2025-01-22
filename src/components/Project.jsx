import '../styles/project.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import mysterynumber from '../assets/mysterynumber.webp'
import passwordgenerator from '../assets/passwordgen.webp'
import dreamhotel from '../assets/dreamhotel.webp'
import monuments from '../assets/monuments.webp'
import kaza from '../assets/kaza.webp'

export function Project() {
  return (
    <section id="Projets" className="projects">
      <h2><FontAwesomeIcon icon={faCode} /> Mes Projets <FontAwesomeIcon icon={faCode} /></h2>
      <div className="project-list">
        <div className="project-item">
          <h3>Mystery Number</h3>
          <img src={mysterynumber} alt="Mystery Number" />
          <p>Description: Sur le theme de The Legend of Zelda, decouvre le numéro mystère</p>
          <p>Technologie utilisées: html, css, javascript</p>
          <a href="https://mystery-number-six.vercel.app/" target="_blank">Mystery Number</a>
        </div>
        <div className="project-item">
          <h3>Password Generator</h3> 
          <img src={passwordgenerator} alt="Password Generator" />
          <p>Description: Generateur de mot de passe aléatoire entre 1 et 128 caractères </p>
          <p>Technologie utilisées: html, javascript, tailwindcss </p>
          <a href="https://password-generator-blush-gamma-87.vercel.app/" target="_blank">Password Generator</a>
        </div>
        <div className="project-item">
          <h3>Dream Hotel</h3>
          <img src={dreamhotel} alt="Dream Hotel" />
          <p>Description: Création d&apos;un site internet pour un hôtel,exercice réalisé chez simplon, en collaboration, le projet a été initié sur strapi mais pour la mise en ligne j&apos;ai recrée la base de donnée en json.</p>
          <p>Technologie utilisées: html, css, javascript</p>
          <a href="https://dream-hotel-flo-leo.vercel.app/" target="_blank">Dream Hotel</a>
        </div>
        <div className="project-item">
          <h3>Monuments</h3>
          <img src={monuments} alt="Monuments" />
          <p>Description: Création d&apos;un site répertoriant des monuments, sur une carte</p>
          <p>Technologie utilisées: html, css, javascript</p>
          <a href="https://monuments-plum.vercel.app/" target="_blank">Monuments</a>
        </div>
        <div className="project-item">
          <h3>Kaza</h3>
          <img src={kaza} alt="Kaza" />
          <p>Description: Site d&apos;agence de location</p>
          <p>Technologie utilisées: html, css, javascript, React, Vitejs </p>
          <a href="https://kaza-seven.vercel.app/" target="_blank">Kaza</a>
        </div>
        <div className="project-item">
          <h3>Projet 1</h3>
          <p>Description</p>
        </div>
        <div className="project-item">
          <h3>Projet 1</h3>
          <p>Description</p>
        </div>
      </div>
    </section>
    );
  }
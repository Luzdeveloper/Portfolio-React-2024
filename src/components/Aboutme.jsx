import '../styles/aboutme.css';
import photoprofil from '../assets/moi.webp'

export function Aboutme() {
  return (
    <section id="Présentation" className="aboutme">
      <h2>Présentation</h2>
      <img src={photoprofil} alt="photo de profil" className="photoprofil"></img>
      <p>Passionné par les metiers du numérique et les technologies depuis mon adolescence, j&apos;ai décidé de me lancer dans le développement web, suite a un accident de travail qui m&apos;a amené a me reconvertir professionnellement. Après avoir suivi une formation intensive de 9 mois chez OpenClassrooms de développeur intégrateur web et une autre de 6 semaines chez Simplon Hauts de France en tant que de dev inté , j&apos;ai acquis les compétences nécessaires pour devenir développeur FrontEnd. Je suis actuellement à la recherche d&apos;un poste en tant que développeur FrontEnd.</p>
    </section>
  );
}
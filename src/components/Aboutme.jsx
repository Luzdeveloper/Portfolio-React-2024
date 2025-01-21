import '../styles/aboutme.css';
import photoprofil from '../assets/moi.webp'

export function Aboutme() {
  return (
    <section id="Présentation" className="aboutme">
      <h2>Présentation</h2>
      <img src={photoprofil} alt="photo de profil" className="photoprofil"></img>
      <p>Je m&apos;appelle Florian. Passionné par les métiers du numérique et les technologies depuis mon adolescence, j&apos;ai décidé de me lancer dans le développement web suite à un accident de travail qui m&apos;a amené à me reconvertir professionnellement. Après avoir suivi une formation intensive de 9 mois chez OpenClassrooms en tant que développeur intégrateur web, ainsi qu&apos;une autre de 6 semaines chez Simplon Hauts-de-France en tant que développeur intégrateur, j&apos;ai acquis les compétences nécessaires pour exceller dans le développement FrontEnd. Je suis actuellement à la recherche d&apos;opportunités professionnelles dans ce domaine.</p>
    </section>
  );
}
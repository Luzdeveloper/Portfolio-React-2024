import '../styles/project.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';

export function Project() {
  return (
    <section id="Projets" className="projects">
      <h2><FontAwesomeIcon icon={faCode} /> Mes Projets <FontAwesomeIcon icon={faCode} /></h2>
      <div className="project-list">
        <div className="project-item">
          <h3>Projet 1</h3>
          <p>Description</p>
        </div>
        <div className="project-item">
          <h3>Projet 1</h3>
          <p>Description</p>
        </div>
        <div className="project-item">
          <h3>Projet 1</h3>
          <p>Description</p>
        </div>
        <div className="project-item">
          <h3>Projet 1</h3>
          <p>Description</p>
        </div>
        <div className="project-item">
          <h3>Projet 1</h3>
          <p>Description</p>
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
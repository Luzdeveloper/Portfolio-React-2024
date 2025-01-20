import '../styles/skills.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import {faHtml5, faCss3Alt, faJs, faReact, faGitAlt, faGithub, } from '@fortawesome/free-brands-svg-icons'
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons';


export function Skills() {
  return (
    <section id="Compétences" className="skills">
      <h2><FontAwesomeIcon icon={faLaptopCode} /> Compétences</h2>
      <div className="skills-container">
        <div className="skills-item">
          <FontAwesomeIcon icon={faHtml5} size="3x" />
          <p>HTML5</p>
        </div>
        <div className="skills-item">
          <FontAwesomeIcon icon={faCss3Alt} size="3x" />
          <p>CSS3</p>
        </div>
        <div className="skills-item">
          <FontAwesomeIcon icon={faJs} size="3x" />
          <p>JavaScript</p>
        </div>
        <div className="skills-item">
          <FontAwesomeIcon icon={faReact} size="3x" />
          <p>React</p>
        </div>
        <div className="skills-item">
          <FontAwesomeIcon icon={faGitAlt} size="3x" />
          <p>Git</p>
        </div>
        <div className="skills-item">
          <FontAwesomeIcon icon={faGithub} size="3x" />
          <p>GitHub</p>
        </div>
      </div>
    </section>
    );
  }
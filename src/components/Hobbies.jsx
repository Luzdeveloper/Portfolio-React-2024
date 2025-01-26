import '../styles/hobbies.css'

export function Hobbies() {
  return (
    <section id="Hobbies">
      <div className="hobbies-container">
        <h2 className="titlehobbies">Mes Passions</h2>
        <div className="hobby-card">
          <div className="hobby-icon">📚</div>
          <div className="hobby-title">La lecture</div>
          <div className="hobby-description">Un auteur a conseillé Bernard Werber</div>
        </div>
        <div className="hobby-card">
          <div className="hobby-icon">🎬</div>
          <div className="hobby-title">Les films et series</div>
          <div className="hobby-description">J&apos;aime le cinéma en général me détendre devant un bon film humoristique comme very bad trip a des films plus serieux comme la liste de schindler qui m&apos;aura marqué, en série je regarde un peu de tout allant de The walking dead, a des series biopic comme the playlist qui retrace la création de spotify</div>
        </div>
        <div className="hobby-card">
          <div className="hobby-icon">🎹</div>
          <div className="hobby-title">Jouer du piano</div>
          <div className="hobby-description">Actuellement j&apos;apprend un peu le piano</div>
        </div>
        <div className="hobby-card">
          <div className="hobby-icon">🎮</div>
          <div className="hobby-title">Jouer aux jeux videos</div>
          <div className="hobby-description">Final Fantasy XIV une valeur sûr</div>
        </div>
        <div className="hobby-card">
          <div className="hobby-icon">🎵</div>
          <div className="hobby-title">Ecouter de la musique</div>
          <div className="hobby-description">Hardcore will never die</div>
          </div>
        </div>
    </section>
  );
}
export const metadata = {
  title: "Projets — CGEL",
  description: "Les projets du CGEL — Collège des Hépato-Gastroentérologues et Endoscopistes Libéraux de l'Est : initiatives pour la profession et la pratique libérale.",
  openGraph: {
    title: "Projets — CGEL",
    description: "Les projets du CGEL — Collège des Hépato-Gastroentérologues et Endoscopistes Libéraux de l'Est : initiatives pour la profession et la pratique libérale.",
    type: "website",
    locale: "fr_FR",
    url: "https://cgel-gastro.com",
  },
};

export default function Page() {
  return (
    <>
      <div className="page-hero">
    <div className="page-hero-inner">
      <div className="page-kicker"><span className="line"></span><span>Projets</span></div>
      <h1>Les projets du CGEL</h1>
      <p className="lead">Quatre chantiers concrets au service de la pratique libérale : formation, données, prévention et transmission.</p>
    </div>
  </div>
  <div style={{background:"#F8FAFC"}}>
    <div className="container" style={{padding:"1.75rem 1rem 2.5rem"}}>
      <div className="projets-grid">
        {/* Project 1 */}
        <article className="project-card">
          <div className="top"></div>
          <span className="badge badge-en-cours">En cours</span>
          <div className="body">
            <h3>Programme DPC &amp; CME Est — Formation continue</h3>
            <p className="objective">Objectif : proposer un parcours DPC certifiant, adapté à la réalité du cabinet libéral (1 journée trimestrielle + 2 webinaires/an).</p>
            <div className="meta">
              <p><strong>Porteur(s) :</strong> Dr. Karim Bensalah (Biskra) · Bureau CGEL</p>
              <p><strong>Partenaires :</strong> UC2 · Faculté NTIC · 5 laboratoires</p>
            </div>
            <div className="result"><strong>Résultat à date :</strong> 180 participants formés en 2024, 92% de satisfaction, 12 ateliers d'endoscopie hands-on.</div>
          </div>
        </article>
        {/* Project 2 */}
        <article className="project-card">
          <div className="top"></div>
          <span className="badge badge-lance">Lancé</span>
          <div className="body">
            <h3>Registre prospectif Est — MICI &amp; Hépatopathies</h3>
            <p className="objective">Objectif : collecter des données standardisées sur MICI et hépatopathies chroniques pour mieux connaître le fardeau régional.</p>
            <div className="meta">
              <p><strong>Porteur(s) :</strong> Dr. Nadia Benali (Annaba) · Comité scientifique CGEL</p>
              <p><strong>Partenaires :</strong> CHU Annaba/Batna · UC2 — plateforme sécurisée hébergée en Algérie</p>
            </div>
            <div className="result"><strong>Résultat à date :</strong> 240 dossiers inclus (12 centres), premier rapport intermédiaire prévu T2 2026.</div>
          </div>
        </article>
        {/* Project 3 */}
        <article className="project-card">
          <div className="top"></div>
          <span className="badge badge-en-cours">En cours</span>
          <div className="body">
            <h3>Campagne « Foie &amp; Prévention » — Sensibilisation grand public</h3>
            <p className="objective">Objectif : informer sur les hépatites virales, stéatose et dépistage, avec des supports en darija/français pour salle d'attente.</p>
            <div className="meta">
              <p><strong>Porteur(s) :</strong> Dr. Amira Zerrouki (Guelma) · Cellule communication</p>
              <p><strong>Partenaires :</strong> Laboratoires sponsors · Associations patients · médias locaux</p>
            </div>
            <div className="result"><strong>Résultat à date :</strong> 15 cabinets équipés, 8 000 dépliants diffusés, 3 vidéos courtes (&gt;12k vues).</div>
          </div>
        </article>
        {/* Project 4 */}
        <article className="project-card">
          <div className="top"></div>
          <span className="badge badge-termine">Terminé · Reconduit</span>
          <div className="body">
            <h3>Mentorat Jeunes Gastro — Transmission</h3>
            <p className="objective">Objectif : compagnonnage de 6 mois entre seniors CGEL et internes/jeunes installés (cas cliniques, endoscopie, installation).</p>
            <div className="meta">
              <p><strong>Porteur(s) :</strong> Dr. Yacine Merabet (Sétif) · Dr. Sami Haddad</p>
              <p><strong>Partenaires :</strong> Réseau des bureaux Est · 4 CHU formateurs</p>
            </div>
            <div className="result"><strong>Résultat à date :</strong> Cohorte pilote 2024 : 14 binômes, 100% recommandent, 4 installations accompagnées.</div>
          </div>
        </article>
      </div>
      <p style={{marginTop:"1.25rem",fontSize:"11px",color:"#94A3B8",textAlign:"center"}}>Contenus de démonstration — remplacez textes, porteurs et chiffres par vos données réelles. Badges et métriques sont modifiables librement.</p>
    </div>
  </div>
    </>
  );
}

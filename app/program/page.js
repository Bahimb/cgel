export const metadata = {
  title: "Programme scientifique — CGEL Days 3e Édition",
  description: "Programme scientifique CGEL Days 3e Édition — 1 octobre 2026 à l'Ahmed Bey Zenith, Constantine.",
  openGraph: {
    title: "Programme scientifique — CGEL Days 3e Édition",
    description: "Programme scientifique CGEL Days 3e Édition — 1 octobre 2026 à l'Ahmed Bey Zenith, Constantine.",
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
      <div className="page-kicker"><span className="line"></span><span>Programme scientifique</span></div>
      <h1>Programme scientifique</h1>
      <p className="lead">Programme d'une journée · Jeudi 1 octobre 2026 · Ahmed Bey Zenith, Constantine. Contenu indicatif — sera mis à jour à mesure que les sessions et intervenants sont finalisés.</p>
      <div style={{marginTop:"1rem",display:"flex",flexWrap:"wrap",gap:".5rem",fontSize:"11px"}}>
        <span style={{border:"1px solid #E2E8F0",padding:".25rem .625rem",fontWeight:"500",color:"#475569"}}>Planning indicatif</span>
        <span style={{border:"1px solid #E2E8F0",background:"#F8FAFC",padding:".25rem .625rem",color:"#94A3B8"}}>Lien PDF à ajouter ici</span>
      </div>
    </div>
  </div>
  <div className="coming-wrap" style={{background:"#F8FAFC"}}>
    <div className="container" style={{padding:"2rem 1rem"}}>
      <div className="coming-box">
        <div className="coming-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" width="24" height="24" aria-hidden="true"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4"/><path d="M8 2v4"/><path d="M3 10h18"/><path d="m9 16 2 2 4-4"/></svg></div>
        <div className="coming-label"><span className="line"></span><span>Bientôt disponible</span><span className="line"></span></div>
        <h2>Cette section est en cours de préparation</h2>
        <p>Le contenu sera publié prochainement. Merci de votre patience.</p>
        <div style={{marginTop:"1.5rem",display:"flex",alignItems:"center",justifyContent:"center",gap:".5rem",fontSize:"11px"}}><span style={{height:"1px",width:"24px",background:"#E8EDF3"}}></span><span style={{color:"#64748B",letterSpacing:".02em"}}>CGEL · Collège professionnel</span><span style={{height:"1px",width:"24px",background:"#E8EDF3"}}></span></div>
      </div>
    </div>
  </div>
  {/* ANCIEN PROGRAMME COMMENTÉ — à réactiver quand le contenu sera finalisé
  <div style={{background:"#F8FAFC"}}>
    <div className="container" style={{padding:"2rem 1rem 2.5rem"}}>
      <div className="program-controls">
        <div className="session-filters" id="sessionFilters">
          <button type="button" data-session="Toutes les sessions" className="active">Toutes les sessions</button>
          <button type="button" data-session="Ouverture">Ouverture</button>
          <button type="button" data-session="IA & Diagnostic">IA &amp; Diagnostic</button>
          <button type="button" data-session="Santé connectée">Santé connectée</button>
          <button type="button" data-session="Endoscopie">Endoscopie</button>
          <button type="button" data-session="Perspectives cliniques">Perspectives cliniques</button>
          <button type="button" data-session="Futur des soins">Futur des soins</button>
        </div>
        <input id="programSearch" className="program-search" type="search" placeholder="Filtrer par thème, intervenant…" />
      </div>

      <div className="program-table">
        <div className="program-head">
          <span>Heure</span><span>Session</span><span>Thème</span><span>Salle</span><span>Type</span>
        </div>
        <div id="programEmpty" style={{display:"none"}} className="program-empty">
          <p className="title">Aucune session ne correspond à vos filtres.</p>
          <p className="desc">Essayez une autre session ou effacez la recherche.</p>
          <button id="clearFilters" type="button" className="btn btn-navy" style={{marginTop:"1rem"}}>Effacer les filtres</button>
        </div>
        <div id="programList" className="program-list">
          <div className="program-item" data-session="Ouverture">
            <div className="program-time"><span>08:30</span><span className="dash">— 09:00</span></div>
            <div><p className="program-title">Accueil &amp; Café de bienvenue</p><p className="program-desc">Enregistrement des participants et réseautage.</p><p className="program-meta"><span className="session">Ouverture</p></div>
            <span className="program-topic">Accueil</span><span className="program-room">Hall principal</span><span className="program-type">Ceremony</span>
          </div>
          <div className="program-item" data-session="Ouverture">
            <div className="program-time"><span>09:00</span><span className="dash">— 09:30</span></div>
            <div><p className="program-title">Cérémonie d'ouverture</p><p className="program-desc">Allocution de bienvenue du CGEL et de son partenariat universitaire.</p><p className="program-meta"><span className="session">Ouverture</p></div>
            <span className="program-topic">Ouverture</span><span className="program-room">Salle principale</span><span className="program-type">Ceremony</span>
          </div>
          <div className="program-item" data-session="IA & Diagnostic">
            <div className="program-time"><span>09:30</span><span className="dash">— 10:15</span></div>
            <div><p className="program-title">Conférence inaugurale — La gastroentérologie à l'ère de l'IA</p><p className="program-desc">Thème à annoncer. Placeholder pour la keynote confirmée.</p><p className="program-meta"><span className="session">IA &amp; Diagnostic</span> · <a href="/experts/speaker-01" style={{fontWeight:"500",color:"#023DA5"}}>Nom de l'intervenant</a></p></div>
            <span className="program-topic">Intelligence artificielle</span><span className="program-room">Hall principal</span><span className="program-type">Keynote</span>
          </div>
          <div className="program-item" data-session="IA & Diagnostic">
            <div className="program-time"><span>10:15</span><span className="dash">— 11:00</span></div>
            <div><p className="program-title">Diagnostic assisté par IA en gastroentérologie</p><p className="program-desc">Le rôle de l'IA dans l'aide à la décision clinique.</p><p className="program-meta"><span className="session">IA &amp; Diagnostic</span> · Nom de l'intervenant</p></div>
            <span className="program-topic">IA &amp; Aide à la décision</span><span className="program-room">Hall principal</span><span className="program-type">Session</span>
          </div>
          <div className="program-item" data-session="Ouverture">
            <div className="program-time"><span>11:00</span><span className="dash">— 11:30</span></div>
            <div><p className="program-title">Pause café &amp; Réseautage</p><p className="program-meta"><span className="session">Ouverture</p></div>
            <span className="program-topic">Pause</span><span className="program-room">Foyer</span><span className="program-type">Break</span>
          </div>
          <div className="program-item" data-session="Santé connectée">
            <div className="program-time"><span>11:30</span><span className="dash">— 12:15</span></div>
            <div><p className="program-title">Santé connectée &amp; Outils numériques</p><p className="program-desc">Les innovations en santé numérique au service du soin.</p><p className="program-meta"><span className="session">Santé connectée</span> · Nom de l'intervenant</p></div>
            <span className="program-topic">Santé connectée</span><span className="program-room">Hall principal</span><span className="program-type">Session</span>
          </div>
          <div className="program-item" data-session="Endoscopie">
            <div className="program-time"><span>12:15</span><span className="dash">— 13:00</span></div>
            <div><p className="program-title">Endoscopie intelligente — Avancées &amp; Perspectives</p><p className="program-desc">Avancées actuelles en technologie endoscopique et approches guidées par les données.</p><p className="program-meta"><span className="session">Endoscopie</span> · Nom de l'intervenant</p></div>
            <span className="program-topic">Endoscopie</span><span className="program-room">Hall principal</span><span className="program-type">Session</span>
          </div>
          <div className="program-item" data-session="Ouverture">
            <div className="program-time"><span>13:00</span><span className="dash">— 14:30</span></div>
            <div><p className="program-title">Pause déjeuner</p><p className="program-meta"><span className="session">Ouverture</p></div>
            <span className="program-topic">Pause</span><span className="program-room">Restaurant</span><span className="program-type">Break</span>
          </div>
          <div className="program-item" data-session="Perspectives cliniques">
            <div className="program-time"><span>14:30</span><span className="dash">— 15:30</span></div>
            <div><p className="program-title">Table ronde — Médecine guidée par les données &amp; Soins personnalisés</p><p className="program-desc">Perspectives multidisciplinaires sur la médecine personnalisée.</p><p className="program-meta"><span className="session">Perspectives cliniques</p></div>
            <span className="program-topic">Médecine personnalisée</span><span className="program-room">Hall principal</span><span className="program-type">Panel</span>
          </div>
          <div className="program-item" data-session="Futur des soins">
            <div className="program-time"><span>15:30</span><span className="dash">— 16:15</span></div>
            <div><p className="program-title">Imagerie médicale &amp; Futur des soins</p><p className="program-desc">Comment l'imagerie médicale et l'IA convergent pour façonner le soin de demain.</p><p className="program-meta"><span className="session">Futur des soins</span> · Nom de l'intervenant</p></div>
            <span className="program-topic">Imagerie médicale</span><span className="program-room">Hall principal</span><span className="program-type">Session</span>
          </div>
          <div className="program-item" data-session="Ouverture">
            <div className="program-time"><span>16:15</span><span className="dash">— 16:45</span></div>
            <div><p className="program-title">Clôture</p><p className="program-meta"><span className="session">Ouverture</p></div>
            <span className="program-topic">Clôture</span><span className="program-room">Hall principal</span><span className="program-type">Ceremony</span>
          </div>
        </div>
        <div className="program-footer">
          <p id="programCount">Affichage de 11 sur 11 éléments · Planning indicatif.</p>
          <span className="pdf">Télécharger le PDF (bientôt)</span>
        </div>
      </div>

      <div style={{marginTop:"2rem",border:"1px solid #023DA5",background:"#023DA5",color:"#fff",padding:"1.5rem",display:"flex",flexDirection:"column",gap:"1.5rem"}}>
        <div><h3 style={{margin:"0",fontFamily:"inherit",fontSize:"16px"}}>Découvrez le programme scientifique et réservez votre place au CGEL.</h3><p style={{marginTop:".25rem",fontSize:"12px",color:"rgba(255,255,255,.6)"}}>01 octobre 2026 · Ahmed Bey Zenith, Constantine, Algérie</p></div>
        <a href="/registration" className="btn btn-orange" style={{alignSelf:"flex-start"}}>S'inscrire</a>
      </div>
    </div>
  </div> */}
    </>
  );
}

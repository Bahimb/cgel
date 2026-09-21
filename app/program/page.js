export const metadata = {
  title: "Programme scientifique — CGEL Scientific Days 3e Édition",
  description: "Programme scientifique CGEL Scientific Days 3e Édition — 1 octobre 2026 à l'Ahmed Bey Zenith, Constantine. De l'innovation médicale aux soins intelligents.",
  openGraph: {
    title: "Programme scientifique — CGEL Scientific Days 3e Édition",
    description: "Programme scientifique CGEL Scientific Days 3e Édition — 1 octobre 2026 à l'Ahmed Bey Zenith, Constantine.",
    type: "website",
    locale: "fr_FR",
    url: "https://cgel-gastro.com",
  },
};

export default function Page() {
  return (
    <>
      {/* HERO — Program header */}
      <div className="page-hero">
        <div className="page-hero-inner">
          <div className="page-kicker"><span className="line"></span><span data-i18n="program.kicker">Programme scientifique</span></div>
          <h1 data-i18n="program.heroTitle">CGEL Scientific Days — 3<sup>e</sup> édition</h1>
          <p style={{marginTop:".5rem",fontSize:"15px",fontWeight:"600",color:"#023DA5",letterSpacing:"-.01em"}} data-i18n="program.theme">De l&apos;innovation médicale aux soins intelligents</p>
          <p className="lead" data-i18n="program.lead" style={{marginTop:".5rem"}}>Jeudi 1<sup>er</sup> octobre 2026 · Salle de conférences Ahmed Bey, Zénith de Constantine, Algérie</p>
          <div style={{marginTop:"1rem",display:"flex",alignItems:"center",gap:".5rem",flexWrap:"wrap"}}>
            <span style={{height:"1px",width:"24px",background:"#E2E8F0"}}></span>
            <span style={{fontSize:"11px",letterSpacing:".08em",textTransform:"uppercase",fontWeight:"600",color:"#64748B"}} data-i18n="program.partnershipLabel">En partenariat scientifique — événement uniquement</span>
          </div>
          <p style={{marginTop:".5rem",fontSize:"12px",lineHeight:"1.6",color:"#475569",maxWidth:"700px"}} data-i18n="program.partnershipDesc">
            Organisé en partenariat scientifique avec l&apos;Université Constantine 2 Abdelhamid Mehri, Faculté des Nouvelles Technologies de l&apos;Information et de la Communication (NTIC) — partenariat propre à cette journée scientifique.
          </p>
          <p style={{marginTop:"1rem",fontSize:"13px",lineHeight:"1.7",color:"#475569",maxWidth:"720px"}} data-i18n="program.intro">
            La 3<sup>e</sup> édition réunit gastroentérologues, hépatologues, endoscopistes, biologistes, radiologues, universitaires/chercheurs et ingénieurs autour d&apos;une question centrale : comment l&apos;intelligence artificielle et les technologies de santé transforment concrètement la pratique de la gastroentérologie. Organisée avec la Faculté NTIC de l&apos;Université Constantine 2 Abdelhamid Mehri, la journée combine sessions scientifiques, ateliers pratiques, sessions vidéo et présentations de posters.
          </p>
          <div style={{marginTop:"1.25rem",display:"flex",flexWrap:"wrap",gap:".75rem"}}>
            <a href="/documents/cgel-scientific-days-2026-program.pdf" download className="btn btn-navy" style={{fontSize:"11px"}}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="14" height="14" style={{marginRight:".5rem"}}><path d="M12 3v14"/><path d="M8 11l4 4 4-4"/><path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2"/></svg>
              <span data-i18n="program.downloadPdf">Télécharger le programme complet (PDF)</span>
            </a>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSerGOXc3e5980njfA9R0Zi2MHHhMP1xJp-_gnbgHa-oSyK2vQ/viewform" target="_blank" rel="noopener noreferrer" className="btn btn-orange" data-i18n="program.registerBtn">S&apos;inscrire via Google Form</a>
          </div>
        </div>
      </div>

      <div style={{background:"#F8FAFC"}}>
        <div className="container" style={{padding:"2rem 1rem 2.5rem"}}>

          {/* KEY NUMBERS */}
          <div style={{display:"grid",gridTemplateColumns:"repeat(2,1fr)",gap:"1px",background:"#E2E8F0",border:"1px solid #E2E8F0",overflow:"hidden"}} className="key-numbers-grid">
            <div style={{background:"#fff",padding:"1.25rem",textAlign:"center",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:".25rem"}}>
              <span style={{fontSize:"28px",fontWeight:"800",color:"#023DA5",lineHeight:"1"}}>2</span>
              <span style={{fontSize:"11px",letterSpacing:".08em",textTransform:"uppercase",fontWeight:"600",color:"#475569"}} data-i18n="program.stat1">sessions scientifiques</span>
            </div>
            <div style={{background:"#fff",padding:"1.25rem",textAlign:"center",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:".25rem"}}>
              <span style={{fontSize:"28px",fontWeight:"800",color:"#023DA5",lineHeight:"1"}}>4</span>
              <span style={{fontSize:"11px",letterSpacing:".08em",textTransform:"uppercase",fontWeight:"600",color:"#475569"}} data-i18n="program.stat2">ateliers pratiques</span>
            </div>
            <div style={{background:"#fff",padding:"1.25rem",textAlign:"center",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:".25rem"}}>
              <span style={{fontSize:"28px",fontWeight:"800",color:"#023DA5",lineHeight:"1"}}>4</span>
              <span style={{fontSize:"11px",letterSpacing:".08em",textTransform:"uppercase",fontWeight:"600",color:"#475569"}} data-i18n="program.stat3">sessions vidéo</span>
            </div>
            <div style={{background:"#fff",padding:"1.25rem",textAlign:"center",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:".25rem"}}>
              <span style={{fontSize:"28px",fontWeight:"800",color:"#023DA5",lineHeight:"1"}}>19</span>
              <span style={{fontSize:"11px",letterSpacing:".08em",textTransform:"uppercase",fontWeight:"600",color:"#475569"}} data-i18n="program.stat4">posters scientifiques</span>
            </div>
          </div>
          <style>{`@media(min-width:640px){.key-numbers-grid{grid-template-columns:repeat(4,1fr)!important}}`}</style>

          {/* FILTERS + SEARCH */}
          <div style={{marginTop:"2rem"}}>
            <div className="program-controls">
              <div className="session-filters" id="sessionFilters">
                <button type="button" data-session="Toutes les sessions" className="active">Toutes les sessions</button>
                <button type="button" data-session="Ouverture">Ouverture</button>
                <button type="button" data-session="Session 1 — Médecine & Gastroentérologie">Session 1 — Médecine & Gastroentérologie</button>
                <button type="button" data-session="Session 2 — IA & Gastroentérologie">Session 2 — IA & Gastroentérologie</button>
                <button type="button" data-session="Ateliers">Ateliers</button>
                <button type="button" data-session="Sessions vidéo">Sessions vidéo</button>
              </div>
              <input id="programSearch" className="program-search" type="search" placeholder="Filtrer par thème, intervenant…" aria-label="Filtrer le programme" />
            </div>

            <div className="program-table">
              <div className="program-head">
                <span>Heure</span><span>Session · Intitulé & Intervenant(s)</span><span>Thème</span><span>Type</span>
              </div>
              <div id="programEmpty" style={{display:"none"}} className="program-empty">
                <p className="title">Aucune session ne correspond à vos filtres.</p>
                <p className="desc">Essayez une autre catégorie ou effacez la recherche.</p>
                <button id="clearFilters" type="button" className="btn btn-navy" style={{marginTop:"1rem"}}>Effacer les filtres</button>
              </div>
              <div id="programList" className="program-list">
                {/* Ouverture */}
                <div className="program-item" data-session="Ouverture">
                  <div className="program-time"><span>08:30</span><span className="dash">— 09:00</span></div>
                  <div><p className="program-title">Inscription & accueil</p><p className="program-desc">Enregistrement des participants</p><p className="program-meta"><span className="session">Ouverture</span></p></div>
                  <span className="program-topic">Accueil</span><span className="program-type">Accueil</span>
                </div>
                <div className="program-item" data-session="Ouverture">
                  <div className="program-time"><span>09:00</span></div>
                  <div><p className="program-title">Mot de bienvenue</p><p className="program-desc">Dr Abderraouf BOURGHOUD — Hépato-gastroentérologue libéral, Constantine, Président du CGEL</p><p className="program-meta"><span className="session">Ouverture</span></p></div>
                  <span className="program-topic">Ouverture</span><span className="program-type">Allocution</span>
                </div>
                <div className="program-item" data-session="Ouverture">
                  <div className="program-time"><span>09:10</span></div>
                  <div><p className="program-title">Allocutions d&apos;ouverture</p><p className="program-desc">Représentant de la Faculté des Nouvelles Technologies de l&apos;Information et de la Communication (NTIC), Université Constantine 2 Abdelhamid Mehri</p><p className="program-meta"><span className="session">Ouverture</span></p></div>
                  <span className="program-topic">Ouverture</span><span className="program-type">Allocution</span>
                </div>

                {/* Session 1 */}
                <div className="program-item" data-session="Session 1 — Médecine & Gastroentérologie">
                  <div className="program-time"><span>09:15</span><span className="dash">— 09:35</span></div>
                  <div><p className="program-title">Responsabilité médicale en Algérie : le regard du Conseil de l&apos;Ordre</p><p className="program-desc">Pr Rachid DJENANE — Président du Conseil de l&apos;Ordre, Région de Constantine · Dr Slimane YOUSFI · Dr Souad SEMRA — Conseil de l&apos;Ordre, Région de Constantine</p><p className="program-meta"><span className="session">Session 1 — Médecine & Gastroentérologie</span> · Modérateur : Dr Rachid BERREZAG</p></div>
                  <span className="program-topic">Éthique & Droit</span><span className="program-type">Conférence</span>
                </div>
                <div className="program-item" data-session="Session 1 — Médecine & Gastroentérologie">
                  <div className="program-time"><span>09:35</span><span className="dash">— 09:50</span></div>
                  <div><p className="program-title">Manométrie anorectale : discussion autour de cas réels</p><p className="program-desc">Dr Yacine CHELBI · Dr Mohamed Nour CHEHAD — Hépato-gastroentérologues libéraux, Constantine</p><p className="program-meta"><span className="session">Session 1 — Médecine & Gastroentérologie</span> · Modérateur : Dr Rachid BERREZAG</p></div>
                  <span className="program-topic">Gastroentérologie</span><span className="program-type">Cas clinique</span>
                </div>
                <div className="program-item" data-session="Session 1 — Médecine & Gastroentérologie">
                  <div className="program-time"><span>09:50</span><span className="dash">— 10:05</span></div>
                  <div><p className="program-title">De l&apos;endoscopie au microscope : on s&apos;était compris… presque !</p><p className="program-desc">Dr Karima BENABADDOU — Anatomie pathologique, exercice libéral, Constantine</p><p className="program-meta"><span className="session">Session 1 — Médecine & Gastroentérologie</span> · Modérateur : Dr Rachid BERREZAG</p></div>
                  <span className="program-topic">Anapath & Endoscopie</span><span className="program-type">Conférence</span>
                </div>
                <div className="program-item" data-session="Session 1 — Médecine & Gastroentérologie">
                  <div className="program-time"><span>10:05</span><span className="dash">— 10:20</span></div>
                  <div><p className="program-title">Toxicités digestives de l&apos;immunothérapie</p><p className="program-desc">Dr Houda MEGUELLATI · Pr Abdelaziz AMMARI · Pr Assia BENSALEM — EPH Didouche Mourad, Constantine</p><p className="program-meta"><span className="session">Session 1 — Médecine & Gastroentérologie</span> · Modérateur : Dr Rachid BERREZAG</p></div>
                  <span className="program-topic">Oncologie digestive</span><span className="program-type">Conférence</span>
                </div>
                <div className="program-item" data-session="Session 1 — Médecine & Gastroentérologie">
                  <div className="program-time"><span>10:20</span><span className="dash">— 10:40</span></div>
                  <div><p className="program-title">Discussion</p><p className="program-desc">Échanges avec la salle</p><p className="program-meta"><span className="session">Session 1 — Médecine & Gastroentérologie</span> · Modérateur : Dr Rachid BERREZAG</p></div>
                  <span className="program-topic">Discussion</span><span className="program-type">Échange</span>
                </div>
                <div className="program-item" data-session="Ouverture">
                  <div className="program-time"><span>10:40</span><span className="dash">— 11:00</span></div>
                  <div><p className="program-title">Pause café</p><p className="program-meta"><span className="session">Ouverture</span></p></div>
                  <span className="program-topic">Pause</span><span className="program-type">Pause</span>
                </div>

                {/* Session 2 */}
                <div className="program-item" data-session="Session 2 — IA & Gastroentérologie">
                  <div className="program-time"><span>11:00</span><span className="dash">— 11:20</span></div>
                  <div><p className="program-title">Pas d&apos;IA sans vous : comment les médecins construisent l&apos;intelligence artificielle</p><p className="program-desc">Pr Mohammed AMROUNE — Professeur d&apos;informatique, École Nationale des Nanosciences et des Nanotechnologies, Sidi Abdellah</p><p className="program-meta"><span className="session">Session 2 — IA & Gastroentérologie</span> · Modérateur : Pr Mohammed AMROUNE</p></div>
                  <span className="program-topic">IA & Médecine</span><span className="program-type">Conférence</span>
                </div>
                <div className="program-item" data-session="Session 2 — IA & Gastroentérologie">
                  <div className="program-time"><span>11:20</span><span className="dash">— 11:35</span></div>
                  <div><p className="program-title">Quand l&apos;IA rencontre la gastroentérologie : projets et réalisations concrètes</p><p className="program-desc">Pr Abdelkrim BOURAMOUL — Professeur d&apos;informatique, Université Constantine 2 Abdelhamid Mehri</p><p className="program-meta"><span className="session">Session 2 — IA & Gastroentérologie</span> · Modérateur : Pr Mohammed AMROUNE</p></div>
                  <span className="program-topic">IA & Gastroentérologie</span><span className="program-type">Conférence</span>
                </div>
                <div className="program-item" data-session="Session 2 — IA & Gastroentérologie">
                  <div className="program-time"><span>11:35</span><span className="dash">— 11:45</span></div>
                  <div><p className="program-title">GastroNeXia : un assistant intelligent en temps réel pour l&apos;endoscopie digestive</p><p style={{marginTop:".15rem",fontSize:"10px",letterSpacing:".06em",textTransform:"uppercase",fontWeight:"700",color:"#fff",background:"#023DA5",display:"inline-block",padding:"2px 6px"}}>Projet</p><p className="program-desc">Pr Abdelkrim BOURAMOUL · Dr Saber ABED</p><p className="program-meta"><span className="session">Session 2 — IA & Gastroentérologie</span> · Modérateur : Pr Mohammed AMROUNE</p></div>
                  <span className="program-topic">Endoscopie intelligente</span><span className="program-type">Projet</span>
                </div>
                <div className="program-item" data-session="Session 2 — IA & Gastroentérologie">
                  <div className="program-time"><span>11:45</span><span className="dash">— 11:55</span></div>
                  <div><p className="program-title">EndoViRAI : un outil intelligent de réalité virtuelle pour la formation en endoscopie digestive</p><p style={{marginTop:".15rem",fontSize:"10px",letterSpacing:".06em",textTransform:"uppercase",fontWeight:"700",color:"#fff",background:"#023DA5",display:"inline-block",padding:"2px 6px"}}>Projet</p><p className="program-desc">Pr Abdelkrim BOURAMOUL · Dr Saber ABED</p><p className="program-meta"><span className="session">Session 2 — IA & Gastroentérologie</span> · Modérateur : Pr Mohammed AMROUNE</p></div>
                  <span className="program-topic">Formation & VR</span><span className="program-type">Projet</span>
                </div>
                <div className="program-item" data-session="Session 2 — IA & Gastroentérologie">
                  <div className="program-time"><span>11:55</span><span className="dash">— 12:10</span></div>
                  <div><p className="program-title">Le gastroentérologue à l&apos;ère de l&apos;IA : de l&apos;utilisateur au co-concepteur</p><p className="program-desc">Dr Saber ABED — Hépato-gastroentérologue libéral, Constantine</p><p className="program-meta"><span className="session">Session 2 — IA & Gastroentérologie</span> · Modérateur : Pr Mohammed AMROUNE</p></div>
                  <span className="program-topic">Pratique clinique</span><span className="program-type">Conférence</span>
                </div>
                <div className="program-item" data-session="Session 2 — IA & Gastroentérologie">
                  <div className="program-time"><span>12:10</span><span className="dash">— 12:30</span></div>
                  <div><p className="program-title">IA, endoscopie et pratique clinique : vers une collaboration médecine–IA</p><p style={{marginTop:".15rem",fontSize:"10px",letterSpacing:".06em",textTransform:"uppercase",fontWeight:"700",color:"#023DA5",background:"#EEF4FF",border:"1px solid #D6E2F5",display:"inline-block",padding:"2px 6px"}}>Table ronde</p><p className="program-desc">Modérateur : Pr Mohammed AMROUNE</p><p className="program-meta"><span className="session">Session 2 — IA & Gastroentérologie</span></p></div>
                  <span className="program-topic">Table ronde</span><span className="program-type">Panel</span>
                </div>
                <div className="program-item" data-session="Ouverture">
                  <div className="program-time"><span>12:30</span><span className="dash">— 14:00</span></div>
                  <div><p className="program-title">Déjeuner</p><p className="program-meta"><span className="session">Ouverture</span></p></div>
                  <span className="program-topic">Pause</span><span className="program-type">Pause</span>
                </div>

                {/* Ateliers — workshops as filterable items */}
                <div className="program-item" data-session="Ateliers">
                  <div className="program-time"><span>09:15</span><span className="dash">— 12:00</span></div>
                  <div><p className="program-title">Atelier 1 — Échographie</p><p className="program-desc">Intervenant : Dr Mounder BAHLOUL</p><p className="program-meta"><span className="session">Ateliers</span></p></div>
                  <span className="program-topic">Échographie</span><span className="program-type">Atelier</span>
                </div>
                <div className="program-item" data-session="Ateliers">
                  <div className="program-time"><span>09:15</span><span className="dash">— 12:00</span></div>
                  <div><p className="program-title">Atelier 3 — Maintenance</p><p className="program-desc">Intervenant : M. Rachid DAHLAL</p><p className="program-meta"><span className="session">Ateliers</span></p></div>
                  <span className="program-topic">Maintenance</span><span className="program-type">Atelier</span>
                </div>
                <div className="program-item" data-session="Ateliers">
                  <div className="program-time"><span>14:00</span><span className="dash">— 16:00</span></div>
                  <div><p className="program-title">Atelier 2 — Endoscopie</p><p className="program-desc">Intervenant : Dr Sofiane MEBARKIA</p><p className="program-meta"><span className="session">Ateliers</span></p></div>
                  <span className="program-topic">Endoscopie</span><span className="program-type">Atelier</span>
                </div>
                <div className="program-item" data-session="Ateliers">
                  <div className="program-time"><span>14:00</span><span className="dash">— 16:00</span></div>
                  <div><p className="program-title">Atelier 4 — IA & Médecine</p><p className="program-desc">Intervenants : Pr Mohammed AMROUNE & Dr Saber ABED</p><p className="program-meta"><span className="session">Ateliers</span></p></div>
                  <span className="program-topic">IA & Médecine</span><span className="program-type">Atelier</span>
                </div>

                {/* Video */}
                <div className="program-item" data-session="Sessions vidéo">
                  <div className="program-time"><span>14:00</span><span className="dash">— 15:00</span></div>
                  <div><p className="program-title">Trois procédures d&apos;endoscopie interventionnelle en vidéo : écho-endoscopie avec biopsie, CPRE et POEM</p><p className="program-desc">Dr Mohamed Nour CHEHAD — Hépato-gastroentérologue et endoscopiste interventionnel libéral, Constantine</p><p className="program-meta"><span className="session">Sessions vidéo</span> · Modérateur : Dr Saber ABED</p></div>
                  <span className="program-topic">Endoscopie interventionnelle</span><span className="program-type">Vidéo</span>
                </div>
                <div className="program-item" data-session="Sessions vidéo">
                  <div className="program-time"><span>15:00</span><span className="dash">— 15:20</span></div>
                  <div><p className="program-title">URPO : un cas historique d&apos;ulcère gastrique</p><p className="program-desc">Dr Riad AMIRA — Chirurgie viscérale, digestive et oncologique</p><p className="program-meta"><span className="session">Sessions vidéo</span> · Modérateur : Dr Saber ABED</p></div>
                  <span className="program-topic">Chirurgie digestive</span><span className="program-type">Vidéo</span>
                </div>
                <div className="program-item" data-session="Sessions vidéo">
                  <div className="program-time"><span>15:20</span><span className="dash">— 15:40</span></div>
                  <div><p className="program-title">Résection endoscopique des tumeurs digestives superficielles : de la polypectomie à la dissection sous-muqueuse</p><p style={{marginTop:".15rem",fontSize:"10px",letterSpacing:".06em",textTransform:"uppercase",fontWeight:"700",color:"#065F46",background:"#ECFDF5",border:"1px solid #A7F3D0",display:"inline-block",padding:"2px 6px"}}>Visioconférence</p><p className="program-desc">Pr Elsayed GHONEEM — Maître de conférences en Gastroentérologie et Hépatologie, Université de Mansoura (Égypte), actuellement à l&apos;Hôpital Ad Dammam (Arabie saoudite)</p><p className="program-meta"><span className="session">Sessions vidéo</span> · Modérateur : Dr Saber ABED</p></div>
                  <span className="program-topic">Endoscopie</span><span className="program-type">Vidéo</span>
                </div>
                <div className="program-item" data-session="Sessions vidéo">
                  <div className="program-time"><span>15:40</span><span className="dash">— 16:00</span></div>
                  <div><p className="program-title">Écho-endoscopie diagnostique et thérapeutique en pathologie bilio-pancréatique</p><p style={{marginTop:".15rem",fontSize:"10px",letterSpacing:".06em",textTransform:"uppercase",fontWeight:"700",color:"#065F46",background:"#ECFDF5",border:"1px solid #A7F3D0",display:"inline-block",padding:"2px 6px"}}>Visioconférence</p><p className="program-desc">Pr Hussein OKASHA — Professeur de Médecine interne et Gastroentérologie, Faculté de Médecine Kasr Alainy, Université du Caire (Égypte)</p><p className="program-meta"><span className="session">Sessions vidéo</span> · Modérateur : Dr Saber ABED</p></div>
                  <span className="program-topic">Écho-endoscopie</span><span className="program-type">Vidéo</span>
                </div>

                <div className="program-item" data-session="Ateliers">
                  <div className="program-time"><span>14:00</span><span className="dash">— 16:00</span></div>
                  <div><p className="program-title">Session posters — Présentation des posters scientifiques</p><p className="program-desc">19 posters — liste complète dans le PDF officiel</p><p className="program-meta"><span className="session">Ateliers</span></p></div>
                  <span className="program-topic">Posters</span><span className="program-type">Poster</span>
                </div>

                <div className="program-item" data-session="Ouverture">
                  <div className="program-time"><span>16:00</span></div>
                  <div><p className="program-title">Clôture des journées scientifiques</p><p className="program-meta"><span className="session">Ouverture</span></p></div>
                  <span className="program-topic">Clôture</span><span className="program-type">Clôture</span>
                </div>
              </div>
              <div className="program-footer">
                <p id="programCount">Affichage de 26 sur 26 éléments</p>
                <a href="/documents/cgel-scientific-days-2026-program.pdf" download style={{border:"1px solid #023DA5",background:"#023DA5",color:"#fff",padding:".4rem .75rem",fontWeight:"600",display:"inline-flex",alignItems:"center",gap:".4rem"}}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="12" height="12"><path d="M12 3v12"/><path d="M8 11l4 4 4-4"/><path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2"/></svg>
                  Télécharger le PDF complet
                </a>
              </div>
            </div>
          </div>

          {/* HANDS-ON WORKSHOPS */}
          <div style={{marginTop:"2rem"}}>
            <div style={{display:"flex",alignItems:"center",gap:".75rem",marginBottom:"1rem"}}><span style={{height:"1px",width:"32px",background:"#F08444"}}></span><span style={{fontSize:"11px",letterSpacing:".18em",textTransform:"uppercase",fontWeight:"600",color:"#023DA5"}} data-i18n="program.workshopsKicker">Ateliers pratiques</span></div>
            <h2 style={{margin:"0",fontSize:"20px",lineHeight:"1.1",letterSpacing:"-.02em",color:"#0F1D3A"}} data-i18n="program.workshopsTitle">Ateliers — 4 sessions en petits groupes</h2>
            <p style={{marginTop:".4rem",fontSize:"12px",lineHeight:"1.6",color:"#64748B",maxWidth:"700px"}} data-i18n="program.workshopsDesc">Ateliers pratiques en parallèle des sessions plénières — inscription sur place selon disponibilité.</p>
            <div style={{marginTop:"1.25rem",display:"grid",gap:"1px",background:"#E2E8F0",border:"1px solid #E2E8F0",gridTemplateColumns:"repeat(auto-fit, minmax(240px,1fr))"}}>
              <div style={{background:"#fff",padding:"1.25rem",display:"flex",flexDirection:"column",gap:".75rem",borderTop:"2px solid #023DA5"}}>
                <div style={{display:"flex",alignItems:"center",gap:".5rem"}}><span style={{fontSize:"11px",letterSpacing:".08em",textTransform:"uppercase",fontWeight:"700",color:"#023DA5",background:"#EEF4FF",border:"1px solid #D6E2F5",padding:"2px 6px"}}>Atelier 1</span><span style={{fontSize:"11px",color:"#64748B"}}>09:15 – 12:00</span></div>
                <h3 style={{margin:"0",fontSize:"14px",fontWeight:"700",color:"#0F1D3A"}}>Échographie</h3>
                <p style={{margin:"0",fontSize:"12px",color:"#475569"}}><span style={{color:"#64748B"}}>Intervenant :</span> <strong style={{color:"#0F1D3A"}}>Dr Mounder BAHLOUL</strong></p>
              </div>
              <div style={{background:"#fff",padding:"1.25rem",display:"flex",flexDirection:"column",gap:".75rem",borderTop:"2px solid #F08444"}}>
                <div style={{display:"flex",alignItems:"center",gap:".5rem"}}><span style={{fontSize:"11px",letterSpacing:".08em",textTransform:"uppercase",fontWeight:"700",color:"#9A4A1E",background:"#FFF4ED",border:"1px solid #FFDCC6",padding:"2px 6px"}}>Atelier 3</span><span style={{fontSize:"11px",color:"#64748B"}}>09:15 – 12:00</span></div>
                <h3 style={{margin:"0",fontSize:"14px",fontWeight:"700",color:"#0F1D3A"}}>Maintenance</h3>
                <p style={{margin:"0",fontSize:"12px",color:"#475569"}}><span style={{color:"#64748B"}}>Intervenant :</span> <strong style={{color:"#0F1D3A"}}>M. Rachid DAHLAL</strong></p>
              </div>
              <div style={{background:"#fff",padding:"1.25rem",display:"flex",flexDirection:"column",gap:".75rem",borderTop:"2px solid #023DA5"}}>
                <div style={{display:"flex",alignItems:"center",gap:".5rem"}}><span style={{fontSize:"11px",letterSpacing:".08em",textTransform:"uppercase",fontWeight:"700",color:"#023DA5",background:"#EEF4FF",border:"1px solid #D6E2F5",padding:"2px 6px"}}>Atelier 2</span><span style={{fontSize:"11px",color:"#64748B"}}>14:00 – 16:00</span></div>
                <h3 style={{margin:"0",fontSize:"14px",fontWeight:"700",color:"#0F1D3A"}}>Endoscopie</h3>
                <p style={{margin:"0",fontSize:"12px",color:"#475569"}}><span style={{color:"#64748B"}}>Intervenant :</span> <strong style={{color:"#0F1D3A"}}>Dr Sofiane MEBARKIA</strong></p>
              </div>
              <div style={{background:"#fff",padding:"1.25rem",display:"flex",flexDirection:"column",gap:".75rem",borderTop:"2px solid #F08444"}}>
                <div style={{display:"flex",alignItems:"center",gap:".5rem"}}><span style={{fontSize:"11px",letterSpacing:".08em",textTransform:"uppercase",fontWeight:"700",color:"#9A4A1E",background:"#FFF4ED",border:"1px solid #FFDCC6",padding:"2px 6px"}}>Atelier 4</span><span style={{fontSize:"11px",color:"#64748B"}}>14:00 – 16:00</span></div>
                <h3 style={{margin:"0",fontSize:"14px",fontWeight:"700",color:"#0F1D3A"}}>IA & Médecine</h3>
                <p style={{margin:"0",fontSize:"12px",color:"#475569"}}><span style={{color:"#64748B"}}>Intervenants :</span> <strong style={{color:"#0F1D3A"}}>Pr Mohammed AMROUNE & Dr Saber ABED</strong></p>
              </div>
            </div>
          </div>

          {/* VIDEO SESSIONS */}
          <div style={{marginTop:"2rem",border:"1px solid #E2E8F0",background:"#fff",overflow:"hidden"}}>
            <div style={{padding:"1.25rem 1.5rem",borderBottom:"1px solid #E2E8F0",background:"#F8FAFC"}}>
              <div style={{display:"flex",alignItems:"center",gap:".75rem"}}><span style={{height:"1px",width:"32px",background:"#023DA5"}}></span><span style={{fontSize:"11px",letterSpacing:".18em",textTransform:"uppercase",fontWeight:"600",color:"#023DA5"}}>Sessions vidéo · 14:00 – 16:00</span></div>
              <h2 style={{margin:".5rem 0 0",fontSize:"18px",letterSpacing:"-.02em",color:"#0F1D3A"}}>Sessions vidéo commentées</h2>
              <p style={{margin:".35rem 0 0",fontSize:"12px",color:"#64748B"}}>Modérateur : <strong style={{color:"#0F1D3A"}}>Dr Saber ABED</strong> · Vidéos commentées et discussion</p>
            </div>
            <div style={{padding:"1.25rem 1.5rem",display:"flex",flexDirection:"column",gap:"1.25rem"}}>
              <div style={{paddingBottom:"1.25rem",borderBottom:"1px solid #F1F5F9"}}>
                <div style={{display:"flex",alignItems:"center",gap:".5rem",flexWrap:"wrap"}}><span style={{fontSize:"12px",fontWeight:"700",color:"#023DA5"}}>14:00 – 15:00</span><span style={{fontSize:"10px",letterSpacing:".06em",textTransform:"uppercase",fontWeight:"700",color:"#023DA5",background:"#EEF4FF",border:"1px solid #D6E2F5",padding:"2px 6px"}}>Vidéo</span></div>
                <h3 style={{margin:".4rem 0 0",fontSize:"13px",fontWeight:"600",lineHeight:"1.5",color:"#0F1D3A"}}>Trois procédures d&apos;endoscopie interventionnelle en vidéo : écho-endoscopie avec biopsie, CPRE et POEM</h3>
                <p style={{margin:".25rem 0 0",fontSize:"12px",lineHeight:"1.6",color:"#475569"}}>Dr Mohamed Nour CHEHAD — Hépato-gastroentérologue et endoscopiste interventionnel libéral, Constantine</p>
              </div>
              <div style={{paddingBottom:"1.25rem",borderBottom:"1px solid #F1F5F9"}}>
                <div style={{display:"flex",alignItems:"center",gap:".5rem"}}><span style={{fontSize:"12px",fontWeight:"700",color:"#023DA5"}}>15:00 – 15:20</span><span style={{fontSize:"10px",letterSpacing:".06em",textTransform:"uppercase",fontWeight:"700",color:"#023DA5",background:"#EEF4FF",border:"1px solid #D6E2F5",padding:"2px 6px"}}>Vidéo</span></div>
                <h3 style={{margin:".4rem 0 0",fontSize:"13px",fontWeight:"600",lineHeight:"1.5",color:"#0F1D3A"}}>URPO : un cas historique d&apos;ulcère gastrique</h3>
                <p style={{margin:".25rem 0 0",fontSize:"12px",lineHeight:"1.6",color:"#475569"}}>Dr Riad AMIRA — Chirurgie viscérale, digestive et oncologique</p>
              </div>
              <div style={{paddingBottom:"1.25rem",borderBottom:"1px solid #F1F5F9"}}>
                <div style={{display:"flex",alignItems:"center",gap:".5rem",flexWrap:"wrap"}}><span style={{fontSize:"12px",fontWeight:"700",color:"#023DA5"}}>15:20 – 15:40</span><span style={{fontSize:"10px",letterSpacing:".06em",textTransform:"uppercase",fontWeight:"700",color:"#065F46",background:"#ECFDF5",border:"1px solid #A7F3D0",padding:"2px 6px"}}>Visioconférence</span></div>
                <h3 style={{margin:".4rem 0 0",fontSize:"13px",fontWeight:"600",lineHeight:"1.5",color:"#0F1D3A"}}>Résection endoscopique des tumeurs digestives superficielles : de la polypectomie à la dissection sous-muqueuse</h3>
                <p style={{margin:".25rem 0 0",fontSize:"12px",lineHeight:"1.6",color:"#475569"}}>Pr Elsayed GHONEEM — Maître de conférences en Gastroentérologie et Hépatologie, Université de Mansoura (Égypte), actuellement à l&apos;Hôpital Ad Dammam (Arabie saoudite)</p>
              </div>
              <div>
                <div style={{display:"flex",alignItems:"center",gap:".5rem",flexWrap:"wrap"}}><span style={{fontSize:"12px",fontWeight:"700",color:"#023DA5"}}>15:40 – 16:00</span><span style={{fontSize:"10px",letterSpacing:".06em",textTransform:"uppercase",fontWeight:"700",color:"#065F46",background:"#ECFDF5",border:"1px solid #A7F3D0",padding:"2px 6px"}}>Visioconférence</span></div>
                <h3 style={{margin:".4rem 0 0",fontSize:"13px",fontWeight:"600",lineHeight:"1.5",color:"#0F1D3A"}}>Écho-endoscopie diagnostique et thérapeutique en pathologie bilio-pancréatique</h3>
                <p style={{margin:".25rem 0 0",fontSize:"12px",lineHeight:"1.6",color:"#475569"}}>Pr Hussein OKASHA — Professeur de Médecine interne et Gastroentérologie, Faculté de Médecine Kasr Alainy, Université du Caire (Égypte)</p>
              </div>
            </div>
          </div>

          {/* PARTNERSHIP SCOPED NOTE */}
          <div style={{marginTop:"2rem",border:"1px solid #E2E8F0",background:"#fff",padding:"1.25rem",display:"flex",gap:"1rem",alignItems:"center"}}>
            <div style={{display:"flex",gap:".5rem",flexShrink:"0"}}>
              <img src="/logo/uc2.png" alt="Université Constantine 2 Abdelhamid Mehri" loading="lazy" style={{height:"40px",width:"auto",objectFit:"contain"}} />
              <img src="/logo/ntic.png" alt="Faculté NTIC" loading="lazy" style={{height:"40px",width:"auto",objectFit:"contain"}} />
            </div>
            <div>
              <p style={{margin:"0",fontSize:"11px",letterSpacing:".08em",textTransform:"uppercase",fontWeight:"600",color:"#023DA5"}}>En partenariat scientifique — CGEL Scientific Days 3e édition uniquement</p>
              <p style={{margin:".15rem 0 0",fontSize:"11.5px",lineHeight:"1.6",color:"#64748B"}}>Université Constantine 2 Abdelhamid Mehri — Faculté des Nouvelles Technologies de l&apos;Information et de la Communication (NTIC). Ce partenariat est propre à cette journée scientifique et non à l&apos;ensemble du collège.</p>
            </div>
          </div>

          {/* CTA */}
          <div style={{marginTop:"2rem",border:"1px solid #023DA5",background:"#023DA5",color:"#fff",padding:"1.5rem",display:"flex",flexDirection:"column",gap:"1.25rem"}}>
            <div><h3 style={{margin:"0",fontFamily:"inherit",fontSize:"16px"}}>Réservez votre place aux CGEL Scientific Days — 3<sup>e</sup> édition</h3><p style={{marginTop:".25rem",fontSize:"12px",color:"rgba(255,255,255,.6)"}}>Jeudi 1<sup>er</sup> octobre 2026 · Salle de conférences Ahmed Bey, Zénith de Constantine, Algérie · Inscription via Google Form</p></div>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSerGOXc3e5980njfA9R0Zi2MHHhMP1xJp-_gnbgHa-oSyK2vQ/viewform" target="_blank" rel="noopener noreferrer" className="btn btn-orange" style={{alignSelf:"flex-start"}}>S&apos;inscrire via Google Form <span aria-hidden="true" style={{marginLeft:".4rem"}}>↗</span></a>
          </div>
        </div>
      </div>
    </>
  );
}

export const metadata = {
  title: "Inscription — CGEL Scientific Days 3e Édition",
  description: "Inscrivez-vous aux CGEL Scientific Days 3e Édition — 1 octobre 2026 à l'Ahmed Bey Zenith, Constantine, Algérie. Inscription via Google Form.",
  openGraph: {
    title: "Inscription — CGEL Scientific Days 3e Édition",
    description: "Inscrivez-vous aux CGEL Scientific Days 3e Édition — 1 octobre 2026 à l'Ahmed Bey Zenith, Constantine, Algérie. Inscription via Google Form.",
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
      <div className="page-kicker"><span className="line"></span><span>Inscription</span></div>
      <h1>S'inscrire aux CGEL Scientific Days 2026</h1>
      <p className="lead">3<sup>e</sup> Édition — La gastroentérologie à l'ère de l'intelligence artificielle et de la santé connectée. <br /> Jeudi 1 octobre 2026 · Ahmed Bey Zenith, Constantine, Algérie.</p>
    </div>
  </div>
  <div style={{background:"#F8FAFC"}}>
    <div className="container">
      <div className="reg-grid">
        <div className="reg-form-box">
          <h2>Formulaire d'inscription</h2>
          <p className="sub">L'inscription est désormais centralisée sur Google Form — cliquez ci-dessous pour y accéder.</p>
          <div className="google-box">
            <p className="kicker">Inscription officielle</p>
            <h3>Les inscriptions se font via Google Form</h3>
            <p className="lead">Cliquez sur le bouton ci-dessous pour accéder au formulaire officiel. Il s'ouvrira dans un nouvel onglet — aucune donnée n'est stockée localement sur ce site.</p>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSerGOXc3e5980njfA9R0Zi2MHHhMP1xJp-_gnbgHa-oSyK2vQ/viewform" target="_blank" rel="noopener noreferrer" className="cta">S'inscrire via Google Form <span aria-hidden="true" style={{marginLeft:".5rem"}}>↗</span></a>
          </div>
          <div className="reg-note">En vous inscrivant, vous confirmez votre demande pour les <strong>CGEL Scientific Days — 3<sup>e</sup> Édition · 01 oct. 2026</strong>. Le comité d'organisation examinera votre demande.</div>
          <p className="reg-contact">Questions ? <a href="mailto:college.hgel@gmail.com">college.hgel@gmail.com</a> · 0540 69 95 13</p>
        </div>
        <div className="reg-sidebar" style={{display:"flex",flexDirection:"column",gap:"1rem"}}>
          <div className="dl">
            <div style={{padding:".75rem 1.25rem",borderBottom:"1px solid #E2E8F0",background:"#F8FAFC"}}><h3 style={{margin:"0",fontSize:"11px",letterSpacing:".12em",textTransform:"uppercase",fontWeight:"600",color:"#023DA5"}}>Résumé de l'événement</h3></div>
            <dl>
              <div className="row"><dt>Événement</dt><dd>CGEL Scientific Days — 3<sup>e</sup> Édition</dd></div>
              <div className="row"><dt>Thème</dt><dd>Gastroentérologie à l'ère de l'IA &amp; Santé connectée</dd></div>
              <div className="row"><dt>Date</dt><dd>Jeu. 1 oct. 2026</dd></div>
              <div className="row"><dt>Lieu</dt><dd>Ahmed Bey Zenith, Constantine</dd></div>
              <div className="row"><dt>Contact</dt><dd style={{fontSize:"11px"}}>0540 69 95 13 · college.hgel@gmail.com</dd></div>
            </dl>
          </div>
          <div className="reg-next">
            <h3>Que se passe-t-il ensuite ?</h3>
            <ol>
              <li>Cliquez sur « S'inscrire via Google Form ».</li>
              <li>Remplissez le formulaire Google dans le nouvel onglet.</li>
              <li>Le comité examine les demandes et vous recontacte.</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  </div>
    </>
  );
}

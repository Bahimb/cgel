export const metadata = {
  title: "À propos — CGEL Scientific Days 3e Édition",
  description: "À propos des CGEL Scientific Days — 3e Édition : la gastroentérologie à l'ère de l'intelligence artificielle et de la santé connectée. Organisé par le CGEL avec un partenariat universitaire.",
  openGraph: {
    title: "À propos — CGEL Scientific Days 3e Édition",
    description: "À propos des CGEL Scientific Days — 3e Édition : la gastroentérologie à l'ère de l'intelligence artificielle et de la santé connectée. Organisé par le CGEL avec un partenariat universitaire.",
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
      <div className="page-kicker"><span className="line"></span><span>À propos</span></div>
      <h1>À propos des CGEL Scientific Days</h1>
      <p className="lead">3<sup>e</sup> Édition — La gastroentérologie à l'ère de l'intelligence artificielle et de la santé connectée.</p>
      <p className="meta">01 octobre 2026 · Ahmed Bey Zenith, Constantine, Algérie</p>
    </div>
  </div>
  <div style={{background:"#fff"}}>
    <div className="container">
      <div className="about-grid">
        <div>
          <div style={{maxWidth:"640px"}}>
            <div style={{display:"flex",alignItems:"center",gap:".75rem"}}><span style={{height:"1px",width:"24px",background:"#023DA5"}}></span><p style={{margin:"0",fontSize:"11px",letterSpacing:".16em",textTransform:"uppercase",fontWeight:"600",color:"#023DA5"}}>Introduction</p></div>
            <h2 style={{marginTop:".75rem",fontFamily:"inherit",fontSize:"26px",lineHeight:"1.15",letterSpacing:"-.02em",color:"#0F1D3A"}}>Une rencontre scientifique au service de l'évolution de la gastroentérologie</h2>
            <p style={{marginTop:".75rem",fontSize:"14px",lineHeight:"1.6",color:"#475569"}}>Les CGEL Scientific Days rassemblent la communauté gastroentérologique pour examiner comment l'innovation médicale — notamment l'intelligence artificielle et la santé connectée — repousse les limites du diagnostic, du soin et de la pratique clinique.</p>
          </div>
          <div style={{marginTop:"1.5rem",display:"flex",flexDirection:"column",gap:"1rem",fontSize:"14px",lineHeight:"1.8",color:"#475569"}}>
            <p>La <strong style={{color:"#0F1D3A"}}>3<sup>e</sup> Édition</strong> porte sur <strong style={{color:"#0F1D3A"}}>« La gastroentérologie à l'ère de l'intelligence artificielle et de la santé connectée »</strong> — avec le slogan <em style={{color:"#0F1D3A"}}>« De l'innovation médicale au soin intelligent »</em>. Le programme explore comment les données, les outils intelligents et la médecine numérique complètent l'expertise clinique sans remplacer la dimension humaine du soin.</p>
            <p>Organisé par <strong style={{color:"#0F1D3A"}}>le CGEL</strong> avec <strong style={{color:"#0F1D3A"}}>un partenariat universitaire</strong> comme partenaire scientifique, l'événement s'adresse aux hépato-gastroentérologues, hépatologues, médecins généralistes, pharmaciens, infirmiers, chercheurs, étudiants et partenaires institutionnels.</p>
          </div>
          <div className="themes-box">
            <div className="head"><h3>Thèmes clés</h3></div>
            <ul className="themes-grid">
              <li>— Diagnostic assisté par l’IA</li>
              <li>— Santé intelligente et outils numériques</li>
              <li>— Endoscopie intelligente</li>
              <li>— Médecine fondée sur les données</li>
              <li>— Support aux décisions cliniques</li>
              <li>— Médecine personnalisée</li>
              <li>— Imagerie médicale</li>
              <li>— Santé future</li>
            </ul>
          </div>
          <a href="/registration" className="btn btn-orange" style={{marginTop:"2rem"}}>S'inscrire</a>
        </div>
        <div style={{display:"flex",flexDirection:"column",gap:"1rem"}}>
          <div className="sidebar-card">
            <div className="head"><h3>En bref</h3></div>
            <dl>
              <div className="row"><dt>Événement</dt><dd>CGEL Scientific Days — 3<sup>e</sup> Édition</dd></div>
              <div className="row"><dt>Thème</dt><dd>Gastroentérologie à l'ère de l'IA &amp; Santé connectée</dd></div>
              <div className="row"><dt>Date</dt><dd>01 oct. 2026</dd></div>
              <div className="row"><dt>Lieu</dt><dd>Ahmed Bey Zenith, Constantine</dd></div>
              <div className="row"><dt>Organisateur</dt><dd>CGEL</dd></div>
              <div className="row"><dt>Partenaire</dt><dd>Université Constantine 2 Abdelhamid Mehri et Faculté NTIC</dd></div>
            </dl>
            <div style={{padding:"1rem",borderTop:"1px solid #E2E8F0"}}><a href="/program" className="btn btn-navy" style={{width:"100%"}}>Voir le programme scientifique</a></div>
          </div>
          <div className="sidebar-image">
            <img src="/images/events/showcasepic.jpeg" alt="Auditoire lors d'un congrès CGEL — salle plénière" loading="lazy" />
            <div className="foot">
              <div style={{display:"flex", flexDirection:"column", alignItems:"center", gap:".25rem"}}><img src="/cgel.svg" alt="CGEL Logo" style={{height:"32px", width:"auto"}} /><p style={{margin:"0",fontSize:"11px",fontWeight:"700",color:"#0F1D3A"}}>CGEL</p><p className="label">Organisateur</p></div>
              <div><div className="partner-logos"><img src="/logo/uc2.png" alt="Université Constantine 2" loading="lazy" style={{height:"28px"}} /><img src="/logo/ntic.png" alt="NTIC" loading="lazy" style={{height:"28px"}} /></div><p className="label">Partenaire scientifique</p></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
    </>
  );
}

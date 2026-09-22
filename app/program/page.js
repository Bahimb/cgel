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

import ProgramClient from "./ProgramClient";

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
      <ProgramClient />
    </>
  );
}

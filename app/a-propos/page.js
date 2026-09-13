export const metadata = {
  title: "À propos — CGEL",
  description: "À propos du CGEL — Collège des Hépato-Gastroentérologues et Endoscopistes Libéraux de l'Est : présentation, mission et valeurs du collège.",
  openGraph: {
    title: "À propos — CGEL",
    description: "À propos du CGEL — Collège des Hépato-Gastroentérologues et Endoscopistes Libéraux de l'Est : présentation, mission et valeurs du collège.",
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
      <h1>Collège des Hépato-Gastroentérologues et Endoscopistes Libéraux de l'Est</h1>
      <p className="lead">Un collège professionnel qui fédère, forme et représente la gastroentérologie libérale de l'Est algérien depuis 2018.</p>
    </div>
  </div>

  {/* Notre histoire + Mission */}
  <section className="apropos-detail">
    <div className="container">
      <div className="detail-grid">
        <div className="detail-block">
          <h3><span className="accent"></span>Notre histoire</h3>
          <p>Fondé en <strong>2018 à Constantine</strong> par un groupe de gastroentérologues et endoscopistes libéraux de l'Est, le CGEL est né d'un constat simple : la pratique libérale avait besoin d'une voix collective, d'un lieu d'échange et d'une structure dédiée à la formation continue.</p>
          <p>De 12 membres fondateurs réunis autour d'une table à l'hôtel Cirta, le collège compte aujourd'hui <strong>plus de 80 membres actifs</strong> répartis sur 12 wilayas. En 2021, il lance ses premières <em>Journées scientifiques</em> ; en 2024, la 2<sup>e</sup> édition réunit 180 participants et 10 laboratoires partenaires.</p>
          <p>Le CGEL a tissé un partenariat structurant avec <strong>l'Université Constantine 2 Abdelhamid Mehri</strong> et la <strong>Faculté des Nouvelles Technologies (NTIC)</strong>, posant les bases de la 3<sup>e</sup> édition 2026 sur le thème <em>« Gastroentérologie à l'ère de l'IA &amp; santé connectée »</em>.</p>
        </div>
        <div className="detail-block">
          <h3><span className="accent"></span>Notre mission</h3>
          <p>Accompagner l'excellence clinique en libéral, faire progresser les connaissances et défendre les intérêts de la spécialité auprès des institutions et du public.</p>
          <div style={{marginTop:"1rem",display:"flex",flexDirection:"column",gap:".75rem"}}>
            <div style={{display:"flex",gap:".75rem"}}><span style={{marginTop:".35rem",height:"2px",width:"24px",background:"var(--primary)",flexShrink:"0"}}></span><div><strong style={{fontSize:"12px",color:"var(--fg)"}}>Formation continue</strong><p style={{margin:".2rem 0 0",fontSize:"11.5px",color:"var(--muted)"}}>CGEL Days, ateliers d'endoscopie, webinaires et mises à jour des recommandations — adaptés à la réalité du cabinet libéral.</p></div></div>
            <div style={{display:"flex",gap:".75rem"}}><span style={{marginTop:".35rem",height:"2px",width:"24px",background:"var(--primary)",flexShrink:"0"}}></span><div><strong style={{fontSize:"12px",color:"var(--fg)"}}>Échange scientifique</strong><p style={{margin:".2rem 0 0",fontSize:"11.5px",color:"var(--muted)"}}>Partage de cas, relecture d'imagerie, registre prospectif Est et réseau d'entraide inter-wilayas.</p></div></div>
            <div style={{display:"flex",gap:".75rem"}}><span style={{marginTop:".35rem",height:"2px",width:"24px",background:"var(--primary)",flexShrink:"0"}}></span><div><strong style={{fontSize:"12px",color:"var(--fg)"}}>Représentation</strong><p style={{margin:".2rem 0 0",fontSize:"11.5px",color:"var(--muted)"}}>Porte-voix de la spécialité auprès des autorités sanitaires, des facultés et des partenaires industriels.</p></div></div>
          </div>
        </div>
      </div>

      {/* Zone d'action */}
      <div className="detail-block" style={{marginTop:"1.5rem"}}>
        <h3><span className="accent"></span>Zone d'action — l'Est en réseau</h3>
        <p>Le CGEL couvre l'ensemble du grand Est, avec des membres présents et actifs dans les wilayas suivantes. Cette maille permet une formation de proximité et une meilleure coordination des soins.</p>
        <div className="zone-list">
          <span>Constantine</span><span>Annaba</span><span>Batna</span><span>Sétif</span><span>Biskra</span><span>Tébessa</span><span>Guelma</span><span>Skikda</span><span>Oum El Bouaghi</span><span>Khenchela</span><span>Mila</span><span>Souk Ahras</span>
        </div>
        <p style={{marginTop:".9rem",fontSize:"11px",color:"#94A3B8"}}>* Liste indicative — adhésions ouvertes aux wilayas limitrophes. Carte interactive à venir.</p>
      </div>

      {/* Le bureau */}
      <div style={{marginTop:"1.5rem"}}>
        <div style={{display:"flex",alignItems:"center",gap:".75rem",marginBottom:"1rem"}}><span style={{height:"1px",width:"32px",background:"var(--orange)"}}></span><span style={{fontSize:"11px",letterSpacing:".16em",textTransform:"uppercase",fontWeight:"600",color:"var(--primary)"}}>Gouvernance</span></div>
        <h3 style={{margin:"0",fontSize:"20px",letterSpacing:"-.02em",color:"var(--fg)"}}>Le bureau — mandat 2024-2026</h3>
        <p style={{marginTop:".4rem",fontSize:"11.5px",color:"var(--muted2)",maxWidth:"640px"}}>Élu en assemblée générale, le bureau assure le pilotage scientifique, administratif et partenarial du collège. Mandat de 2 ans, renouvelable.</p>
        <div className="bureau-grid" style={{marginTop:"1.25rem"}}>
          {/* Member 1 */}
          <div className="member-card">
            <div className="head"><div className="avatar"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><circle cx="12" cy="8" r="4"/><path d="M4 20a8 8 0 0 1 16 0"/></svg></div></div>
            <div className="body"><h4>Dr. Sami Haddad</h4><p className="role">Président</p><p className="bio">Gastroentérologue libéral à Constantine, 15 ans d'exercice. DIU d'endoscopie interventionnelle. Pilote le projet CGEL Days et les relations institutionnelles.</p></div>
            <div className="foot">Constantine · libéral · membre fondateur 2018</div>
          </div>
          {/* Member 2 */}
          <div className="member-card">
            <div className="head"><div className="avatar"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><circle cx="12" cy="8" r="4"/><path d="M4 20a8 8 0 0 1 16 0"/></svg></div></div>
            <div className="body"><h4>Dr. Nadia Benali</h4><p className="role">Vice-Présidente</p><p className="bio">Hépato-gastroentérologue à Annaba. Enseignante associée, référente hépatites virales. Coordonne le programme scientifique et le conseil médical.</p></div>
            <div className="foot">Annaba · CHU &amp; libéral · registre Est</div>
          </div>
          {/* Member 3 */}
          <div className="member-card">
            <div className="head"><div className="avatar"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><circle cx="12" cy="8" r="4"/><path d="M4 20a8 8 0 0 1 16 0"/></svg></div></div>
            <div className="body"><h4>Dr. Yacine Merabet</h4><p className="role">Secrétaire Général</p><p className="bio">Endoscopiste à Sétif, formé à l'écho-endoscopie. En charge de la vie du collège, des adhésions et de la communication.</p></div>
            <div className="foot">Sétif · libéral · CGEL depuis 2019</div>
          </div>
          {/* Member 4 */}
          <div className="member-card">
            <div className="head"><div className="avatar"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><circle cx="12" cy="8" r="4"/><path d="M4 20a8 8 0 0 1 16 0"/></svg></div></div>
            <div className="body"><h4>Dr. Leila Toumi</h4><p className="role">Trésorière</p><p className="bio">Gastroentérologue à Batna, gestionnaire de cabinet de groupe. Supervise le budget, les partenariats et la logistique des journées.</p></div>
            <div className="foot">Batna · libéral · trésorerie depuis 2022</div>
          </div>
          {/* Member 5 */}
          <div className="member-card">
            <div className="head"><div className="avatar"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><circle cx="12" cy="8" r="4"/><path d="M4 20a8 8 0 0 1 16 0"/></svg></div></div>
            <div className="body"><h4>Dr. Karim Bensalah</h4><p className="role">Chargé de la formation</p><p className="bio">Hépatologue à Biskra, DU de maladies métaboliques du foie. Conçoit les ateliers DPC et le compagnonnage jeunes médecins.</p></div>
            <div className="foot">Biskra · libéral · DPC &amp; compagnonnage</div>
          </div>
          {/* Member 6 */}
          <div className="member-card">
            <div className="head"><div className="avatar"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><circle cx="12" cy="8" r="4"/><path d="M4 20a8 8 0 0 1 16 0"/></svg></div></div>
            <div className="body"><h4>Dr. Amira Zerrouki</h4><p className="role">Chargée des partenariats &amp; communication</p><p className="bio">Gastroentérologue à Guelma, alumni NTIC. Porte la campagne grand public et le lien avec l'Université Constantine 2.</p></div>
            <div className="foot">Guelma · libéral · communication &amp; NTIC</div>
          </div>
        </div>
        <p style={{marginTop:"1rem",fontSize:"11px",color:"#94A3B8",textAlign:"center"}}>Photos et biographies détaillées à remplacer par vos contenus réels. Icônes génériques utilisées en attendant.</p>
      </div>
    </div>
  </section>
    </>
  );
}

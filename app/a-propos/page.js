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
          <p>Le CGEL a tissé un partenariat structurant avec <strong>l'Université Constantine 2 Abdelhamid Mehri</strong> et la <strong>Faculté des Nouvelles Technologies (NTIC)</strong>, posant les bases de la 3<sup>e</sup> édition 2026 du <strong>CGEL Scientific Days</strong> sur le thème <em>« Gastroentérologie à l'ère de l'IA &amp; santé connectée »</em>.</p>
        </div>
        <div className="detail-block">
          <h3><span className="accent"></span>Notre mission</h3>
          <p>Accompagner l'excellence clinique en libéral, faire progresser les connaissances et défendre les intérêts de la spécialité auprès des institutions et du public.</p>
          <div style={{marginTop:"1rem",display:"flex",flexDirection:"column",gap:".75rem"}}>
            <div style={{display:"flex",gap:".75rem"}}><span style={{marginTop:".35rem",height:"2px",width:"24px",background:"var(--primary)",flexShrink:"0"}}></span><div><strong style={{fontSize:"12px",color:"var(--fg)"}}>Formation continue</strong><p style={{margin:".2rem 0 0",fontSize:"11.5px",color:"var(--muted)"}}>CGEL Scientific Days, ateliers d'endoscopie, webinaires et mises à jour des recommandations — adaptés à la réalité du cabinet libéral.</p></div></div>
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

      {/* CGEL logo — fixed rendering */}
      <div style={{display:"flex", alignItems:"center", justifyContent:"center", gap:"1rem", marginTop:"2rem", padding:"1.25rem", background:"#F8FAFC", border:"1px solid var(--line2)"}}>
        <img src="/cgel.svg" alt="CGEL Logo" style={{height:"64px", width:"auto"}} />
        <div style={{textAlign:"left"}}>
          <p style={{margin:"0", fontSize:"14px", fontWeight:"700", letterSpacing:".08em", color:"var(--primary)"}}>CGEL</p>
          <p style={{margin:"0", fontSize:"11px", letterSpacing:".12em", textTransform:"uppercase", color:"var(--muted)"}}>Collège professionnel — Est</p>
        </div>
      </div>

      {/* Le bureau — real photos from /images/events/ */}
      <div style={{marginTop:"1.5rem"}}>
        <div style={{display:"flex",alignItems:"center",gap:".75rem",marginBottom:"1rem"}}><span style={{height:"1px",width:"32px",background:"var(--orange)"}}></span><span style={{fontSize:"11px",letterSpacing:".16em",textTransform:"uppercase",fontWeight:"600",color:"var(--primary)"}}>Gouvernance</span></div>
        <h3 style={{margin:"0",fontSize:"20px",letterSpacing:"-.02em",color:"var(--fg)"}}>Le bureau — mandat 2024-2026</h3>
        <p style={{marginTop:".4rem",fontSize:"11.5px",color:"var(--muted2)",maxWidth:"640px"}}>Élu en assemblée générale, le bureau assure le pilotage scientifique, administratif et partenarial du collège. Mandat de 2 ans, renouvelable.</p>
        <div className="bureau-grid" style={{marginTop:"1.25rem"}}>
          {/* Member 1 — photo from events */}
          <div className="member-card">
            <div className="head" style={{height:"160px", overflow:"hidden", padding:"0", borderBottom:"1px solid var(--line2)"}}><img src="/images/events/showcasepic.jpeg" alt="Bureau CGEL — membre" style={{width:"100%", height:"100%", objectFit:"cover"}} /></div>
            <div className="body"><h4>Dr. Sami Haddad</h4><p className="role">Président</p><p className="bio">Gastroentérologue libéral à Constantine. DIU d'endoscopie interventionnelle. Pilote le projet CGEL Scientific Days et les relations institutionnelles.</p></div>
            <div className="foot">Constantine · libéral · membre fondateur 2018</div>
          </div>
          {/* Member 2 */}
          <div className="member-card">
            <div className="head" style={{height:"160px", overflow:"hidden", padding:"0", borderBottom:"1px solid var(--line2)"}}><img src="/images/avatar.png" alt="Bureau CGEL — membre" style={{width:"100%", height:"100%", objectFit:"cover"}} /></div>
            <div className="body"><h4>Nom Prenom</h4><p className="role">Profile du membre</p><p className="bio">Description du membre.<br/>va apparaitre ici</p></div>
            <div className="foot">Constantine · libéral · membre fondateur 2018</div>
          </div>
          {/* Member 3 */}
          <div className="member-card">
            <div className="head" style={{height:"160px", overflow:"hidden", padding:"0", borderBottom:"1px solid var(--line2)"}}><img src="/images/avatar.png" alt="Bureau CGEL — membre" style={{width:"100%", height:"100%", objectFit:"cover"}} /></div>
            <div className="body"><h4>Nom Prenom</h4><p className="role">Profile du membre</p><p className="bio">Description du membre.<br/>va apparaitre ici</p></div>
            <div className="foot">Constantine · libéral · membre fondateur 2018</div>
          </div>
          {/* Member 4 */}
          <div className="member-card">
            <div className="head" style={{height:"160px", overflow:"hidden", padding:"0", borderBottom:"1px solid var(--line2)"}}><img src="/images/avatar.png" alt="Bureau CGEL — membre" style={{width:"100%", height:"100%", objectFit:"cover"}} /></div>
            <div className="body"><h4>Nom Prenom</h4><p className="role">Profile du membre</p><p className="bio">Description du membre.<br/>va apparaitre ici</p></div>
            <div className="foot">Constantine · libéral · membre fondateur 2018</div>
          </div>
          {/* Member 5 */}
          <div className="member-card">
            <div className="head" style={{height:"160px", overflow:"hidden", padding:"0", borderBottom:"1px solid var(--line2)"}}><img src="/images/avatar.png" alt="Bureau CGEL — membre" style={{width:"100%", height:"100%", objectFit:"cover"}} /></div>
            <div className="body"><h4>Nom Prenom</h4><p className="role">Profile du membre</p><p className="bio">Description du membre.<br/>va apparaitre ici</p></div>
            <div className="foot">Constantine · libéral · membre fondateur 2018</div>
          </div>
          {/* Member 6 */}
          <div className="member-card">
            <div className="head" style={{height:"160px", overflow:"hidden", padding:"0", borderBottom:"1px solid var(--line2)"}}><img src="/images/avatar.png" alt="Bureau CGEL — membre" style={{width:"100%", height:"100%", objectFit:"cover"}} /></div>
            <div className="body"><h4>Nom Prenom</h4><p className="role">Profile du membre </p><p className="bio">Description du membre.<br/>va apparaitre ici</p></div>
            <div className="foot">Constantine · libéral · membre fondateur 2018</div>
          </div>
        </div>
      </div>
    </div>
  </section>
    </>
  );
}

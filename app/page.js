export const metadata = {
  title: "CGEL — Collège des Hépato-Gastroentérologues et Endoscopistes Libéraux de l'Est",
  description: "CGEL : le collège des hépato-gastroentérologues et endoscopistes libéraux de l'Est. Événements, projets et actualités de la gastroentérologie libérale.",
  openGraph: {
    title: "CGEL — Collège des Hépato-Gastroentérologues et Endoscopistes Libéraux de l'Est",
    description: "CGEL : le collège des hépato-gastroentérologues et endoscopistes libéraux de l'Est.",
    type: "website",
    locale: "fr_FR",
    url: "https://cgel-gastro.com",
  },
};

export default function Page() {
  return (
    <>
      {/* HERO */}
<section className="hero-section">
  <div className="container">
    <div style={{height:"12px"}}></div>
    {/* Institution header */}
    <div className="hero-intro">
      <div className="hero-logo-row">
        <span className="line" aria-hidden="true"></span>
        <img src="/cgel.svg" alt="CGEL Logo" />
        <span className="line" aria-hidden="true"></span>
      </div>
      <p className="kicker" data-i18n="hero.kicker">Collège des Hépato-Gastroentérologues</p>
      <p className="kicker2" data-i18n="hero.kicker2">et Endoscopistes Libéraux de l'Est</p>
      <p className="tagline" data-i18n="hero.tagline">au service de la gastroentérologie libérale — formation, échange scientifique et représentation de la spécialité.</p>
    </div>

    {/* Carousel */}
    <div className="carousel-wrap" id="heroCarousel" aria-roledescription="carousel" aria-label="CGEL Scientific Days — carrousel">
      <div className="carousel-marquee-glow" aria-hidden="true"></div>
      <div className="carousel-frame">
        <button type="button" id="carouselPrev" className="carousel-btn prev" aria-label="Slide précédent">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m15 18-6-6 6-6"/></svg>
        </button>
        <button type="button" id="carouselNext" className="carousel-btn next" aria-label="Slide suivant">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m9 18 6-6-6-6"/></svg>
        </button>

        <div className="carousel-card">
          <div className="carousel-inner">
            {/* Slide 1 — expertise (light with image) — previously slide 2 */}
            <div className="carousel-slide active" role="group" aria-roledescription="slide" aria-label="1 sur 2">
              <div className="slide-expertise">
                <div className="left">
                  <div className="carousel-badge-row">
                    <span className="badge-navy" data-i18n="carousel.expertise.badge">Au cœur de la spécialité</span>
                    <span className="badge-edition dark" data-i18n="carousel.edition">· 3<sup>e</sup> édition</span>
                  </div>
                  <h2 className="carousel-title carousel-title--dark">
                    <span className="line1 small" data-i18n="carousel.expertise.title1">CGEL Scientific Days — 3e édition</span>
                    <span className="line2" data-i18n="carousel.expertise.title2">Journées scientifiques du collège</span>
                  </h2>
                  <p className="carousel-desc carousel-desc--dark" data-i18n="carousel.expertise.desc">L'excellence en hépato-gastroentérologie libérale</p>
                  <div className="carousel-meta">
                    <span className="meta-pill dark"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4"/><path d="M8 2v4"/><path d="M3 10h18"/></svg> Jeudi 1 octobre 2026</span>
                    <span className="meta-pill dark"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg> Ahmed Bey Zenith, Constantine</span>
                  </div>
                  <span className="carousel-chiffre dark" data-i18n="carousel.chiffre.expertise">Formation · Échange · Innovation</span>
                  <div className="carousel-ctas">
                    <a href="/registration" className="btn btn-orange" data-i18n="carousel.cta.register">S'inscrire</a>
                    <a href="/a-propos" className="btn btn-outline" data-i18n="carousel.cta.discover">Découvrir le collège</a>
                  </div>
                  <div className="carousel-orgs dark" style={{marginTop:"1rem"}}>
                    <div className="org">
                      <img src="/cgel.svg" alt="Organisateur" style={{height:"48px",width:"auto",objectFit:"contain"}} />
                      <p style={{fontSize:"10px",color:"#64748B"}} data-i18n="carousel.org.organizer">Organisateur</p>
                    </div>
                    <div className="org">
                      <div className="partner-logos">
                        <img src="/logo/uc2.png" alt="Universite Constantine 2 Abdelhamid Mehri" loading="lazy" />
                        <img src="/logo/ntic.png" alt="Faculte des Nouvelles Technologies de l'Information et de la Communication" loading="lazy" />
                      </div>
                      <p style={{fontSize:"10px",color:"#64748B"}} data-i18n="carousel.org.partner">Partenaire scientifique</p>
                    </div>
                  </div>
                </div>
                <div className="right">
                  <div className="grad" aria-hidden="true"></div>
                  <img src="/images/gcel-digestive-system.png" alt="Illustration système digestif — gastroentérologie CGEL" />
                </div>
                <div className="mobile-img">
                  <div className="box"><img src="/images/gcel-digestive-system.png" alt="Illustration système digestif" /></div>
                </div>
              </div>
            </div>

            {/* Slide Programme — redesigned for no clipping and clear hierarchy */}
            <div className="carousel-slide" role="group" aria-roledescription="slide" aria-label="2 sur 2" aria-hidden="true">
              <div className="glow" aria-hidden="true"></div>
              <div className="slide-program" style={{position:"relative",zIndex:"1",gap:"0.5rem"}}>
                <div className="poster" style={{padding:"1.25rem", flexBasis:"40%"}}>
                  <div className="frame" style={{maxWidth:"320px", padding:"10px"}}><img src="/images/gcel-poster.png" alt="Affiche officielle CGEL Scientific Days — 3e édition" /></div>
                </div>
                <div className="text" style={{gap:"0.9rem", padding:"1.25rem 1.25rem 1.25rem 1rem", justifyContent:"center"}}>
                  <div className="carousel-badge-row" style={{paddingTop:"4px", gap:"0.5rem"}}>
                    <span className="badge-orange" data-i18n="carousel.program.badge">Programme</span>
                    <span className="badge-edition" data-i18n="carousel.edition">· 3<sup>e</sup> édition</span>
                  </div>
                  <div>
                    <h2 className="carousel-title" style={{marginTop:"0"}}>
                      <span className="line1 small" data-i18n="carousel.expertise.title1">CGEL Scientific Days — 3e édition</span>
                      <span className="line2" data-i18n="carousel.expertise.title2">Journées scientifiques du collège</span>
                    </h2>
                    <p className="carousel-desc" data-i18n="carousel.program.desc" style={{marginTop:"0.75rem"}}>De l'innovation médicale au soin intelligent</p>
                  </div>
                  <div className="carousel-meta" style={{marginTop:"0", gap:"0.5rem"}}>
                    <span className="meta-pill"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4"/><path d="M8 2v4"/><path d="M3 10h18"/></svg> Jeudi 1 octobre 2026</span>
                    <span className="meta-pill"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg> Ahmed Bey Zenith, Constantine</span>
                  </div>
                  <span className="carousel-chiffre" data-i18n="carousel.program.chiffre">Conférences · Ateliers · Échanges</span>
                  <div className="carousel-ctas" style={{marginTop:"0"}}>
                    <a href="/registration" className="btn btn-orange" data-i18n="carousel.cta.register">S'inscrire</a>
                    <a href="/a-propos" className="btn btn-white-trans" data-i18n="carousel.cta.discover">Découvrir le collège</a>
                  </div>
                  <div className="carousel-orgs" style={{marginTop:"0.75rem", paddingTop:"1rem", borderTop:"1px solid rgba(255,255,255,.15)", gap:"1.5rem"}}>
                    <div className="org">
                      <img src="/cgel.svg" alt="CGEL — Organisateur" style={{height:"48px",width:"auto",objectFit:"contain"}} />
                      <p data-i18n="carousel.org.organizer" style={{fontSize:"10px", color:"#64748B"}}>Organisateur</p>
                    </div>
                    <div className="org">
                      <div className="partner-logos">
                        <img src="/logo/uc2.png" alt="Universite Constantine 2 Abdelhamid Mehri" loading="lazy" />
                        <img src="/logo/ntic.png" alt="Faculte des Nouvelles Technologies de l'Information et de la Communication" loading="lazy" />
                      </div>
                      <p style={{fontSize:"10px",color:"#64748B"}} data-i18n="carousel.org.partner">Partenaire scientifique</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        <div className="carousel-dots">
          <button type="button" data-dot className="active" aria-label="Aller au slide 1" aria-current="true"></button>
          <button type="button" data-dot aria-label="Aller au slide 2"></button>
          <span className="counter" id="carouselCounter">01 / 02</span>
        </div>
      </div>
    </div>

    {/* Marquee */}
    <div className="marquee-section">
      <div className="marquee-header">
        <p data-i18n="marquee.title">Ils soutiennent le collège</p>
        <div className="line" aria-hidden="true"></div>
      </div>
      <div className="marquee-box marquee-container">
        <div className="marquee-fade-left" aria-hidden="true"></div>
        <div className="marquee-fade-right" aria-hidden="true"></div>
        <div className="marquee-track">
          {/* two copies for loop */}
          <div className="marquee-item"><img src="/logo/logosponsor/astrazeneca.png" alt="AstraZeneca" loading="lazy" /></div>
          <div className="marquee-item"><img src="/logo/logosponsor/biopharm.png" alt="Biopharm" loading="lazy" /></div>
          <div className="marquee-item"><img src="/logo/logosponsor/dermilyne.png" alt="Dermilyne" loading="lazy" /></div>
          <div className="marquee-item"><img src="/logo/logosponsor/krays.png" alt="Krays" loading="lazy" /></div>
          <div className="marquee-item"><img src="/logo/logosponsor/mayoly.PNG" alt="Mayoly" loading="lazy" /></div>
          <div className="marquee-item"><img src="/logo/logosponsor/nadpharmaclic.png" alt="Nadpharmaclic" loading="lazy" /></div>
          <div className="marquee-item"><img src="/logo/logosponsor/repartidis.png" alt="Repartidis" loading="lazy" /></div>
          <div className="marquee-item"><img src="/logo/logosponsor/salem.PNG" alt="Salem" loading="lazy" /></div>
          <div className="marquee-item"><img src="/logo/logosponsor/merinal.png" alt="Partenaire" loading="lazy" /></div>
          <div className="marquee-item"><img src="/logo/logosponsor/yovene.png" alt="Yovene" loading="lazy" /></div>
          <div className="marquee-item"><img src="/logo/logosponsor/astrazeneca.png" alt="AstraZeneca" loading="lazy" /></div>
          <div className="marquee-item"><img src="/logo/logosponsor/biopharm.png" alt="Biopharm" loading="lazy" /></div>
          <div className="marquee-item"><img src="/logo/logosponsor/dermilyne.png" alt="Dermilyne" loading="lazy" /></div>
          <div className="marquee-item"><img src="/logo/logosponsor/krays.png" alt="Krays" loading="lazy" /></div>
          <div className="marquee-item"><img src="/logo/logosponsor/mayoly.PNG" alt="Mayoly" loading="lazy" /></div>
          <div className="marquee-item"><img src="/logo/logosponsor/nadpharmaclic.png" alt="Nadpharmaclic" loading="lazy" /></div>
          <div className="marquee-item"><img src="/logo/logosponsor/repartidis.png" alt="Repartidis" loading="lazy" /></div>
          <div className="marquee-item"><img src="/logo/logosponsor/salem.PNG" alt="Salem" loading="lazy" /></div>
          <div className="marquee-item"><img src="/logo/logosponsor/merinal.png" alt="Partenaire" loading="lazy" /></div>
          <div className="marquee-item"><img src="/logo/logosponsor/yovene.png" alt="Yovene" loading="lazy" /></div>
        </div>
      </div>
    </div>

    <div style={{height:"8px"}}></div>
  </div>
</section>

<div className="wave-divider" aria-hidden="true">
  <svg viewBox="0 0 1440 28" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 14 C 320 4, 640 24, 960 14 S 1280 4, 1440 14" fill="none" stroke="#E8EDF3" strokeWidth="1" opacity="0.8"/><circle cx="720" cy="14" r="1.4" fill="#36C0E7" opacity="0.9"/><circle cx="710" cy="14" r="0.8" fill="#F08444" opacity="0.9"/><circle cx="730" cy="14" r="0.8" fill="#023DA5" opacity="0.9"/></svg>
</div>

{/* À PROPOS */}
<section className="section-apropos">
  <div className="container">
    <div className="apropos-grid">
      <div className="apropos-left">
        <div className="apropos-kicker"><span className="line"></span><span data-i18n="about.kicker">À propos</span></div>
        <h2 className="apropos-title">
          <span data-i18n="about.title1">Le collège</span>
          <span data-i18n="about.title2">en bref</span>
        </h2>
        <div className="apropos-text">
          <p data-i18n="about.text1"><strong>CGEL</strong> fédère les hépato-gastroentérologues et endoscopistes libéraux de l'Est. Notre mission : soutenir la pratique libérale, favoriser la formation continue et porter la voix de la spécialité auprès des institutions.</p>
          <p className="light" data-i18n="about.text2">Le collège organise des rencontres scientifiques, développe des projets pour la profession et accompagne ses membres au quotidien. Ce site est en cours d'enrichissement — chaque section sera complétée prochainement.</p>
        </div>
        <p className="apropos-quote" data-i18n="about.quote">“Faire progresser ensemble la gastroentérologie libérale de l'Est.”</p>
      </div>
      <div className="apropos-right">
        <div className="mission-card">
          <div className="mission-card-inner">
            <div className="mission-card-body">
              <div className="apropos-kicker"><span className="line"></span><span data-i18n="mission.title">Notre mission</span></div>
              <ul>
                <li><span className="bar"></span><span><strong data-i18n="mission.formation">Formation</strong><span className="desc" data-i18n="mission.formationDesc">Valoriser la formation continue et l'actualisation des pratiques.</span></span></li>
                <li><span className="bar"></span><span><strong data-i18n="mission.exchange">Échange</strong><span className="desc" data-i18n="mission.exchangeDesc">Créer des lieux de partage et de discussion entre professionnels.</span></span></li>
                <li><span className="bar"></span><span><strong data-i18n="mission.representation">Représentation</strong><span className="desc" data-i18n="mission.representationDesc">Défendre les intérêts de la spécialité en pratique libérale.</span></span></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="pillars">
      <div className="pillar">
        <div className="top-line"></div>
        <div className="icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/><path d="M4 20a8 8 0 0 1 16 0"/><path d="M2 10h3"/><path d="M19 10h3"/><path d="M12 2v2"/><path d="M7 6l1 1"/><path d="M16 7l1-1"/></svg></div>
        <div>
          <div style={{display:"flex",alignItems:"center",gap:".5rem"}}><span className="num">01</span><span className="sep"></span></div>
          <h3 data-i18n="pillars.formation">Formation continue</h3>
          <p data-i18n="pillars.formationDesc">Des journées scientifiques et des mises à jour adaptées à la pratique libérale.</p>
        </div>
      </div>
      <div className="pillar">
        <div className="top-line"></div>
        <div className="icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="12" cy="7" r="3"/><path d="M3 20a9 9 0 0 1 18 0"/><path d="M8 14a4 4 0 0 0 8 0"/></svg></div>
        <div>
          <div style={{display:"flex",alignItems:"center",gap:".5rem"}}><span className="num">02</span><span className="sep"></span></div>
          <h3 data-i18n="pillars.exchange">Échange scientifique</h3>
          <p data-i18n="pillars.exchangeDesc">Un réseau de professionnels qui partagent leurs expériences et leurs cas.</p>
        </div>
      </div>
      <div className="pillar">
        <div className="top-line"></div>
        <div className="icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg></div>
        <div>
          <div style={{display:"flex",alignItems:"center",gap:".5rem"}}><span className="num">03</span><span className="sep"></span></div>
          <h3 data-i18n="pillars.life">Vie de la spécialité</h3>
          <p data-i18n="pillars.lifeDesc">Représentation de la gastroentérologie et de la pratique libérale de l'Est.</p>
        </div>
      </div>
    </div>
    <div style={{height:"8px"}}></div>
  </div>
</section>

<div className="wave-divider" aria-hidden="true"><svg viewBox="0 0 1440 28" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 14 C 320 4, 640 24, 960 14 S 1280 4, 1440 14" fill="none" stroke="#E8EDF3" strokeWidth="1" opacity="0.8"/><circle cx="720" cy="14" r="1.4" fill="#36C0E7" opacity="0.9"/><circle cx="710" cy="14" r="0.8" fill="#F08444" opacity="0.9"/><circle cx="730" cy="14" r="0.8" fill="#023DA5" opacity="0.9"/></svg></div>


{/* Past Events — 3 real events, taller posters */}
<section className="past-events" id="pastEvents">
  <div className="container">
    <div className="past-events-header"><span className="line" aria-hidden="true"></span><span>Événements passés</span></div>
    <h2>Retour en images — nos événements passés</h2>
    <p className="sub">Trois moments forts du CGEL — affiches lisibles en grand format.</p>
    <div className="past-events-grid" style={{marginTop:"1.5rem", gridTemplateColumns:"repeat(auto-fit, minmax(280px, 1fr))", gap:"1.5rem"}}>
      <div className="event-card" style={{border:"1px solid var(--line2)"}}>
        <div className="img" style={{aspectRatio:"3/4.2", background:"#fff", padding:"8px"}}><img src="/images/events/eventposter1.jpeg" alt="Affiche 2ème Journée de Formation Médicale Continue CGEL" loading="lazy" style={{objectFit:"contain", background:"#fff"}} /></div>
        <div className="cap" style={{padding:"1rem"}}>
          <h3 style={{fontSize:"13px", fontWeight:"700", whiteSpace:"normal"}}>2ème Journée de Formation Médicale Continue CGEL</h3>
          <p style={{marginTop:".35rem", display:"flex", alignItems:"center", gap:".35rem", fontSize:"11px"}}><span style={{color:"var(--primary)", display:"inline-flex"}}><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4"/><path d="M8 2v4"/><path d="M3 10h18"/></svg></span> 25–26 septembre 2025</p>
          <p style={{display:"flex", alignItems:"center", gap:".35rem", fontSize:"11px"}}><span style={{color:"var(--primary)"}}><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg></span> Hôtel El Hocine, Constantine</p>
          <p style={{marginTop:".6rem", fontSize:"11.5px", lineHeight:"1.6", whiteSpace:"normal", color:"var(--muted)"}}>Deux jours de formation et d’échanges scientifiques autour de la gastroentérologie libérale, à l’Hôtel El Hocine.</p>
        </div>
      </div>
      <div className="event-card">
        <div className="img" style={{aspectRatio:"3/4.2", background:"#fff", padding:"8px"}}><img src="/images/events/eventposter.jpeg" alt="Affiche Proctologie clinique pour le médecin généraliste — 1ère soirée FMC" loading="lazy" style={{objectFit:"contain", background:"#fff"}} /></div>
        <div className="cap" style={{padding:"1rem"}}>
          <h3 style={{fontSize:"13px", fontWeight:"700", whiteSpace:"normal"}}>Proctologie clinique pour le médecin généraliste</h3>
          <p style={{fontSize:"11px", color:"var(--primary)", fontWeight:"600"}}>1ère soirée FMC</p>
          <p style={{marginTop:".25rem", display:"flex", alignItems:"center", gap:".35rem", fontSize:"11px"}}><span style={{color:"var(--primary)"}}><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4"/><path d="M8 2v4"/><path d="M3 10h18"/></svg></span> 25 décembre 2025, 17h00</p>
          <p style={{display:"flex", alignItems:"center", gap:".35rem", fontSize:"11px"}}><span style={{color:"var(--primary)"}}><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg></span> Restaurant Délice, Nouvelle Ville–Ali Mendjeli</p>
          <p style={{marginTop:".6rem", fontSize:"11.5px", lineHeight:"1.6", whiteSpace:"normal", color:"var(--muted)"}}>Soirée pratique dédiée à la proctologie en médecine générale, en partenariat avec Repartidis.</p>
        </div>
      </div>
      <div className="event-card">
        <div className="img" style={{aspectRatio:"3/4.2", background:"#fff", padding:"8px"}}><img src="/images/events/eventposter2.jpeg" alt="Affiche Trouble fonctionnel de l’intestin — 3ème soirée FMC" loading="lazy" style={{objectFit:"contain", background:"#fff"}} /></div>
        <div className="cap" style={{padding:"1rem"}}>
          <h3 style={{fontSize:"13px", fontWeight:"700", whiteSpace:"normal"}}>Trouble fonctionnel de l’intestin : une approche pratique</h3>
          <p style={{fontSize:"11px", color:"var(--primary)", fontWeight:"600"}}>3ème soirée FMC</p>
          <p style={{marginTop:".25rem", display:"flex", alignItems:"center", gap:".35rem", fontSize:"11px"}}><span style={{color:"var(--primary)"}}><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4"/><path d="M8 2v4"/><path d="M3 10h18"/></svg></span> 07 mai 2026, 17h00</p>
          <p style={{display:"flex", alignItems:"center", gap:".35rem", fontSize:"11px"}}><span style={{color:"var(--primary)"}}><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg></span> Restaurant Apex, Ali Mendjeli – Constantine</p>
          <p style={{marginTop:".6rem", fontSize:"11.5px", lineHeight:"1.6", whiteSpace:"normal", color:"var(--muted)"}}>Approche pratique des troubles fonctionnels intestinaux pour le médecin généraliste, en collaboration avec le Laboratoire Mayoly.</p>
        </div>
      </div>
    </div>
  </div>
</section>

{/* Photo Gallery — grid + lightbox */}
<section className="gallery-section" id="photoGallery">
  <div className="container">
    <div className="gallery-header"><span className="line" aria-hidden="true"></span><span>Galerie photos</span></div>
    <h2>Galerie — nos moments forts</h2>
    <p className="sub">Nos moments forts en images — cliquez pour agrandir.</p>
    <div className="gallery-grid">
      <figure className="gallery-item" data-src="/images/events/showcasepic.jpeg" data-caption="CGEL Scientific Days · Vue d'ensemble — salle plénière et échanges">
        <img src="/images/events/showcasepic.jpeg" alt="Galerie 1 — Vue d'ensemble salle plénière" loading="lazy" />
        <figcaption className="cap"><p>CGEL Scientific Days — Plénière</p><span>Vue d'ensemble</span></figcaption>
      </figure>
      <figure className="gallery-item" data-src="/images/events/showcasepic1.jpeg" data-caption="Journée scientifique · Session questions-réponses avec les experts">
        <img src="/images/events/showcasepic1.jpeg" alt="Galerie 2 — Session questions-réponses" loading="lazy" />
        <figcaption className="cap"><p>Journée scientifique</p><span>Échanges experts</span></figcaption>
      </figure>
      <figure className="gallery-item" data-src="/images/events/showcasepic2.jpeg" data-caption="Atelier endoscopie · Démonstration pratique sur cas cliniques">
        <img src="/images/events/showcasepic2.jpeg" alt="Galerie 3 — Atelier endoscopie" loading="lazy" />
        <figcaption className="cap"><p>Atelier endoscopie</p><span>Démonstration pratique</span></figcaption>
      </figure>
      <figure className="gallery-item" data-src="/images/events/showcasepic3.jpeg" data-caption="Conférence IA &amp; Santé · Table ronde — innovation et soin intelligent">
        <img src="/images/events/showcasepic3.jpeg" alt="Galerie 4 — Table ronde IA & Santé" loading="lazy" />
        <figcaption className="cap"><p>Conférence IA &amp; Santé</p><span>Table ronde</span></figcaption>
      </figure>
      <figure className="gallery-item" data-src="/images/events/showcasepic4.jpeg" data-caption="Rencontre partenaires · Échanges avec les laboratoires sponsors">
        <img src="/images/events/showcasepic4.jpeg" alt="Galerie 5 — Rencontre partenaires" loading="lazy" />
        <figcaption className="cap"><p>Rencontre partenaires</p><span>Échanges sponsors</span></figcaption>
      </figure>
      <figure className="gallery-item" data-src="/images/events/showcasepic5.jpeg" data-caption="Clôture &amp; perspectives · Remise des attestations et photo de groupe">
        <img src="/images/events/showcasepic5.jpeg" alt="Galerie 6 — Clôture et photo de groupe" loading="lazy" />
        <figcaption className="cap"><p>Clôture &amp; perspectives</p><span>Photo de groupe</span></figcaption>
      </figure>
      <figure className="gallery-item" data-src="/images/events/cgel2.jpeg" data-caption="Journée scientifique ">
        <img src="/images/events/cgel2.jpeg" alt="Journée scientifique" loading="lazy" />
        <figcaption className="cap"><p>Journée scientifique</p><span>Photo de groupe</span></figcaption>
      </figure>
      <figure className="gallery-item" data-src="/images/events/saber.jpeg" data-caption="Soirée collégiale · Convivialité et réseau Est — moments informels">
        <img src="/images/events/saber.jpeg" alt="Galerie 8 — Soirée collégiale" loading="lazy" />
        <figcaption className="cap"><p>Soirée collégiale</p><span>Convivialité</span></figcaption>
      </figure>
    </div>
  </div>
</section>
<div className="lightbox" id="galleryLightbox" aria-hidden="true" role="dialog" aria-label="Galerie agrandie">
  <button type="button" className="close" aria-label="Fermer">✕</button>
  <img src="" alt="" />
  <p className="caption"></p>
</div>

{/* CTA */}
<section className="section-cta">
  <div className="cta-inner">
    <div style={{maxWidth:"760px"}}>
      <div className="cta-kicker"><span className="line"></span><span data-i18n="cta.kicker">Rejoignez-nous</span></div>
      <h2 className="cta-title"><span data-i18n="cta.title1">AU SERVICE DE LA</span><span className="italic" data-i18n="cta.title2">GASTROENTÉROLOGIE LIBÉRALE.</span></h2>
      <p className="cta-lead" data-i18n="cta.lead">Adhérez au collège, participez à nos journées scientifiques et suivez les projets de la spécialité dans l'Est.</p>
      <div className="cta-actions">
        <a href="/contact" className="btn-cta-orange" data-i18n="cta.btnContact">Nous contacter</a>
        <a href="/evenements" className="btn-cta-white" data-i18n="cta.btnEvents">Nos événements</a>
      </div>
    </div>
  </div>
</section>
    </>
  );
}

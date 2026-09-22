"use client";
import { useState, useMemo } from "react";

const FILTERS = [
  "Toutes les sessions",
  "Ouverture",
  "Session 1 — Médecine & Gastroentérologie",
  "Session 2 — IA & Gastroentérologie",
  "Ateliers",
  "Sessions vidéo",
];

function matches(text, q) {
  if (!q) return true;
  return text.toLowerCase().includes(q.toLowerCase());
}

export default function ProgramClient() {
  const [active, setActive] = useState("Toutes les sessions");
  const [q, setQ] = useState("");
  const [open, setOpen] = useState({
    ouverture: false,
    session1: false,
    session2: false,
    ateliers: false,
    video: false,
  });

  const toggle = (key) => setOpen((prev) => ({ ...prev, [key]: !prev[key] }));

  // Auto-expand when filter changes
  const handleFilter = (f) => {
    setActive(f);
    if (f === "Toutes les sessions") {
      setOpen({ ouverture: false, session1: false, session2: false, ateliers: false, video: false });
    } else if (f === "Ouverture") {
      setOpen({ ouverture: true, session1: false, session2: false, ateliers: false, video: false });
    } else if (f === "Session 1 — Médecine & Gastroentérologie") {
      setOpen({ ouverture: false, session1: true, session2: false, ateliers: false, video: false });
    } else if (f === "Session 2 — IA & Gastroentérologie") {
      setOpen({ ouverture: false, session1: false, session2: true, ateliers: false, video: false });
    } else if (f === "Ateliers") {
      setOpen({ ouverture: false, session1: false, session2: false, ateliers: true, video: false });
    } else if (f === "Sessions vidéo") {
      setOpen({ ouverture: false, session1: false, session2: false, ateliers: false, video: true });
    }
  };

  const handleSearch = (val) => {
    setQ(val);
    if (val.trim().length > 1) {
      // expand all that have matches — naive: open all when searching
      setOpen({ ouverture: true, session1: true, session2: true, ateliers: true, video: true });
    } else if (val.trim() === "") {
      // collapse again if filter is All
      if (active === "Toutes les sessions") {
        setOpen({ ouverture: false, session1: false, session2: false, ateliers: false, video: false });
      }
    }
  };

  // Data
  const ouvertureItems = [
    { time: "08:30 — 09:00", title: "Inscription & accueil", desc: "Enregistrement des participants", topic: "Accueil", type: "Accueil" },
    { time: "09:00", title: "Mot de bienvenue", desc: "Dr Abderraouf BOURGHOUD — Hépato-gastroentérologue libéral, Constantine, Président du CGEL", topic: "Ouverture", type: "Allocution" },
    { time: "09:10", title: "Allocutions d'ouverture", desc: "Représentant de la Faculté NTIC, Université Constantine 2 Abdelhamid Mehri", topic: "Ouverture", type: "Allocution" },
  ];
  const session1Items = [
    { time: "09:15 — 09:35", title: "Responsabilité médicale en Algérie : le regard du Conseil de l'Ordre", desc: "Pr Rachid DJENANE — Président du Conseil de l'Ordre, Région de Constantine · Dr Slimane YOUSFI · Dr Souad SEMRA", topic: "Éthique & Droit", type: "Conférence" },
    { time: "09:35 — 09:50", title: "Manométrie anorectale : discussion autour de cas réels", desc: "Dr Yacine CHELBI · Dr Mohamed Nour CHEHAD — Hépato-gastroentérologues libéraux, Constantine", topic: "Gastroentérologie", type: "Cas clinique" },
    { time: "09:50 — 10:05", title: "De l'endoscopie au microscope : on s'était compris… presque !", desc: "Dr Karima BENABADDOU — Anatomie pathologique, exercice libéral, Constantine", topic: "Anapath & Endoscopie", type: "Conférence" },
    { time: "10:05 — 10:20", title: "Toxicités digestives de l'immunothérapie", desc: "Dr Houda MEGUELLATI · Pr Abdelaziz AMMARI · Pr Assia BENSALEM — EPH Didouche Mourad, Constantine", topic: "Oncologie digestive", type: "Conférence" },
    { time: "10:20 — 10:40", title: "Discussion", desc: "Échanges avec la salle", topic: "Discussion", type: "Échange" },
  ];
  const session2Items = [
    { time: "11:00 — 11:20", title: "Pas d'IA sans vous : comment les médecins construisent l'intelligence artificielle", desc: "Pr Mohammed AMROUNE — Professeur d'informatique, École Nationale des Nanosciences et des Nanotechnologies, Sidi Abdellah", topic: "IA & Médecine", type: "Conférence" },
    { time: "11:20 — 11:35", title: "Quand l'IA rencontre la gastroentérologie : projets et réalisations concrètes", desc: "Pr Abdelkrim BOURAMOUL — Professeur d'informatique, Université Constantine 2 Abdelhamid Mehri", topic: "IA & Gastroentérologie", type: "Conférence" },
    { time: "11:35 — 11:45", title: "GastroNeXia : un assistant intelligent en temps réel pour l'endoscopie digestive", desc: "Pr Abdelkrim BOURAMOUL · Dr Saber ABED", topic: "Endoscopie intelligente", type: "Projet", badge: "Projet" },
    { time: "11:45 — 11:55", title: "EndoViRAI : un outil intelligent de réalité virtuelle pour la formation en endoscopie digestive", desc: "Pr Abdelkrim BOURAMOUL · Dr Saber ABED", topic: "Formation & VR", type: "Projet", badge: "Projet" },
    { time: "11:55 — 12:10", title: "Le gastroentérologue à l'ère de l'IA : de l'utilisateur au co-concepteur", desc: "Dr Saber ABED — Hépato-gastroentérologue libéral, Constantine", topic: "Pratique clinique", type: "Conférence" },
    { time: "12:10 — 12:30", title: "IA, endoscopie et pratique clinique : vers une collaboration médecine–IA", desc: "Modérateur : Pr Mohammed AMROUNE", topic: "Table ronde", type: "Panel", badge: "Table ronde" },
  ];
  const ateliersItems = [
    { time: "09:15 — 12:00", title: "Atelier 1 — Échographie", desc: "Intervenant : Dr Mounder BAHLOUL", topic: "Échographie", type: "Atelier" },
    { time: "09:15 — 12:00", title: "Atelier 3 — Maintenance", desc: "Intervenant : M. Rachid DAHLAL", topic: "Maintenance", type: "Atelier" },
    { time: "14:00 — 16:00", title: "Atelier 2 — Endoscopie", desc: "Intervenant : Dr Sofiane MEBARKIA", topic: "Endoscopie", type: "Atelier" },
    { time: "14:00 — 16:00", title: "Atelier 4 — IA & Médecine", desc: "Intervenants : Pr Mohammed AMROUNE & Dr Saber ABED", topic: "IA & Médecine", type: "Atelier" },
    { time: "14:00 — 16:00", title: "Session posters — Présentation des posters scientifiques", desc: "19 posters — liste complète dans le PDF officiel", topic: "Posters", type: "Poster" },
  ];
  const videoItems = [
    { time: "14:00 — 15:00", title: "Trois procédures d'endoscopie interventionnelle en vidéo : écho-endoscopie avec biopsie, CPRE et POEM", desc: "Dr Mohamed Nour CHEHAD — Hépato-gastroentérologue et endoscopiste interventionnel libéral, Constantine", topic: "Endoscopie interventionnelle", type: "Vidéo" },
    { time: "15:00 — 15:20", title: "URPO : un cas historique d'ulcère gastrique", desc: "Dr Riad AMIRA — Chirurgie viscérale, digestive et oncologique", topic: "Chirurgie digestive", type: "Vidéo" },
    { time: "15:20 — 15:40", title: "Résection endoscopique des tumeurs digestives superficielles : de la polypectomie à la dissection sous-muqueuse", desc: "Pr Elsayed GHONEEM — Maître de conférences en Gastroentérologie et Hépatologie, Université de Mansoura (Égypte), actuellement à l'Hôpital Ad Dammam (Arabie saoudite)", topic: "Endoscopie", type: "Vidéo", badge: "Visioconférence" },
    { time: "15:40 — 16:00", title: "Écho-endoscopie diagnostique et thérapeutique en pathologie bilio-pancréatique", desc: "Pr Hussein OKASHA — Professeur de Médecine interne et Gastroentérologie, Faculté de Médecine Kasr Alainy, Université du Caire (Égypte)", topic: "Écho-endoscopie", type: "Vidéo", badge: "Visioconférence" },
  ];

  // Filtering helpers
  const filterItems = (items, sectionKey) => {
    return items.filter((it) => {
      const sessionMatch = active === "Toutes les sessions" || active === sectionKey;
      const searchMatch = !q || matches(`${it.time} ${it.title} ${it.desc} ${it.topic} ${it.type}`, q);
      return sessionMatch && searchMatch;
    });
  };

  const ouvertureFiltered = useMemo(() => filterItems(ouvertureItems, "Ouverture"), [active, q]);
  const session1Filtered = useMemo(() => filterItems(session1Items, "Session 1 — Médecine & Gastroentérologie"), [active, q]);
  const session2Filtered = useMemo(() => filterItems(session2Items, "Session 2 — IA & Gastroentérologie"), [active, q]);
  const ateliersFiltered = useMemo(() => filterItems(ateliersItems, "Ateliers"), [active, q]);
  const videoFiltered = useMemo(() => filterItems(videoItems, "Sessions vidéo"), [active, q]);

  const totalItems = ouvertureItems.length + session1Items.length + session2Items.length + ateliersItems.length + videoItems.length + 3; // +3 breaks
  const visibleItems = ouvertureFiltered.length + session1Filtered.length + session2Filtered.length + ateliersFiltered.length + videoFiltered.length + (
    // breaks visibility
    (active === "Toutes les sessions" || active === "Ouverture") && (!q || matches("Pause café Déjeuner Clôture", q)) ? (
      (!q || matches("Pause café", q) ? 1 : 0) + (!q || matches("Déjeuner", q) ? 1 : 0) + (!q || matches("Clôture", q) ? 1 : 0)
    ) : 0
  );

  const breakPauseVisible = (active === "Toutes les sessions" || active === "Ouverture") && (!q || matches("Pause café 10:40", q));
  const breakLunchVisible = (active === "Toutes les sessions" || active === "Ouverture") && (!q || matches("Déjeuner 12:30", q));
  const breakCloseVisible = (active === "Toutes les sessions" || active === "Ouverture") && (!q || matches("Clôture 16:00", q));

  const sectionVisible = (filtered) => filtered.length > 0;

  const showEmpty = visibleItems === 0;

  return (
    <div style={{ background: "#F8FAFC" }}>
      <div className="container" style={{ padding: "1.5rem 1rem 2.5rem" }}>

        {/* KEY NUMBERS - more compact */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: "1px", background: "#E2E8F0", border: "1px solid #E2E8F0", overflow: "hidden" }} className="key-numbers-grid">
          <div style={{ background: "#fff", padding: ".9rem", textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", gap: ".15rem" }}>
            <span style={{ fontSize: "22px", fontWeight: "800", color: "#023DA5", lineHeight: "1" }}>2</span>
            <span style={{ fontSize: "10px", letterSpacing: ".08em", textTransform: "uppercase", fontWeight: "600", color: "#475569" }}>sessions scientifiques</span>
          </div>
          <div style={{ background: "#fff", padding: ".9rem", textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", gap: ".15rem" }}>
            <span style={{ fontSize: "22px", fontWeight: "800", color: "#023DA5", lineHeight: "1" }}>4</span>
            <span style={{ fontSize: "10px", letterSpacing: ".08em", textTransform: "uppercase", fontWeight: "600", color: "#475569" }}>ateliers pratiques</span>
          </div>
          <div style={{ background: "#fff", padding: ".9rem", textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", gap: ".15rem" }}>
            <span style={{ fontSize: "22px", fontWeight: "800", color: "#023DA5", lineHeight: "1" }}>4</span>
            <span style={{ fontSize: "10px", letterSpacing: ".08em", textTransform: "uppercase", fontWeight: "600", color: "#475569" }}>sessions vidéo</span>
          </div>
          <div style={{ background: "#fff", padding: ".9rem", textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", gap: ".15rem" }}>
            <span style={{ fontSize: "22px", fontWeight: "800", color: "#023DA5", lineHeight: "1" }}>19</span>
            <span style={{ fontSize: "10px", letterSpacing: ".08em", textTransform: "uppercase", fontWeight: "600", color: "#475569" }}>posters scientifiques</span>
          </div>
        </div>
        <style>{`@media(min-width:640px){.key-numbers-grid{grid-template-columns:repeat(4,1fr)!important}}`}</style>

        {/* FILTERS + SEARCH */}
        <div style={{ marginTop: "1.5rem" }} className="program-controls">
          <div className="session-filters" id="sessionFilters">
            {FILTERS.map((f) => (
              <button
                key={f}
                type="button"
                data-session={f}
                className={active === f ? "active" : ""}
                onClick={() => handleFilter(f)}
              >
                {f}
              </button>
            ))}
          </div>
          <input
            id="programSearch"
            className="program-search"
            type="search"
            placeholder="Filtrer par thème, intervenant…"
            aria-label="Filtrer le programme"
            value={q}
            onChange={(e) => handleSearch(e.target.value)}
          />
        </div>

        <div style={{ marginTop: ".75rem", fontSize: "11px", color: "#64748B", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span id="programCount">Affichage de {visibleItems} sur {totalItems} éléments</span>
          <button
            type="button"
            onClick={() => {
              setOpen({ ouverture: false, session1: false, session2: false, ateliers: false, video: false });
            }}
            style={{ fontSize: "11px", color: "#023DA5", background: "none", border: "none", cursor: "pointer", textDecoration: "underline" }}
          >
            Tout replier
          </button>
        </div>

        {showEmpty && (
          <div className="program-empty" style={{ display: "block", marginTop: "1rem" }}>
            <p className="title">Aucune session ne correspond à vos filtres.</p>
            <p className="desc">Essayez une autre catégorie ou effacez la recherche.</p>
            <button
              type="button"
              className="btn btn-navy"
              style={{ marginTop: "1rem" }}
              onClick={() => {
                setActive("Toutes les sessions");
                setQ("");
                setOpen({ ouverture: false, session1: false, session2: false, ateliers: false, video: false });
              }}
            >
              Effacer les filtres
            </button>
          </div>
        )}

        {/* TIMELINE - accordion sections + breaks */}
        <div style={{ marginTop: "1rem", display: showEmpty ? "none" : "flex", flexDirection: "column", gap: ".75rem" }}>

          {/* Ouverture */}
          {(active === "Toutes les sessions" || active === "Ouverture") && ouvertureFiltered.length > 0 && (
            <div className="program-section">
              <button type="button" className="program-section-header" onClick={() => toggle("ouverture")} aria-expanded={open.ouverture}>
                <div className="header-main">
                  <h3 className="header-title">Ouverture</h3>
                  <div className="header-meta">
                    <span>08:30 — 09:15</span><span className="dot"></span><span>{ouvertureFiltered.length} intervention{ouvertureFiltered.length>1?"s":""}</span>
                  </div>
                </div>
                <span className="header-count">{ouvertureFiltered.length} / {ouvertureItems.length}</span>
                <svg className={`chevron ${open.ouverture ? "open" : ""}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
              </button>
              <div className={`program-section-body ${open.ouverture ? "open" : ""}`}>
                <div className="program-list" style={{ borderTop: "1px solid #E2E8F0" }}>
                  {ouvertureFiltered.map((it, i) => (
                    <div key={i} className="program-item program-item--compact" data-session="Ouverture">
                      <div className="program-time"><span>{it.time.split(" — ")[0]}</span>{it.time.includes("—") && <span className="dash">— {it.time.split(" — ")[1]}</span>}</div>
                      <div>
                        <p className="program-title">{it.title}</p>
                        <p className="program-desc">{it.desc}</p>
                      </div>
                      <span className="program-topic">{it.topic}</span>
                      <span className="program-type">{it.type}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Session 1 */}
          {(active === "Toutes les sessions" || active === "Session 1 — Médecine & Gastroentérologie") && sectionVisible(session1Filtered) && (
            <div className="program-section">
              <button type="button" className="program-section-header" onClick={() => toggle("session1")} aria-expanded={open.session1} style={{ borderLeftColor: "#023DA5" }}>
                <div className="header-main">
                  <h3 className="header-title">Session 1 — Médecine & Gastroentérologie</h3>
                  <div className="header-meta">
                    <span>09:15 — 10:40</span><span className="dot"></span><span>Modérateur : Dr Rachid BERREZAG</span><span className="dot"></span><span className="header-count" style={{ background: "#EEF4FF", borderColor: "#D6E2F5", color: "#023DA5" }}>{session1Filtered.length} / {session1Items.length}</span>
                    <span style={{ fontSize: "10px", color: "#94A3B8" }}>regards croisés</span>
                  </div>
                </div>
                <svg className={`chevron ${open.session1 ? "open" : ""}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m6 9 6 6 6-6" /></svg>
              </button>
              <div className={`program-section-body ${open.session1 ? "open" : ""}`}>
                <div className="program-list">
                  {session1Filtered.map((it, i) => (
                    <div key={i} className="program-item program-item--compact" data-session="Session 1 — Médecine & Gastroentérologie">
                      <div className="program-time"><span>{it.time.split(" — ")[0]}</span>{it.time.includes("—") && <span className="dash">— {it.time.split(" — ")[1]}</span>}</div>
                      <div>
                        <p className="program-title">{it.title}</p>
                        <p className="program-desc">{it.desc}</p>
                        <p className="program-meta" style={{ fontSize: "10px" }}>Modérateur : Dr Rachid BERREZAG</p>
                      </div>
                      <span className="program-topic">{it.topic}</span>
                      <span className="program-type">{it.type}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Break Pause */}
          {breakPauseVisible && (
            <div className="program-item--break" data-session="Ouverture">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" width="14" height="14" aria-hidden="true"><path d="M3 8h12a2 2 0 0 1 2 2v4a4 4 0 0 1-4 4H5a2 2 0 0 1-2-2V8Z" /><path d="M15 8h2a3 3 0 0 1 3 3v1a3 3 0 0 1-3 3h-2" /><path d="M6 4v2" /><path d="M9 4v2" /><path d="M12 4v2" /></svg>
              <span className="program-time">10:40 — 11:00</span>
              <span className="break-label">Pause café</span>
              <span style={{ fontSize: "10px", background: "#fff", border: "1px solid #FFDCC6", padding: "1px 5px", color: "#9A4A1E" }}>Pause</span>
            </div>
          )}

          {/* Session 2 */}
          {(active === "Toutes les sessions" || active === "Session 2 — IA & Gastroentérologie") && sectionVisible(session2Filtered) && (
            <div className="program-section">
              <button type="button" className="program-section-header" onClick={() => toggle("session2")} aria-expanded={open.session2} style={{ borderLeftColor: "#F08444" }}>
                <div className="header-main">
                  <h3 className="header-title">Session 2 — IA & Gastroentérologie</h3>
                  <div className="header-meta">
                    <span>11:00 — 12:30</span><span className="dot"></span><span>Modérateur : Pr Mohammed AMROUNE</span><span className="dot"></span><span style={{ fontSize: "10px", color: "#94A3B8" }}>de l&apos;innovation tech. à la pratique clinique</span>
                  </div>
                </div>
                <span className="header-count">{session2Filtered.length} / {session2Items.length}</span>
                <svg className={`chevron ${open.session2 ? "open" : ""}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m6 9 6 6 6-6" /></svg>
              </button>
              <div className={`program-section-body ${open.session2 ? "open" : ""}`}>
                <div className="program-list">
                  {session2Filtered.map((it, i) => (
                    <div key={i} className="program-item program-item--compact" data-session="Session 2 — IA & Gastroentérologie">
                      <div className="program-time"><span>{it.time.split(" — ")[0]}</span>{it.time.includes("—") && <span className="dash">— {it.time.split(" — ")[1]}</span>}</div>
                      <div>
                        <p className="program-title">
                          {it.title} {it.badge && <span style={{ marginLeft: ".35rem", fontSize: "9px", letterSpacing: ".05em", textTransform: "uppercase", fontWeight: "700", color: it.badge === "Visioconférence" ? "#065F46" : "#fff", background: it.badge === "Visioconférence" ? "#ECFDF5" : it.badge === "Table ronde" ? "#EEF4FF" : "#023DA5", border: it.badge === "Visioconférence" ? "1px solid #A7F3D0" : it.badge === "Table ronde" ? "1px solid #D6E2F5" : "none", padding: "1px 5px", verticalAlign: "middle" }}>{it.badge}</span>}
                        </p>
                        <p className="program-desc">{it.desc}</p>
                      </div>
                      <span className="program-topic">{it.topic}</span>
                      <span className="program-type">{it.type}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Break Lunch */}
          {breakLunchVisible && (
            <div className="program-item--break" data-session="Ouverture" style={{ background: "#FFF7ED" }}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" width="14" height="14" aria-hidden="true"><path d="M3 7h18" /><path d="M10 7v10a2 2 0 0 0 2 2h0a2 2 0 0 0 2-2V7" /><path d="M6 7v10a2 2 0 0 0 2 2h0a2 2 0 0 0 2-2V7" /><path d="M18 7a3 3 0 0 1 3 3v3a3 3 0 0 1-3 3h-2V7h2Z" /></svg>
              <span className="program-time">12:30 — 14:00</span>
              <span className="break-label">Déjeuner</span>
              <span style={{ fontSize: "10px", background: "#fff", border: "1px solid #FFDCC6", padding: "1px 5px", color: "#9A4A1E" }}>Pause</span>
            </div>
          )}

          {/* Ateliers */}
          {(active === "Toutes les sessions" || active === "Ateliers") && sectionVisible(ateliersFiltered) && (
            <div className="program-section">
              <button type="button" className="program-section-header" onClick={() => toggle("ateliers")} aria-expanded={open.ateliers} style={{ borderLeftColor: "#36C0E7" }}>
                <div className="header-main">
                  <h3 className="header-title">Ateliers pratiques</h3>
                  <div className="header-meta">
                    <span>09:15 — 12:00 & 14:00 — 16:00</span><span className="dot"></span><span>4 ateliers + posters</span><span className="dot"></span><span>en parallèle</span>
                  </div>
                </div>
                <span className="header-count">{ateliersFiltered.length} / {ateliersItems.length}</span>
                <svg className={`chevron ${open.ateliers ? "open" : ""}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m6 9 6 6 6-6" /></svg>
              </button>
              <div className={`program-section-body ${open.ateliers ? "open" : ""}`}>
                {/* Compact list view for filtering */}
                <div className="program-list">
                  {ateliersFiltered.map((it, i) => (
                    <div key={i} className="program-item program-item--compact" data-session="Ateliers">
                      <div className="program-time"><span>{it.time.split(" — ")[0]}</span>{it.time.includes("—") && <span className="dash">— {it.time.split(" — ")[1]}</span>}</div>
                      <div>
                        <p className="program-title">{it.title}</p>
                        <p className="program-desc">{it.desc}</p>
                      </div>
                      <span className="program-topic">{it.topic}</span>
                      <span className="program-type">{it.type}</span>
                    </div>
                  ))}
                </div>
                {/* Also show card grid when expanded and no search filter */}
                {open.ateliers && !q && active !== "Ateliers" || open.ateliers && ateliersFiltered.length === ateliersItems.length ? (
                  <div style={{ padding: "1rem", background: "#F8FAFC", borderTop: "1px solid #E2E8F0", display: "grid", gap: "1px", backgroundColor: "#E2E8F0", gridTemplateColumns: "repeat(auto-fit, minmax(180px,1fr))" }}>
                    {[
                      { k: "Atelier 1", t: "09:15 – 12:00", title: "Échographie", who: "Dr Mounder BAHLOUL", color: "#023DA5", bg: "#EEF4FF", border: "#D6E2F5" },
                      { k: "Atelier 3", t: "09:15 – 12:00", title: "Maintenance", who: "M. Rachid DAHLAL", color: "#9A4A1E", bg: "#FFF4ED", border: "#FFDCC6" },
                      { k: "Atelier 2", t: "14:00 – 16:00", title: "Endoscopie", who: "Dr Sofiane MEBARKIA", color: "#023DA5", bg: "#EEF4FF", border: "#D6E2F5" },
                      { k: "Atelier 4", t: "14:00 – 16:00", title: "IA & Médecine", who: "Pr Mohammed AMROUNE & Dr Saber ABED", color: "#9A4A1E", bg: "#FFF4ED", border: "#FFDCC6" },
                    ].filter(card => !q || matches(`${card.title} ${card.who}`, q)).map((card) => (
                      <div key={card.k} style={{ background: "#fff", padding: ".9rem", display: "flex", flexDirection: "column", gap: ".4rem", borderTop: `2px solid ${card.color}` }}>
                        <div style={{ display: "flex", alignItems: "center", gap: ".4rem" }}><span style={{ fontSize: "10px", letterSpacing: ".06em", textTransform: "uppercase", fontWeight: "700", color: card.color, background: card.bg, border: `1px solid ${card.border}`, padding: "1px 5px" }}>{card.k}</span><span style={{ fontSize: "10px", color: "#64748B" }}>{card.t}</span></div>
                        <h4 style={{ margin: 0, fontSize: "12.5px", fontWeight: "700", color: "#0F1D3A" }}>{card.title}</h4>
                        <p style={{ margin: 0, fontSize: "11px", color: "#475569" }}><span style={{ color: "#64748B" }}>Intervenant{card.who.includes("&") ? "s" : ""} :</span> <strong style={{ color: "#0F1D3A" }}>{card.who}</strong></p>
                      </div>
                    ))}
                  </div>
                ) : null}
              </div>
            </div>
          )}

          {/* Video */}
          {(active === "Toutes les sessions" || active === "Sessions vidéo") && sectionVisible(videoFiltered) && (
            <div className="program-section">
              <button type="button" className="program-section-header" onClick={() => toggle("video")} aria-expanded={open.video} style={{ borderLeftColor: "#0F1D3A" }}>
                <div className="header-main">
                  <h3 className="header-title">Sessions vidéo commentées</h3>
                  <div className="header-meta">
                    <span>14:00 — 16:00</span><span className="dot"></span><span>Modérateur : Dr Saber ABED</span><span className="dot"></span><span>4 vidéos · dont 2 en visioconférence</span>
                  </div>
                </div>
                <span className="header-count">{videoFiltered.length} / {videoItems.length}</span>
                <svg className={`chevron ${open.video ? "open" : ""}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m6 9 6 6 6-6" /></svg>
              </button>
              <div className={`program-section-body ${open.video ? "open" : ""}`}>
                <div className="program-list">
                  {videoFiltered.map((it, i) => (
                    <div key={i} className="program-item program-item--compact" data-session="Sessions vidéo">
                      <div className="program-time"><span>{it.time.split(" — ")[0]}</span>{it.time.includes("—") && <span className="dash">— {it.time.split(" — ")[1]}</span>}</div>
                      <div>
                        <p className="program-title">
                          {it.title} {it.badge && <span style={{ marginLeft: ".3rem", fontSize: "9px", letterSpacing: ".05em", textTransform: "uppercase", fontWeight: "700", color: "#065F46", background: "#ECFDF5", border: "1px solid #A7F3D0", padding: "1px 5px", verticalAlign: "middle" }}>{it.badge}</span>}
                        </p>
                        <p className="program-desc">{it.desc}</p>
                      </div>
                      <span className="program-topic">{it.topic}</span>
                      <span className="program-type">{it.type}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Clôture */}
          {breakCloseVisible && (
            <div className="program-item--break" data-session="Ouverture" style={{ background: "#F1F5F9", borderColor: "#E2E8F0", color: "#334155" }}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" width="14" height="14" aria-hidden="true"><path d="M9 15l2 2 4-4" /><rect x="3" y="4" width="18" height="18" rx="2" /><path d="M16 2v4" /><path d="M8 2v4" /><path d="M3 10h18" /></svg>
              <span className="program-time" style={{ color: "#334155" }}>16:00</span>
              <span className="break-label">Clôture des journées scientifiques</span>
            </div>
          )}

        </div>

        <div className="program-footer" style={{ marginTop: "1rem" }}>
          <span>Affichage de {visibleItems} sur {totalItems} éléments</span>
          <a href="/documents/cgel-scientific-days-2026-program.pdf" download style={{ border: "1px solid #023DA5", background: "#023DA5", color: "#fff", padding: ".4rem .75rem", fontWeight: "600", display: "inline-flex", alignItems: "center", gap: ".4rem", fontSize: "11px" }}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="12" height="12"><path d="M12 3v12" /><path d="M8 11l4 4 4-4" /><path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2" /></svg>
            Télécharger le PDF complet
          </a>
        </div>

        {/* PARTNERSHIP SCOPED NOTE */}
        <div style={{ marginTop: "1.5rem", border: "1px solid #E2E8F0", background: "#fff", padding: "1rem", display: "flex", gap: "1rem", alignItems: "center" }}>
          <div style={{ display: "flex", gap: ".5rem", flexShrink: "0" }}>
            <img src="/logo/uc2.png" alt="Université Constantine 2 Abdelhamid Mehri" loading="lazy" style={{ height: "36px", width: "auto", objectFit: "contain" }} />
            <img src="/logo/ntic.png" alt="Faculté NTIC" loading="lazy" style={{ height: "36px", width: "auto", objectFit: "contain" }} />
          </div>
          <div>
            <p style={{ margin: "0", fontSize: "11px", letterSpacing: ".08em", textTransform: "uppercase", fontWeight: "600", color: "#023DA5" }}>En partenariat scientifique — CGEL Scientific Days 3e édition uniquement</p>
            <p style={{ margin: ".15rem 0 0", fontSize: "11.5px", lineHeight: "1.6", color: "#64748B" }}>Université Constantine 2 Abdelhamid Mehri — Faculté des Nouvelles Technologies de l&apos;Information et de la Communication (NTIC). Ce partenariat est propre à cette journée scientifique et non à l&apos;ensemble du collège.</p>
          </div>
        </div>

        {/* CTA */}
        <div style={{ marginTop: "1.5rem", border: "1px solid #023DA5", background: "#023DA5", color: "#fff", padding: "1.25rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
          <div><h3 style={{ margin: "0", fontFamily: "inherit", fontSize: "15px" }}>Réservez votre place aux CGEL Scientific Days — 3<sup>e</sup> édition</h3><p style={{ marginTop: ".25rem", fontSize: "12px", color: "rgba(255,255,255,.6)" }}>Jeudi 1<sup>er</sup> octobre 2026 · Salle de conférences Ahmed Bey, Zénith de Constantine · Inscription via Google Form</p></div>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSerGOXc3e5980njfA9R0Zi2MHHhMP1xJp-_gnbgHa-oSyK2vQ/viewform" target="_blank" rel="noopener noreferrer" className="btn btn-orange" style={{ alignSelf: "flex-start" }}>S&apos;inscrire via Google Form <span aria-hidden="true" style={{ marginLeft: ".4rem" }}>↗</span></a>
        </div>
      </div>
    </div>
  );
}

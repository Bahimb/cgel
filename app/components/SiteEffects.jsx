"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function SiteEffects() {
  const pathname = usePathname();

  useEffect(() => {
    // Carousel — 2 slides
    const wrap = document.getElementById("heroCarousel");
    let cleanupCarousel = () => {};
    if (wrap) {
      const slides = wrap.querySelectorAll(".carousel-slide");
      const dots = wrap.querySelectorAll("[data-dot]");
      const prevBtn = document.getElementById("carouselPrev");
      const nextBtn = document.getElementById("carouselNext");
      const counter = document.getElementById("carouselCounter");
      if (slides.length) {
        const total = slides.length;
        let current = 0;
        let paused = false;
        let timer = null;
        const update = () => {
          slides.forEach((s, i) => {
            s.classList.toggle("active", i === current);
            s.setAttribute("aria-hidden", i === current ? "false" : "true");
            s.setAttribute("aria-label", `${i + 1} sur ${total}`);
          });
          dots.forEach((d, i) => {
            d.classList.toggle("active", i === current);
            d.setAttribute("aria-current", i === current ? "true" : "false");
            d.setAttribute("aria-label", `Aller au slide ${i + 1}`);
          });
          if (counter) counter.textContent = `${String(current + 1).padStart(2, "0")} / ${String(total).padStart(2, "0")}`;
        };
        const next = () => { current = (current + 1) % total; update(); };
        const prev = () => { current = (current - 1 + total) % total; update(); };
        const stop = () => { if (timer) { clearInterval(timer); timer = null; } };
        const start = () => { stop(); if (total > 1) timer = setInterval(next, 4500); };
        const onNext = (e) => { e.preventDefault(); next(); e.currentTarget.blur(); };
        const onPrev = (e) => { e.preventDefault(); prev(); e.currentTarget.blur(); };
        const onDot = (i) => (e) => { e.preventDefault(); current = i; update(); e.currentTarget.blur(); };
        const onEnter = () => { paused = true; stop(); };
        const onLeave = () => { paused = false; start(); };
        const onFocusIn = () => stop();
        const onFocusOut = () => { if (!paused) start(); };
        let startX = 0;
        const onTouchStart = (e) => { startX = e.touches[0].clientX; stop(); };
        const onTouchEnd = (e) => {
          const dx = e.changedTouches[0].clientX - startX;
          if (Math.abs(dx) > 40) { if (dx < 0) next(); else prev(); }
          if (!paused) start();
        };
        if (nextBtn) nextBtn.addEventListener("click", onNext);
        if (prevBtn) prevBtn.addEventListener("click", onPrev);
        dots.forEach((d, i) => d.addEventListener("click", onDot(i)));
        wrap.addEventListener("mouseenter", onEnter);
        wrap.addEventListener("mouseleave", onLeave);
        wrap.addEventListener("focusin", onFocusIn);
        wrap.addEventListener("focusout", onFocusOut);
        wrap.addEventListener("touchstart", onTouchStart, { passive: true });
        wrap.addEventListener("touchend", onTouchEnd, { passive: true });
        update();
        start();
        cleanupCarousel = () => {
          stop();
          if (nextBtn) nextBtn.removeEventListener("click", onNext);
          if (prevBtn) prevBtn.removeEventListener("click", onPrev);
          dots.forEach((d, i) => d.removeEventListener("click", onDot(i)));
          wrap.removeEventListener("mouseenter", onEnter);
          wrap.removeEventListener("mouseleave", onLeave);
          wrap.removeEventListener("focusin", onFocusIn);
          wrap.removeEventListener("focusout", onFocusOut);
          wrap.removeEventListener("touchstart", onTouchStart);
          wrap.removeEventListener("touchend", onTouchEnd);
        };
      }
    }

    // Back to top
    const backBtn = document.getElementById("backToTop");
    let ticking = false;
    const onScrollBack = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (backBtn) {
            if (window.scrollY > 400) backBtn.classList.add("visible");
            else backBtn.classList.remove("visible");
          }
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", onScrollBack, { passive: true });
    onScrollBack();
    const onBackClick = (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
      e.currentTarget.blur();
    };
    if (backBtn) backBtn.addEventListener("click", onBackClick);

    // Gallery lightbox
    const grid = document.querySelector(".gallery-grid");
    const lb = document.getElementById("galleryLightbox");
    let cleanupGallery = () => {};
    if (grid && lb) {
      const lbImg = lb.querySelector("img");
      const lbCap = lb.querySelector(".caption");
      const closeBtn = lb.querySelector(".close");
      const open = (src, alt, cap) => {
        if (lbImg) { lbImg.src = src; lbImg.alt = alt || ""; }
        if (lbCap) lbCap.textContent = cap || alt || "";
        lb.classList.add("open");
        lb.style.display = "flex";
        lb.setAttribute("aria-hidden", "false");
        document.body.style.overflow = "hidden";
      };
      const close = () => {
        lb.classList.remove("open");
        lb.style.display = "none";
        lb.setAttribute("aria-hidden", "true");
        document.body.style.overflow = "";
      };
      const onItemClick = function () {
        const src = this.getAttribute("data-src") || this.querySelector("img")?.src;
        const alt = this.querySelector("img")?.alt || "";
        const cap = this.getAttribute("data-caption") || alt;
        if (src) open(src, alt, cap);
      };
      const items = grid.querySelectorAll(".gallery-item");
      items.forEach((item) => item.addEventListener("click", onItemClick));
      const onClose = () => close();
      const onLbClick = (e) => { if (e.target === lb) close(); };
      const onKey = (e) => { if (e.key === "Escape" && lb.classList.contains("open")) close(); };
      if (closeBtn) closeBtn.addEventListener("click", onClose);
      lb.addEventListener("click", onLbClick);
      document.addEventListener("keydown", onKey);
      cleanupGallery = () => {
        items.forEach((item) => item.removeEventListener("click", onItemClick));
        if (closeBtn) closeBtn.removeEventListener("click", onClose);
        lb.removeEventListener("click", onLbClick);
        document.removeEventListener("keydown", onKey);
      };
    }

    // Mobile bar visibility
    const bar = document.getElementById("mobileBar");
    let observer;
    const onScrollBar = () => {
      if (!bar) return;
      const isMobile = window.innerWidth <= 1023;
      const shouldShow = isMobile && window.scrollY > 560;
      bar.classList.toggle("visible", shouldShow);
    };
    if (bar && !window.location.pathname.includes("registration")) {
      window.addEventListener("scroll", onScrollBar, { passive: true });
      observer = new MutationObserver(() => {
        if (bar.classList.contains("visible")) document.body.style.paddingBottom = "64px";
        else document.body.style.paddingBottom = "";
      });
      observer.observe(bar, { attributes: true, attributeFilter: ["class"] });
      onScrollBar();
    }

    // Program filtering (if present)
    const programList = document.getElementById("programList");
    if (programList) {
      const filterBtns = document.querySelectorAll("[data-session]");
      const search = document.getElementById("programSearch");
      const empty = document.getElementById("programEmpty");
      const count = document.getElementById("programCount");
      const clearBtn = document.getElementById("clearFilters");
      let activeSession = "Toutes les sessions";
      const apply = () => {
        const q = search ? search.value.trim().toLowerCase() : "";
        const items = programList.querySelectorAll(".program-item");
        let visible = 0;
        items.forEach((el) => {
          const session = el.getAttribute("data-session") || "";
          const text = (el.textContent || "").toLowerCase();
          const sessionMatch = activeSession === "Toutes les sessions" || session === activeSession;
          const searchMatch = !q || text.indexOf(q) !== -1;
          const show = sessionMatch && searchMatch;
          el.style.display = show ? "" : "none";
          if (show) visible++;
        });
        if (empty) empty.style.display = visible === 0 ? "" : "none";
        if (count) count.textContent = `Affichage de ${visible} sur ${items.length} éléments · Planning indicatif.`;
      };
      const onFilter = function () {
        activeSession = this.getAttribute("data-session") || "Toutes les sessions";
        filterBtns.forEach((b) => b.classList.toggle("active", b === this));
        apply();
      };
      filterBtns.forEach((btn) => btn.addEventListener("click", onFilter));
      const onSearch = () => apply();
      const onClear = () => {
        activeSession = "Toutes les sessions";
        if (search) search.value = "";
        filterBtns.forEach((b) => b.classList.toggle("active", b.getAttribute("data-session") === "Toutes les sessions"));
        apply();
      };
      if (search) search.addEventListener("input", onSearch);
      if (clearBtn) clearBtn.addEventListener("click", onClear);
      apply();
    }

    // i18n — keep translations in effect, re-apply on pathname change
    const translations = {
      fr: {
        "nav.home": "Accueil","nav.about": "À propos","nav.events": "Événements","nav.projects": "Projets","nav.contact": "Contact","nav.contactBtn": "Nous contacter",
        "hero.kicker": "Collège des Hépato-Gastroentérologues","hero.kicker2": "et Endoscopistes Libéraux de l'Est","hero.tagline": "au service de la gastroentérologie libérale — formation, échange scientifique et représentation de la spécialité.",
        "carousel.expertise.badge": "Au cœur de la spécialité","carousel.edition": "· 3<sup>e</sup> édition","carousel.expertise.title1": "CGEL Scientific Days — 3e édition","carousel.expertise.title2": "Journées scientifiques du collège","carousel.expertise.desc": "L'excellence en hépato-gastroentérologie libérale","carousel.program.badge": "Programme","carousel.program.desc": "De l'innovation médicale au soin intelligent","carousel.program.chiffre": "Conférences · Ateliers · Échanges","carousel.chiffre.expertise": "Formation · Échange · Innovation","carousel.cta.register": "S'inscrire","carousel.cta.discover": "Découvrir le collège","carousel.org.organizer": "Organisateur","carousel.org.partner": "Partenaire scientifique","marquee.title": "Ils soutiennent le collège",
        "about.kicker": "À propos","about.title1": "Le collège","about.title2": "en bref","about.text1": "CGEL fédère les hépato-gastroentérologues et endoscopistes libéraux de l'Est. Notre mission : soutenir la pratique libérale, favoriser la formation continue et porter la voix de la spécialité auprès des institutions.","about.text2": "Le collège organise des rencontres scientifiques, développe des projets pour la profession et accompagne ses membres au quotidien. Ce site est en cours d'enrichissement — chaque section sera complétée prochainement.","about.quote": "“Faire progresser ensemble la gastroentérologie libérale de l'Est.”","mission.title": "Notre mission","mission.formation": "Formation","mission.formationDesc": "Valoriser la formation continue et l'actualisation des pratiques.","mission.exchange": "Échange","mission.exchangeDesc": "Créer des lieux de partage et de discussion entre professionnels.","mission.representation": "Représentation","mission.representationDesc": "Défendre les intérêts de la spécialité en pratique libérale.",
        "pillars.formation": "Formation continue","pillars.formationDesc": "Des journées scientifiques et des mises à jour adaptées à la pratique libérale.","pillars.exchange": "Échange scientifique","pillars.exchangeDesc": "Un réseau de professionnels qui partagent leurs expériences et leurs cas.","pillars.life": "Vie de la spécialité","pillars.lifeDesc": "Représentation de la gastroentérologie et de la pratique libérale de l'Est.",
        "explore.kicker": "Explorez","explore.title": "Les sections du site","explore.desc": "Nos événements, projets et actualités — bientôt disponibles, en cours de préparation.","explore.card1Title": "Journées scientifiques","explore.card1Desc": "Congrès, journées d'étude et rencontres de la spécialité — calendrier et informations pratiques.","explore.card2Title": "Les projets du collège","explore.card2Desc": "Les initiatives portées par le collège pour la profession et la pratique libérale.","explore.card3Title": "Nous écrire","explore.card3Desc": "Une question, une adhésion, un partenariat ? Contactez le collège directement.","explore.cta": "Découvrir →",
        "cta.kicker": "Rejoignez-nous","cta.title1": "AU SERVICE DE LA","cta.title2": "GASTROENTÉROLOGIE LIBÉRALE.","cta.lead": "Adhérez au collège, participez à nos journées scientifiques et suivez les projets de la spécialité dans l'Est.","cta.btnContact": "Nous contacter","cta.btnEvents": "Nos événements",
        "pastEvents.kicker": "Événements passés","pastEvents.title": "Retour en images — nos événements passés","pastEvents.desc": "Quelques moments forts des éditions précédentes.","pastEvents.card1Title": "CGEL Scientific Days — Édition 1","pastEvents.card1Desc": "Constantine · Octobre 2024","pastEvents.card2Title": "Journée scientifique 2023","pastEvents.card2Desc": "Transmission & cas cliniques","pastEvents.card3Title": "Atelier endoscopie","pastEvents.card3Desc": "Formation pratique · 2023","pastEvents.card4Title": "Conférence IA & Santé","pastEvents.card4Desc": "Innovation médicale · 2024","pastEvents.card5Title": "Rencontre partenaires","pastEvents.card5Desc": "Échanges avec les laboratoires","pastEvents.card6Title": "Clôture & perspectives","pastEvents.card6Desc": "Constantine · moments forts",
        "footer.desc": "Collège des Hépato-Gastroentérologues et Endoscopistes Libéraux de l'Est — au service de la gastroentérologie libérale.","footer.missionLabel": "Notre mission","footer.missionTitle": "Faire progresser la spécialité","footer.missionSub": "Formation · échange · représentation","footer.sectionsTitle": "Sections","footer.infoTitle": "Information","footer.contactTitle": "Contact","footer.copyright": "© 2026 CGEL — Collège professionnel.","footer.tagline": "Hépato-gastroentérologie libérale · Est",
        "events.hero.kicker": "Événements","events.hero.title": "Les événements du CGEL","events.hero.lead": "Journées scientifiques, congrès et rencontres de la hépato-gastroentérologie libérale de l'Est.","events.featured.badge": "À la une","events.featured.muted": "Journées scientifiques","events.featured.title": "CGEL Scientific Days — 3<sup>e</sup> Édition","events.featured.desc": "Gastroentérologie à l'ère de l'intelligence artificielle et de la santé connectée — le rendez-vous scientifique du collège, aux côtés d'un partenariat universitaire.","events.featured.date": "Jeudi 1 octobre 2026","events.featured.place": "Ahmed Bey Zenith, Constantine, Algérie","events.featured.btnMore": "En savoir plus","events.featured.btnContact": "Nous contacter","events.previousTitle": "Événements précédents","events.previousDesc": "Retour sur nos éditions antérieures.","backToTop": "Retour en haut","carousel.meta.date": "Jeudi 1 octobre 2026","carousel.meta.place": "Ahmed Bey Zenith, Constantine",
"pastEvents.sub": "Trois moments forts du CGEL — affiches lisibles en grand format.",
"pastEvents.event1.title": "2ème Journée de Formation Médicale Continue CGEL","pastEvents.event1.date": "25–26 septembre 2025","pastEvents.event1.place": "Hôtel El Hocine, Constantine","pastEvents.event1.desc": "Deux jours de formation et d'échanges scientifiques autour de la gastroentérologie libérale, à l'Hôtel El Hocine.",
"pastEvents.event2.title": "Proctologie clinique pour le médecin généraliste","pastEvents.event2.badge": "1ère soirée FMC","pastEvents.event2.date": "25 décembre 2025, 17h00","pastEvents.event2.place": "Restaurant Délice, Nouvelle Ville–Ali Mendjeli","pastEvents.event2.desc": "Soirée pratique dédiée à la proctologie en médecine générale, en partenariat avec Repartidis.",
"pastEvents.event3.title": "Trouble fonctionnel de l'intestin : une approche pratique","pastEvents.event3.badge": "3ème soirée FMC","pastEvents.event3.date": "07 mai 2026, 17h00","pastEvents.event3.place": "Restaurant Apex, Ali Mendjeli – Constantine","pastEvents.event3.desc": "Approche pratique des troubles fonctionnels intestinaux pour le médecin généraliste, en collaboration avec le Laboratoire Mayoly.",
"gallery.kicker": "Galerie photos","gallery.title": "Galerie — nos moments forts","gallery.sub": "Nos moments forts en images — cliquez pour agrandir.",
"gallery.1.caption": "CGEL Scientific Days · Vue d'ensemble — salle plénière et échanges","gallery.1.p": "CGEL Scientific Days — Plénière","gallery.1.span": "Vue d'ensemble",
"gallery.2.caption": "Journée scientifique · Session questions-réponses avec les experts","gallery.2.p": "Journée scientifique","gallery.2.span": "Échanges experts",
"gallery.3.caption": "Atelier endoscopie · Démonstration pratique sur cas cliniques","gallery.3.p": "Atelier endoscopie","gallery.3.span": "Démonstration pratique",
"gallery.4.caption": "Conférence IA & Santé · Table ronde — innovation et soin intelligent","gallery.4.p": "Conférence IA & Santé","gallery.4.span": "Table ronde",
"gallery.5.caption": "Rencontre partenaires · Échanges avec les laboratoires sponsors","gallery.5.p": "Rencontre partenaires","gallery.5.span": "Échanges sponsors",
"gallery.6.caption": "Clôture & perspectives · Remise des attestations et photo de groupe","gallery.6.p": "Clôture & perspectives","gallery.6.span": "Photo de groupe",
"gallery.7.caption": "Journée scientifique","gallery.7.p": "Journée scientifique","gallery.7.span": "Photo de groupe",
"gallery.8.caption": "Soirée collégiale · Convivialité et réseau Est — moments informels","gallery.8.p": "Soirée collégiale","gallery.8.span": "Convivialité",
"mobileBar.title": "CGEL — 01 oct. 2026","mobileBar.loc": "Ahmed Bey Zenith, Constantine","mobileBar.cta": "S'inscrire",
"apropos.title": "Collège des Hépato-Gastroentérologues et Endoscopistes Libéraux de l'Est","apropos.lead": "Un collège professionnel qui fédère, forme et représente la gastroentérologie libérale de l'Est algérien depuis 2018.",
"apropos.history": "Notre histoire","apropos.history1": "Fondé en <strong>2018 à Constantine</strong> par un groupe de gastroentérologues et endoscopistes libéraux de l'Est, le CGEL est né d'un constat simple : la pratique libérale avait besoin d'une voix collective, d'un lieu d'échange et d'une structure dédiée à la formation continue.","apropos.history2": "De 12 membres fondateurs réunis autour d'une table à l'hôtel Cirta, le collège compte aujourd'hui <strong>plus de 80 membres actifs</strong> répartis sur 12 wilayas. En 2021, il lance ses premières <em>Journées scientifiques</em> ; en 2024, la 2<sup>e</sup> édition réunit 180 participants et 10 laboratoires partenaires.","apropos.history3": "Le CGEL a tissé un partenariat structurant avec <strong>l'Université Constantine 2 Abdelhamid Mehri</strong> et la <strong>Faculté des Nouvelles Technologies (NTIC)</strong>, posant les bases de la 3<sup>e</sup> édition 2026 du <strong>CGEL Scientific Days</strong> sur le thème <em>« Gastroentérologie à l'ère de l'IA &amp; santé connectée »</em>.",
"apropos.missionDesc": "Accompagner l'excellence clinique en libéral, faire progresser les connaissances et défendre les intérêts de la spécialité auprès des institutions et du public.",
"apropos.mission1": "Formation continue","apropos.mission1Desc": "CGEL Scientific Days, ateliers d'endoscopie, webinaires et mises à jour des recommandations — adaptés à la réalité du cabinet libéral.","apropos.mission2": "Échange scientifique","apropos.mission2Desc": "Partage de cas, relecture d'imagerie, registre prospectif Est et réseau d'entraide inter-wilayas.","apropos.mission3": "Représentation","apropos.mission3Desc": "Porte-voix de la spécialité auprès des autorités sanitaires, des facultés et des partenaires industriels.",
"apropos.zone": "Zone d'action — l'Est en réseau","apropos.zoneDesc": "Le CGEL couvre l'ensemble du grand Est, avec des membres présents et actifs dans les wilayas suivantes. Cette maille permet une formation de proximité et une meilleure coordination des soins.","apropos.zoneNote": "* Liste indicative — adhésions ouvertes aux wilayas limitrophes. Carte interactive à venir.",
"apropos.collegeTag": "Collège professionnel — Est","apropos.governance": "Gouvernance","apropos.bureau": "Le bureau — mandat 2024-2026","apropos.bureauDesc": "Élu en assemblée générale, le bureau assure le pilotage scientifique, administratif et partenarial du collège. Mandat de 2 ans, renouvelable.",
"apropos.presidentRole": "Président","apropos.presidentBio": "Gastroentérologue libéral à Constantine. DIU d'endoscopie interventionnelle. Pilote le projet CGEL Scientific Days et les relations institutionnelles.","apropos.memberFoot": "Constantine · libéral · membre fondateur 2018",
"apropos.placeholderName": "Nom Prenom","apropos.placeholderRole": "Profile du membre","apropos.placeholderBio": "Description du membre.<br/>va apparaitre ici",
"events.coming": "À venir","events.comingDesc": "Plus de détails sur le programme, les intervenants et l'inscription seront publiés ici.",
"events.sponsors.kicker": "Ils nous soutiennent","events.sponsors.title": "Sponsors","events.sponsors.desc": "Les 10 laboratoires qui accompagnent le CGEL Scientific Days.","events.sponsors.note": "CGEL Scientific Days — 3e Édition — ces sponsors sont spécifiques à cet événement uniquement.","events.sponsors.count": "10 sponsors confirmés",
"events.past1.title": "2ème Journée de Formation Médicale Continue CGEL","events.past1.meta": "25–26 septembre 2025 · Hôtel El Hocine, Constantine","events.past1.desc": "Deux jours de formation et d'échanges scientifiques à l'Hôtel El Hocine.",
"events.past2.title": "Proctologie clinique pour le médecin généraliste","events.past2.badge": "1ère soirée FMC","events.past2.meta": "25 décembre 2025, 17h00 · Restaurant Délice, Ali Mendjeli","events.past2.desc": "Soirée pratique en partenariat avec Repartidis.",
"events.past3.title": "Trouble fonctionnel de l'intestin : approche pratique","events.past3.badge": "3ème soirée FMC","events.past3.meta": "07 mai 2026, 17h00 · Restaurant Apex, Constantine","events.past3.desc": "En collaboration avec le Laboratoire Mayoly.",
"contact.kicker": "Contact","contact.title": "Contacter le CGEL","contact.lead": "Écrivez au comité d'organisation du collège.","contact.organizer": "Organisateur","contact.edition": "3<sup>e</sup> Édition — CGEL Scientific Days","contact.phone": "Téléphone","contact.email": "E-mail","contact.website": "Site web","contact.partner": "Partenaire scientifique","contact.partnerName": "Partenariat universitaire","contact.partnerNote": "Les informations partenaire seront enrichies dès réception.","contact.details": "Détails de l'événement","contact.date": "Date","contact.dateValue": "01 oct. 2026","contact.place": "Lieu","contact.placeValue": "Ahmed Bey Zenith, Constantine","contact.viewPlace": "Voir le lieu","contact.registerTitle": "Prêt à vous inscrire ?","contact.registerDesc": "Réservez votre place aux CGEL Scientific Days — 3<sup>e</sup> Édition.","contact.registerBtn": "S'inscrire","partners.ilsNousSoutiennent": "Ils nous soutiennent","partners.nosSponsors": "Nos Sponsors","partners.sponsorDescription": "CGEL Scientific Days — 3e Édition — "
      },
      en: {
        "nav.home": "Home","nav.about": "About","nav.events": "Events","nav.projects": "Projects","nav.contact": "Contact","nav.contactBtn": "Contact us",
        "hero.kicker": "College of Hepato-Gastroenterologists","hero.kicker2": "and Liberal Endoscopists of the East","hero.tagline": "serving liberal gastroenterology — training, scientific exchange and specialty advocacy.",
        "carousel.expertise.badge": "At the heart of the specialty","carousel.edition": "· 3<sup>rd</sup> edition","carousel.expertise.title1": "CGEL Scientific Days — 3rd edition","carousel.expertise.title2": "Scientific days of the college","carousel.expertise.desc": "Excellence in liberal hepato-gastroenterology","carousel.program.badge": "Program","carousel.program.desc": "From medical innovation to smart care","carousel.program.chiffre": "Conferences · Workshops · Exchanges","carousel.chiffre.expertise": "Training · Exchange · Innovation","carousel.cta.register": "Register","carousel.cta.discover": "Discover the college","carousel.org.organizer": "Organizer","carousel.org.partner": "Scientific partner","marquee.title": "They support the college",
        "about.kicker": "About","about.title1": "The college","about.title2": "in brief","about.text1": "CGEL brings together hepato-gastroenterologists and liberal endoscopists of the East. Our mission: support liberal practice, promote continuing education and represent the specialty.","about.text2": "The college organizes scientific meetings, develops projects for the profession and supports its members daily. This site is being enriched — each section will be completed soon.","about.quote": "“Advancing liberal gastroenterology of the East together.”","mission.title": "Our mission","mission.formation": "Training","mission.formationDesc": "Promote continuing education and updated practices.","mission.exchange": "Exchange","mission.exchangeDesc": "Create spaces for sharing and discussion among professionals.","mission.representation": "Advocacy","mission.representationDesc": "Defend the interests of the specialty in liberal practice.",
        "pillars.formation": "Continuing education","pillars.formationDesc": "Scientific days and updates tailored to liberal practice.","pillars.exchange": "Scientific exchange","pillars.exchangeDesc": "A network of professionals sharing experiences and cases.","pillars.life": "Life of the specialty","pillars.lifeDesc": "Representation of gastroenterology and liberal practice in the East.",
        "explore.kicker": "Explore","explore.title": "Site sections","explore.desc": "Our events, projects and news — coming soon, in preparation.","explore.card1Title": "Scientific days","explore.card1Desc": "Congresses, study days and specialty meetings — calendar and practical info.","explore.card2Title": "College projects","explore.card2Desc": "Initiatives led by the college for the profession and liberal practice.","explore.card3Title": "Write to us","explore.card3Desc": "A question, membership, partnership? Contact the college directly.","explore.cta": "Discover →",
        "cta.kicker": "Join us","cta.title1": "AT THE SERVICE OF","cta.title2": "LIBERAL GASTROENTEROLOGY.","cta.lead": "Join the college, take part in our scientific days and follow specialty projects in the East.","cta.btnContact": "Contact us","cta.btnEvents": "Our events",
        "pastEvents.kicker": "Past events","pastEvents.title": "In pictures — our past events","pastEvents.desc": "Highlights from previous editions.","pastEvents.card1Title": "CGEL Scientific Days — Edition 1","pastEvents.card1Desc": "Constantine · October 2024","pastEvents.card2Title": "Scientific Day 2023","pastEvents.card2Desc": "Transmission & clinical cases","pastEvents.card3Title": "Endoscopy workshop","pastEvents.card3Desc": "Hands-on training · 2023","pastEvents.card4Title": "AI & Health Conference","pastEvents.card4Desc": "Medical innovation · 2024","pastEvents.card5Title": "Partners meeting","pastEvents.card5Desc": "Exchanges with labs","pastEvents.card6Title": "Closing & outlook","pastEvents.card6Desc": "Constantine · highlights",
        "footer.desc": "College of Hepato-Gastroenterologists and Liberal Endoscopists of the East — serving liberal gastroenterology.","footer.missionLabel": "Our mission","footer.missionTitle": "Advancing the specialty","footer.missionSub": "Training · exchange · advocacy","footer.sectionsTitle": "Sections","footer.infoTitle": "Information","footer.contactTitle": "Contact","footer.copyright": "© 2026 CGEL — Professional college.","footer.tagline": "Liberal hepato-gastroenterology · East",
        "events.hero.kicker": "Events","events.hero.title": "CGEL Events","events.hero.lead": "Scientific days, congresses and meetings of liberal hepato-gastroenterology in the East.","events.featured.badge": "Featured","events.featured.muted": "Scientific days","events.featured.title": "CGEL Scientific Days — 3rd Edition","events.featured.desc": "Gastroenterology in the era of AI and connected health — the scientific rendezvous of the college, with university partnership.","events.featured.date": "Thursday, October 1, 2026","events.featured.place": "Ahmed Bey Zenith, Constantine, Algeria","events.featured.btnMore": "Learn more","events.featured.btnContact": "Contact us","events.previousTitle": "Previous events","events.previousDesc": "Look back at our previous editions.","backToTop": "Back to top","carousel.meta.date": "Thursday, October 1, 2026","carousel.meta.place": "Ahmed Bey Zenith, Constantine",
"pastEvents.sub": "Three CGEL highlights — posters readable in a large format.",
"pastEvents.event1.title": "2nd CGEL Continuing Medical Education Day","pastEvents.event1.date": "September 25–26, 2025","pastEvents.event1.place": "El Hocine Hotel, Constantine","pastEvents.event1.desc": "Two days of training and scientific exchange around liberal gastroenterology, at El Hocine Hotel.",
"pastEvents.event2.title": "Clinical proctology for the general practitioner","pastEvents.event2.badge": "1st FMC evening","pastEvents.event2.date": "December 25, 2025, 5:00 PM","pastEvents.event2.place": "Délice Restaurant, Nouvelle Ville–Ali Mendjeli","pastEvents.event2.desc": "Practical evening dedicated to proctology in general medicine, in partnership with Repartidis.",
"pastEvents.event3.title": "Functional bowel disorder: a practical approach","pastEvents.event3.badge": "3rd FMC evening","pastEvents.event3.date": "May 7, 2026, 5:00 PM","pastEvents.event3.place": "Apex Restaurant, Ali Mendjeli – Constantine","pastEvents.event3.desc": "Practical approach to functional bowel disorders for the general practitioner, in collaboration with Mayoly Laboratory.",
"gallery.kicker": "Photo gallery","gallery.title": "Gallery — our highlights","gallery.sub": "Our highlights in pictures — click to enlarge.",
"gallery.1.caption": "CGEL Scientific Days · Overview — plenary room and exchanges","gallery.1.p": "CGEL Scientific Days — Plenary","gallery.1.span": "Overview",
"gallery.2.caption": "Scientific day · Q&A session with the experts","gallery.2.p": "Scientific day","gallery.2.span": "Expert exchanges",
"gallery.3.caption": "Endoscopy workshop · Practical demonstration on clinical cases","gallery.3.p": "Endoscopy workshop","gallery.3.span": "Practical demonstration",
"gallery.4.caption": "AI & Health Conference · Round table — innovation and smart care","gallery.4.p": "AI & Health Conference","gallery.4.span": "Round table",
"gallery.5.caption": "Partners meeting · Exchanges with sponsor laboratories","gallery.5.p": "Partners meeting","gallery.5.span": "Sponsor exchanges",
"gallery.6.caption": "Closing & outlook · Certificate award and group photo","gallery.6.p": "Closing & outlook","gallery.6.span": "Group photo",
"gallery.7.caption": "Scientific day","gallery.7.p": "Scientific day","gallery.7.span": "Group photo",
"gallery.8.caption": "College evening · Conviviality and East network — informal moments","gallery.8.p": "College evening","gallery.8.span": "Conviviality",
"mobileBar.title": "CGEL — Oct 1, 2026","mobileBar.loc": "Ahmed Bey Zenith, Constantine","mobileBar.cta": "Register",
"apropos.title": "College of Hepato-Gastroenterologists and Liberal Endoscopists of the East","apropos.lead": "A professional college that unites, trains and represents liberal gastroenterology in eastern Algeria since 2018.",
"apropos.history": "Our history","apropos.history1": "Founded in <strong>2018 in Constantine</strong> by a group of liberal gastroenterologists and endoscopists of the East, CGEL was born from a simple observation: liberal practice needed a collective voice, a place for exchange and a structure dedicated to continuing education.","apropos.history2": "From 12 founding members gathered around a table at the Cirta hotel, the college today counts <strong>more than 80 active members</strong> spread across 12 wilayas. In 2021 it launched its first <em>Scientific days</em>; in 2024, the 2<sup>nd</sup> edition brought together 180 participants and 10 partner laboratories.","apropos.history3": "CGEL has built a structuring partnership with <strong>Constantine 2 Abdelhamid Mehri University</strong> and the <strong>Faculty of New Technologies (NTIC)</strong>, laying the foundations of the 2026 3<sup>rd</sup> edition of the <strong>CGEL Scientific Days</strong> on the theme <em>“Gastroenterology in the era of AI &amp; connected health”</em>.",
"apropos.missionDesc": "Support clinical excellence in private practice, advance knowledge and defend the interests of the specialty with institutions and the public.",
"apropos.mission1": "Continuing education","apropos.mission1Desc": "CGEL Scientific Days, endoscopy workshops, webinars and guideline updates — adapted to the reality of private practice.","apropos.mission2": "Scientific exchange","apropos.mission2Desc": "Case sharing, imaging review, East prospective registry and inter-wilaya mutual aid network.","apropos.mission3": "Advocacy","apropos.mission3Desc": "The voice of the specialty with health authorities, faculties and industrial partners.",
"apropos.zone": "Area of action — the East as a network","apropos.zoneDesc": "CGEL covers the whole greater East, with active members present in the following wilayas. This mesh enables local training and better care coordination.","apropos.zoneNote": "* Indicative list — membership open to neighbouring wilayas. Interactive map coming soon.",
"apropos.collegeTag": "Professional college — East","apropos.governance": "Governance","apropos.bureau": "The board — 2024-2026 term","apropos.bureauDesc": "Elected at the general assembly, the board ensures the scientific, administrative and partnership leadership of the college. Two-year renewable term.",
"apropos.presidentRole": "President","apropos.presidentBio": "Liberal gastroenterologist in Constantine. DIU in interventional endoscopy. Leads the CGEL Scientific Days project and institutional relations.","apropos.memberFoot": "Constantine · private practice · founding member 2018",
"apropos.placeholderName": "Name Surname","apropos.placeholderRole": "Member profile","apropos.placeholderBio": "Member description.<br/>will appear here",
"events.coming": "Coming soon","events.comingDesc": "More details on the program, speakers and registration will be published here.",
"events.sponsors.kicker": "They support us","events.sponsors.title": "Sponsors","events.sponsors.desc": "The 10 laboratories supporting the CGEL Scientific Days.","events.sponsors.note": "CGEL Scientific Days — 3rd Edition — these sponsors are specific to this event only.","events.sponsors.count": "10 confirmed sponsors",
"events.past1.title": "2nd CGEL Continuing Medical Education Day","events.past1.meta": "September 25–26, 2025 · El Hocine Hotel, Constantine","events.past1.desc": "Two days of training and scientific exchange at El Hocine Hotel.",
"events.past2.title": "Clinical proctology for the general practitioner","events.past2.badge": "1st FMC evening","events.past2.meta": "December 25, 2025, 5:00 PM · Délice Restaurant, Ali Mendjeli","events.past2.desc": "Practical evening in partnership with Repartidis.",
"events.past3.title": "Functional bowel disorder: practical approach","events.past3.badge": "3rd FMC evening","events.past3.meta": "May 7, 2026, 5:00 PM · Apex Restaurant, Constantine","events.past3.desc": "In collaboration with Mayoly Laboratory.",
"contact.kicker": "Contact","contact.title": "Contact CGEL","contact.lead": "Write to the college organizing committee.","contact.organizer": "Organizer","contact.edition": "3<sup>rd</sup> Edition — CGEL Scientific Days","contact.phone": "Phone","contact.email": "Email","contact.website": "Website","contact.partner": "Scientific partner","contact.partnerName": "University partnership","contact.partnerNote": "Partner information will be enriched upon receipt.","contact.details": "Event details","contact.date": "Date","contact.dateValue": "Oct 1, 2026","contact.place": "Location","contact.placeValue": "Ahmed Bey Zenith, Constantine","contact.viewPlace": "View location","contact.registerTitle": "Ready to register?","contact.registerDesc": "Reserve your seat at CGEL Scientific Days — 3<sup>rd</sup> Edition.","contact.registerBtn": "Register","partners.ilsNousSoutiennent": "They support us","partners.nosSponsors": "Our Sponsors","partners.sponsorDescription": "CGEL Scientific Days — 3rd Edition — "
      },
      ar: {
        "nav.home": "الرئيسية","nav.about": "من نحن","nav.events": "الفعاليات","nav.projects": "المشاريع","nav.contact": "اتصل بنا","nav.contactBtn": "اتصل بنا",
        "hero.kicker": "كلية أطباء الجهاز الهضمي والكبد","hero.kicker2": "ومناظير الجهاز الهضمي للأحرار - شرق","hero.tagline": "في خدمة أمراض الجهاز الهضمي الحرة — التكوين والتبادل العلمي والدفاع عن التخصص.",
        "carousel.expertise.badge": "في صلب التخصص","carousel.edition": "· النسخة الثالثة","carousel.expertise.title1": "أيام CGEL — النسخة الثالثة","carousel.expertise.title2": "الأيام العلمية للكلية","carousel.expertise.desc": "التميز في أمراض الجهاز الهضمي والكبد للممارسة الحرة","carousel.program.badge": "البرنامج","carousel.program.desc": "من الابتكار الطبي إلى الرعاية الذكية","carousel.program.chiffre": "محاضرات · ورشات · تبادل","carousel.chiffre.expertise": "تكوين · تبادل · ابتكار","carousel.cta.register": "سجّل الآن","carousel.cta.discover": "اكتشف الكلية","carousel.org.organizer": "المنظم","carousel.org.partner": "الشريك العلمي","marquee.title": "يدعمون الكلية",
        "about.kicker": "من نحن","about.title1": "الكلية","about.title2": "باختصار","about.text1": "تجمع CGEL أطباء الجهاز الهضمي والكبد ومناظير الجهاز الهضمي للأحرار في الشرق. مهمتنا: دعم الممارسة الحرة وتعزيز التكوين المستمر وتمثيل التخصص.","about.text2": "تنظم الكلية لقاءات علمية وتطور مشاريع للمهنة وترافق أعضاءها يومياً. هذا الموقع قيد الإثراء — سيتم إكمال كل قسم قريباً.","about.quote": "“معاً للنهوض بأمراض الجهاز الهضمي الحرة في الشرق.”","mission.title": "مهمتنا","mission.formation": "التكوين","mission.formationDesc": "تثمين التكوين المستمر وتحديث الممارسات.","mission.exchange": "التبادل","mission.exchangeDesc": "خلق فضاءات للمشاركة والنقاش بين المهنيين.","mission.representation": "التمثيل","mission.representationDesc": "الدفاع عن مصالح التخصص في الممارسة الحرة.",
        "pillars.formation": "التكوين المستمر","pillars.formationDesc": "أيام علمية وتحديثات مكيّفة للممارسة الحرة.","pillars.exchange": "التبادل العلمي","pillars.exchangeDesc": "شبكة من المهنيين يتبادلون الخبرات والحالات.","pillars.life": "حياة التخصص","pillars.lifeDesc": "تمثيل أمراض الجهاز الهضمي والممارسة الحرة في الشرق.",
        "explore.kicker": "استكشاف","explore.title": "أقسام الموقع","explore.desc": "فعالياتنا ومشاريعنا وأخبارنا — قريباً، قيد التحضير.","explore.card1Title": "الأيام العلمية","explore.card1Desc": "المؤتمرات وأيام الدراسة ولقاءات التخصص — التقويم والمعلومات العملية.","explore.card2Title": "مشاريع الكلية","explore.card2Desc": "المبادرات التي تقودها الكلية للمهنة والممارسة الحرة.","explore.card3Title": "راسلنا","explore.card3Desc": "سؤال، انضمام، شراكة؟ اتصل بالكلية مباشرة.","explore.cta": "اكتشف ←",
        "cta.kicker": "انضم إلينا","cta.title1": "في خدمة","cta.title2": "أمراض الجهاز الهضمي الحرة.","cta.lead": "انضم إلى الكلية وشارك في أيامنا العلمية وتابع مشاريع التخصص في الشرق.","cta.btnContact": "اتصل بنا","cta.btnEvents": "فعالياتنا",
        "pastEvents.kicker": "الفعاليات السابقة","pastEvents.title": "بالصور — فعالياتنا السابقة","pastEvents.desc": "أبرز لحظات النسخ السابقة.","pastEvents.card1Title": "CGEL Scientific Days — النسخة 1","pastEvents.card1Desc": "قسنطينة · أكتوبر 2024","pastEvents.card2Title": "اليوم العلمي 2023","pastEvents.card2Desc": "النقل والحالات السريرية","pastEvents.card3Title": "ورشة التنظير","pastEvents.card3Desc": "تكوين تطبيقي · 2023","pastEvents.card4Title": "مؤتمر الذكاء الاصطناعي والصحة","pastEvents.card4Desc": "الابتكار الطبي · 2024","pastEvents.card5Title": "لقاء الشركاء","pastEvents.card5Desc": "تبادل مع المخابر","pastEvents.card6Title": "الاختتام والآفاق","pastEvents.card6Desc": "قسنطينة · لحظات بارزة",
        "footer.desc": "كلية أطباء الجهاز الهضمي والكبد ومناظير الجهاز الهضمي للأحرار - شرق — في خدمة أمراض الجهاز الهضمي الحرة.","footer.missionLabel": "مهمتنا","footer.missionTitle": "النهوض بالتخصص","footer.missionSub": "تكوين · تبادل · تمثيل","footer.sectionsTitle": "الأقسام","footer.infoTitle": "معلومات","footer.contactTitle": "اتصل بنا","footer.copyright": "© 2026 CGEL — كلية مهنية.","footer.tagline": "أمراض الجهاز الهضمي الحرة · شرق",
        "events.hero.kicker": "الفعاليات","events.hero.title": "فعاليات CGEL","events.hero.lead": "الأيام العلمية والمؤتمرات ولقاءات أمراض الجهاز الهضمي الحرة في الشرق.","events.featured.badge": "مميز","events.featured.muted": "الأيام العلمية","events.featured.title": "CGEL Scientific Days — النسخة الثالثة","events.featured.desc": "أمراض الجهاز الهضمي في عصر الذكاء الاصطناعي والصحة المتصلة — الموعد العلمي للكلية بشراكة جامعية.","events.featured.date": "الخميس 1 أكتوبر 2026","events.featured.place": "قاعة أحمد باي زينيت، قسنطينة، الجزائر","events.featured.btnMore": "اعرف المزيد","events.featured.btnContact": "اتصل بنا","events.previousTitle": "الفعاليات السابقة","events.previousDesc": "نظرة على نسخنا السابقة.","backToTop": "العودة للأعلى","carousel.meta.date": "الخميس 1 أكتوبر 2026","carousel.meta.place": "قاعة أحمد باي زينيت، قسنطينة",
"pastEvents.sub": "ثلاث لحظات بارزة لـ CGEL — ملصقات مقروءة بصيغة كبيرة.",
"pastEvents.event1.title": "اليوم الثاني للتكوين الطبي المتواصل CGEL","pastEvents.event1.date": "25–26 سبتمبر 2025","pastEvents.event1.place": "فندق الحسين، قسنطينة","pastEvents.event1.desc": "يومان من التكوين والتبادل العلمي حول أمراض الجهاز الهضمي الحرة، في فندق الحسين.",
"pastEvents.event2.title": "علم المستقيم السريري للطبيب العام","pastEvents.event2.badge": "الأمسية الأولى للتكوين الطبي المتواصل","pastEvents.event2.date": "25 ديسمبر 2025، 17:00","pastEvents.event2.place": "مطعم ديليس، المدينة الجديدة–علي منجلي","pastEvents.event2.desc": "أمسية تطبيقية مخصصة لعلم المستقيم في الطب العام، بالشراكة مع Repartidis.",
"pastEvents.event3.title": "الاضطراب الوظيفي للأمعاء: مقاربة عملية","pastEvents.event3.badge": "الأمسية الثالثة للتكوين الطبي المتواصل","pastEvents.event3.date": "07 ماي 2026، 17:00","pastEvents.event3.place": "مطعم أبكس، علي منجلي – قسنطينة","pastEvents.event3.desc": "مقاربة عملية للاضطرابات الوظيفية المعوية للطبيب العام، بالتعاون مع مخبر مايولي.",
"gallery.kicker": "معرض الصور","gallery.title": "المعرض — لحظاتنا البارزة","gallery.sub": "لحظاتنا البارزة بالصور — اضغط للتكبير.",
"gallery.1.caption": "أيام CGEL · نظرة عامة — القاعة العامة والتبادلات","gallery.1.p": "أيام CGEL — جلسة عامة","gallery.1.span": "نظرة عامة",
"gallery.2.caption": "اليوم العلمي · جلسة أسئلة وأجوبة مع الخبراء","gallery.2.p": "اليوم العلمي","gallery.2.span": "تبادلات الخبراء",
"gallery.3.caption": "ورشة التنظير · عرض عملي على حالات سريرية","gallery.3.p": "ورشة التنظير","gallery.3.span": "عرض عملي",
"gallery.4.caption": "مؤتمر الذكاء الاصطناعي والصحة · مائدة مستديرة — الابتكار والرعاية الذكية","gallery.4.p": "مؤتمر الذكاء الاصطناعي والصحة","gallery.4.span": "مائدة مستديرة",
"gallery.5.caption": "لقاء الشركاء · تبادلات مع المخابر الراعية","gallery.5.p": "لقاء الشركاء","gallery.5.span": "تبادلات الرعاة",
"gallery.6.caption": "الاختتام والآفاق · تسليم الشهادات وصورة جماعية","gallery.6.p": "الاختتام والآفاق","gallery.6.span": "صورة جماعية",
"gallery.7.caption": "اليوم العلمي","gallery.7.p": "اليوم العلمي","gallery.7.span": "صورة جماعية",
"gallery.8.caption": "أمسية الكلية · ودّ وشبكة الشرق — لحظات غير رسمية","gallery.8.p": "أمسية الكلية","gallery.8.span": "ودّ ولُطف",
"mobileBar.title": "CGEL — 01 أكتوبر 2026","mobileBar.loc": "قاعة أحمد باي زينيت، قسنطينة","mobileBar.cta": "سجّل الآن",
"apropos.title": "كلية أطباء الجهاز الهضمي والكبد ومناظير الجهاز الهضمي للأحرار – شرق","apropos.lead": "كلية مهنية تجمع وتكوّن وتمثل أمراض الجهاز الهضمي الحرة في شرق الجزائر منذ 2018.",
"apropos.history": "قصتنا","apropos.history1": "تأسست CGEL سنة 2018 في قسنطينة على يد مجموعة من أطباء الجهاز الهضمي والكبد ومناظير الجهاز الهضمي الأحرار في الشرق، انطلاقًا من ملاحظة بسيطة: الممارسة الحرة كانت بحاجة إلى صوت جماعي وفضاء للتبادل وهيكل مكرّس للتكوين المستمر.","apropos.history2": "من 12 عضوًا مؤسسًا اجتمعوا حول طاولة في فندق سيرتا، تضم الكلية اليوم أكثر من 80 عضوًا نشطًا موزعين على 12 ولاية. في 2021 أطلقت أيامها العلمية الأولى؛ وفي 2024 جمعت النسخة الثانية 180 مشاركًا و10 مخابر شريكة.","apropos.history3": "أقامت CGEL شراكة هيكلية مع جامعة قسنطينة 2 عبد الحميد مهري وكلية التكنولوجيات الجديدة للإعلام والاتصال، تمهيدًا للنسخة الثالثة 2026 من أيام CGEL العلمية حول موضوع «أمراض الجهاز الهضمي في عصر الذكاء الاصطناعي والصحة المتصلة».",
"apropos.missionDesc": "مرافقة التميز السريري في الممارسة الحرة، وتطوير المعارف، والدفاع عن مصالح التخصص لدى المؤسسات والجمهور.",
"apropos.mission1": "التكوين المستمر","apropos.mission1Desc": "أيام CGEL العلمية، ورشات التنظير، الندوات عبر الإنترنت وتحديثات التوصيات — مكيّفة مع واقع العيادة الحرة.","apropos.mission2": "التبادل العلمي","apropos.mission2Desc": "تشارك الحالات، وإعادة قراءة الصور الطبية، وسجل الشرق الاستشرافي، وشبكة الدعم بين الولايات.","apropos.mission3": "التمثيل","apropos.mission3Desc": "ناطق باسم التخصص لدى السلطات الصحية والكليات والشركاء الصناعيين.",
"apropos.zone": "منطقة العمل — الشرق في شبكة","apropos.zoneDesc": "تغطي CGEL كامل الشرق الكبير، بأعضاء حاضرين ونشطين في الولايات التالية. تتيح هذه الشبكة تكوينًا قريبًا وتنسيقًا أفضل للرعاية.","apropos.zoneNote": "* قائمة إرشادية — الانضمام مفتوح للولايات المجاورة. خريطة تفاعلية قريبًا.",
"apropos.collegeTag": "كلية مهنية — شرق","apropos.governance": "الهيئة الإدارية","apropos.bureau": "المكتب — عهدة 2024-2026","apropos.bureauDesc": "ينتخب المكتب في الجمعية العامة، ويتكفل بالتسيير العلمي والإداري والشراكات للكلية. عهدة سنتان قابلة للتجديد.",
"apropos.presidentRole": "الرئيس","apropos.presidentBio": "أخصائي أمراض الجهاز الهضمي الحر في قسنطينة. دبلوم جامعي في التنظير التداخلي. يقود مشروع أيام CGEL العلمية والعلاقات المؤسساتية.","apropos.memberFoot": "قسنطينة · حر · عضو مؤسس 2018",
"apropos.placeholderName": "الاسم واللقب","apropos.placeholderRole": "ملف العضو","apropos.placeholderBio": "وصف العضو.<br/>سيظهر هنا",
"events.coming": "قريبًا","events.comingDesc": "سيُنشر هنا لاحقًا مزيد من التفاصيل حول البرنامج والمتدخلين والتسجيل.",
"events.sponsors.kicker": "يدعموننا","events.sponsors.title": "الرعاة","events.sponsors.desc": "المخابر العشرة المرافقة لأيام CGEL العلمية.","events.sponsors.note": "أيام CGEL العلمية — النسخة الثالثة — هؤلاء الرعاة خاصون بهذا الحدث فقط.","events.sponsors.count": "10 رعاة مؤكدين",
"events.past1.title": "اليوم الثاني للتكوين الطبي المتواصل CGEL","events.past1.meta": "25–26 سبتمبر 2025 · فندق الحسين، قسنطينة","events.past1.desc": "يومان من التكوين والتبادل العلمي في فندق الحسين.",
"events.past2.title": "علم المستقيم السريري للطبيب العام","events.past2.badge": "الأمسية الأولى للتكوين الطبي المتواصل","events.past2.meta": "25 ديسمبر 2025، 17:00 · مطعم ديليس، علي منجلي","events.past2.desc": "أمسية تطبيقية بالشراكة مع Repartidis.",
"events.past3.title": "الاضطراب الوظيفي للأمعاء: مقاربة عملية","events.past3.badge": "الأمسية الثالثة للتكوين الطبي المتواصل","events.past3.meta": "07 ماي 2026، 17:00 · مطعم أبكس، قسنطينة","events.past3.desc": "بالتعاون مع مخبر مايولي.",
"contact.kicker": "اتصل بنا","contact.title": "الاتصال بـ CGEL","contact.lead": "اكتب إلى اللجنة المنظمة للكلية.","contact.organizer": "المنظم","contact.edition": "النسخة الثالثة — أيام CGEL العلمية","contact.phone": "الهاتف","contact.email": "البريد الإلكتروني","contact.website": "الموقع الإلكتروني","contact.partner": "الشريك العلمي","contact.partnerName": "شراكة جامعية","contact.partnerNote": "سيتم إثراء معلومات الشريك فور استلامها.","contact.details": "تفاصيل الحدث","contact.date": "التاريخ","contact.dateValue": "01 أكتوبر 2026","contact.place": "المكان","contact.placeValue": "قاعة أحمد باي زينيت، قسنطينة","contact.viewPlace": "عرض المكان","contact.registerTitle": "مستعد للتسجيل؟","contact.registerDesc": "احجز مقعدك في أيام CGEL العلمية — النسخة الثالثة.","contact.registerBtn": "سجّل الآن","partners.ilsNousSoutiennent": "يدعموننا","partners.nosSponsors": "رعاتنا","partners.sponsorDescription": "أيام CGEL العلمية — النسخة الثالثة"
      }
    };
    const applyLang = (lang) => {
      if (!translations[lang]) lang = "fr";
      document.documentElement.setAttribute("lang", lang);
      document.documentElement.setAttribute("dir", lang === "ar" ? "rtl" : "ltr");
      try { localStorage.setItem("cgel_lang", lang); } catch (e) {}
      document.querySelectorAll(".lang-switcher").forEach((sw) => {
        sw.querySelectorAll("[data-lang]").forEach((btn) => {
          btn.classList.toggle("active", btn.getAttribute("data-lang") === lang);
        });
      });
      document.querySelectorAll("[data-i18n]").forEach((el) => {
        const key = el.getAttribute("data-i18n");
        const val = (translations[lang] && translations[lang][key]) || (translations["fr"] && translations["fr"][key]);
        if (val != null) {
          if (val.indexOf("<") !== -1 && val.indexOf(">") !== -1) el.innerHTML = val;
          else el.textContent = val;
        }
      });
      document.querySelectorAll("[data-i18n-caption]").forEach((el) => {
        const key = el.getAttribute("data-i18n-caption");
        const val = (translations[lang] && translations[lang][key]) || (translations["fr"] && translations["fr"][key]);
        if (val != null) el.setAttribute("data-caption", val);
      });
      const btt = document.getElementById("backToTop");
      if (btt && translations[lang]["backToTop"]) btt.setAttribute("aria-label", translations[lang]["backToTop"]);
    };
    const saved = (() => { try { return localStorage.getItem("cgel_lang"); } catch (e) { return null; } })();
    applyLang(saved && translations[saved] ? saved : "fr");
    document.querySelectorAll(".lang-switcher [data-lang]").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        applyLang(btn.getAttribute("data-lang"));
        btn.blur();
      });
    });

    return () => {
      cleanupCarousel();
      window.removeEventListener("scroll", onScrollBack);
      if (backBtn) backBtn.removeEventListener("click", onBackClick);
      cleanupGallery();
      if (bar) window.removeEventListener("scroll", onScrollBar);
      if (observer) observer.disconnect();
    };
  }, [pathname]);

  return null;
}

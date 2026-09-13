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
      const shouldShow = window.scrollY > 560;
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
        "carousel.expertise.badge": "Au cœur de la spécialité","carousel.edition": "· 3<sup>e</sup> édition","carousel.expertise.title1": "CGEL Days — 3e édition","carousel.expertise.title2": "Journées scientifiques du collège","carousel.expertise.desc": "L'excellence en hépato-gastroentérologie libérale","carousel.program.badge": "Programme","carousel.program.desc": "De l'innovation médicale au soin intelligent","carousel.program.chiffre": "Conférences · Ateliers · Échanges","carousel.chiffre.expertise": "Formation · Échange · Innovation","carousel.cta.register": "S'inscrire","carousel.cta.discover": "Découvrir le collège","carousel.org.organizer": "Organisateur","carousel.org.partner": "Partenaire scientifique","marquee.title": "Ils soutiennent le collège",
        "about.kicker": "À propos","about.title1": "Le collège","about.title2": "en bref","about.text1": "CGEL fédère les hépato-gastroentérologues et endoscopistes libéraux de l'Est. Notre mission : soutenir la pratique libérale, favoriser la formation continue et porter la voix de la spécialité auprès des institutions.","about.text2": "Le collège organise des rencontres scientifiques, développe des projets pour la profession et accompagne ses membres au quotidien. Ce site est en cours d'enrichissement — chaque section sera complétée prochainement.","about.quote": "“Faire progresser ensemble la gastroentérologie libérale de l'Est.”","mission.title": "Notre mission","mission.formation": "Formation","mission.formationDesc": "Valoriser la formation continue et l'actualisation des pratiques.","mission.exchange": "Échange","mission.exchangeDesc": "Créer des lieux de partage et de discussion entre professionnels.","mission.representation": "Représentation","mission.representationDesc": "Défendre les intérêts de la spécialité en pratique libérale.",
        "pillars.formation": "Formation continue","pillars.formationDesc": "Des journées scientifiques et des mises à jour adaptées à la pratique libérale.","pillars.exchange": "Échange scientifique","pillars.exchangeDesc": "Un réseau de professionnels qui partagent leurs expériences et leurs cas.","pillars.life": "Vie de la spécialité","pillars.lifeDesc": "Représentation de la gastroentérologie et de la pratique libérale de l'Est.",
        "explore.kicker": "Explorez","explore.title": "Les sections du site","explore.desc": "Nos événements, projets et actualités — bientôt disponibles, en cours de préparation.","explore.card1Title": "Journées scientifiques","explore.card1Desc": "Congrès, journées d'étude et rencontres de la spécialité — calendrier et informations pratiques.","explore.card2Title": "Les projets du collège","explore.card2Desc": "Les initiatives portées par le collège pour la profession et la pratique libérale.","explore.card3Title": "Nous écrire","explore.card3Desc": "Une question, une adhésion, un partenariat ? Contactez le collège directement.","explore.cta": "Découvrir →",
        "cta.kicker": "Rejoignez-nous","cta.title1": "AU SERVICE DE LA","cta.title2": "GASTROENTÉROLOGIE LIBÉRALE.","cta.lead": "Adhérez au collège, participez à nos journées scientifiques et suivez les projets de la spécialité dans l'Est.","cta.btnContact": "Nous contacter","cta.btnEvents": "Nos événements",
        "pastEvents.kicker": "Événements passés","pastEvents.title": "Retour en images — nos événements passés","pastEvents.desc": "Quelques moments forts des éditions précédentes. Remplacez les images par vos photos dans images/events/ (ex. event-1.jpg, event-2.jpg...).","pastEvents.card1Title": "CGEL Days — Édition 1","pastEvents.card1Desc": "Constantine · Octobre 2024","pastEvents.card2Title": "Journée scientifique 2023","pastEvents.card2Desc": "Transmission & cas cliniques","pastEvents.card3Title": "Atelier endoscopie","pastEvents.card3Desc": "Formation pratique · 2023","pastEvents.card4Title": "Conférence IA & Santé","pastEvents.card4Desc": "Innovation médicale · 2024","pastEvents.card5Title": "Rencontre partenaires","pastEvents.card5Desc": "Échanges avec les laboratoires","pastEvents.card6Title": "Clôture & perspectives","pastEvents.card6Desc": "Constantine · moments forts",
        "footer.desc": "Collège des Hépato-Gastroentérologues et Endoscopistes Libéraux de l'Est — au service de la gastroentérologie libérale.","footer.missionLabel": "Notre mission","footer.missionTitle": "Faire progresser la spécialité","footer.missionSub": "Formation · échange · représentation","footer.sectionsTitle": "Sections","footer.infoTitle": "Information","footer.contactTitle": "Contact","footer.copyright": "© 2026 CGEL — Collège professionnel.","footer.tagline": "Hépato-gastroentérologie libérale · Est",
        "events.hero.kicker": "Événements","events.hero.title": "Les événements du CGEL","events.hero.lead": "Journées scientifiques, congrès et rencontres de la hépato-gastroentérologie libérale de l'Est.","events.featured.badge": "À la une","events.featured.muted": "Journées scientifiques","events.featured.title": "CGEL Days — 3e Édition","events.featured.desc": "Gastroenterologie à l'ère de l'intelligence artificielle et de la santé connectée — le rendez-vous scientifique du collège, aux côtés d'un partenariat universitaire.","events.featured.date": "Jeudi 1 octobre 2026","events.featured.place": "Ahmed Bey Zenith, Constantine, Algérie","events.featured.btnMore": "En savoir plus","events.featured.btnContact": "Nous contacter","events.previousTitle": "Événements précédents","events.previousDesc": "Retour sur nos éditions antérieures — remplacez les placeholders par vos vraies photos dans images/events/.","backToTop": "Retour en haut"
      },
      en: {
        "nav.home": "Home","nav.about": "About","nav.events": "Events","nav.projects": "Projects","nav.contact": "Contact","nav.contactBtn": "Contact us",
        "hero.kicker": "College of Hepato-Gastroenterologists","hero.kicker2": "and Liberal Endoscopists of the East","hero.tagline": "serving liberal gastroenterology — training, scientific exchange and specialty advocacy.",
        "carousel.expertise.badge": "At the heart of the specialty","carousel.edition": "· 3<sup>rd</sup> edition","carousel.expertise.title1": "CGEL Days — 3rd edition","carousel.expertise.title2": "Scientific days of the college","carousel.expertise.desc": "Excellence in liberal hepato-gastroenterology","carousel.program.badge": "Program","carousel.program.desc": "From medical innovation to smart care","carousel.program.chiffre": "Conferences · Workshops · Exchanges","carousel.chiffre.expertise": "Training · Exchange · Innovation","carousel.cta.register": "Register","carousel.cta.discover": "Discover the college","carousel.org.organizer": "Organizer","carousel.org.partner": "Scientific partner","marquee.title": "They support the college",
        "about.kicker": "About","about.title1": "The college","about.title2": "in brief","about.text1": "CGEL brings together hepato-gastroenterologists and liberal endoscopists of the East. Our mission: support liberal practice, promote continuing education and represent the specialty.","about.text2": "The college organizes scientific meetings, develops projects for the profession and supports its members daily. This site is being enriched — each section will be completed soon.","about.quote": "“Advancing liberal gastroenterology of the East together.”","mission.title": "Our mission","mission.formation": "Training","mission.formationDesc": "Promote continuing education and updated practices.","mission.exchange": "Exchange","mission.exchangeDesc": "Create spaces for sharing and discussion among professionals.","mission.representation": "Advocacy","mission.representationDesc": "Defend the interests of the specialty in liberal practice.",
        "pillars.formation": "Continuing education","pillars.formationDesc": "Scientific days and updates tailored to liberal practice.","pillars.exchange": "Scientific exchange","pillars.exchangeDesc": "A network of professionals sharing experiences and cases.","pillars.life": "Life of the specialty","pillars.lifeDesc": "Representation of gastroenterology and liberal practice in the East.",
        "explore.kicker": "Explore","explore.title": "Site sections","explore.desc": "Our events, projects and news — coming soon, in preparation.","explore.card1Title": "Scientific days","explore.card1Desc": "Congresses, study days and specialty meetings — calendar and practical info.","explore.card2Title": "College projects","explore.card2Desc": "Initiatives led by the college for the profession and liberal practice.","explore.card3Title": "Write to us","explore.card3Desc": "A question, membership, partnership? Contact the college directly.","explore.cta": "Discover →",
        "cta.kicker": "Join us","cta.title1": "AT THE SERVICE OF","cta.title2": "LIBERAL GASTROENTEROLOGY.","cta.lead": "Join the college, take part in our scientific days and follow specialty projects in the East.","cta.btnContact": "Contact us","cta.btnEvents": "Our events",
        "pastEvents.kicker": "Past events","pastEvents.title": "In pictures — our past events","pastEvents.desc": "Highlights from previous editions. Replace placeholders with your photos in images/events/ (e.g. event-1.jpg, event-2.jpg...).","pastEvents.card1Title": "CGEL Days — Edition 1","pastEvents.card1Desc": "Constantine · October 2024","pastEvents.card2Title": "Scientific Day 2023","pastEvents.card2Desc": "Transmission & clinical cases","pastEvents.card3Title": "Endoscopy workshop","pastEvents.card3Desc": "Hands-on training · 2023","pastEvents.card4Title": "AI & Health Conference","pastEvents.card4Desc": "Medical innovation · 2024","pastEvents.card5Title": "Partners meeting","pastEvents.card5Desc": "Exchanges with labs","pastEvents.card6Title": "Closing & outlook","pastEvents.card6Desc": "Constantine · highlights",
        "footer.desc": "College of Hepato-Gastroenterologists and Liberal Endoscopists of the East — serving liberal gastroenterology.","footer.missionLabel": "Our mission","footer.missionTitle": "Advancing the specialty","footer.missionSub": "Training · exchange · advocacy","footer.sectionsTitle": "Sections","footer.infoTitle": "Information","footer.contactTitle": "Contact","footer.copyright": "© 2026 CGEL — Professional college.","footer.tagline": "Liberal hepato-gastroenterology · East",
        "events.hero.kicker": "Events","events.hero.title": "CGEL Events","events.hero.lead": "Scientific days, congresses and meetings of liberal hepato-gastroenterology in the East.","events.featured.badge": "Featured","events.featured.muted": "Scientific days","events.featured.title": "CGEL Days — 3rd Edition","events.featured.desc": "Gastroenterology in the era of AI and connected health — the scientific rendezvous of the college, with university partnership.","events.featured.date": "Thursday, October 1, 2026","events.featured.place": "Ahmed Bey Zenith, Constantine, Algeria","events.featured.btnMore": "Learn more","events.featured.btnContact": "Contact us","events.previousTitle": "Previous events","events.previousDesc": "Look back at our previous editions — replace placeholders with your real photos in images/events/.","backToTop": "Back to top"
      },
      ar: {
        "nav.home": "الرئيسية","nav.about": "من نحن","nav.events": "الفعاليات","nav.projects": "المشاريع","nav.contact": "اتصل بنا","nav.contactBtn": "اتصل بنا",
        "hero.kicker": "كلية أطباء الجهاز الهضمي والكبد","hero.kicker2": "ومناظير الجهاز الهضمي للأحرار - شرق","hero.tagline": "في خدمة أمراض الجهاز الهضمي الحرة — التكوين والتبادل العلمي والدفاع عن التخصص.",
        "carousel.expertise.badge": "في صلب التخصص","carousel.edition": "· النسخة الثالثة","carousel.expertise.title1": "أيام CGEL — النسخة الثالثة","carousel.expertise.title2": "الأيام العلمية للكلية","carousel.expertise.desc": "التميز في أمراض الجهاز الهضمي والكبد للممارسة الحرة","carousel.program.badge": "البرنامج","carousel.program.desc": "من الابتكار الطبي إلى الرعاية الذكية","carousel.program.chiffre": "محاضرات · ورشات · تبادل","carousel.chiffre.expertise": "تكوين · تبادل · ابتكار","carousel.cta.register": "سجّل الآن","carousel.cta.discover": "اكتشف الكلية","carousel.org.organizer": "المنظم","carousel.org.partner": "الشريك العلمي","marquee.title": "يدعمون الكلية",
        "about.kicker": "من نحن","about.title1": "الكلية","about.title2": "باختصار","about.text1": "تجمع CGEL أطباء الجهاز الهضمي والكبد ومناظير الجهاز الهضمي للأحرار في الشرق. مهمتنا: دعم الممارسة الحرة وتعزيز التكوين المستمر وتمثيل التخصص.","about.text2": "تنظم الكلية لقاءات علمية وتطور مشاريع للمهنة وترافق أعضاءها يومياً. هذا الموقع قيد الإثراء — سيتم إكمال كل قسم قريباً.","about.quote": "“معاً للنهوض بأمراض الجهاز الهضمي الحرة في الشرق.”","mission.title": "مهمتنا","mission.formation": "التكوين","mission.formationDesc": "تثمين التكوين المستمر وتحديث الممارسات.","mission.exchange": "التبادل","mission.exchangeDesc": "خلق فضاءات للمشاركة والنقاش بين المهنيين.","mission.representation": "التمثيل","mission.representationDesc": "الدفاع عن مصالح التخصص في الممارسة الحرة.",
        "pillars.formation": "التكوين المستمر","pillars.formationDesc": "أيام علمية وتحديثات مكيّفة للممارسة الحرة.","pillars.exchange": "التبادل العلمي","pillars.exchangeDesc": "شبكة من المهنيين يتبادلون الخبرات والحالات.","pillars.life": "حياة التخصص","pillars.lifeDesc": "تمثيل أمراض الجهاز الهضمي والممارسة الحرة في الشرق.",
        "explore.kicker": "استكشاف","explore.title": "أقسام الموقع","explore.desc": "فعالياتنا ومشاريعنا وأخبارنا — قريباً، قيد التحضير.","explore.card1Title": "الأيام العلمية","explore.card1Desc": "المؤتمرات وأيام الدراسة ولقاءات التخصص — التقويم والمعلومات العملية.","explore.card2Title": "مشاريع الكلية","explore.card2Desc": "المبادرات التي تقودها الكلية للمهنة والممارسة الحرة.","explore.card3Title": "راسلنا","explore.card3Desc": "سؤال، انضمام، شراكة؟ اتصل بالكلية مباشرة.","explore.cta": "اكتشف ←",
        "cta.kicker": "انضم إلينا","cta.title1": "في خدمة","cta.title2": "أمراض الجهاز الهضمي الحرة.","cta.lead": "انضم إلى الكلية وشارك في أيامنا العلمية وتابع مشاريع التخصص في الشرق.","cta.btnContact": "اتصل بنا","cta.btnEvents": "فعالياتنا",
        "pastEvents.kicker": "الفعاليات السابقة","pastEvents.title": "بالصور — فعالياتنا السابقة","pastEvents.desc": "أبرز لحظات النسخ السابقة. استبدل الصور المؤقتة بصورك في images/events/ (مثل event-1.jpg...).","pastEvents.card1Title": "أيام CGEL — النسخة 1","pastEvents.card1Desc": "قسنطينة · أكتوبر 2024","pastEvents.card2Title": "اليوم العلمي 2023","pastEvents.card2Desc": "النقل والحالات السريرية","pastEvents.card3Title": "ورشة التنظير","pastEvents.card3Desc": "تكوين تطبيقي · 2023","pastEvents.card4Title": "مؤتمر الذكاء الاصطناعي والصحة","pastEvents.card4Desc": "الابتكار الطبي · 2024","pastEvents.card5Title": "لقاء الشركاء","pastEvents.card5Desc": "تبادل مع المخابر","pastEvents.card6Title": "الاختتام والآفاق","pastEvents.card6Desc": "قسنطينة · لحظات بارزة",
        "footer.desc": "كلية أطباء الجهاز الهضمي والكبد ومناظير الجهاز الهضمي للأحرار - شرق — في خدمة أمراض الجهاز الهضمي الحرة.","footer.missionLabel": "مهمتنا","footer.missionTitle": "النهوض بالتخصص","footer.missionSub": "تكوين · تبادل · تمثيل","footer.sectionsTitle": "الأقسام","footer.infoTitle": "معلومات","footer.contactTitle": "اتصل بنا","footer.copyright": "© 2026 CGEL — كلية مهنية.","footer.tagline": "أمراض الجهاز الهضمي الحرة · شرق",
        "events.hero.kicker": "الفعاليات","events.hero.title": "فعاليات CGEL","events.hero.lead": "الأيام العلمية والمؤتمرات ولقاءات أمراض الجهاز الهضمي الحرة في الشرق.","events.featured.badge": "مميز","events.featured.muted": "الأيام العلمية","events.featured.title": "أيام CGEL — النسخة الثالثة","events.featured.desc": "أمراض الجهاز الهضمي في عصر الذكاء الاصطناعي والصحة المتصلة — الموعد العلمي للكلية بشراكة جامعية.","events.featured.date": "الخميس 1 أكتوبر 2026","events.featured.place": "قاعة أحمد باي زينيت، قسنطينة، الجزائر","events.featured.btnMore": "اعرف المزيد","events.featured.btnContact": "اتصل بنا","events.previousTitle": "الفعاليات السابقة","events.previousDesc": "نظرة على نسخنا السابقة — استبدل الصور المؤقتة بصورك الحقيقية في images/events/.","backToTop": "العودة للأعلى"
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

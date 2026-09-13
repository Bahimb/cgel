export type ProgramItem = {
  id: string;
  time: string;
  endTime?: string;
  title: string;
  description?: string;
  speaker?: string;
  speakerSlug?: string;
  session: string;
  topic: string;
  room?: string;
  type: "Keynote" | "Session" | "Panel" | "Break" | "Workshop" | "Ceremony";
};

export const programSessions = [
  "Toutes les sessions",
  "Ouverture",
  "IA & Diagnostic",
  "Santé connectée",
  "Endoscopie",
  "Perspectives cliniques",
  "Futur des soins",
] as const;

export const programItems: ProgramItem[] = [
  {
    id: "p01",
    time: "08:30",
    endTime: "09:00",
    title: "Accueil & Café de bienvenue",
    description: "Enregistrement des participants et réseautage.",
    session: "Ouverture",
    topic: "Accueil",
    room: "Hall principal",
    type: "Ceremony",
  },
  {
    id: "p02",
    time: "09:00",
    endTime: "09:30",
    title: "Cérémonie d'ouverture",
    // PLACEHOLDER_UNIVERSITE — voir src/data/event.ts
    description: "Allocution de bienvenue du CGEL et de son partenariat universitaire.",
    session: "Ouverture",
    topic: "Ouverture",
    room: "Salle principale",
    type: "Ceremony",
  },
  {
    id: "p03",
    time: "09:30",
    endTime: "10:15",
    title: "Conférence inaugurale — La gastroentérologie à l'ère de l'IA",
    description: "Thème à annoncer. Placeholder pour la keynote confirmée.",
    speaker: "Nom de l'intervenant",
    speakerSlug: "speaker-01",
    session: "IA & Diagnostic",
    topic: "Intelligence artificielle",
    room: "Hall principal",
    type: "Keynote",
  },
  {
    id: "p04",
    time: "10:15",
    endTime: "11:00",
    title: "Diagnostic assisté par IA en gastroentérologie",
    description: "Le rôle de l'IA dans l'aide à la décision clinique.",
    speaker: "Nom de l'intervenant",
    session: "IA & Diagnostic",
    topic: "IA & Aide à la décision",
    room: "Hall principal",
    type: "Session",
  },
  {
    id: "p05",
    time: "11:00",
    endTime: "11:30",
    title: "Pause café & Réseautage",
    session: "Ouverture",
    topic: "Pause",
    room: "Foyer",
    type: "Break",
  },
  {
    id: "p06",
    time: "11:30",
    endTime: "12:15",
    title: "Santé connectée & Outils numériques",
    description: "Les innovations en santé numérique au service du soin.",
    speaker: "Nom de l'intervenant",
    session: "Santé connectée",
    topic: "Santé connectée",
    room: "Hall principal",
    type: "Session",
  },
  {
    id: "p07",
    time: "12:15",
    endTime: "13:00",
    title: "Endoscopie intelligente — Avancées & Perspectives",
    description: "Avancées actuelles en technologie endoscopique et approches guidées par les données.",
    speaker: "Nom de l'intervenant",
    session: "Endoscopie",
    topic: "Endoscopie",
    room: "Hall principal",
    type: "Session",
  },
  {
    id: "p08",
    time: "13:00",
    endTime: "14:30",
    title: "Pause déjeuner",
    session: "Ouverture",
    topic: "Pause",
    room: "Restaurant",
    type: "Break",
  },
  {
    id: "p09",
    time: "14:30",
    endTime: "15:30",
    title: "Table ronde — Médecine guidée par les données & Soins personnalisés",
    description: "Perspectives multidisciplinaires sur la médecine personnalisée.",
    session: "Perspectives cliniques",
    topic: "Médecine personnalisée",
    room: "Hall principal",
    type: "Panel",
  },
  {
    id: "p10",
    time: "15:30",
    endTime: "16:15",
    title: "Imagerie médicale & Futur des soins",
    description: "Comment l'imagerie médicale et l'IA convergent pour façonner le soin de demain.",
    speaker: "Nom de l'intervenant",
    session: "Futur des soins",
    topic: "Imagerie médicale",
    room: "Hall principal",
    type: "Session",
  },
  {
    id: "p11",
    time: "16:15",
    endTime: "16:45",
    title: "Clôture",
    session: "Ouverture",
    topic: "Clôture",
    room: "Hall principal",
    type: "Ceremony",
  },
];

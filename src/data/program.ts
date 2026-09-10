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
  "All Sessions",
  "Opening",
  "AI & Diagnosis",
  "Smart Health",
  "Endoscopy",
  "Clinical Perspectives",
  "Future of Healthcare",
] as const;

export const programItems: ProgramItem[] = [
  {
    id: "p01",
    time: "08:30",
    endTime: "09:00",
    title: "Registration & Welcome Coffee",
    description: "Participants check-in and networking.",
    session: "Opening",
    topic: "Welcome",
    room: "Main Hall",
    type: "Ceremony",
  },
  {
    id: "p02",
    time: "09:00",
    endTime: "09:30",
    title: "Opening Ceremony",
    description: "Welcome address by GCEL and Scientific Partner MISC Laboratory.",
    session: "Opening",
    topic: "Opening",
    room: "Main Hall",
    type: "Ceremony",
  },
  {
    id: "p03",
    time: "09:30",
    endTime: "10:15",
    title: "Keynote — Gastroenterology in the Era of AI",
    description: "Topic to be announced. Placeholder for confirmed keynote.",
    speaker: "Speaker Name",
    speakerSlug: "speaker-placeholder-01",
    session: "AI & Diagnosis",
    topic: "Artificial Intelligence",
    room: "Main Hall",
    type: "Keynote",
  },
  {
    id: "p04",
    time: "10:15",
    endTime: "11:00",
    title: "AI-Assisted Diagnosis in Gastroenterology",
    description: "Exploring the role of AI in supporting clinical decision-making.",
    speaker: "Speaker Name",
    session: "AI & Diagnosis",
    topic: "AI & Clinical Decision Support",
    room: "Main Hall",
    type: "Session",
  },
  {
    id: "p05",
    time: "11:00",
    endTime: "11:30",
    title: "Coffee Break & Networking",
    session: "Opening",
    topic: "Break",
    room: "Foyer",
    type: "Break",
  },
  {
    id: "p06",
    time: "11:30",
    endTime: "12:15",
    title: "Smart Health & Digital Medical Tools",
    description: "Digital health innovations shaping patient care.",
    speaker: "Speaker Name",
    session: "Smart Health",
    topic: "Smart Health",
    room: "Main Hall",
    type: "Session",
  },
  {
    id: "p07",
    time: "12:15",
    endTime: "13:00",
    title: "Intelligent Endoscopy — Advances & Perspectives",
    description: "Current advances in endoscopic technology and data-driven approaches.",
    speaker: "Speaker Name",
    session: "Endoscopy",
    topic: "Endoscopy",
    room: "Main Hall",
    type: "Session",
  },
  {
    id: "p08",
    time: "13:00",
    endTime: "14:30",
    title: "Lunch Break",
    session: "Opening",
    topic: "Break",
    room: "Restaurant",
    type: "Break",
  },
  {
    id: "p09",
    time: "14:30",
    endTime: "15:30",
    title: "Panel — Data-Driven Medicine & Personalized Care",
    description: "Multidisciplinary perspectives on personalized medicine.",
    session: "Clinical Perspectives",
    topic: "Personalized Medicine",
    room: "Main Hall",
    type: "Panel",
  },
  {
    id: "p10",
    time: "15:30",
    endTime: "16:15",
    title: "Medical Imaging & Future Healthcare",
    description: "How medical imaging and AI are converging to shape the future of care.",
    speaker: "Speaker Name",
    session: "Future of Healthcare",
    topic: "Medical Imaging",
    room: "Main Hall",
    type: "Session",
  },
  {
    id: "p11",
    time: "16:15",
    endTime: "16:45",
    title: "Closing Remarks",
    session: "Opening",
    topic: "Closing",
    room: "Main Hall",
    type: "Ceremony",
  },
];

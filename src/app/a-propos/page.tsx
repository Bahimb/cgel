import type { Metadata } from "next";
import { Info } from "lucide-react";
import ComingSoonPage from "@/components/ComingSoonPage";

export const metadata: Metadata = {
  title: "À propos — CGEL",
  description:
    "À propos du CGEL — Collège des Hépato-Gastroentérologues et Endoscopistes Libéraux de l'Est : présentation, mission et valeurs de l'association.",
};

export default function AboutAssociationPage() {
  return (
    <ComingSoonPage
      kicker="À propos"
      title="L'association, en détail"
      description="La présentation complète du collège, de sa mission et de ses membres sera publiée prochainement."
      icon={Info}
    />
  );
}
import type { Metadata } from "next";
import { FolderOpen } from "lucide-react";
import ComingSoonPage from "@/components/ComingSoonPage";

export const metadata: Metadata = {
  title: "Projets — CGEL",
  description:
    "Les projets du CGEL — Collège des Hépato-Gastroentérologues et Endoscopistes Libéraux de l'Est : initiatives pour la profession et la pratique libérale.",
};

export default function ProjectsPage() {
  return (
    <ComingSoonPage
      kicker="Projets"
      title="Les projets du CGEL"
      description="Les initiatives portées par le collège pour la profession seront présentées prochainement."
      icon={FolderOpen}
    />
  );
}
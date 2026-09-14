import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "À propos — CGEL",
  description:
    "À propos du CGEL — Collège des Hépato-Gastroentérologues et Endoscopistes Libéraux de l'Est : présentation, mission et valeurs du collège.",
};

export default function AboutAssociationPage() {
  return (
    <>
      <div className="bg-white border-b border-[#E2E8F0]">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 py-10 lg:py-12">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-[#023DA5]" />
            <span className="text-[11px] tracking-[0.16em] uppercase font-semibold text-[#023DA5]">À propos</span>
          </div>
          <div className="flex items-center gap-4 mt-4">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/cgel.svg" alt="CGEL Logo" className="h-14 w-auto" />
            <h1 className="font-serif text-[28px] lg:text-[32px] leading-[1.05] tracking-[-0.02em] text-[#0F1D3A]">Collège des Hépato-Gastroentérologues<br />et Endoscopistes Libéraux de l&apos;Est</h1>
          </div>
          <p className="mt-3 text-[14px] leading-6 text-[#475569] max-w-[640px]">Un collège professionnel qui fédère, forme et représente la gastroentérologie libérale de l&apos;Est algérien depuis 2018.</p>
        </div>
      </div>

      <div className="bg-white">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 py-10 lg:py-14">
          <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-8 lg:gap-10">
            <div className="space-y-6">
              <div className="border border-[#E2E8F0] p-6 lg:p-7">
                <h3 className="text-[14px] font-bold text-[#0F1D3A]"><span className="block h-[2px] w-6 bg-[#F08444] mb-2" />Notre histoire</h3>
                <p className="mt-3 text-[13px] leading-7 text-[#475569]">Fondé en <span className="font-semibold text-[#0F1D3A]">2018 à Constantine</span> par un groupe de gastroentérologues et endoscopistes libéraux de l&apos;Est, le CGEL est né d&apos;un constat simple : la pratique libérale avait besoin d&apos;une voix collective, d&apos;un lieu d&apos;échange et d&apos;une structure dédiée à la formation continue.</p>
                <p className="mt-3 text-[13px] leading-7 text-[#475569]">De 12 membres fondateurs réunis autour d&apos;une table à l&apos;hôtel Cirta, le collège compte aujourd&apos;hui <span className="font-semibold text-[#0F1D3A]">plus de 80 membres actifs</span> répartis sur 12 wilayas. En 2021, il lance ses premières <em>Journées scientifiques</em> ; en 2024, la 2<sup>e</sup> édition réunit 180 participants et 10 laboratoires partenaires.</p>
                <p className="mt-3 text-[13px] leading-7 text-[#475569]">Le CGEL a tissé un partenariat structurant avec <span className="font-semibold text-[#0F1D3A]">l&apos;Université Constantine 2 Abdelhamid Mehri</span> et la <span className="font-semibold text-[#0F1D3A]">Faculté des Nouvelles Technologies (NTIC)</span>, posant les bases de la 3<sup>e</sup> édition 2026 du <span className="font-semibold text-[#0F1D3A]">CGEL Scientific Days</span> sur le thème <em>« Gastroentérologie à l&apos;ère de l&apos;IA &amp; santé connectée »</em>.</p>
              </div>
              <div className="border border-[#E2E8F0] p-6 lg:p-7">
                <h3 className="text-[14px] font-bold text-[#0F1D3A]"><span className="block h-[2px] w-6 bg-[#F08444] mb-2" />Notre mission</h3>
                <p className="mt-3 text-[13px] leading-7 text-[#475569]">Accompagner l&apos;excellence clinique en libéral, faire progresser les connaissances et défendre les intérêts de la spécialité auprès des institutions et du public.</p>
                <ul className="mt-4 space-y-3">
                  {[
                    ["Formation continue", "CGEL Scientific Days, ateliers d'endoscopie, webinaires et mises à jour des recommandations — adaptés à la réalité du cabinet libéral."],
                    ["Échange scientifique", "Partage de cas, relecture d'imagerie, registre prospectif Est et réseau d'entraide inter-wilayas."],
                    ["Représentation", "Porte-voix de la spécialité auprès des autorités sanitaires, des facultés et des partenaires industriels."],
                  ].map(([t,d])=>(
                    <li key={t} className="flex gap-3 text-[13px]"><span className="mt-2 h-[2px] w-6 bg-[#023DA5] shrink-0" /><span><span className="font-semibold text-[#0F1D3A]">{t}</span><span className="block text-[12px] leading-5 text-[#64748B]">{d}</span></span></li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="border border-[#E2E8F0] p-6 lg:p-7 h-fit bg-[#F8FAFC]">
              <h3 className="text-[14px] font-bold text-[#0F1D3A]"><span className="block h-[2px] w-6 bg-[#F08444] mb-2" />Zone d&apos;action — l&apos;Est en réseau</h3>
              <p className="mt-3 text-[13px] leading-7 text-[#475569]">Le CGEL couvre l&apos;ensemble du grand Est, avec des membres présents et actifs dans les wilayas suivantes.</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {["Constantine","Annaba","Batna","Sétif","Biskra","Tébessa","Guelma","Skikda","Oum El Bouaghi","Khenchela","Mila","Souk Ahras"].map(w=>(
                  <span key={w} className="text-[11px] px-2.5 py-1 border border-[#E2E8F0] bg-white text-[#0F1D3A]">{w}</span>
                ))}
              </div>
            </div>
          </div>

          {/* CGEL logo centered */}
          <div className="mt-10 flex items-center justify-center gap-4 p-6 bg-[#F8FAFC] border border-[#E2E8F0]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/cgel.svg" alt="CGEL Logo" className="h-16 w-auto" />
            <div>
              <p className="text-[14px] font-bold tracking-[0.08em] text-[#023DA5]">CGEL</p>
              <p className="text-[11px] tracking-[0.12em] uppercase text-[#64748B]">Collège professionnel — Est</p>
            </div>
          </div>

          {/* Bureau — real photos */}
          <div className="mt-10">
            <div className="flex items-center gap-3 mb-2"><span className="h-px w-8 bg-[#F08444]" /><span className="text-[11px] tracking-[0.16em] uppercase font-semibold text-[#023DA5]">Gouvernance</span></div>
            <h3 className="text-[20px] font-bold tracking-[-0.02em] text-[#0F1D3A]">Le bureau — mandat 2024-2026</h3>
            <p className="mt-1 text-[11.5px] text-[#64748B]">Élu en assemblée générale, mandat de 2 ans, renouvelable.</p>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                {name:"Dr. Sami Haddad", role:"Président", bio:"Gastroentérologue libéral à Constantine. Pilote le projet CGEL Scientific Days.", img:"/images/events/showcasepic.jpeg"},
                {name:"Nom Prenom", role:"Profile du membre", bio:"Hépato-gastroentérologue à Annaba. Coordonne le programme scientifique.", img:"/images/avatar.png"},
                {name:"Nom Prenom", role:"Profile du membre", bio:"Endoscopiste à Sétif. En charge de la vie du collège.", img:"/images/avatar.png"},
                {name:"Nom Prenom", role:"Profile du membre", bio:"Gastroentérologue à Batna. Supervise le budget et la logistique.", img:"/images/avatar.png"},
                {name:"Nom Prenom", role:"Profile du membre", bio:"Hépatologue à Biskra. Conçoit les ateliers DPC.", img:"/images/events/avatar.png"},
                {name:"Nom Prenom", role:"Profile du membre", bio:"Gastroentérologue à Guelma. Lien avec l'Université Constantine 2.", img:"/images/avatar.png"},
              ].map(m=>(
                <div key={m.name} className="border border-[#E2E8F0] bg-white overflow-hidden">
                  <div className="h-[160px] overflow-hidden border-b border-[#E2E8F0]">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={m.img} alt={m.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-4">
                    <h4 className="text-[13px] font-bold text-[#0F1D3A]">{m.name}</h4>
                    <p className="text-[11px] font-semibold text-[#023DA5]">{m.role}</p>
                    <p className="mt-1 text-[11.5px] leading-5 text-[#64748B]">{m.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

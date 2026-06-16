import { CheckCircle2 } from "lucide-react";
import { Reveal, SectionLabel } from "./Reveal";
import { PROJECT_IMAGES } from "../../lib/content";

const points = [
  "Spezialisiert auf Glasfaserausbau (FTTH/FTTB)",
  "Moderner Maschinenpark und qualifizierte Fachkräfte",
  "Komplettservice: Tiefbau, Kabelverlegung & Spleißen",
  "Höchste Qualitätsstandards und saubere Dokumentation",
];

export const About = () => {
  return (
    <section
      id="about"
      data-testid="about-section"
      className="relative py-24 lg:py-32 bg-[#0a0a0b]"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
        <Reveal className="relative">
          <div className="relative rounded-3xl overflow-hidden ring-1 ring-white/10">
            <img
              src={PROJECT_IMAGES[0].url}
              alt="KK Bauservice Glasfaser im Einsatz"
              className="w-full h-[520px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0b]/60 to-transparent" />
          </div>
          <div className="absolute -bottom-8 -right-4 sm:right-8 bg-[#121214] border border-white/10 rounded-2xl p-6 shadow-2xl backdrop-blur-xl">
            <p className="font-heading text-4xl font-bold text-[#00E5FF]">500+</p>
            <p className="text-sm text-zinc-400 mt-1 max-w-[140px]">
              erfolgreich abgeschlossene Projekte
            </p>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <SectionLabel>Über uns</SectionLabel>
            <h2 className="font-heading text-4xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
              Qualität, auf die Sie bauen können.
            </h2>
            <p className="font-body text-lg text-zinc-400 mt-6 leading-relaxed">
              KK Bauservice ist Ihr verlässlicher Partner für den
              Glasfaserausbau. Von der Trassenplanung über den Tiefbau bis zur
              Kabelverlegung, dem Spleißen und der Verteilertechnik bieten wir
              alles aus einer Hand – für leistungsstarke Netze, die hält.
            </p>
            <p className="font-body text-lg text-zinc-400 mt-4 leading-relaxed">
              Unser erfahrenes Team begleitet Sie von der ersten Beratung bis
              zur termingerechten Aktivierung. Dabei stehen Präzision,
              Zuverlässigkeit und Ihre Zufriedenheit immer im Mittelpunkt – so
              digitalisieren wir Europa.
            </p>
          </Reveal>

          <div className="mt-10 grid sm:grid-cols-2 gap-4">
            {points.map((p, i) => (
              <Reveal key={p} delay={i * 0.08}>
                <div className="flex items-start gap-3">
                  <CheckCircle2
                    size={22}
                    className="text-[#00E5FF] shrink-0 mt-0.5"
                  />
                  <span className="text-zinc-300 text-base">{p}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

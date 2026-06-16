import { Shovel, Cable, Construction, Network, ArrowUpRight } from "lucide-react";
import { Reveal, SectionLabel } from "./Reveal";
import { SERVICES } from "../../lib/content";

const ICONS = { Shovel, Cable, Construction, Network };

export const Services = () => {
  return (
    <section
      id="services"
      data-testid="services-section"
      className="relative py-24 lg:py-32 bg-[#0a0a0b]"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <Reveal className="max-w-2xl">
          <SectionLabel>Unsere Leistungen</SectionLabel>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
            Komplettlösungen aus einer Hand.
          </h2>
          <p className="font-body text-lg text-zinc-400 mt-5">
            Vier Kernkompetenzen – ein Anspruch: erstklassige Ergebnisse für
            Ihre Infrastruktur.
          </p>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((s, i) => {
            const Icon = ICONS[s.icon];
            const isCyan = s.accent === "cyan";
            const color = isCyan ? "#00E5FF" : "#FFB800";
            return (
              <Reveal key={s.title} delay={i * 0.1}>
                <div
                  data-testid={`service-card-${i}`}
                  className="group relative h-full overflow-hidden bg-[#121214] border border-white/5 hover:border-white/20 transition-all duration-500 rounded-2xl p-8 hover:-translate-y-2"
                >
                  <div
                    className="absolute -top-16 -right-16 w-40 h-40 rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                    style={{ background: color }}
                  />
                  <div
                    className="inline-flex items-center justify-center w-14 h-14 rounded-xl mb-6 transition-transform duration-500 group-hover:scale-110"
                    style={{ background: `${color}1a`, border: `1px solid ${color}40` }}
                  >
                    <Icon size={26} style={{ color }} />
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-white mb-3">
                    {s.title}
                  </h3>
                  <p className="font-body text-zinc-400 leading-relaxed text-sm">
                    {s.desc}
                  </p>
                  <ArrowUpRight
                    className="mt-6 text-zinc-600 group-hover:text-white transition-colors duration-300"
                    size={22}
                  />
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

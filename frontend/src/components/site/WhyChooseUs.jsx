import {
  Award,
  Briefcase,
  ShieldCheck,
  Target,
  Clock,
  Smile,
} from "lucide-react";
import { Reveal, SectionLabel } from "./Reveal";
import { WHY } from "../../lib/content";

const ICONS = { Award, Briefcase, ShieldCheck, Target, Clock, Smile };

export const WhyChooseUs = () => {
  return (
    <section
      id="why"
      data-testid="why-section"
      className="relative py-24 lg:py-32 bg-[#0a0a0b]"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <Reveal className="max-w-2xl">
          <SectionLabel>Warum KK Bauservice</SectionLabel>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
            Gründe, die überzeugen.
          </h2>
          <p className="font-body text-lg text-zinc-400 mt-5">
            Was uns zu Ihrem idealen Partner für Bau- und
            Infrastrukturprojekte macht.
          </p>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5 rounded-3xl overflow-hidden ring-1 ring-white/5">
          {WHY.map((w, i) => {
            const Icon = ICONS[w.icon];
            return (
              <Reveal key={w.title} delay={(i % 3) * 0.08}>
                <div
                  data-testid={`why-item-${i}`}
                  className="group h-full bg-[#0a0a0b] hover:bg-[#121214] transition-colors duration-500 p-10"
                >
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-[#FFB800]/10 border border-[#FFB800]/30 mb-6 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6">
                    <Icon size={26} className="text-[#FFB800]" />
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-white mb-2">
                    {w.title}
                  </h3>
                  <p className="font-body text-zinc-400 leading-relaxed">
                    {w.desc}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

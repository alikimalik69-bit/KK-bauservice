import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import { HERO_VIDEO, LOGO_URL } from "../../lib/content";

const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

export const Hero = () => {
  return (
    <section
      id="hero"
      data-testid="hero-section"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src={HERO_VIDEO}
        autoPlay
        muted
        loop
        playsInline
      />
      {/* Overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0b] via-[#0a0a0b]/85 to-[#0a0a0b]/30 z-10" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0b] via-transparent to-[#0a0a0b]/40 z-10" />

      <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-8 w-full pt-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          <div className="flex items-center gap-4 mb-8">
            <img
              src={LOGO_URL}
              alt="KK Bauservice"
              className="h-16 w-16 rounded-xl object-cover ring-1 ring-white/15"
            />
            <div>
              <p className="font-heading font-bold text-xl text-white leading-none">
                KK Bauservice
              </p>
              <p className="text-xs uppercase tracking-[0.25em] text-[#00E5FF] mt-1">
                Wir digitalisieren Europa
              </p>
            </div>
          </div>

          <span className="inline-block text-sm uppercase tracking-[0.25em] text-zinc-400 font-semibold mb-5">
            Glasfaser · Kabelverlegung · Tiefbau · Netzinfrastruktur
          </span>

          <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.05]">
            Wir bringen <span className="text-gradient">Glasfaser</span> in
            jedes Gebäude.
          </h1>

          <p className="font-body text-lg sm:text-xl text-zinc-300 mt-6 max-w-2xl leading-relaxed">
            KK Bauservice ist Ihr Spezialist für den Glasfaserausbau – von der
            Trassenplanung über den Tiefbau bis zur Kabelverlegung und
            Aktivierung. Wir digitalisieren Europa, Anschluss für Anschluss.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-10">
            <button
              data-testid="hero-quote-btn"
              onClick={() => scrollTo("contact")}
              className="inline-flex items-center justify-center gap-2 bg-[#00E5FF] text-[#0a0a0b] font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 hover:glow-cyan active:scale-95"
            >
              Angebot anfordern <ArrowRight size={18} />
            </button>
            <button
              data-testid="hero-contact-btn"
              onClick={() => scrollTo("contact")}
              className="inline-flex items-center justify-center gap-2 border border-white/25 text-white font-semibold px-8 py-4 rounded-full backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:border-white/40 active:scale-95"
            >
              <Phone size={18} /> Kontakt aufnehmen
            </button>
          </div>

          <div className="flex flex-wrap gap-8 mt-16">
            {[
              { n: "15+", l: "Jahre Erfahrung" },
              { n: "500+", l: "Projekte realisiert" },
              { n: "100%", l: "Termintreue" },
            ].map((s) => (
              <div key={s.l}>
                <p className="font-heading text-3xl font-bold text-white">{s.n}</p>
                <p className="text-sm text-zinc-400">{s.l}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 hidden sm:block">
        <div className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center pt-2">
          <motion.div
            className="w-1 h-2 rounded-full bg-[#00E5FF]"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.6 }}
          />
        </div>
      </div>
    </section>
  );
};

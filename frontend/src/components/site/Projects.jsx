import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn, ChevronLeft, ChevronRight } from "lucide-react";
import { Reveal, SectionLabel } from "./Reveal";
import { PROJECT_IMAGES } from "../../lib/content";

export const Projects = () => {
  const [active, setActive] = useState(null);

  const close = () => setActive(null);
  const prev = (e) => {
    e.stopPropagation();
    setActive((a) => (a - 1 + PROJECT_IMAGES.length) % PROJECT_IMAGES.length);
  };
  const next = (e) => {
    e.stopPropagation();
    setActive((a) => (a + 1) % PROJECT_IMAGES.length);
  };

  return (
    <section
      id="projects"
      data-testid="projects-section"
      className="relative py-24 lg:py-32 bg-[#0a0a0b]"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <Reveal className="max-w-2xl">
          <SectionLabel>Referenzen</SectionLabel>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
            Projekte, die für sich sprechen.
          </h2>
          <p className="font-body text-lg text-zinc-400 mt-5">
            Ein Einblick in unsere Arbeit – von Erdarbeiten bis zum
            Glasfaseranschluss.
          </p>
        </Reveal>

        <div className="mt-16 columns-1 md:columns-2 lg:columns-3 gap-6 [column-fill:_balance]">
          {PROJECT_IMAGES.map((p, i) => (
            <Reveal key={p.url} delay={(i % 3) * 0.1} className="mb-6 break-inside-avoid">
              <button
                data-testid={`project-item-${i}`}
                onClick={() => setActive(i)}
                className="group relative w-full overflow-hidden rounded-2xl ring-1 ring-white/10 block text-left"
              >
                <img
                  src={p.url}
                  alt={p.title}
                  className={`w-full object-cover transition-transform duration-700 group-hover:scale-105 ${
                    p.span === "tall" ? "h-[460px]" : "h-[320px]"
                  }`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0b] via-[#0a0a0b]/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="text-xs uppercase tracking-[0.2em] text-[#00E5FF] font-semibold">
                    {p.category}
                  </span>
                  <h3 className="font-heading text-xl font-semibold text-white mt-1">
                    {p.title}
                  </h3>
                </div>
                <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <ZoomIn size={18} className="text-white" />
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {active !== null && (
          <motion.div
            data-testid="lightbox"
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
          >
            <button
              data-testid="lightbox-close"
              onClick={close}
              className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
            >
              <X size={24} />
            </button>
            <button
              data-testid="lightbox-prev"
              onClick={prev}
              className="absolute left-4 sm:left-10 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
            >
              <ChevronLeft size={26} />
            </button>
            <button
              data-testid="lightbox-next"
              onClick={next}
              className="absolute right-4 sm:right-10 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
            >
              <ChevronRight size={26} />
            </button>
            <motion.div
              key={active}
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.35 }}
              className="max-w-5xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={PROJECT_IMAGES[active].url}
                alt={PROJECT_IMAGES[active].title}
                className="w-full max-h-[80vh] object-contain rounded-xl"
              />
              <div className="text-center mt-5">
                <span className="text-xs uppercase tracking-[0.2em] text-[#00E5FF] font-semibold">
                  {PROJECT_IMAGES[active].category}
                </span>
                <h3 className="font-heading text-2xl font-semibold text-white mt-1">
                  {PROJECT_IMAGES[active].title}
                </h3>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

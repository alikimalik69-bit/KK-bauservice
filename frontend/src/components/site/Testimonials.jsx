import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Reveal, SectionLabel } from "./Reveal";
import { TESTIMONIALS } from "../../lib/content";

export const Testimonials = () => {
  const [index, setIndex] = useState(0);
  const [dir, setDir] = useState(1);

  const go = useCallback((d) => {
    setDir(d);
    setIndex((i) => (i + d + TESTIMONIALS.length) % TESTIMONIALS.length);
  }, []);

  useEffect(() => {
    const t = setInterval(() => go(1), 6000);
    return () => clearInterval(t);
  }, [go]);

  const item = TESTIMONIALS[index];

  return (
    <section
      data-testid="testimonials-section"
      className="relative py-24 lg:py-32 bg-[#0a0a0b] overflow-hidden"
    >
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#FFB800]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <Reveal>
          <SectionLabel>Kundenstimmen</SectionLabel>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
            Was unsere Kunden sagen.
          </h2>
        </Reveal>

        <div className="relative mt-14 min-h-[280px] flex items-center justify-center">
          <Quote
            className="absolute -top-4 left-1/2 -translate-x-1/2 text-[#00E5FF]/15"
            size={80}
          />
          <AnimatePresence mode="wait" custom={dir}>
            <motion.div
              key={index}
              data-testid={`testimonial-${index}`}
              custom={dir}
              initial={{ opacity: 0, x: dir * 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: dir * -60 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="relative z-10 px-2"
            >
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} className="text-[#FFB800]" fill="currentColor" />
                ))}
              </div>
              <p className="font-body text-xl sm:text-2xl text-zinc-200 leading-relaxed max-w-3xl mx-auto">
                „{item.text}"
              </p>
              <div className="mt-8">
                <p className="font-heading text-lg font-semibold text-white">
                  {item.name}
                </p>
                <p className="text-sm text-[#00E5FF]">{item.role}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex items-center justify-center gap-4 mt-10">
          <button
            data-testid="testimonial-prev"
            onClick={() => go(-1)}
            className="w-11 h-11 rounded-full border border-white/15 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
          >
            <ChevronLeft size={20} />
          </button>
          <div className="flex gap-2">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                data-testid={`testimonial-dot-${i}`}
                onClick={() => {
                  setDir(i > index ? 1 : -1);
                  setIndex(i);
                }}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === index ? "w-8 bg-[#00E5FF]" : "w-2 bg-white/20"
                }`}
              />
            ))}
          </div>
          <button
            data-testid="testimonial-next"
            onClick={() => go(1)}
            className="w-11 h-11 rounded-full border border-white/15 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

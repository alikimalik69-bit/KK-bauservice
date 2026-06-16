import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Play, Volume2, VolumeX } from "lucide-react";
import { Reveal, SectionLabel } from "./Reveal";
import { VIDEOS } from "../../lib/content";

const VideoCard = ({ video, index }) => {
  const ref = useRef(null);
  const [muted, setMuted] = useState(true);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.play().catch(() => {});
        } else {
          el.pause();
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const toggleMute = () => {
    const el = ref.current;
    if (!el) return;
    el.muted = !el.muted;
    setMuted(el.muted);
  };

  return (
    <Reveal delay={(index % 2) * 0.12}>
      <div
        data-testid={`video-card-${index}`}
        className="group relative overflow-hidden rounded-2xl ring-1 ring-white/10 bg-[#121214]"
      >
        <div className="relative aspect-video overflow-hidden">
          <video
            ref={ref}
            src={video.src}
            muted
            loop
            playsInline
            preload="metadata"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0b]/80 via-transparent to-transparent pointer-events-none" />
          <button
            data-testid={`video-mute-${index}`}
            onClick={toggleMute}
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center text-white hover:bg-black/70 transition-colors"
            aria-label="Ton umschalten"
          >
            {muted ? <VolumeX size={18} /> : <Volume2 size={18} />}
          </button>
          <div className="absolute bottom-4 left-4 flex items-center gap-2 text-[#00E5FF]">
            <Play size={16} fill="currentColor" />
            <span className="text-xs uppercase tracking-[0.2em] font-semibold">
              Im Einsatz
            </span>
          </div>
        </div>
        <div className="p-6">
          <h3 className="font-heading text-lg font-semibold text-white">
            {video.title}
          </h3>
          <p className="font-body text-sm text-zinc-400 mt-1">{video.desc}</p>
        </div>
      </div>
    </Reveal>
  );
};

export const VideoShowcase = () => {
  return (
    <section
      id="videos"
      data-testid="videos-section"
      className="relative py-24 lg:py-32 bg-[#0a0a0b] overflow-hidden"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#00E5FF]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <Reveal className="max-w-2xl">
          <SectionLabel>Video-Showcase</SectionLabel>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
            Sehen Sie unsere Arbeit in Bewegung.
          </h2>
          <p className="font-body text-lg text-zinc-400 mt-5">
            Echte Eindrücke aus dem Glasfaserausbau und unseren
            Arbeitsprozessen – die Videos starten automatisch, sobald sie
            sichtbar werden.
          </p>
        </Reveal>

        <motion.div className="mt-16 grid md:grid-cols-2 gap-8">
          {VIDEOS.map((v, i) => (
            <VideoCard key={v.src} video={v} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { LOGO_URL, NAV } from "../../lib/content";

const scrollTo = (id) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
};

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id) => {
    setOpen(false);
    scrollTo(id);
  };

  return (
    <header
      data-testid="site-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-black/60 backdrop-blur-2xl border-b border-white/10 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between">
        <button
          data-testid="logo-button"
          onClick={() => go("hero")}
          className="flex items-center gap-3 group"
        >
          <img
            src={LOGO_URL}
            alt="KK Bauservice Logo"
            className="h-11 w-11 rounded-lg object-cover ring-1 ring-white/10 transition-transform duration-300 group-hover:scale-105"
          />
          <span className="font-heading font-bold text-lg tracking-tight text-white hidden sm:block">
            KK <span className="text-[#00E5FF]">Bauservice</span>
          </span>
        </button>

        <nav className="hidden lg:flex items-center gap-1">
          {NAV.map((item) => (
            <button
              key={item.id}
              data-testid={`nav-${item.id}`}
              onClick={() => go(item.id)}
              className="px-4 py-2 text-sm font-medium text-zinc-300 hover:text-white transition-colors duration-300"
            >
              {item.label}
            </button>
          ))}
        </nav>

        <button
          data-testid="header-quote-btn"
          onClick={() => go("contact")}
          className="hidden lg:inline-flex items-center bg-[#00E5FF] text-[#0a0a0b] font-semibold text-sm px-6 py-2.5 rounded-full transition-all duration-300 hover:scale-105 hover:glow-cyan active:scale-95"
        >
          Angebot anfordern
        </button>

        <button
          data-testid="mobile-menu-toggle"
          className="lg:hidden text-white"
          onClick={() => setOpen(!open)}
          aria-label="Menü"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {open && (
        <div
          data-testid="mobile-menu"
          className="lg:hidden bg-black/90 backdrop-blur-2xl border-t border-white/10 mt-3"
        >
          <div className="px-6 py-4 flex flex-col gap-1">
            {NAV.map((item) => (
              <button
                key={item.id}
                data-testid={`mobile-nav-${item.id}`}
                onClick={() => go(item.id)}
                className="text-left py-3 text-zinc-200 hover:text-[#00E5FF] transition-colors"
              >
                {item.label}
              </button>
            ))}
            <button
              data-testid="mobile-quote-btn"
              onClick={() => go("contact")}
              className="mt-3 bg-[#00E5FF] text-[#0a0a0b] font-semibold px-6 py-3 rounded-full"
            >
              Angebot anfordern
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

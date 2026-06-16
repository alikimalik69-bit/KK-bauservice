import { Phone, Mail, MapPin } from "lucide-react";
import { LOGO_URL, NAV, CONTACT, SERVICES } from "../../lib/content";

const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

export const Footer = () => {
  return (
    <footer data-testid="site-footer" className="relative bg-[#08080a] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 grid gap-12 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-3 mb-5">
            <img
              src={LOGO_URL}
              alt="KK Bauservice"
              className="h-12 w-12 rounded-lg object-cover ring-1 ring-white/10"
            />
            <span className="font-heading font-bold text-lg text-white">
              KK <span className="text-[#00E5FF]">Bauservice</span>
            </span>
          </div>
          <p className="font-body text-sm text-zinc-500 leading-relaxed max-w-xs">
            Ihr verlässlicher Partner für Tiefbau, Glasfaserausbau,
            Asphaltarbeiten und Kabelverlegung. Wir digitalisieren Europa.
          </p>
        </div>

        <div>
          <h4 className="font-heading font-semibold text-white mb-5">Navigation</h4>
          <ul className="space-y-3">
            {NAV.map((n) => (
              <li key={n.id}>
                <button
                  data-testid={`footer-nav-${n.id}`}
                  onClick={() => scrollTo(n.id)}
                  className="text-sm text-zinc-500 hover:text-[#00E5FF] transition-colors"
                >
                  {n.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-heading font-semibold text-white mb-5">Leistungen</h4>
          <ul className="space-y-3">
            {SERVICES.map((s) => (
              <li key={s.title} className="text-sm text-zinc-500">
                {s.title}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-heading font-semibold text-white mb-5">Kontakt</h4>
          <ul className="space-y-4 text-sm text-zinc-500">
            <li className="flex items-center gap-3">
              <Phone size={16} className="text-[#00E5FF]" /> {CONTACT.phone}
            </li>
            <li className="flex items-center gap-3">
              <Mail size={16} className="text-[#00E5FF]" /> {CONTACT.email}
            </li>
            <li className="flex items-start gap-3">
              <MapPin size={16} className="text-[#00E5FF] mt-0.5" /> {CONTACT.address}
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-zinc-600">
            © {new Date().getFullYear()} KK Bauservice. Alle Rechte vorbehalten.
          </p>
          <div className="flex gap-6 text-xs text-zinc-600">
            <span className="hover:text-zinc-400 transition-colors cursor-pointer">Impressum</span>
            <span className="hover:text-zinc-400 transition-colors cursor-pointer">Datenschutz</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

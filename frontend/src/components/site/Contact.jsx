import { useState } from "react";
import { Phone, Mail, MapPin, Send, MessageCircle } from "lucide-react";
import { toast } from "sonner";
import { Reveal, SectionLabel } from "./Reveal";
import { CONTACT } from "../../lib/content";

const Field = ({ label, name, type = "text", value, onChange, textarea }) => (
  <div>
    <label className="block text-sm text-zinc-400 mb-2">{label}</label>
    {textarea ? (
      <textarea
        data-testid={`contact-${name}`}
        name={name}
        rows={4}
        value={value}
        onChange={onChange}
        required
        className="w-full bg-transparent border border-white/10 rounded-xl px-4 py-3 text-white placeholder-zinc-600 focus:border-[#00E5FF] focus:outline-none transition-colors resize-none"
      />
    ) : (
      <input
        data-testid={`contact-${name}`}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required
        className="w-full bg-transparent border border-white/10 rounded-xl px-4 py-3 text-white placeholder-zinc-600 focus:border-[#00E5FF] focus:outline-none transition-colors"
      />
    )}
  </div>
);

export const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    toast.success("Vielen Dank! Ihre Anfrage wurde gesendet.", {
      description: "Wir melden uns schnellstmöglich bei Ihnen.",
    });
    setForm({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section
      id="contact"
      data-testid="contact-section"
      className="relative py-24 lg:py-32 bg-[#0a0a0b]"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <Reveal className="max-w-2xl">
          <SectionLabel>Kontakt</SectionLabel>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
            Lassen Sie uns Ihr Projekt besprechen.
          </h2>
          <p className="font-body text-lg text-zinc-400 mt-5">
            Fordern Sie ein unverbindliches Angebot an – wir freuen uns auf Ihre
            Anfrage.
          </p>
        </Reveal>

        <div className="mt-16 grid lg:grid-cols-2 gap-12">
          <Reveal>
            <form
              data-testid="contact-form"
              onSubmit={onSubmit}
              className="bg-[#121214] border border-white/10 rounded-3xl p-8 space-y-5"
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <Field label="Name" name="name" value={form.name} onChange={onChange} />
                <Field label="Telefon" name="phone" value={form.phone} onChange={onChange} />
              </div>
              <Field label="E-Mail" name="email" type="email" value={form.email} onChange={onChange} />
              <Field label="Ihre Nachricht" name="message" value={form.message} onChange={onChange} textarea />
              <button
                data-testid="contact-submit"
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 bg-[#00E5FF] text-[#0a0a0b] font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:scale-[1.02] hover:glow-cyan active:scale-95"
              >
                Anfrage senden <Send size={18} />
              </button>
            </form>
          </Reveal>

          <Reveal delay={0.1} className="flex flex-col gap-5">
            <a
              data-testid="contact-phone"
              href={`tel:${CONTACT.phoneHref}`}
              className="flex items-center gap-4 bg-[#121214] border border-white/10 rounded-2xl p-6 hover:border-white/25 transition-colors group"
            >
              <span className="w-12 h-12 rounded-xl bg-[#00E5FF]/10 border border-[#00E5FF]/30 flex items-center justify-center shrink-0">
                <Phone size={22} className="text-[#00E5FF]" />
              </span>
              <div>
                <p className="text-sm text-zinc-500">Telefon</p>
                <p className="text-white font-medium group-hover:text-[#00E5FF] transition-colors">
                  {CONTACT.phone}
                </p>
              </div>
            </a>

            <a
              data-testid="contact-email"
              href={`mailto:${CONTACT.email}`}
              className="flex items-center gap-4 bg-[#121214] border border-white/10 rounded-2xl p-6 hover:border-white/25 transition-colors group"
            >
              <span className="w-12 h-12 rounded-xl bg-[#00E5FF]/10 border border-[#00E5FF]/30 flex items-center justify-center shrink-0">
                <Mail size={22} className="text-[#00E5FF]" />
              </span>
              <div>
                <p className="text-sm text-zinc-500">E-Mail</p>
                <p className="text-white font-medium group-hover:text-[#00E5FF] transition-colors">
                  {CONTACT.email}
                </p>
              </div>
            </a>

            <div className="flex items-center gap-4 bg-[#121214] border border-white/10 rounded-2xl p-6">
              <span className="w-12 h-12 rounded-xl bg-[#FFB800]/10 border border-[#FFB800]/30 flex items-center justify-center shrink-0">
                <MapPin size={22} className="text-[#FFB800]" />
              </span>
              <div>
                <p className="text-sm text-zinc-500">Adresse</p>
                <p className="text-white font-medium">{CONTACT.address}</p>
              </div>
            </div>

            <a
              data-testid="contact-whatsapp"
              href={`https://wa.me/${CONTACT.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-[#25D366] text-white font-semibold px-8 py-4 rounded-2xl transition-all duration-300 hover:scale-[1.02] active:scale-95"
            >
              <MessageCircle size={20} /> Per WhatsApp schreiben
            </a>

            <div className="rounded-2xl overflow-hidden ring-1 ring-white/10 h-[200px]">
              <iframe
                title="Standort"
                data-testid="contact-map"
                src={`https://maps.google.com/maps?q=${encodeURIComponent(
                  CONTACT.mapsQuery
                )}&z=12&output=embed`}
                width="100%"
                height="100%"
                style={{ border: 0, filter: "grayscale(1) invert(0.92) contrast(0.9)" }}
                loading="lazy"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

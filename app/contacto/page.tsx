import type { Metadata } from "next";
import Nav from "../_components/Nav";
import Footer from "../_components/Footer";

export const metadata: Metadata = {
  title: "Contacto | Pocket Libros",
};

const faqs = [
  {
    q: "¿Dónde queda mi ebook después de comprarlo?",
    a: "Gumroad te envía el PDF por correo electrónico automáticamente. Si no lo encuentras, revisa las carpetas de Promociones o Spam.",
  },
  {
    q: "¿Cómo descargo el ebook gratuito de bienvenida?",
    a: "Regístrate con tu email en la página principal. Te lo enviamos de inmediato. Si no llega en 5 minutos, revisa Promociones o Spam.",
  },
  {
    q: "¿Puedo pedir reembolso?",
    a: "Los productos digitales no tienen reembolso una vez descargados. Si el archivo llegó dañado o es incorrecto, escríbenos dentro de las 48 horas y lo resolvemos.",
  },
  {
    q: "¿Los precios están en pesos chilenos?",
    a: "Los precios están en USD. La conversión la realiza Gumroad según el tipo de cambio del día.",
  },
  {
    q: "¿Quién está detrás de Pocket Libros?",
    a: "Pocket Libros es operado por LongViva SpA, empresa chilena dedicada a la distribución de contenido editorial digital.",
  },
];

export default function Contacto() {
  return (
    <>
      <Nav />

      {/* ── MINI HERO ── */}
      <section className="relative bg-navy pt-32 pb-14 px-6 md:px-10 overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-[3px] bg-gold" aria-hidden="true" />
        <span
          className="absolute right-[-0.05em] bottom-[-0.1em] hidden md:block font-serif text-[clamp(8rem,20vw,18rem)] text-white/[0.025] leading-none pointer-events-none select-none"
          aria-hidden="true"
        >
          PL
        </span>
        <div className="relative z-10 max-w-[720px] mx-auto">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-[0.68rem] tracking-[0.14em] uppercase text-white/25">
              <li>
                <a href="/" className="hover:text-gold transition-colors duration-200">
                  Inicio
                </a>
              </li>
              <li aria-hidden="true">·</li>
              <li className="text-white/40">Contacto</li>
            </ol>
          </nav>
          <p className="inline-flex items-center gap-3 text-[0.68rem] tracking-[0.22em] uppercase text-gold mb-5 before:content-[''] before:block before:w-7 before:h-px before:bg-gold">
            Estamos para ayudarte
          </p>
          <h1 className="font-serif font-normal text-[clamp(2rem,4vw,3rem)] leading-[1.15] text-white tracking-[-0.01em]">
            Contacto
          </h1>
        </div>
      </section>

      {/* ── EMAIL ── */}
      <section className="bg-white px-6 md:px-10 py-14 md:py-[5.5rem]">
        <div className="max-w-[720px] mx-auto">
          <p className="text-[0.68rem] tracking-[0.2em] uppercase text-gold mb-2">Escríbenos</p>
          <h2 className="font-serif font-normal text-[clamp(1.5rem,3vw,2rem)] text-navy mb-10 text-balance">
            Contacto directo
          </h2>
          <div className="border border-border hover:border-gold transition-colors duration-300 p-8 md:p-10">
            <p className="text-[0.72rem] tracking-[0.14em] uppercase text-muted mb-3">
              Correo de contacto
            </p>
            <a
              href="mailto:hola@pocketlibros.cl"
              className="font-serif text-[1.6rem] md:text-[2rem] text-navy hover:text-gold transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded-sm"
            >
              hola@pocketlibros.cl
            </a>
            <p className="text-[0.88rem] text-muted leading-[1.65] mt-4">
              Respondemos dentro de las 24–48 horas hábiles.
            </p>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="bg-surface px-6 md:px-10 py-14 md:py-[5.5rem]">
        <div className="max-w-[720px] mx-auto">
          <p className="text-[0.68rem] tracking-[0.2em] uppercase text-gold mb-2">
            Ayuda rápida
          </p>
          <h2 className="font-serif font-normal text-[clamp(1.5rem,3vw,2rem)] text-navy mb-14 text-balance">
            Preguntas frecuentes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
            {faqs.map(({ q, a }) => (
              <div key={q}>
                <h3 className="font-serif font-normal text-[1rem] text-navy pb-2 mb-2 border-b border-border">
                  {q}
                </h3>
                <p className="text-[0.88rem] text-muted leading-[1.65]">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

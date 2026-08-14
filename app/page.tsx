import Nav from "./_components/Nav";
import EmailForm from "./_components/EmailForm";
import CatalogTabs, { type Book } from "./_components/CatalogTabs";

const books: Book[] = [
  // No ficción — Trading & Finanzas — USD $5
  { title: "Domina tu Ansiedad al Invertir", subcategory: "Trading & Finanzas", tab: "noficcion", price: 5, portada: "portada_ansiedad.svg" },
  { title: "Trading para Principiantes", subcategory: "Trading & Finanzas", tab: "noficcion", price: 5, portada: "portada_trading.svg" },
  // No ficción — Liderazgo — USD $5
  { title: "Lidera sin Cargo", subcategory: "Liderazgo", tab: "noficcion", price: 5, portada: "portada_liderazgo.svg" },
  { title: "El Líder que Escucha", subcategory: "Liderazgo", tab: "noficcion", price: 5, portada: "portada_lider_escucha.svg" },
  // No ficción — Salud & Bienestar — USD $5
  { title: "Ayuno Intermitente: Protocolo Simple", subcategory: "Salud & Bienestar", tab: "noficcion", price: 5, portada: "portada_ayuno.svg" },
  { title: "Energía sin Cafeína", subcategory: "Salud & Bienestar", tab: "noficcion", price: 5, portada: "portada_energia.svg" },
  // No ficción — Operaciones — USD $5
  { title: "Supply Chain en Crisis", subcategory: "Operaciones", tab: "noficcion", price: 5, portada: "portada_supply_chain.svg" },
  { title: "KPIs que Importan", subcategory: "Operaciones", tab: "noficcion", price: 5, portada: "portada_kpis.svg" },
  // Ficción — Clásicos Universales — USD $3
  { title: "Don Quijote de la Mancha", author: "Cervantes", subcategory: "Clásicos Universales", tab: "ficcion", price: 3, portada: "portada_quijote.svg" },
  { title: "Hamlet", author: "Shakespeare", subcategory: "Clásicos Universales", tab: "ficcion", price: 3, portada: "portada_hamlet.svg" },
  { title: "La Metamorfosis", author: "Kafka", subcategory: "Clásicos Universales", tab: "ficcion", price: 3, portada: "portada_metamorfosis.svg" },
  { title: "La Odisea", author: "Homero", subcategory: "Clásicos Universales", tab: "ficcion", price: 3, portada: "portada_odisea.svg" },
  { title: "1984", author: "Orwell", subcategory: "Clásicos Universales", tab: "ficcion", price: 3, portada: "portada_1984.svg" },
  { title: "Crimen y Castigo", author: "Dostoievski", subcategory: "Clásicos Universales", tab: "ficcion", price: 3, portada: "portada_crimen_castigo.svg" },
  { title: "Orgullo y Prejuicio", author: "Austen", subcategory: "Clásicos Universales", tab: "ficcion", price: 3, portada: "portada_orgullo_prejuicio.svg" },
  { title: "La Guerra y la Paz", author: "Tolstói", subcategory: "Clásicos Universales", tab: "ficcion", price: 3, portada: "portada_guerra_paz.svg" },
  { title: "Moby Dick", author: "Melville", subcategory: "Clásicos Universales", tab: "ficcion", price: 3, portada: "portada_moby_dick.svg" },
  { title: "La Divina Comedia", author: "Dante", subcategory: "Clásicos Universales", tab: "ficcion", price: 3, portada: "portada_divina_comedia.svg" },
  // Ficción — Grandes Pensadores — USD $3
  { title: "La República", author: "Platón", subcategory: "Grandes Pensadores", tab: "ficcion", price: 3, portada: "portada_republica.svg" },
  { title: "Ética a Nicómaco", author: "Aristóteles", subcategory: "Grandes Pensadores", tab: "ficcion", price: 3, portada: "portada_etica.svg" },
  { title: "Meditaciones", author: "Marco Aurelio", subcategory: "Grandes Pensadores", tab: "ficcion", price: 3, portada: "portada_meditaciones.svg" },
  { title: "Discurso del Método", author: "Descartes", subcategory: "Grandes Pensadores", tab: "ficcion", price: 3, portada: "portada_descartes.svg" },
  { title: "Leviatán", author: "Hobbes", subcategory: "Grandes Pensadores", tab: "ficcion", price: 3, portada: "portada_leviatan.svg" },
  { title: "Así habló Zaratustra", author: "Nietzsche", subcategory: "Grandes Pensadores", tab: "ficcion", price: 3, portada: "portada_zaratustra.svg" },
  { title: "Crítica de la Razón Pura", author: "Kant", subcategory: "Grandes Pensadores", tab: "ficcion", price: 3, portada: "portada_kant.svg" },
  { title: "El Mundo como Voluntad", author: "Schopenhauer", subcategory: "Grandes Pensadores", tab: "ficcion", price: 3, portada: "portada_schopenhauer.svg" },
  { title: "Tratado de la Naturaleza Humana", author: "Hume", subcategory: "Grandes Pensadores", tab: "ficcion", price: 3, portada: "portada_hume.svg" },
  { title: "Ética", author: "Spinoza", subcategory: "Grandes Pensadores", tab: "ficcion", price: 3, portada: "portada_spinoza.svg" },
  // Ficción — Relatos +18 — USD $7
  { title: "A los pies de Marcia", subcategory: "Relatos +18", tab: "ficcion", price: 7, portada: "png/portada_marcia.png", buyUrl: "https://pocketlibros.gumroad.com/l/marcia?wanted=true" },
];

const steps = [
  {
    num: "01",
    title: "Elige",
    desc: "Explora categorías: No Ficción, Clásicos, Grandes Pensadores y Relatos +18. Selecciona el ebook de tu preferencia.",
  },
  {
    num: "02",
    title: "Descarga",
    desc: "Pago simple vía Gumroad. Recibes tu PDF en segundos, sin suscripciones ni cuentas obligatorias.",
  },
  {
    num: "03",
    title: "Aplica",
    desc: "En los ebooks de no ficción encontrarás acciones concretas para implementar de inmediato.",
  },
  {
    num: "04",
    title: "Disfruta",
    desc: "Lee en cualquier dispositivo, a tu ritmo y con el presupuesto que tengas.",
  },
];

const reasons = [
  {
    title: "Diseño funcional",
    desc: "Cada ebook accionable aborda un tema en profundidad, sin capítulos de relleno que nunca terminas.",
  },
  {
    title: "Acceso pocket a clásicos",
    desc: "Literatura universal y grandes pensadores, en formato ágil para leer y comprender con facilidad.",
  },
  {
    title: "Relatos para adultos",
    desc: "Tratamiento sugerente y sutil para alentar la imaginación, con personajes y situaciones adultas.",
  },
  {
    title: "Precio justo",
    desc: "Desde USD $3 por título. Sin suscripción. Pagas solo lo que vas a leer.",
  },
];

export default function Home() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[200] focus:px-4 focus:py-2 focus:bg-gold focus:text-navy focus:font-bold focus:text-sm focus:rounded"
      >
        Saltar al contenido
      </a>

      <Nav />

      <main id="main">
        {/* ── HERO ── */}
        <section
          id="hero"
          className="relative min-h-screen bg-navy flex flex-col justify-center overflow-hidden px-6 md:px-10 pt-32 pb-20"
        >
          <div className="absolute inset-x-0 top-0 h-[3px] bg-gold" aria-hidden="true" />
          <span
            className="absolute right-[-0.05em] bottom-[-0.15em] hidden md:block font-serif text-[clamp(10rem,26vw,24rem)] text-white/[0.025] leading-none pointer-events-none select-none"
            aria-hidden="true"
          >
            PL
          </span>

          <div className="relative z-10 max-w-[1060px] mx-auto w-full grid md:grid-cols-[1fr_1.25fr] gap-10 md:gap-14 items-center">
            <div>
              <p className="inline-flex items-center gap-3 text-[0.7rem] tracking-[0.22em] uppercase text-gold mb-8 before:content-[''] before:block before:w-7 before:h-px before:bg-gold">
                Ebooks cortos en español
              </p>
              <h1 className="font-serif font-normal text-[clamp(2.8rem,6vw,4.8rem)] leading-[1.1] text-white tracking-[-0.01em] text-balance mb-6">
                Conocimiento
                <br />
                accionable.
                <br />
                <em className="not-italic text-gold">Sin relleno aceptable.</em>
              </h1>
              <p className="text-white/60 text-base leading-[1.7] max-w-[460px] mb-10">
                Elige guías de no ficción accionable, grandes clásicos de la literatura universal o relatos de ficción adulta. Formato pocket para leer a tu ritmo, en cualquier dispositivo.
              </p>
              <a
                href="#catalogo"
                className="inline-flex items-center gap-3 text-[0.7rem] tracking-[0.15em] uppercase text-white/30 hover:text-white/55 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded-sm before:content-[''] before:block before:w-7 before:h-px before:bg-white/25"
              >
                Explorar catálogo
              </a>
            </div>

            <div className="border border-gold/35 p-8 md:p-12 bg-white/[0.04]">
              <span className="block text-[0.68rem] tracking-[0.2em] uppercase text-gold mb-3">
                Primer ebook gratis
              </span>
              <p className="font-serif font-normal text-white text-[1.3rem] mb-1">
                Descarga sin costo
              </p>
              <p className="text-white/45 text-[0.82rem] leading-[1.55] mb-7">
                Ingresa tu correo y elige el clásico que quieres leer hoy.
              </p>
              <EmailForm />
              <p className="text-[0.7rem] text-white/25 mt-3 text-center">
                Sin spam. Sin suscripciones.
              </p>
            </div>
          </div>
        </section>

        {/* ── TICKER ── */}
        <div
          aria-hidden="true"
          className="overflow-hidden bg-navy border-y border-white/10 h-11 flex items-center"
        >
          <div className="ticker-track">
            {Array.from({ length: 6 }).map((_, i) => (
              <span
                key={i}
                className="font-serif text-gold text-[15px] tracking-[0.12em] whitespace-nowrap px-10"
              >
                Conocimiento accionable. Sin relleno aceptable.&nbsp;&nbsp;&nbsp;·&nbsp;&nbsp;&nbsp;Pocket Libros&nbsp;&nbsp;&nbsp;·&nbsp;&nbsp;&nbsp;No Ficción · Clásicos · Grandes Pensadores · Relatos +18&nbsp;&nbsp;&nbsp;·&nbsp;&nbsp;&nbsp;Tu primera descarga es gratis&nbsp;&nbsp;&nbsp;·&nbsp;&nbsp;&nbsp;
              </span>
            ))}
          </div>
        </div>

        {/* ── CÓMO FUNCIONA ── */}
        <section id="como" className="bg-surface">
          <div className="max-w-[960px] mx-auto px-6 md:px-10 py-14 md:py-[5.5rem]">
            <p className="text-[0.68rem] tracking-[0.2em] uppercase text-gold mb-2">
              El proceso
            </p>
            <h2 className="font-serif font-normal text-[clamp(1.5rem,3vw,2rem)] text-navy mb-14 text-balance">
              Cómo funciona
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10">
              {steps.map(({ num, title, desc }) => (
                <div key={num}>
                  <p
                    className="font-serif text-[2.8rem] text-[#D6D3CE] leading-none mb-3"
                    aria-hidden="true"
                  >
                    {num}
                  </p>
                  <h3 className="font-serif font-normal text-[1.05rem] text-navy mb-2">{title}</h3>
                  <p className="text-[0.9rem] text-muted leading-[1.65]">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CATÁLOGO ── */}
        <section id="catalogo" className="bg-white">
          <div className="max-w-[1100px] mx-auto px-6 md:px-10 py-14 md:py-[5.5rem]">
            <p className="text-[0.68rem] tracking-[0.2em] uppercase text-gold mb-2">
              Colección actual
            </p>
            <h2 className="font-serif font-normal text-[clamp(1.5rem,3vw,2rem)] text-navy mb-10 text-balance">
              Catálogo
            </h2>
            <CatalogTabs books={books} />
          </div>
        </section>

        {/* ── POR QUÉ POCKET ── */}
        <section id="nosotros" className="bg-surface">
          <div className="max-w-[960px] mx-auto px-6 md:px-10 py-14 md:py-[5.5rem]">
            <p className="text-[0.68rem] tracking-[0.2em] uppercase text-gold mb-2">
              Por qué Pocket Libros
            </p>
            <h2 className="font-serif font-normal text-[clamp(1.5rem,3vw,2rem)] text-navy mb-14 text-balance">
              Lo que somos y nos diferencia
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10">
              {reasons.map(({ title, desc }) => (
                <div key={title}>
                  <h3 className="font-serif font-normal text-[1rem] text-navy pb-2 mb-2 border-b border-border">
                    {title}
                  </h3>
                  <p className="text-[0.88rem] text-muted leading-[1.65]">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* ── FOOTER ── */}
      <footer
        id="contacto"
        className="bg-navy px-6 md:px-10 py-12 flex flex-col items-center gap-5 text-center"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/pocket_libros_logo_neg.svg"
          alt="Pocket Libros"
          width={152}
          height={73}
          className="opacity-90"
        />
        <ul className="flex flex-wrap gap-6 justify-center" role="list">
          <li>
            <a
              href="#"
              className="text-[0.76rem] text-white/35 hover:text-gold transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded-sm"
            >
              Términos
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-[0.76rem] text-white/35 hover:text-gold transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded-sm"
            >
              Privacidad
            </a>
          </li>
          <li>
            <a
              href="mailto:hola@pocketlibros.cl"
              className="text-[0.76rem] text-white/35 hover:text-gold transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded-sm"
            >
              Contacto
            </a>
          </li>
        </ul>
        <p className="text-[0.74rem] text-white/20 max-w-[520px] leading-[1.5]">
          Contenido educativo. No constituye asesoría financiera ni profesional.
        </p>
        <p className="text-[0.73rem] text-white/15">© 2026 Pocketlibros.cl — LongViva SpA</p>
      </footer>
    </>
  );
}

import Nav from "./_components/Nav";
import Footer from "./_components/Footer";
import EmailForm from "./_components/EmailForm";
import CatalogTabs, { type Book } from "./_components/CatalogTabs";

const books: Book[] = [
  // No ficción — Trading & Finanzas — USD $5
  { title: "Domina tu Ansiedad al Invertir", subcategory: "Trading & Finanzas", tab: "noficcion", price: 5, portada: "portada_ansiedad.svg", buyUrl: "https://pocketlibros.gumroad.com/l/domina-ansiedad?wanted=true" },
  { title: "Trading para Principiantes", subcategory: "Trading & Finanzas", tab: "noficcion", price: 5, portada: "portada_trading.svg", buyUrl: "https://pocketlibros.gumroad.com/l/trading-principiantes?wanted=true" },
  // No ficción — Liderazgo — USD $5
  { title: "Lidera sin Cargo", subcategory: "Liderazgo", tab: "noficcion", price: 5, portada: "portada_liderazgo.svg", buyUrl: "https://pocketlibros.gumroad.com/l/lider_sin_cargo?wanted=true" },
  { title: "El Líder que Escucha", subcategory: "Liderazgo", tab: "noficcion", price: 5, portada: "portada_lider_escucha.svg", buyUrl: "https://pocketlibros.gumroad.com/l/lider-escucha?wanted=true" },
  // No ficción — Salud & Bienestar — USD $5
  { title: "Ayuno Intermitente: Protocolo Simple", subcategory: "Salud & Bienestar", tab: "noficcion", price: 5, portada: "portada_ayuno.svg", buyUrl: "https://pocketlibros.gumroad.com/l/ayuno?wanted=true" },
  { title: "Energía sin Cafeína", subcategory: "Salud & Bienestar", tab: "noficcion", price: 5, portada: "portada_energia.svg", buyUrl: "https://pocketlibros.gumroad.com/l/energia?wanted=true" },
  // No ficción — Operaciones — USD $5
  { title: "Supply Chain en Crisis", subcategory: "Operaciones", tab: "noficcion", price: 5, portada: "portada_supply_chain.svg", buyUrl: "https://pocketlibros.gumroad.com/l/supply-chain?wanted=true" },
  { title: "KPIs que Importan", subcategory: "Operaciones", tab: "noficcion", price: 5, portada: "portada_kpis.svg", buyUrl: "https://pocketlibros.gumroad.com/l/kpis?wanted=true" },
  // Ficción — Clásicos Universales — Cortesía (gratis)
  { title: "Don Quijote de la Mancha", author: "Cervantes", subcategory: "Clásicos Universales", tab: "ficcion", price: 0, portada: "portada_quijote.svg", buyUrl: "https://pocketlibros.gumroad.com/l/quijote" },
  { title: "Hamlet", author: "Shakespeare", subcategory: "Clásicos Universales", tab: "ficcion", price: 0, portada: "portada_hamlet.svg", buyUrl: "https://pocketlibros.gumroad.com/l/hamlet" },
  { title: "La Metamorfosis", author: "Kafka", subcategory: "Clásicos Universales", tab: "ficcion", price: 0, portada: "portada_metamorfosis.svg", buyUrl: "https://pocketlibros.gumroad.com/l/metamorfosis" },
  { title: "1984", author: "Orwell", subcategory: "Clásicos Universales", tab: "ficcion", price: 0, portada: "portada_1984.svg", buyUrl: "https://pocketlibros.gumroad.com/l/1984" },
  { title: "La Divina Comedia", author: "Dante", subcategory: "Clásicos Universales", tab: "ficcion", price: 0, portada: "portada_divina_comedia.svg", buyUrl: "https://pocketlibros.gumroad.com/l/divina-comedia" },
  // Ficción — Clásicos Universales — USD $2
  { title: "La Odisea", author: "Homero", subcategory: "Clásicos Universales", tab: "ficcion", price: 2, portada: "portada_odisea.svg", buyUrl: "https://pocketlibros.gumroad.com/l/odisea?wanted=true" },
  { title: "Crimen y Castigo", author: "Dostoievski", subcategory: "Clásicos Universales", tab: "ficcion", price: 2, portada: "portada_crimen_castigo.svg", buyUrl: "https://pocketlibros.gumroad.com/l/crimen-castigo?wanted=true" },
  { title: "Orgullo y Prejuicio", author: "Austen", subcategory: "Clásicos Universales", tab: "ficcion", price: 2, portada: "portada_orgullo_prejuicio.svg", buyUrl: "https://pocketlibros.gumroad.com/l/orgullo-prejuicio?wanted=true" },
  { title: "La Guerra y la Paz", author: "Tolstói", subcategory: "Clásicos Universales", tab: "ficcion", price: 2, portada: "portada_guerra_paz.svg", buyUrl: "https://pocketlibros.gumroad.com/l/guerra-paz?wanted=true" },
  { title: "Moby Dick", author: "Melville", subcategory: "Clásicos Universales", tab: "ficcion", price: 2, portada: "portada_moby_dick.svg", buyUrl: "https://pocketlibros.gumroad.com/l/moby-dick?wanted=true" },
  // Ficción — Grandes Pensadores — USD $3
  { title: "La República", author: "Platón", subcategory: "Grandes Pensadores", tab: "ficcion", price: 3, portada: "portada_republica.svg", buyUrl: "https://pocketlibros.gumroad.com/l/republica-platon?wanted=true" },
  { title: "Ética a Nicómaco", author: "Aristóteles", subcategory: "Grandes Pensadores", tab: "ficcion", price: 3, portada: "portada_etica.svg", buyUrl: "https://pocketlibros.gumroad.com/l/etica-nicomaco?wanted=true" },
  { title: "Meditaciones", author: "Marco Aurelio", subcategory: "Grandes Pensadores", tab: "ficcion", price: 3, portada: "portada_meditaciones.svg", buyUrl: "https://pocketlibros.gumroad.com/l/meditaciones?wanted=true" },
  { title: "Discurso del Método", author: "Descartes", subcategory: "Grandes Pensadores", tab: "ficcion", price: 3, portada: "portada_descartes.svg", buyUrl: "https://pocketlibros.gumroad.com/l/metodo-descartes?wanted=true" },
  { title: "Leviatán", author: "Hobbes", subcategory: "Grandes Pensadores", tab: "ficcion", price: 3, portada: "portada_leviatan.svg", buyUrl: "https://pocketlibros.gumroad.com/l/leviatan?wanted=true" },
  { title: "Así habló Zaratustra", author: "Nietzsche", subcategory: "Grandes Pensadores", tab: "ficcion", price: 3, portada: "portada_zaratustra.svg", buyUrl: "https://pocketlibros.gumroad.com/l/zaratustra?wanted=true" },
  { title: "Crítica de la Razón Pura", author: "Kant", subcategory: "Grandes Pensadores", tab: "ficcion", price: 3, portada: "portada_kant.svg", buyUrl: "https://pocketlibros.gumroad.com/l/kant?wanted=true" },
  { title: "El Mundo como Voluntad", author: "Schopenhauer", subcategory: "Grandes Pensadores", tab: "ficcion", price: 3, portada: "portada_schopenhauer.svg", buyUrl: "https://pocketlibros.gumroad.com/l/shopenhauer?wanted=true" },
  { title: "Tratado de la Naturaleza Humana", author: "Hume", subcategory: "Grandes Pensadores", tab: "ficcion", price: 3, portada: "portada_hume.svg", buyUrl: "https://pocketlibros.gumroad.com/l/hume?wanted=true" },
  { title: "Ética", author: "Spinoza", subcategory: "Grandes Pensadores", tab: "ficcion", price: 3, portada: "portada_spinoza.svg", buyUrl: "https://pocketlibros.gumroad.com/l/etica-spinoza?wanted=true" },
  // Ficción — Novela Negra — USD $2
  { title: "Arsène Lupin, ladrón de guante blanco", author: "Maurice Leblanc", subcategory: "Novela Negra", tab: "ficcion", price: 2, portada: "portada_lupin.svg", buyUrl: "https://pocketlibros.gumroad.com/l/lupin?wanted=true" },
  { title: "El padre Brown (selección)", author: "G.K. Chesterton", subcategory: "Novela Negra", tab: "ficcion", price: 2, portada: "portada_padre_brown.svg", buyUrl: "https://pocketlibros.gumroad.com/l/padre-brown?wanted=true" },
  { title: "El sabueso de los Baskerville", author: "Arthur Conan Doyle", subcategory: "Novela Negra", tab: "ficcion", price: 2, portada: "portada_baskerville.svg", buyUrl: "https://pocketlibros.gumroad.com/l/baskerville?wanted=true" },
  { title: "Los crímenes de la calle Morgue", author: "Edgar Allan Poe", subcategory: "Novela Negra", tab: "ficcion", price: 2, portada: "portada_morgue.svg", buyUrl: "https://pocketlibros.gumroad.com/l/morgue?wanted=true" },
  { title: "La carta robada", author: "Edgar Allan Poe", subcategory: "Novela Negra", tab: "ficcion", price: 2, portada: "portada_carta_robada.svg", buyUrl: "https://pocketlibros.gumroad.com/l/carta-robada?wanted=true" },
  { title: "La piedra lunar", author: "Wilkie Collins", subcategory: "Novela Negra", tab: "ficcion", price: 2, portada: "portada_piedra_lunar.svg", buyUrl: "https://pocketlibros.gumroad.com/l/piedra-lunar?wanted=true" },
  { title: "El misterio del cuarto amarillo", author: "Gaston Leroux", subcategory: "Novela Negra", tab: "ficcion", price: 2, portada: "portada_cuarto_amarillo.svg", buyUrl: "https://pocketlibros.gumroad.com/l/cuarto-amarillo?wanted=true" },
  { title: "La aguja hueca", author: "Maurice Leblanc", subcategory: "Novela Negra", tab: "ficcion", price: 2, portada: "portada_aguja_hueca.svg", buyUrl: "https://pocketlibros.gumroad.com/l/aguja-hueca?wanted=true" },
  { title: "Charlie Chan continúa", author: "Earl Derr Biggers", subcategory: "Novela Negra", tab: "ficcion", price: 2, portada: "portada_charlie_chan.svg", buyUrl: "https://pocketlibros.gumroad.com/l/charlie-chan?wanted=true" },
  { title: "Estudio en Escarlata", author: "Arthur Conan Doyle", subcategory: "Novela Negra", tab: "ficcion", price: 2, portada: "portada_escarlata.svg", buyUrl: "https://pocketlibros.gumroad.com/l/estudio-escarlata?wanted=true" },
  // Ficción — Relatos +18 — USD $5
  { title: "A los pies de Marcia", subcategory: "Relatos +18", tab: "ficcion", price: 5, portada: "png/portada_marcia.png", buyUrl: "https://pocketlibros.gumroad.com/l/marcia?wanted=true" },
  { title: "Las Noches de Graciela", subcategory: "Relatos +18", tab: "ficcion", price: 5, portada: "portada_noches_graciela.svg", buyUrl: "https://pocketlibros.gumroad.com/l/graciela?wanted=true" },
  { title: "Los Pies de Sofía", subcategory: "Relatos +18", tab: "ficcion", price: 5, portada: "portada_pies_sofia.svg", buyUrl: "https://pocketlibros.gumroad.com/l/pies-sofia?wanted=true" },
  { title: "La Chica del Vestido Rojo", subcategory: "Relatos +18", tab: "ficcion", price: 5, portada: "portada_vestido_rojo.svg", buyUrl: "https://pocketlibros.gumroad.com/l/vestido-rojo?wanted=true" },
  { title: "La Llave del 5B", subcategory: "Relatos +18", tab: "ficcion", price: 5, portada: "portada_llave_5b.svg", buyUrl: "https://pocketlibros.gumroad.com/l/llaves-5B?wanted=true" },
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
    desc: "Desde USD $2 por título. Sin suscripción. Pagas solo lo que vas a leer.",
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
                Conocimiento accionable. Sin relleno aceptable.&nbsp;&nbsp;&nbsp;·&nbsp;&nbsp;&nbsp;Pocket Libros&nbsp;&nbsp;&nbsp;·&nbsp;&nbsp;&nbsp;No Ficción · Clásicos · Grandes Pensadores · Novela Negra · Relatos +18&nbsp;&nbsp;&nbsp;·&nbsp;&nbsp;&nbsp;Tu primera descarga es gratis&nbsp;&nbsp;&nbsp;·&nbsp;&nbsp;&nbsp;
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
      <Footer />
    </>
  );
}

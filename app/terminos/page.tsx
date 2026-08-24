import type { Metadata } from "next";
import Nav from "../_components/Nav";
import Footer from "../_components/Footer";

export const metadata: Metadata = {
  title: "Términos y Condiciones | Pocket Libros",
};

const sections = [
  {
    n: "01",
    title: "Identificación del proveedor",
    body: (
      <p>
        Este sitio web es operado por <strong>LongViva SpA</strong>, con domicilio en Chile.
        Correo de contacto:{" "}
        <a href="mailto:hola@pocketlibros.cl" className="text-gold hover:underline">
          hola@pocketlibros.cl
        </a>
      </p>
    ),
  },
  {
    n: "02",
    title: "Descripción del servicio",
    body: (
      <>
        <p>
          Pocket Libros es una tienda de ebooks en formato PDF. Todos los archivos se entregan
          digitalmente a través de Gumroad, plataforma externa de venta y distribución de productos
          digitales. Los contenidos disponibles son:
        </p>
        <ul className="mt-3 ml-5 space-y-1 list-disc text-muted">
          <li>Resúmenes y guías de no ficción (trading, liderazgo, salud, operaciones)</li>
          <li>Adaptaciones de obras de dominio público (clásicos universales, filosofía)</li>
          <li>Relatos de ficción para mayores de 18 años</li>
        </ul>
      </>
    ),
  },
  {
    n: "03",
    title: "Precios y moneda",
    body: (
      <p>
        Los precios están expresados en dólares estadounidenses (USD). El cobro efectivo en pesos
        chilenos depende del tipo de cambio aplicado por Gumroad al momento de la transacción.
      </p>
    ),
  },
  {
    n: "04",
    title: "Procesamiento de pagos",
    body: (
      <p>
        Los pagos son procesados por <strong>Gumroad Inc.</strong>, plataforma de comercio
        electrónico externa. LongViva SpA no almacena ni procesa datos de tarjetas de crédito ni
        información bancaria de los compradores. Las condiciones están disponibles en{" "}
        <a
          href="https://gumroad.com/terms"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gold hover:underline"
        >
          gumroad.com/terms
        </a>
        .
      </p>
    ),
  },
  {
    n: "05",
    title: "Entrega del producto",
    body: (
      <p>
        Una vez completada la compra en Gumroad, el archivo PDF se entrega automáticamente por
        correo electrónico y queda disponible en la biblioteca de la cuenta Gumroad del comprador.
      </p>
    ),
  },
  {
    n: "06",
    title: "Política de reembolsos",
    body: (
      <>
        <p>
          Dado que los productos son digitales y de entrega inmediata, no se realizan reembolsos
          una vez que el archivo ha sido descargado o enviado por correo electrónico.
        </p>
        <p className="mt-3 pl-4 border-l-2 border-gold/40 text-muted">
          <strong className="text-gray1">Excepción:</strong> si el archivo recibido está dañado o
          es incorrecto, contáctanos a{" "}
          <a href="mailto:hola@pocketlibros.cl" className="text-gold hover:underline">
            hola@pocketlibros.cl
          </a>{" "}
          dentro de las 48 horas siguientes a la compra y lo solucionamos.
        </p>
      </>
    ),
  },
  {
    n: "07",
    title: "Uso personal",
    body: (
      <p>
        Los archivos adquiridos son para uso personal y no comercial. Queda prohibida su
        redistribución, reventa, reproducción parcial o total, o publicación en cualquier medio sin
        autorización expresa de LongViva SpA.
      </p>
    ),
  },
  {
    n: "08",
    title: "Contenido de dominio público",
    body: (
      <p>
        Los títulos de clásicos universales y grandes pensadores están basados en obras cuyo
        copyright ha expirado. Las adaptaciones, resúmenes y diseño editorial son propiedad de
        LongViva SpA.
      </p>
    ),
  },
  {
    n: "09",
    title: "Disclaimer — Trading y finanzas",
    body: (
      <p className="pl-4 border-l-2 border-gold/40 text-muted">
        Los contenidos de la categoría Trading &amp; Finanzas son exclusivamente educativos. No
        constituyen asesoría financiera, recomendación de inversión ni garantía de resultados.
        Invertir implica riesgos. Consulta a un asesor certificado antes de tomar decisiones
        financieras.
      </p>
    ),
  },
  {
    n: "10",
    title: "Disclaimer — Salud y bienestar",
    body: (
      <p className="pl-4 border-l-2 border-gold/40 text-muted">
        Los contenidos de la categoría Salud &amp; Bienestar son informativos y no reemplazan la
        opinión de un profesional médico. Consulta a tu médico antes de iniciar cualquier protocolo
        de alimentación, ejercicio o suplementación.
      </p>
    ),
  },
  {
    n: "11",
    title: "Contenido para mayores de edad",
    body: (
      <p>
        Los relatos de la categoría "+18" están destinados exclusivamente a personas mayores de 18
        años. Al adquirir estos títulos, el comprador declara ser mayor de edad en su país de
        residencia. Todos los personajes que aparecen en los relatos son ficticios y mayores de 18
        años.
      </p>
    ),
  },
  {
    n: "12",
    title: "Modificaciones",
    body: (
      <p>
        LongViva SpA se reserva el derecho de modificar estos términos en cualquier momento. Los
        cambios se publicarán en esta página con la fecha de actualización correspondiente.
      </p>
    ),
  },
  {
    n: "13",
    title: "Legislación aplicable",
    body: (
      <p>
        Estos términos se rigen por las leyes de la República de Chile. Para cualquier
        controversia, las partes se someten a los tribunales competentes de Santiago de Chile.
      </p>
    ),
  },
];

export default function Terminos() {
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
              <li className="text-white/40">Términos</li>
            </ol>
          </nav>
          <p className="inline-flex items-center gap-3 text-[0.68rem] tracking-[0.22em] uppercase text-gold mb-5 before:content-[''] before:block before:w-7 before:h-px before:bg-gold">
            Legal
          </p>
          <h1 className="font-serif font-normal text-[clamp(2rem,4vw,3rem)] leading-[1.15] text-white tracking-[-0.01em] text-balance">
            Términos y Condiciones
          </h1>
          <p className="text-white/35 text-sm mt-3">Última actualización: 24 de agosto de 2026</p>
        </div>
      </section>

      {/* ── CONTENIDO ── */}
      <main id="main" className="bg-surface px-6 md:px-10 py-14 md:py-20">
        <div className="max-w-[720px] mx-auto space-y-0 divide-y divide-border">
          {sections.map(({ n, title, body }) => (
            <div key={n} className="py-10 md:py-12 grid md:grid-cols-[5rem_1fr] gap-4 md:gap-8">
              <p
                className="font-serif text-[2.2rem] text-[#D6D3CE] leading-none select-none"
                aria-hidden="true"
              >
                {n}
              </p>
              <div>
                <h2 className="font-serif font-normal text-[1.05rem] text-navy mb-3">{title}</h2>
                <div className="text-[0.9rem] text-muted leading-[1.7]">{body}</div>
              </div>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </>
  );
}

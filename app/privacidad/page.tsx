import type { Metadata } from "next";
import Nav from "../_components/Nav";
import Footer from "../_components/Footer";

export const metadata: Metadata = {
  title: "Política de Privacidad | Pocket Libros",
};

export default function Privacidad() {
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
              <li className="text-white/40">Privacidad</li>
            </ol>
          </nav>
          <p className="inline-flex items-center gap-3 text-[0.68rem] tracking-[0.22em] uppercase text-gold mb-5 before:content-[''] before:block before:w-7 before:h-px before:bg-gold">
            Legal
          </p>
          <h1 className="font-serif font-normal text-[clamp(2rem,4vw,3rem)] leading-[1.15] text-white tracking-[-0.01em] text-balance">
            Política de Privacidad
          </h1>
          <p className="text-white/35 text-sm mt-3">Última actualización: 24 de agosto de 2026</p>
        </div>
      </section>

      {/* ── CONTENIDO ── */}
      <main id="main" className="bg-surface px-6 md:px-10 py-14 md:py-20">
        <div className="max-w-[720px] mx-auto space-y-0 divide-y divide-border">

          {/* 01 */}
          <div className="py-10 md:py-12 grid md:grid-cols-[5rem_1fr] gap-4 md:gap-8">
            <p className="font-serif text-[2.2rem] text-[#D6D3CE] leading-none select-none" aria-hidden="true">01</p>
            <div>
              <h2 className="font-serif font-normal text-[1.05rem] text-navy mb-3">Responsable del tratamiento</h2>
              <p className="text-[0.9rem] text-muted leading-[1.7]">
                <strong className="text-gray1">LongViva SpA</strong>, operadora de pocketlibros.cl. Contacto:{" "}
                <a href="mailto:hola@pocketlibros.cl" className="text-gold hover:underline">hola@pocketlibros.cl</a>
              </p>
            </div>
          </div>

          {/* 02 */}
          <div className="py-10 md:py-12 grid md:grid-cols-[5rem_1fr] gap-4 md:gap-8">
            <p className="font-serif text-[2.2rem] text-[#D6D3CE] leading-none select-none" aria-hidden="true">02</p>
            <div>
              <h2 className="font-serif font-normal text-[1.05rem] text-navy mb-3">Datos que recopilamos</h2>
              <div className="text-[0.9rem] text-muted leading-[1.7]">
                <p>Al registrarte para recibir tu ebook gratuito de bienvenida, recopilamos:</p>
                <ul className="mt-3 ml-5 space-y-1 list-disc">
                  <li>Dirección de correo electrónico</li>
                  <li>Título del clásico elegido como regalo</li>
                </ul>
                <p className="mt-3">No recopilamos nombre, teléfono, dirección postal ni datos de pago en este formulario.</p>
              </div>
            </div>
          </div>

          {/* 03 */}
          <div className="py-10 md:py-12 grid md:grid-cols-[5rem_1fr] gap-4 md:gap-8">
            <p className="font-serif text-[2.2rem] text-[#D6D3CE] leading-none select-none" aria-hidden="true">03</p>
            <div>
              <h2 className="font-serif font-normal text-[1.05rem] text-navy mb-3">Finalidad del tratamiento</h2>
              <div className="text-[0.9rem] text-muted leading-[1.7]">
                <p>Usamos tus datos para:</p>
                <ul className="mt-3 ml-5 space-y-1 list-disc">
                  <li>Enviarte el ebook gratuito de bienvenida que elegiste</li>
                  <li>Comunicarte novedades del catálogo y nuevos títulos (puedes darte de baja en cualquier momento)</li>
                  <li>Prevenir registros duplicados</li>
                </ul>
              </div>
            </div>
          </div>

          {/* 04 */}
          <div className="py-10 md:py-12 grid md:grid-cols-[5rem_1fr] gap-4 md:gap-8">
            <p className="font-serif text-[2.2rem] text-[#D6D3CE] leading-none select-none" aria-hidden="true">04</p>
            <div>
              <h2 className="font-serif font-normal text-[1.05rem] text-navy mb-3">Procesadores de datos</h2>
              <div className="text-[0.9rem] text-muted leading-[1.7]">
                <p className="mb-5">Compartimos tus datos con los siguientes servicios externos:</p>
                <div className="overflow-x-auto border border-border">
                  <table className="w-full text-[0.82rem]">
                    <thead className="bg-goldLight">
                      <tr>
                        <th className="text-left px-4 py-2.5 font-semibold text-navy text-[0.68rem] tracking-[0.1em] uppercase">Servicio</th>
                        <th className="text-left px-4 py-2.5 font-semibold text-navy text-[0.68rem] tracking-[0.1em] uppercase">Función</th>
                        <th className="text-left px-4 py-2.5 font-semibold text-navy text-[0.68rem] tracking-[0.1em] uppercase">Privacidad</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border bg-white">
                      <tr>
                        <td className="px-4 py-3 font-medium text-gray1">Supabase</td>
                        <td className="px-4 py-3">Almacenamiento de emails</td>
                        <td className="px-4 py-3"><a href="https://supabase.com/privacy" target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">supabase.com/privacy</a></td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-gray1">Resend</td>
                        <td className="px-4 py-3">Envío de correos</td>
                        <td className="px-4 py-3"><a href="https://resend.com/privacy" target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">resend.com/privacy</a></td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-gray1">Gumroad</td>
                        <td className="px-4 py-3">Pagos y entrega de productos</td>
                        <td className="px-4 py-3"><a href="https://gumroad.com/privacy" target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">gumroad.com/privacy</a></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="mt-4">No vendemos ni cedemos tus datos a terceros para fines publicitarios.</p>
              </div>
            </div>
          </div>

          {/* 05 */}
          <div className="py-10 md:py-12 grid md:grid-cols-[5rem_1fr] gap-4 md:gap-8">
            <p className="font-serif text-[2.2rem] text-[#D6D3CE] leading-none select-none" aria-hidden="true">05</p>
            <div>
              <h2 className="font-serif font-normal text-[1.05rem] text-navy mb-3">Conservación de datos</h2>
              <p className="text-[0.9rem] text-muted leading-[1.7]">
                Conservamos tu correo electrónico mientras mantengas el servicio activo. Puedes solicitar la eliminación de tus datos en cualquier momento escribiendo a{" "}
                <a href="mailto:hola@pocketlibros.cl" className="text-gold hover:underline">hola@pocketlibros.cl</a>.
              </p>
            </div>
          </div>

          {/* 06 */}
          <div className="py-10 md:py-12 grid md:grid-cols-[5rem_1fr] gap-4 md:gap-8">
            <p className="font-serif text-[2.2rem] text-[#D6D3CE] leading-none select-none" aria-hidden="true">06</p>
            <div>
              <h2 className="font-serif font-normal text-[1.05rem] text-navy mb-3">Tus derechos</h2>
              <p className="text-[0.9rem] text-muted leading-[1.7]">
                Conforme a la Ley 19.628 de Protección de la Vida Privada (Chile), tienes derecho a acceder, rectificar, cancelar y oponerte al tratamiento de tus datos. Escríbenos a{" "}
                <a href="mailto:hola@pocketlibros.cl" className="text-gold hover:underline">hola@pocketlibros.cl</a>{" "}
                indicando tu correo y la solicitud. Respondemos dentro de 5 días hábiles.
              </p>
            </div>
          </div>

          {/* 07 */}
          <div className="py-10 md:py-12 grid md:grid-cols-[5rem_1fr] gap-4 md:gap-8">
            <p className="font-serif text-[2.2rem] text-[#D6D3CE] leading-none select-none" aria-hidden="true">07</p>
            <div>
              <h2 className="font-serif font-normal text-[1.05rem] text-navy mb-3">Cookies</h2>
              <p className="text-[0.9rem] text-muted leading-[1.7]">Este sitio no utiliza cookies de seguimiento ni de publicidad.</p>
            </div>
          </div>

          {/* 08 */}
          <div className="py-10 md:py-12 grid md:grid-cols-[5rem_1fr] gap-4 md:gap-8">
            <p className="font-serif text-[2.2rem] text-[#D6D3CE] leading-none select-none" aria-hidden="true">08</p>
            <div>
              <h2 className="font-serif font-normal text-[1.05rem] text-navy mb-3">Seguridad</h2>
              <p className="text-[0.9rem] text-muted leading-[1.7]">
                Los datos se almacenan con cifrado en tránsito (HTTPS) y en reposo, operados por Supabase. Aplicamos medidas razonables para proteger la información de accesos no autorizados.
              </p>
            </div>
          </div>

          {/* 09 */}
          <div className="py-10 md:py-12 grid md:grid-cols-[5rem_1fr] gap-4 md:gap-8">
            <p className="font-serif text-[2.2rem] text-[#D6D3CE] leading-none select-none" aria-hidden="true">09</p>
            <div>
              <h2 className="font-serif font-normal text-[1.05rem] text-navy mb-3">Modificaciones</h2>
              <p className="text-[0.9rem] text-muted leading-[1.7]">
                Podemos actualizar esta política cuando sea necesario. La versión vigente siempre estará disponible en{" "}
                <a href="/privacidad" className="text-gold hover:underline">pocketlibros.cl/privacidad</a>.
              </p>
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </>
  );
}

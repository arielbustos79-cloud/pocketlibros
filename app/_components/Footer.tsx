export default function Footer() {
  return (
    <footer className="bg-navy px-6 md:px-10 py-12 flex flex-col items-center gap-5 text-center">
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
            href="/terminos"
            className="text-[0.76rem] text-white/35 hover:text-gold transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded-sm"
          >
            Términos
          </a>
        </li>
        <li>
          <a
            href="/privacidad"
            className="text-[0.76rem] text-white/35 hover:text-gold transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded-sm"
          >
            Privacidad
          </a>
        </li>
        <li>
          <a
            href="/contacto"
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
  );
}

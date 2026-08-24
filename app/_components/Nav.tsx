"use client";

import { useState, useEffect } from "react";

const links = [
  { href: "#catalogo", label: "Catálogo" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "/contacto", label: "Contacto" },
];

const FONT_SIZES = [
  { key: "base", label: "A",   px: "16px" },
  { key: "lg",   label: "A+",  px: "18px" },
  { key: "xl",   label: "A++", px: "21px" },
] as const;

type FontSize = (typeof FONT_SIZES)[number]["key"];

function applyFontSize(size: FontSize) {
  const px = FONT_SIZES.find((f) => f.key === size)?.px ?? "16px";
  document.documentElement.style.fontSize = px;
  try { localStorage.setItem("pl-fontsize", size); } catch {}
}

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [fontSize, setFontSize] = useState<FontSize>("base");

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  /* Restore saved preference on mount */
  useEffect(() => {
    try {
      const saved = localStorage.getItem("pl-fontsize") as FontSize | null;
      if (saved && FONT_SIZES.some((f) => f.key === saved)) {
        setFontSize(saved);
        applyFontSize(saved);
      }
    } catch {}
  }, []);

  const handleFontSize = (size: FontSize) => {
    setFontSize(size);
    applyFontSize(size);
  };

  const close = () => setOpen(false);

  const btnBase = `font-serif font-normal leading-none transition-colors duration-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gold rounded-sm px-1 py-0.5`;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-10 transition-all duration-300 ${
        scrolled ? "bg-white border-b border-border py-3" : "py-6"
      }`}
    >
      {/* Logo */}
      <a
        href="/"
        aria-label="Pocket Libros — Inicio"
        className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded-sm"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/pocket_libros_logo.svg"
          alt="Pocket Libros"
          width={130}
          height={63}
          className="block md:hidden"
        />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/pocket_libros_logo.svg"
          alt="Pocket Libros"
          width={170}
          height={82}
          className="hidden md:block"
        />
      </a>

      {/* Desktop: links + font size controls */}
      <div className="hidden md:flex items-center gap-8">
        <ul className="flex gap-10" role="list">
          {links.map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                className={`text-xs tracking-[0.14em] uppercase transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded-sm ${
                  scrolled
                    ? "text-[#222] hover:text-gold"
                    : "text-white/70 hover:text-white"
                }`}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Font size control */}
        <div
          role="group"
          aria-label="Tamaño de texto"
          className={`flex items-center gap-0.5 pl-6 border-l ${
            scrolled ? "border-border" : "border-white/20"
          }`}
        >
          {FONT_SIZES.map(({ key, label }, i) => (
            <button
              key={key}
              type="button"
              onClick={() => handleFontSize(key)}
              aria-pressed={fontSize === key}
              aria-label={`Tamaño de texto ${label}`}
              style={{ fontSize: ["13px", "15px", "17px"][i] }}
              className={`${btnBase} ${
                fontSize === key
                  ? "text-gold"
                  : scrolled
                  ? "text-[#999] hover:text-navy"
                  : "text-white/35 hover:text-white/70"
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* Hamburger button */}
      <button
        type="button"
        className="flex md:hidden flex-col justify-center gap-[5px] p-1 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded-sm"
        aria-label={open ? "Cerrar menú" : "Abrir menú"}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        <span className={`block w-[22px] h-[1.5px] origin-center transition-transform duration-[280ms] ease-in-out ${scrolled ? "bg-navy" : "bg-white"} ${open ? "translate-y-[6.5px] rotate-45" : ""}`} />
        <span className={`block w-[22px] h-[1.5px] transition-all duration-200 ${scrolled ? "bg-navy" : "bg-white"} ${open ? "opacity-0 scale-x-0" : ""}`} />
        <span className={`block w-[22px] h-[1.5px] origin-center transition-transform duration-[280ms] ease-in-out ${scrolled ? "bg-navy" : "bg-white"} ${open ? "-translate-y-[6.5px] -rotate-45" : ""}`} />
      </button>

      {/* Mobile dropdown */}
      {open && (
        <div className={`absolute top-full left-0 right-0 flex flex-col md:hidden border-t ${scrolled ? "bg-white border-border border-b" : "bg-navy border-white/10"}`}>
          <ul role="list">
            {links.map(({ href, label }) => (
              <li key={href} className={`border-b ${scrolled ? "border-border" : "border-white/10"}`}>
                <a
                  href={href}
                  onClick={close}
                  className={`block px-6 py-4 text-sm tracking-[0.12em] uppercase transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-gold ${
                    scrolled
                      ? "text-[#222] hover:text-gold"
                      : "text-white/85 hover:text-white hover:bg-white/[0.06]"
                  }`}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
          {/* Font size in mobile menu */}
          <div className={`flex items-center gap-3 px-6 py-4 border-t ${scrolled ? "border-border" : "border-white/10"}`}>
            <span className={`text-[0.65rem] tracking-[0.14em] uppercase ${scrolled ? "text-[#999]" : "text-white/40"}`}>Texto</span>
            {FONT_SIZES.map(({ key, label }, i) => (
              <button
                key={key}
                type="button"
                onClick={() => { handleFontSize(key); close(); }}
                aria-pressed={fontSize === key}
                style={{ fontSize: ["14px", "16px", "18px"][i] }}
                className={`${btnBase} ${
                  fontSize === key
                    ? "text-gold"
                    : scrolled
                    ? "text-[#999] hover:text-navy"
                    : "text-white/40 hover:text-white/70"
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

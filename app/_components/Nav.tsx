"use client";

import { useState, useEffect } from "react";

const links = [
  { href: "#catalogo", label: "Catálogo" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#contacto", label: "Contacto" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const close = () => setOpen(false);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-10 transition-all duration-300 ${
        scrolled ? "bg-white border-b border-border py-3" : "py-6"
      }`}
    >
      {/* Logo */}
      <a
        href="#"
        aria-label="Pocket Libros — Inicio"
        className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded-sm"
      >
        {/* Mobile: solo isotipo */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/pocket_libros_isotipo.svg"
          alt="Pocket Libros"
          width={34}
          height={35}
          className="block md:hidden"
        />
        {/* Desktop: logo completo */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/pocket_libros_logo.svg"
          alt="Pocket Libros"
          width={116}
          height={43}
          className="hidden md:block"
        />
      </a>

      {/* Desktop links */}
      <ul className="hidden md:flex gap-10" role="list">
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

      {/* Hamburger button */}
      <button
        type="button"
        className="flex md:hidden flex-col justify-center gap-[5px] p-1 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded-sm"
        aria-label={open ? "Cerrar menú" : "Abrir menú"}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        <span
          className={`block w-[22px] h-[1.5px] origin-center transition-transform duration-[280ms] ease-in-out ${
            scrolled ? "bg-navy" : "bg-white"
          } ${open ? "translate-y-[6.5px] rotate-45" : ""}`}
        />
        <span
          className={`block w-[22px] h-[1.5px] transition-all duration-200 ${
            scrolled ? "bg-navy" : "bg-white"
          } ${open ? "opacity-0 scale-x-0" : ""}`}
        />
        <span
          className={`block w-[22px] h-[1.5px] origin-center transition-transform duration-[280ms] ease-in-out ${
            scrolled ? "bg-navy" : "bg-white"
          } ${open ? "-translate-y-[6.5px] -rotate-45" : ""}`}
        />
      </button>

      {/* Mobile dropdown */}
      {open && (
        <ul
          className={`absolute top-full left-0 right-0 flex flex-col md:hidden border-t ${
            scrolled
              ? "bg-white border-border border-b"
              : "bg-navy border-white/10"
          }`}
          role="list"
        >
          {links.map(({ href, label }) => (
            <li
              key={href}
              className={`border-b last:border-b-0 ${
                scrolled ? "border-border" : "border-white/10"
              }`}
            >
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
      )}
    </nav>
  );
}

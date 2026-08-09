"use client";

import { useState } from "react";

const CLASICOS = [
  "Don Quijote de la Mancha",
  "Hamlet",
  "La Metamorfosis",
  "La Odisea",
  "1984",
  "Crimen y Castigo",
  "Orgullo y Prejuicio",
  "La Guerra y la Paz",
  "Moby Dick",
  "La Divina Comedia",
];

export default function EmailForm() {
  const [step, setStep] = useState<1 | 2>(1);
  const [email, setEmail] = useState("");
  const [selected, setSelected] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleStep1 = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setStep(2);
  };

  const handleStep2 = (e: React.FormEvent) => {
    e.preventDefault();
    if (selected) setSubmitted(true);
  };

  if (submitted) {
    return (
      <p
        className="text-white/70 text-sm py-6 text-center"
        role="status"
        aria-live="polite"
      >
        ¡Listo! Te enviamos el link en breve.
      </p>
    );
  }

  return (
    <div className="border border-white/25 flex flex-col">
      {/* Step indicator */}
      <div className="flex border-b border-white/15">
        <div
          className={`flex-1 py-2 text-center text-[0.6rem] tracking-[0.15em] uppercase transition-colors duration-200 ${
            step === 1 ? "text-gold" : "text-white/30"
          }`}
        >
          01 Correo
        </div>
        <div
          className={`flex-1 py-2 text-center text-[0.6rem] tracking-[0.15em] uppercase transition-colors duration-200 ${
            step === 2 ? "text-gold" : "text-white/30"
          }`}
        >
          02 Tu clásico
        </div>
      </div>

      {step === 1 ? (
        <form onSubmit={handleStep1} className="flex flex-col">
          <label htmlFor="email-hero" className="sr-only">
            Tu correo electrónico
          </label>
          <input
            id="email-hero"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="tu@correo.com"
            className="px-4 py-[0.9rem] bg-white/[0.06] border-b border-white/15 text-white placeholder:text-white/30 text-sm outline-none focus:bg-white/[0.09] transition-colors duration-200"
          />
          <button
            type="submit"
            className="px-4 py-[0.9rem] bg-white text-navy font-bold text-xs tracking-[0.12em] uppercase cursor-pointer hover:bg-gold-light transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-gold"
          >
            Continuar →
          </button>
        </form>
      ) : (
        <form onSubmit={handleStep2} className="flex flex-col">
          <label htmlFor="clasico-select" className="sr-only">
            Elige tu clásico de bienvenida
          </label>
          <select
            id="clasico-select"
            required
            value={selected}
            onChange={(e) => setSelected(e.target.value)}
            className="px-4 py-[0.9rem] bg-white/[0.06] border-b border-white/15 text-white text-sm outline-none focus:bg-white/[0.09] transition-colors duration-200 appearance-none cursor-pointer"
          >
            <option value="" disabled style={{ background: "#0D2B4E" }}>
              Selecciona un título…
            </option>
            {CLASICOS.map((c) => (
              <option key={c} value={c} style={{ background: "#0D2B4E", color: "#fff" }}>
                {c}
              </option>
            ))}
          </select>
          <button
            type="submit"
            className="px-4 py-[0.9rem] bg-white text-navy font-bold text-xs tracking-[0.12em] uppercase cursor-pointer hover:bg-gold-light transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-gold"
          >
            Obtener mi ebook gratis →
          </button>
        </form>
      )}
    </div>
  );
}

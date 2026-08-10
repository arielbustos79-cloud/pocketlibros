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
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleStep1 = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setStep(2);
  };

  const handleStep2 = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selected) return;
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, clasico: selected }),
      });
      if (!res.ok) {
        const data = await res.json();
        setError(data.error ?? "Error al enviar. Inténtalo de nuevo.");
      } else {
        setSubmitted(true);
      }
    } catch {
      setError("Error de conexión. Inténtalo de nuevo.");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="py-8 text-center" role="status" aria-live="polite">
        <p className="font-serif text-white text-lg mb-2">¡Listo!</p>
        <p className="text-white/60 text-sm leading-relaxed">
          Revisa tu correo — te enviamos el link de descarga de{" "}
          <span className="text-gold">{selected}</span>.
        </p>
      </div>
    );
  }

  return (
    <div className="border border-white/25 flex flex-col">
      {/* Step indicator */}
      <div className="flex border-b border-white/15">
        {(["01 Correo", "02 Tu clásico"] as const).map((label, i) => (
          <div
            key={label}
            className={`flex-1 py-2.5 text-center text-[0.6rem] tracking-[0.15em] uppercase transition-colors duration-200 ${
              step === i + 1 ? "text-gold" : "text-white/30"
            }`}
          >
            {label}
          </div>
        ))}
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
            className="px-5 py-5 bg-white/[0.06] border-b border-white/15 text-white placeholder:text-white/30 text-base outline-none focus:bg-white/[0.09] transition-colors duration-200"
          />
          <button
            type="submit"
            className="px-5 py-5 bg-white text-navy font-bold text-xs tracking-[0.12em] uppercase cursor-pointer hover:bg-[#F0E6C0] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-gold"
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
            className="px-5 py-5 bg-white/[0.06] border-b border-white/15 text-white text-base outline-none focus:bg-white/[0.09] transition-colors duration-200 appearance-none cursor-pointer"
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
          {error && (
            <p className="px-5 py-2 text-[0.75rem] text-red-300 bg-red-900/20 border-b border-white/10">
              {error}
            </p>
          )}
          <button
            type="submit"
            disabled={loading}
            className="px-5 py-5 bg-white text-navy font-bold text-xs tracking-[0.12em] uppercase cursor-pointer hover:bg-[#F0E6C0] disabled:opacity-60 disabled:cursor-wait transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-gold"
          >
            {loading ? "Enviando…" : "Obtener mi ebook gratis →"}
          </button>
        </form>
      )}
    </div>
  );
}

"use client";

import { useState } from "react";

export type Book = {
  title: string;
  author?: string;
  subcategory: string;
  tab: "noficcion" | "ficcion";
  price: number;
  portada: string;
  buyUrl?: string;
};

const NO_FICCION_SUBCATS = [
  "Trading & Finanzas",
  "Liderazgo",
  "Salud & Bienestar",
  "Operaciones",
] as const;

const FICCION_SUBCATS = [
  "Clásicos Universales",
  "Grandes Pensadores",
  "Novela Negra",
  "Relatos +18",
] as const;

export default function CatalogTabs({ books }: { books: Book[] }) {
  const [activeTab, setActiveTab] = useState<"noficcion" | "ficcion">("noficcion");

  const subcats =
    activeTab === "noficcion" ? NO_FICCION_SUBCATS : FICCION_SUBCATS;
  const tabBooks = books.filter((b) => b.tab === activeTab);

  return (
    <>
      {/* Tab row */}
      <div
        role="tablist"
        aria-label="Categorías del catálogo"
        className="flex border-b border-border mb-12 overflow-x-auto"
      >
        {(
          [
            { id: "noficcion", label: "No Ficción" },
            { id: "ficcion", label: "Ficción" },
          ] as const
        ).map(({ id, label }) => (
          <button
            key={id}
            role="tab"
            type="button"
            id={`tab-${id}`}
            aria-selected={activeTab === id}
            aria-controls={`panel-${id}`}
            onClick={() => setActiveTab(id)}
            className={`px-6 py-3 text-[0.72rem] tracking-[0.15em] uppercase whitespace-nowrap transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-inset border-b-2 -mb-px ${
              activeTab === id
                ? "text-navy border-gold"
                : "text-[#999] border-transparent hover:text-navy hover:border-border"
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Tab panel */}
      <div
        role="tabpanel"
        id={`panel-${activeTab}`}
        aria-labelledby={`tab-${activeTab}`}
        className="space-y-14"
      >
        {subcats.map((subcat) => {
          const subcatBooks = tabBooks.filter((b) => b.subcategory === subcat);
          if (!subcatBooks.length) return null;
          const isAdult = subcat === "Relatos +18";
          return (
            <div key={subcat}>
              <div className="flex items-center gap-3 mb-6">
                <p className="text-[0.68rem] tracking-[0.2em] uppercase text-gold">
                  {subcat}
                </p>
                {isAdult && (
                  <span className="text-[0.58rem] tracking-[0.08em] uppercase border border-gold/40 text-gold/65 px-1.5 py-0.5 rounded-sm leading-none">
                    +18
                  </span>
                )}
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-5">
                {subcatBooks.map(({ title, author, price, portada, buyUrl }) => (
                  <article
                    key={title}
                    className="flex flex-col border border-border hover:border-gold hover:shadow-[0_8px_32px_rgba(0,0,0,0.18)] transition-all duration-300"
                  >
                    <div className="relative aspect-[2/3] overflow-hidden bg-navy">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={`/portadas/${portada}`}
                        alt={`Portada de ${title}`}
                        width={300}
                        height={450}
                        className="w-full h-full object-cover scale-[1.07] rotate-[-3deg] hover:rotate-0 hover:scale-100 transition-transform duration-300"
                      />
                    </div>
                    <div className="flex flex-col flex-1 gap-1.5 p-4">
                      {author && (
                        <span className="text-[0.6rem] tracking-[0.14em] uppercase text-gold">
                          {author}
                        </span>
                      )}
                      <p className="font-serif font-normal text-[0.85rem] text-navy leading-[1.4] flex-1">
                        {title}
                      </p>
                      <div className={`flex items-center pt-2 border-t border-border mt-1 ${price === 0 ? "justify-center" : "justify-between"}`}>
                        {price === 0 ? (
                          <a
                            href={buyUrl ?? "#"}
                            {...(buyUrl ? { "data-gumroad-overlay-checkout": "true", target: "_blank", rel: "noopener noreferrer" } : {})}
                            aria-label={`Descargar ${title} gratis`}
                          >
                            <svg width="52" height="52" viewBox="0 0 52 52" aria-hidden="true" style={{flexShrink:0}}>
                              <circle cx="26" cy="26" r="24" fill="none" stroke="#B8952A" strokeWidth="1"/>
                              <text x="26" y="30" fontSize="6.5" fill="#0D2B4E" fontFamily="Georgia,serif" textAnchor="middle" letterSpacing="0.5">Cortesía</text>
                            </svg>
                          </a>
                        ) : (
                          <>
                            <span className="text-[0.88rem] font-medium text-[#222]">{`USD $${price}`}</span>
                            <a
                              href={buyUrl ?? "#"}
                              {...(buyUrl ? { "data-gumroad-overlay-checkout": "true", target: "_blank", rel: "noopener noreferrer" } : {})}
                              className="text-[0.66rem] tracking-[0.1em] uppercase text-navy border border-navy px-2.5 py-1 hover:bg-navy hover:text-white transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
                              aria-label={`Obtener ${title}`}
                            >
                              Obtener
                            </a>
                          </>
                        )}
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

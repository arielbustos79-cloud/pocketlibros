import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pocketlibros — Ebooks cortos. Conocimiento accionable.",
  description:
    "Guías de menos de 60 páginas sobre trading, liderazgo, salud y operaciones. Lee en una tarde, aplica esa misma noche.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body suppressHydrationWarning className="min-h-full flex flex-col antialiased bg-white text-[#222]">
        {children}
      </body>
    </html>
  );
}

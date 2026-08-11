import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

const META_TITLE = "Pocket Libros";
const META_DESC =
  "Conocimiento accionable. Sin relleno aceptable. Ebooks en PDF de no ficción, clásicos y grandes pensadores desde USD $3.";

export const metadata: Metadata = {
  title: "Pocketlibros — Ebooks cortos. Conocimiento accionable.",
  description: META_DESC,
  openGraph: {
    title: META_TITLE,
    description: META_DESC,
    url: "https://pocketlibros.cl",
    siteName: "Pocket Libros",
    locale: "es_CL",
    type: "website",
    images: [
      {
        url: "https://pocketlibros.cl/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Pocket Libros — Conocimiento accionable. Sin relleno aceptable.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: META_TITLE,
    description: META_DESC,
  },
  metadataBase: new URL("https://pocketlibros.cl"),
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
        <Script src="https://gumroad.com/js/gumroad.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}

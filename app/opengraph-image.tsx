import { ImageResponse } from "next/og";
import { readFileSync } from "fs";
import { join } from "path";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  const logoSvg = readFileSync(join(process.cwd(), "public/pocket_libros_logo_neg.svg"));
  const logoSrc = `data:image/svg+xml;base64,${logoSvg.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          background: "#0D2B4E",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "72px 90px",
          position: "relative",
        }}
      >
        {/* Gold top bar */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "6px",
            background: "#B8952A",
            display: "flex",
          }}
        />

        {/* Logo — upper left */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={logoSrc}
          width={230}
          height={111}
          style={{ marginBottom: "40px", objectFit: "contain" }}
          alt="Pocket Libros"
        />

        {/* Headline */}
        <div style={{ display: "flex", fontFamily: "serif", fontSize: "80px", fontWeight: 400, color: "#FFFFFF", lineHeight: 1.05 }}>
          Conocimiento
        </div>
        <div style={{ display: "flex", fontFamily: "serif", fontSize: "80px", fontWeight: 400, color: "#B8952A", lineHeight: 1.05, marginBottom: "40px" }}>
          accionable.
        </div>

        {/* Description */}
        <div style={{ display: "flex", fontFamily: "sans-serif", fontSize: "25px", color: "rgba(255,255,255,0.5)", marginBottom: "8px" }}>
          No ficción · Clásicos · Grandes Pensadores · Relatos +18
        </div>
        <div style={{ display: "flex", fontFamily: "sans-serif", fontSize: "25px", color: "rgba(255,255,255,0.35)" }}>
          Desde USD $3 — pocketlibros.cl
        </div>

        {/* PL watermark */}
        <div
          style={{
            display: "flex",
            position: "absolute",
            right: "40px",
            bottom: "-80px",
            fontFamily: "serif",
            fontSize: "300px",
            color: "rgba(255,255,255,0.03)",
            lineHeight: 1,
          }}
        >
          PL
        </div>
      </div>
    ),
    { ...size }
  );
}

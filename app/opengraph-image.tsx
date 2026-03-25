import { ImageResponse } from "next/og"

export const alt = "GoBikeUp — App de navegacion ciclista en Santiago de Chile"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #0a0a0a 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
        }}
      >
        {/* Green accent circle */}
        <div
          style={{
            position: "absolute",
            width: 400,
            height: 400,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(22, 163, 74, 0.15) 0%, transparent 70%)",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            display: "flex",
          }}
        />

        {/* Icon */}
        <div
          style={{
            width: 80,
            height: 80,
            borderRadius: 20,
            background: "#16a34a",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 32,
          }}
        >
          <svg width="48" height="48" viewBox="0 0 32 32" fill="none">
            <circle cx="16" cy="16" r="9.5" stroke="white" strokeWidth="2.5" fill="none" />
            <path d="M11.5 19L16 13.5L20.5 19" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          </svg>
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: 64,
            fontWeight: 700,
            color: "white",
            letterSpacing: "-0.03em",
            display: "flex",
          }}
        >
          GoBikeUp
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: 28,
            fontWeight: 400,
            color: "rgba(255, 255, 255, 0.6)",
            marginTop: 16,
            display: "flex",
          }}
        >
          Pedalea tranquilo por Santiago
        </div>

        {/* Features bar */}
        <div
          style={{
            display: "flex",
            gap: 32,
            marginTop: 48,
            fontSize: 18,
            fontWeight: 500,
            color: "rgba(255, 255, 255, 0.4)",
          }}
        >
          <span style={{ display: "flex" }}>Rutas por ciclovias</span>
          <span style={{ display: "flex", color: "rgba(22, 163, 74, 0.6)" }}>·</span>
          <span style={{ display: "flex" }}>SOS Emergencia</span>
          <span style={{ display: "flex", color: "rgba(22, 163, 74, 0.6)" }}>·</span>
          <span style={{ display: "flex" }}>Alertas comunitarias</span>
          <span style={{ display: "flex", color: "rgba(22, 163, 74, 0.6)" }}>·</span>
          <span style={{ display: "flex" }}>Talleres</span>
        </div>
      </div>
    ),
    { ...size }
  )
}

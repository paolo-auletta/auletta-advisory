import { ImageResponse } from "next/og"

export const runtime = "edge"

export const alt = "Auletta Advisory - Strategic M&A Advisory, Venture Capital & AI Solutions"
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = "image/png"

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0a0a0a",
          backgroundImage:
            "radial-gradient(circle at 25% 25%, #1a1a1a 0%, transparent 50%), radial-gradient(circle at 75% 75%, #1a1a1a 0%, transparent 50%)",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "40px 80px",
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 72,
              fontWeight: 700,
              color: "#ffffff",
              marginBottom: 20,
              letterSpacing: "-0.02em",
            }}
          >
            Auletta Advisory
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 32,
              color: "#a1a1aa",
              textAlign: "center",
              maxWidth: 800,
              lineHeight: 1.4,
            }}
          >
            Strategic M&A Advisory • Venture Capital • AI Solutions
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 40,
              fontSize: 20,
              color: "#71717a",
            }}
          >
            Rome & Milan, Italy
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}

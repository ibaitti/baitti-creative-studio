import { ImageResponse } from "next/og"

export const runtime = "edge"
export const alt =
  "Baitti Creative Studio — Meta ad creative for U.S. e-commerce brands"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#f4f1e8",
          padding: "72px",
        }}
      >
        <div
          style={{
            fontSize: 26,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "#5c5c56",
          }}
        >
          Meta ad creative for U.S. e-commerce brands
        </div>
        <div
          style={{
            fontSize: 92,
            lineHeight: 1,
            letterSpacing: "-0.03em",
            fontWeight: 800,
            color: "#0a0a0a",
          }}
        >
          Your winning ad
          <br />
          is already dying.
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            fontSize: 30,
            color: "#0a0a0a",
          }}
        >
          <span style={{ fontWeight: 700 }}>Baitti Creative Studio</span>
          <span style={{ color: "#315cf5" }}>Twelve concepts a month</span>
        </div>
      </div>
    ),
    size
  )
}

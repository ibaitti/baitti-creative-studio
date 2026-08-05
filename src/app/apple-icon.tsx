import { ImageResponse } from "next/og"

export const runtime = "edge"
export const size = { width: 180, height: 180 }
export const contentType = "image/png"

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0a0a0a",
          color: "#f6f3ea",
          fontSize: 116,
          fontWeight: 800,
          letterSpacing: "-0.05em",
        }}
      >
        B
      </div>
    ),
    size
  )
}

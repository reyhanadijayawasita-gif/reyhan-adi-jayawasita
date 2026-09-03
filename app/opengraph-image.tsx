import { ImageResponse } from "next/og";
import { person } from "@/lib/data";

export const alt = person.fullName;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          backgroundColor: "#0b0f14",
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 22,
            letterSpacing: 6,
            textTransform: "uppercase",
            color: "#c69f45",
            marginBottom: 28,
          }}
        >
          Business · Economics · Accounting · Finance
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 76,
            color: "#fbfaf7",
            lineHeight: 1.1,
            fontWeight: 600,
          }}
        >
          {person.fullName}
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 30,
            color: "#a9b0ba",
            marginTop: 24,
            maxWidth: 950,
          }}
        >
          {person.headline}
        </div>
      </div>
    ),
    { ...size }
  );
}

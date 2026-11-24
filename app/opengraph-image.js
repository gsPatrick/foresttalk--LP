import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import path from "node:path";

export const alt = "Forest Talk — aprenda idiomas jogando";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const lion = await readFile(path.join(process.cwd(), "public/lion/feliz.png"));
  const src = `data:image/png;base64,${lion.toString("base64")}`;
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", position: "relative", background: "linear-gradient(180deg, #3aa9f5 0%, #8fd4ff 62%, #d9f4ff 100%)", fontFamily: "sans-serif" }}>
        <div style={{ position: "absolute", left: 0, right: 0, bottom: 0, height: 150, display: "flex", background: "linear-gradient(180deg, #34b06a, #249a52)" }} />
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", padding: "0 0 40px 80px", width: 720 }}>
          <div style={{ display: "flex", fontSize: 30, fontWeight: 800, color: "#12623a", background: "rgba(255,255,255,0.9)", padding: "8px 22px", borderRadius: 40, alignSelf: "flex-start" }}>🌳 Forest Talk</div>
          <div style={{ display: "flex", flexDirection: "column", marginTop: 26, fontSize: 104, fontWeight: 900, lineHeight: 1, color: "#fff", textShadow: "0 6px 0 #08261a" }}>
            <span>Aprenda idiomas</span>
            <span style={{ color: "#ffcb3d" }}>jogando.</span>
          </div>
          <div style={{ display: "flex", marginTop: 26, fontSize: 34, fontWeight: 800, color: "#0b3a52" }}>9 idiomas · 5 jogos · 250 fases cada</div>
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} width={480} height={480} alt="" style={{ position: "absolute", right: 40, bottom: 30 }} />
      </div>
    ),
    size,
  );
}

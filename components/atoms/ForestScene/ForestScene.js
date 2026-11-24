const TREES = [
  [40, 0.9], [120, 1.15], [210, 0.8], [330, 1.05], [450, 0.85], [560, 1.2], [690, 0.9], [800, 1.1], [930, 0.8],
  [1040, 1.15], [1150, 0.9], [1260, 1.05], [1370, 0.85],
];

function Pine({ x, s, fill, y }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${s})`} fill={fill}>
      <polygon points="0,-110 38,-50 18,-50 52,0 -52,0 -18,-50 -38,-50" />
      <rect x="-7" y="0" width="14" height="14" fill="#5a3a22" />
    </g>
  );
}

/** Colinas e pinheiros em SVG, em camadas (fundo → frente). */
export default function ForestScene({ className = "", tone = "day", low = false }) {
  const far = tone === "dusk" ? "#1d7f4c" : "#5cc98a";
  const mid = tone === "dusk" ? "#176b3f" : "#34b06a";
  const near = tone === "dusk" ? "#0f5a34" : "#249a52";
  const front = tone === "dusk" ? "#0b4a2a" : "#1b8444";
  return (
    <svg className={className} viewBox={low ? "0 215 1440 145" : "0 0 1440 360"} preserveAspectRatio="xMidYMax slice" aria-hidden="true" focusable="false">
      <path d="M0 200 C 180 120 340 170 520 140 S 900 90 1100 150 S 1360 130 1440 110 V360 H0Z" fill={far} />
      <g opacity="0.9">{TREES.filter((_, i) => i % 2 === 0).map(([x, s]) => <Pine key={`a${x}`} x={x + 30} y={low ? 262 : 196} s={s * (low ? 0.38 : 0.8)} fill={mid} />)}</g>
      <path d="M0 250 C 220 190 400 240 640 210 S 1040 170 1240 215 S 1400 220 1440 200 V360 H0Z" fill={mid} />
      <g>{TREES.map(([x, s]) => <Pine key={`b${x}`} x={x} y={low ? 296 : 262} s={s * (low ? 0.5 : 1)} fill={near} />)}</g>
      <path d="M0 300 C 260 262 480 312 760 286 S 1200 262 1440 292 V360 H0Z" fill={front} />
      <circle cx="140" cy="322" r="6" fill="#fff" opacity=".8" /><circle cx="520" cy="334" r="5" fill="#ffcb3d" />
      <circle cx="930" cy="324" r="6" fill="#fff" opacity=".8" /><circle cx="1290" cy="336" r="5" fill="#ffcb3d" />
    </svg>
  );
}

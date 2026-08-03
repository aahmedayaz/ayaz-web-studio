import sharp from "sharp";
import fs from "fs";

/** Richer product-preview cards when live screenshots stay blank (WebGL / auth walls). */
async function makeRich(id, accent, title, subtitle, chips) {
  const chipSvg = chips
    .map(
      (c, i) => `
    <rect x="${112 + i * 150}" y="400" width="136" height="32" rx="16" fill="#1a1a1a" stroke="${accent}" stroke-opacity="0.35"/>
    <text x="${130 + i * 150}" y="421" fill="#e8e8e8" font-family="Segoe UI,Arial,sans-serif" font-size="13">${c}</text>`,
    )
    .join("");

  const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="960" height="600" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#121212"/>
      <stop offset="100%" stop-color="#0a0a0a"/>
    </linearGradient>
    <radialGradient id="g" cx="78%" cy="22%" r="48%">
      <stop offset="0%" stop-color="${accent}" stop-opacity="0.55"/>
      <stop offset="100%" stop-color="${accent}" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="panel" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#1a1a1a"/>
      <stop offset="100%" stop-color="#101010"/>
    </linearGradient>
  </defs>
  <rect width="960" height="600" fill="url(#bg)"/>
  <rect width="960" height="600" fill="url(#g)"/>

  <!-- faux browser -->
  <rect x="48" y="48" width="864" height="504" rx="22" fill="#0d0d0d" stroke="${accent}" stroke-opacity="0.45"/>
  <circle cx="80" cy="80" r="5" fill="#FF5F57"/>
  <circle cx="100" cy="80" r="5" fill="#FEBC2E"/>
  <circle cx="120" cy="80" r="5" fill="#28C840"/>
  <rect x="150" y="70" width="300" height="20" rx="10" fill="#171717"/>

  <!-- right mock panels -->
  <rect x="520" y="120" width="340" height="380" rx="16" fill="url(#panel)" stroke="#ffffff" stroke-opacity="0.08"/>
  <rect x="544" y="148" width="180" height="12" rx="6" fill="${accent}" fill-opacity="0.85"/>
  <rect x="544" y="176" width="292" height="8" rx="4" fill="#2a2a2a"/>
  <rect x="544" y="196" width="220" height="8" rx="4" fill="#222"/>
  <rect x="544" y="232" width="88" height="88" rx="14" fill="${accent}" fill-opacity="0.18" stroke="${accent}" stroke-opacity="0.4"/>
  <rect x="644" y="232" width="88" height="88" rx="14" fill="#1f1f1f" stroke="#ffffff" stroke-opacity="0.08"/>
  <rect x="744" y="232" width="88" height="88" rx="14" fill="#1f1f1f" stroke="#ffffff" stroke-opacity="0.08"/>
  <rect x="544" y="340" width="292" height="120" rx="14" fill="#141414" stroke="#ffffff" stroke-opacity="0.06"/>
  <rect x="564" y="364" width="160" height="10" rx="5" fill="#2c2c2c"/>
  <rect x="564" y="388" width="240" height="8" rx="4" fill="#232323"/>
  <rect x="564" y="408" width="200" height="8" rx="4" fill="#232323"/>
  <rect x="564" y="428" width="120" height="8" rx="4" fill="${accent}" fill-opacity="0.55"/>

  <text x="112" y="250" fill="${accent}" font-family="Segoe UI,Arial,sans-serif" font-size="38" font-weight="800">${title}</text>
  <text x="112" y="296" fill="#d4d4d4" font-family="Segoe UI,Arial,sans-serif" font-size="18">${subtitle}</text>
  <rect x="112" y="330" width="148" height="36" rx="18" fill="${accent}"/>
  <text x="138" y="353" fill="#0a0a0a" font-family="Segoe UI,Arial,sans-serif" font-size="13" font-weight="700">Live product</text>
  ${chipSvg}
</svg>`;

  const tmp = `public/portfolio/${id}.tmp.webp`;
  const out = `public/portfolio/${id}.webp`;
  await sharp(Buffer.from(svg)).webp({ quality: 84 }).toFile(tmp);
  fs.copyFileSync(tmp, out);
  fs.unlinkSync(tmp);
  console.log("rich", id, fs.statSync(out).size);
}

await makeRich("vertex", "#3DDC97", "Vertex Environment", "Immersive 3D environments", [
  "WebGL",
  "Realtime",
  "Spatial",
]);

console.log("done");

import sharp from "sharp";
import fs from "fs";

async function make(id, accent, title, tagline) {
  const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="960" height="600" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#151515"/>
      <stop offset="100%" stop-color="#0c0c0c"/>
    </linearGradient>
    <radialGradient id="g" cx="72%" cy="28%" r="50%">
      <stop offset="0%" stop-color="${accent}" stop-opacity="0.5"/>
      <stop offset="100%" stop-color="${accent}" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="960" height="600" fill="url(#bg)"/>
  <rect width="960" height="600" fill="url(#g)"/>
  <rect x="56" y="64" width="848" height="472" rx="20" fill="#101010" stroke="${accent}" stroke-opacity="0.4"/>
  <circle cx="88" cy="96" r="5" fill="#FF5F57"/>
  <circle cx="108" cy="96" r="5" fill="#FEBC2E"/>
  <circle cx="128" cy="96" r="5" fill="#28C840"/>
  <rect x="160" y="86" width="260" height="20" rx="10" fill="#1b1b1b"/>
  <text x="112" y="270" fill="${accent}" font-family="Segoe UI,Arial,sans-serif" font-size="40" font-weight="800">${title}</text>
  <text x="112" y="318" fill="#d0d0d0" font-family="Segoe UI,Arial,sans-serif" font-size="20">${tagline}</text>
  <rect x="112" y="360" width="150" height="38" rx="19" fill="${accent}"/>
  <text x="140" y="384" fill="#0a0a0a" font-family="Segoe UI,Arial,sans-serif" font-size="14" font-weight="700">Live product</text>
</svg>`;

  const tmp = `public/portfolio/${id}.tmp.webp`;
  const out = `public/portfolio/${id}.webp`;
  await sharp(Buffer.from(svg)).webp({ quality: 82 }).toFile(tmp);
  try {
    fs.unlinkSync(out);
  } catch {
    /* ignore */
  }
  fs.renameSync(tmp, out);
  console.log("wrote", out, fs.statSync(out).size);
}

await make("vertex", "#3DDC97", "Vertex Environment", "Immersive 3D environments");
await make("aijoborbit", "#818CF8", "AI Job Orbit", "AI-powered job discovery");
await make("storecloud", "#00B4D8", "Storecloud Explore", "Retail operations dashboard");

try {
  const r = await fetch(
    "http://aijoborbit.com/assets/images/seo/693d5c6a4b29f1765629034.jpg",
    { redirect: "follow" },
  );
  console.log("og status", r.status, r.headers.get("content-type"));
  if (r.ok) {
    const buf = Buffer.from(await r.arrayBuffer());
    const tmp = "public/portfolio/aijoborbit.tmp.webp";
    await sharp(buf)
      .resize({ width: 960, withoutEnlargement: true })
      .webp({ quality: 65 })
      .toFile(tmp);
    try {
      fs.unlinkSync("public/portfolio/aijoborbit.webp");
    } catch {
      /* ignore */
    }
    fs.renameSync(tmp, "public/portfolio/aijoborbit.webp");
    console.log(
      "og image saved",
      fs.statSync("public/portfolio/aijoborbit.webp").size,
    );
  }
} catch (e) {
  console.log("og download fail", e.message);
}

import { chromium } from "playwright-core";
import sharp from "sharp";
import fs from "fs";

async function fetchOgImage(url) {
  try {
    const r = await fetch(url, {
      headers: { "User-Agent": "Mozilla/5.0", Accept: "text/html" },
      redirect: "follow",
    });
    const html = await r.text();
    const patterns = [
      /property=["']og:image["'][^>]*content=["']([^"']+)/i,
      /content=["']([^"']+)["'][^>]*property=["']og:image["']/i,
      /name=["']twitter:image["'][^>]*content=["']([^"']+)/i,
      /content=["']([^"']+)["'][^>]*name=["']twitter:image["']/i,
    ];
    for (const p of patterns) {
      const m = html.match(p);
      if (m?.[1]) return new URL(m[1], url).href;
    }
    return null;
  } catch {
    return null;
  }
}

async function downloadImage(url, outPath) {
  const r = await fetch(url, {
    headers: { "User-Agent": "Mozilla/5.0" },
    redirect: "follow",
  });
  if (!r.ok) throw new Error(`HTTP ${r.status}`);
  const buf = Buffer.from(await r.arrayBuffer());
  await sharp(buf)
    .resize({ width: 960, withoutEnlargement: true })
    .webp({ quality: 65, effort: 6 })
    .toFile(outPath);
  return fs.statSync(outPath).size;
}

async function captureWithPlaywright(id, url) {
  const browser = await chromium.launch({
    headless: true,
    args: ["--use-gl=angle", "--enable-webgl", "--ignore-certificate-errors"],
  });
  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    ignoreHTTPSErrors: true,
    colorScheme: "dark",
  });
  const page = await context.newPage();
  await page.goto(url, { waitUntil: "load", timeout: 90000 });
  await page.waitForTimeout(7000);
  // Try scrolling / clicking canvas to trigger render
  await page.mouse.move(720, 450);
  await page.mouse.wheel(0, 200);
  await page.waitForTimeout(1500);
  const buf = await page.screenshot({ type: "png", timeout: 60000 });
  await browser.close();
  const out = `public/portfolio/${id}.webp`;
  await sharp(buf)
    .resize({ width: 960, withoutEnlargement: true })
    .webp({ quality: 65, effort: 6 })
    .toFile(out);
  return out;
}

async function avgBrightness(path) {
  const { data } = await sharp(path).raw().toBuffer({ resolveWithObject: true });
  let sum = 0;
  for (const v of data) sum += v;
  return Math.round(sum / data.length);
}

const targets = [
  {
    id: "vertex",
    urls: ["https://vertex-env.vercel.app/"],
    accent: "#3DDC97",
    title: "Vertex Environment",
    tagline: "Immersive 3D environments",
  },
  {
    id: "aijoborbit",
    urls: ["http://aijoborbit.com/", "https://aijoborbit.com/"],
    accent: "#818CF8",
    title: "AI Job Orbit",
    tagline: "AI-powered job discovery",
  },
  {
    id: "storecloud",
    urls: [
      "https://explore.storecloud.org/",
      "https://explore.storecloud.org/dashboard",
      "https://storecloud.org/",
    ],
    accent: "#00B4D8",
    title: "Storecloud Explore",
    tagline: "Retail ops dashboard",
  },
];

async function makeBrandedFallback(t) {
  const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="960" height="600" viewBox="0 0 960 600" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#141414"/>
      <stop offset="55%" stop-color="#1c1c1c"/>
      <stop offset="100%" stop-color="#0e0e0e"/>
    </linearGradient>
    <radialGradient id="glow" cx="70%" cy="30%" r="55%">
      <stop offset="0%" stop-color="${t.accent}" stop-opacity="0.45"/>
      <stop offset="100%" stop-color="${t.accent}" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="960" height="600" fill="url(#bg)"/>
  <rect width="960" height="600" fill="url(#glow)"/>
  <rect x="64" y="72" width="832" height="456" rx="18" fill="#0a0a0a" stroke="${t.accent}" stroke-opacity="0.35" stroke-width="1.5"/>
  <circle cx="96" cy="104" r="5" fill="#FF5F57"/>
  <circle cx="116" cy="104" r="5" fill="#FEBC2E"/>
  <circle cx="136" cy="104" r="5" fill="#28C840"/>
  <rect x="168" y="94" width="280" height="20" rx="10" fill="#1a1a1a"/>
  <text x="184" y="108" fill="#888" font-family="ui-monospace,monospace" font-size="11">${t.id}</text>
  <text x="120" y="280" fill="${t.accent}" font-family="system-ui,sans-serif" font-size="42" font-weight="800">${t.title}</text>
  <text x="120" y="330" fill="#c8c8c8" font-family="system-ui,sans-serif" font-size="22">${t.tagline}</text>
  <rect x="120" y="370" width="140" height="36" rx="18" fill="${t.accent}"/>
  <text x="148" y="393" fill="#0a0a0a" font-family="system-ui,sans-serif" font-size="14" font-weight="700">Live product</text>
</svg>`;
  const out = `public/portfolio/${t.id}.webp`;
  await sharp(Buffer.from(svg)).webp({ quality: 80 }).toFile(out);
  console.log("fallback", t.id, Math.round(fs.statSync(out).size / 1024) + "KB");
}

for (const t of targets) {
  let ok = false;
  for (const url of t.urls) {
    const og = await fetchOgImage(url);
    console.log("OG", url, og || "none");
    if (og) {
      try {
        const size = await downloadImage(og, `public/portfolio/${t.id}.webp`);
        const avg = await avgBrightness(`public/portfolio/${t.id}.webp`);
        console.log("  og saved", Math.round(size / 1024) + "KB avg=" + avg);
        if (avg < 230 && avg > 15) {
          ok = true;
          break;
        }
      } catch (e) {
        console.log("  og fail", e.message);
      }
    }
  }

  if (!ok) {
    try {
      await captureWithPlaywright(t.id, t.urls[0]);
      const avg = await avgBrightness(`public/portfolio/${t.id}.webp`);
      console.log("  playwright avg=" + avg);
      if (avg < 230 && avg > 15) ok = true;
    } catch (e) {
      console.log("  playwright fail", e.message);
    }
  }

  if (!ok) {
    await makeBrandedFallback(t);
  }
}

console.log("done");

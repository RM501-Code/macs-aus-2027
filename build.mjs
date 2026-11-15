// Build: node build.mjs <family-code>
// Inlines trip data, encrypts costs with the family code, writes dist/.
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { webcrypto as crypto } from "node:crypto";

// Costs are never committed in plain text (the repo is public). If src/costs.json is missing,
// we recover it by decrypting the blob already inside index.html with the family code.
import { existsSync } from "node:fs";
const code = (process.argv[2] || "").trim().toLowerCase();
if (!code) { console.error("Usage: node build.mjs <family-code>"); process.exit(1); }
if (!existsSync("src/costs.json")) {
  const m = readFileSync("index.html", "utf8").match(/const COSTS_BLOB = (\{.*?\});/);
  const old = JSON.parse(m[1]); const u = s => Uint8Array.from(Buffer.from(s, "base64"));
  const kk0 = await crypto.subtle.importKey("raw", new TextEncoder().encode(code), "PBKDF2", false, ["deriveKey"]);
  const kk = await crypto.subtle.deriveKey({ name: "PBKDF2", salt: u(old.salt), iterations: old.iter, hash: "SHA-256" }, kk0, { name: "AES-GCM", length: 256 }, false, ["decrypt"]);
  const plain = new TextDecoder().decode(await crypto.subtle.decrypt({ name: "AES-GCM", iv: u(old.iv) }, kk, u(old.data)));
  writeFileSync("src/costs.json", plain); console.log("Recovered src/costs.json from index.html (do not commit it)");
}

const enc = new TextEncoder();
const b64 = u => Buffer.from(u).toString("base64");
const salt = crypto.getRandomValues(new Uint8Array(16));
const iv = crypto.getRandomValues(new Uint8Array(12));
const iter = 150000;
const k0 = await crypto.subtle.importKey("raw", enc.encode(code), "PBKDF2", false, ["deriveKey"]);
const key = await crypto.subtle.deriveKey({ name: "PBKDF2", salt, iterations: iter, hash: "SHA-256" }, k0, { name: "AES-GCM", length: 256 }, false, ["encrypt"]);
const costs = readFileSync("src/costs.json", "utf8");
JSON.parse(costs); // validate
const data = new Uint8Array(await crypto.subtle.encrypt({ name: "AES-GCM", iv }, key, enc.encode(costs)));
const blob = JSON.stringify({ salt: b64(salt), iv: b64(iv), iter, data: b64(data) });

const version = new Date().toISOString();
let html = readFileSync("src/app.html", "utf8")
  .replace("/*DATA*/", readFileSync("src/data.js", "utf8"))
  .replace("/*COSTS*/", blob);
writeFileSync("index.html", html);

writeFileSync("manifest.webmanifest", JSON.stringify({
  name: "Mac's Australia Adventure 2027", short_name: "Mac's Aus 27",
  start_url: "./", scope: "./", display: "standalone",
  background_color: "#ffffff", theme_color: "#ffffff",
  icons: [{ src: "icon-192.png", sizes: "192x192", type: "image/png" }, { src: "icon-512.png", sizes: "512x512", type: "image/png" }]
}, null, 2));

// Offline: network-first for the page (so updates arrive), cache fallback when there's no signal.
writeFileSync("sw.js", `const C = "macs-aus-${version}";
const FILES = ["./", "index.html", "manifest.webmanifest", "icon-180.png", "icon-192.png", "icon-512.png"];
self.addEventListener("install", e => { e.waitUntil(caches.open(C).then(c => c.addAll(FILES))); self.skipWaiting(); });
self.addEventListener("activate", e => { e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== C).map(k => caches.delete(k))))); self.clients.claim(); });
self.addEventListener("fetch", e => {
  if (e.request.method !== "GET" || new URL(e.request.url).origin !== location.origin) return;
  e.respondWith(fetch(e.request, { cache: "no-cache" }).then(r => { const copy = r.clone(); caches.open(C).then(c => c.put(e.request, copy)); return r; })
    .catch(() => caches.match(e.request, { ignoreSearch: true }).then(r => r || caches.match("index.html"))));
});
`);
console.log("Built dist/ —", version);

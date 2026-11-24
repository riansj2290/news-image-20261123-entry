// news-image-20261123 entry program.
// Ships the entry image (entry.png, kept beside this file) into the output
// directory the harness names: $MAKEFUN_OUTPUT_DIR, or /output by default.
// The image itself is a fixed 1024x1024 broadsheet drawn by a generator from
// a verified shortlist of forty stories, each checked against its
// first-reported date; this program only ships the finished file,
// deterministically, so two runs write byte-identical output.
// Node 22, standard library only. Exits non-zero if the image is missing,
// is not really a PNG, is not 1024x1024, or is over the 1 MiB contest limit.
import { copyFileSync, existsSync, mkdirSync, readFileSync, statSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const src = join(here, "entry.png");

if (!existsSync(src)) {
  console.error(`entry image not found: ${src}`);
  process.exit(1);
}

// Guard: refuse to ship anything that is not really a PNG (8-byte signature).
const PNG_SIGNATURE = [0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a];
const bytes = readFileSync(src);
const head = bytes.subarray(0, 8);
if (!PNG_SIGNATURE.every((b, i) => head[i] === b)) {
  console.error(`entry image is not a PNG: ${src}`);
  process.exit(1);
}

// Guard: the contest caps the image at 1 MiB.
const srcSize = statSync(src).size;
if (srcSize > 1024 * 1024) {
  console.error(`entry image is ${srcSize} bytes, over the 1 MiB limit`);
  process.exit(1);
}

// Guard: the image must be the contest's 1024x1024 broadsheet. The width and
// height live in the PNG's IHDR chunk: bytes 16-19 are the width and bytes
// 20-23 the height, each a big-endian 32-bit integer.
const width = bytes.readUInt32BE(16);
const height = bytes.readUInt32BE(20);
if (width !== 1024 || height !== 1024) {
  console.error(`entry image is ${width}x${height}, expected 1024x1024`);
  process.exit(1);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });

const dest = join(outDir, "entry.png");
copyFileSync(src, dest);

// Verify the copy landed whole: a truncated write must fail the run loudly.
const destSize = statSync(dest).size;
if (destSize !== srcSize) {
  console.error(`copy verification failed: wrote ${destSize} of ${srcSize} bytes`);
  process.exit(1);
}
console.log(`wrote ${dest} (${destSize} bytes, verified)`);

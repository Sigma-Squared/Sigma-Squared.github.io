/**
 * Generates low-quality image placeholders (LQIP) for everything in src/images.
 *
 * Each image is reduced to a ~20px-wide WebP and inlined as a base64 data URI in
 * src/generated/lqip.json, keyed by its path relative to src/images. BlurImage.astro
 * paints that data URI as a background behind the real <img>, so the blurred preview
 * is visible until the full image decodes and paints over it — no client JS required.
 */
import { readdir, readFile, writeFile, mkdir, stat } from 'node:fs/promises';
import { join, relative, extname } from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const root = fileURLToPath(new URL('..', import.meta.url));
const imagesDir = join(root, 'src/images');
const outFile = join(root, 'src/generated/lqip.json');

const RASTER = new Set(['.png', '.jpg', '.jpeg', '.webp', '.avif', '.tiff', '.gif']);
const PLACEHOLDER_WIDTH = 20;

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = await Promise.all(
    entries.map((entry) => {
      const full = join(dir, entry.name);
      return entry.isDirectory() ? walk(full) : Promise.resolve([full]);
    })
  );
  return files.flat();
}

// Reuse previous output for files that have not changed since the last run.
async function loadCache() {
  try {
    return JSON.parse(await readFile(outFile, 'utf8'));
  } catch {
    return {};
  }
}

const cache = await loadCache();
const files = (await walk(imagesDir)).filter((f) => RASTER.has(extname(f).toLowerCase()));
const lqip = {};
let generated = 0;

for (const file of files) {
  const key = relative(imagesDir, file).split(/[\\/]/).join('/');
  const { mtimeMs } = await stat(file);
  const cached = cache[key];

  if (cached && cached.mtime === mtimeMs) {
    lqip[key] = cached;
    continue;
  }

  const buffer = await sharp(file)
    .resize(PLACEHOLDER_WIDTH, null, { fit: 'inside' })
    .webp({ quality: 40, alphaQuality: 40, effort: 6 })
    .toBuffer();

  lqip[key] = {
    uri: `data:image/webp;base64,${buffer.toString('base64')}`,
    mtime: mtimeMs,
  };
  generated++;
}

await mkdir(join(root, 'src/generated'), { recursive: true });
await writeFile(outFile, JSON.stringify(lqip, null, 2));

const bytes = Object.values(lqip).reduce((sum, v) => sum + v.uri.length, 0);
console.log(
  `lqip: ${files.length} images (${generated} regenerated), ` +
    `avg ${Math.round(bytes / files.length)} bytes inline`
);

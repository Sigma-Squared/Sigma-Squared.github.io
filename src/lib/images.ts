import type { ImageMetadata } from 'astro';
import lqipData from '../generated/lqip.json';

type LqipEntry = { uri: string; mtime: number };

const lqip = lqipData as Record<string, LqipEntry>;

// Eagerly collect every image under src/images so data files can reference them
// by plain string path instead of importing each one by hand.
const modules = import.meta.glob<{ default: ImageMetadata }>(
  '../images/**/*.{png,jpg,jpeg,webp,avif}',
  { eager: true }
);

const bySrcPath = new Map<string, ImageMetadata>(
  Object.entries(modules).map(([key, mod]) => [key.replace('../images/', ''), mod.default])
);

export function getImage(path: string): ImageMetadata {
  const image = bySrcPath.get(path);
  if (!image) {
    throw new Error(
      `No image at src/images/${path}. Available: ${[...bySrcPath.keys()].join(', ')}`
    );
  }
  return image;
}

/** Base64 data URI for the blurred placeholder, or undefined if none was generated. */
export function getLqip(path: string): string | undefined {
  return lqip[path]?.uri;
}

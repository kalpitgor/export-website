// Resizes the full-resolution Top Class photos in images-src/topclass/<category>/
// into web-sized copies under public/topclass/<category>/.
//
//   name.webp      1600px wide — main / hero image
//   name-640.webp   640px wide — cards, thumbnails, mobile
//
// Run after adding new photos:  node scripts/optimize-topclass-images.mjs
import { readdir, mkdir, stat } from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const SRC = 'images-src/topclass';
const OUT = 'public/topclass';
const SIZES = [
  { suffix: '', width: 1600, quality: 78 },
  { suffix: '-640', width: 640, quality: 72 },
];

const isFresh = async (src, out) => {
  try {
    return (await stat(out)).mtimeMs >= (await stat(src)).mtimeMs;
  } catch {
    return false;
  }
};

for (const category of await readdir(SRC)) {
  const dir = path.join(SRC, category);
  if (!(await stat(dir)).isDirectory()) continue;
  await mkdir(path.join(OUT, category), { recursive: true });

  for (const file of await readdir(dir)) {
    if (!/\.(webp|jpe?g|png)$/i.test(file)) continue;
    const src = path.join(dir, file);
    const base = file.replace(/\.[^.]+$/, '');
    for (const { suffix, width, quality } of SIZES) {
      const out = path.join(OUT, category, `${base}${suffix}.webp`);
      if (await isFresh(src, out)) continue;
      await sharp(src).resize({ width, withoutEnlargement: true }).webp({ quality }).toFile(out);
      console.log('wrote', out);
    }
  }
}

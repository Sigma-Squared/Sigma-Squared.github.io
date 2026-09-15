# chamurajasekera.me

Personal website. Static HTML and CSS — **no JavaScript is shipped to the browser**.

Built with [Astro](https://astro.build), which runs only at build time.

## Develop

```bash
npm install
npm run dev      # http://localhost:4321, live reload
```

| Command | Does |
| --- | --- |
| `npm run dev` | Dev server with live reload |
| `npm run build` | Build the static site into `dist/` |
| `npm run preview` | Serve the built `dist/` locally |
| `npm run gen:lqip` | Regenerate blur placeholders (runs automatically before dev/build) |

## Layout

```
src/
  data/projects.ts        Project copy and image lists — edit this to change content
  pages/index.astro       Front page
  pages/projects/[slug]   One page per project, generated from projects.ts
  components/BlurImage    Optimized <img> with a zero-JS blur-up placeholder
  images/                 Source images; Astro resizes and converts these at build time
  styles/global.css       The whole stylesheet
public/                   Copied verbatim: favicons, CNAME, résumé, /unityss game
scripts/gen-lqip.mjs      Generates the base64 blur placeholders
```

### Adding a project

Append an entry to `src/data/projects.ts` and drop its images in `src/images/portfolio/`.
Image paths are relative to `src/images`. Everything else — the index entry, the project
page, the prev/next links, the responsive `srcset`, the blur placeholder — follows.

## How the blur-up works without JavaScript

`scripts/gen-lqip.mjs` reduces every source image to a ~20px-wide WebP and inlines it as a
base64 data URI (~190 bytes each). `BlurImage.astro` paints that as a `background-image` on
the frame, behind the real `<img>`. An image that has not decoded yet renders transparent,
so the blur shows through; once it decodes the browser paints it over the top. No load
event, no script.

## Deployment

Pushing to `master` triggers `.github/workflows/deploy.yml`, which builds and publishes to
GitHub Pages. This requires **Settings → Pages → Source = GitHub Actions** (not "Deploy from
a branch") — Pages cannot run the Astro build on its own.

## Credits

The `/unityss` directory is a Unity WebGL build and is served as-is; it is the one part of
the site that runs JavaScript.

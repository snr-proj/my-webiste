# Ivar Delos Santos — Portfolio Website

A React + Vite recreation of the Canva portfolio design, built for local
development in VS Code, version control on GitHub, and deployment on Vercel.

## Tech stack

- React 18 + Vite 5
- Framer Motion (scroll animations)
- lucide-react (icons)
- Plain modern CSS with design tokens (no CSS framework)

## Project structure

```
ivar-portfolio/
├── public/
│   ├── favicon.svg
│   └── images/              ← all site photos live here
├── src/
│   ├── components/          ← one component + one .css file per section
│   ├── content/
│   │   └── siteContent.js   ← ALL editable text + image paths (the "CMS")
│   ├── styles/
│   │   ├── tokens.css       ← colors, type scale, spacing, radius
│   │   └── global.css       ← resets + shared utility classes
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
```

---

## 1. Run it locally

You need [Node.js](https://nodejs.org/) 18+ installed.

```bash
cd ivar-portfolio
npm install
npm run dev
```

Open the URL Vite prints (usually `http://localhost:5173`). The page
hot-reloads as you edit files.

To build a production bundle and preview it locally:

```bash
npm run build
npm run preview
```

---

## 2. How to replace an image

1. Add your new image file to `public/images/` (any name is fine, but
   keeping the existing name is simplest).
2. If you kept the same filename, you're done — nothing else to change.
3. If you used a new filename, open `src/content/siteContent.js` and update
   the matching `image:` path, e.g.:

   ```js
   hero: {
     image: "/images/hero-media.jpg", // ← change this line
     ...
   }
   ```

For best results, replace an image with one of a similar aspect ratio so
the layout doesn't shift.

---

## 3. How to change text

Everything you read on the site — headings, paragraphs, captions, contact
details, the software list, etc. — lives in **`src/content/siteContent.js`**.
Open that file, find the relevant key, and edit the string. No component
files need to change for text edits.

---

## 4. How to add another gallery photo

Find the relevant array in `src/content/siteContent.js` and add a new
object. For example, to add a photo to the "Photographs" strip at the top:

```js
gallery: {
  items: [
    // ...existing items
    {
      image: "/images/gallery-new-photo.jpg",
      alt: "Describe the photo for accessibility/SEO",
    },
  ],
},
```

Then drop `gallery-new-photo.jpg` into `public/images/`. The grid will
automatically include the new photo — no layout code changes needed for
`gallery`, `freelance`, `internship`, or `filmRolls` sections, since those
render from arrays.

---

## 5. How to commit it to GitHub

```bash
cd ivar-portfolio
git init
git add .
git commit -m "Initial portfolio site"
git branch -M main
git remote add origin https://github.com/<your-username>/<your-repo>.git
git push -u origin main
```

(Create the empty repo on GitHub first, then use the URL it gives you in
the `git remote add` command above.)

---

## 6. How to deploy to Vercel

1. Go to [vercel.com](https://vercel.com) and sign in (GitHub login is
   easiest).
2. Click **Add New → Project**, then select the GitHub repo you just
   pushed.
3. Vercel auto-detects Vite. Leave the defaults:
   - Build command: `npm run build`
   - Output directory: `dist`
4. Click **Deploy**. You'll get a live `https://your-project.vercel.app`
   URL in about a minute.

---

## 7. How to update the live site after making changes

Once the project is connected to Vercel via GitHub, every push to `main`
triggers an automatic redeploy:

```bash
git add .
git commit -m "Update photos / text / etc."
git push
```

Vercel will rebuild and publish the new version automatically — no manual
redeploy step needed. You can watch progress on your Vercel dashboard.

---

## Notes on the Canva → code translation

- The photos throughout the site are the same photos from your Canva
  design (extracted and optimized for web).
- Canva's soft gradient-wash backgrounds were recreated as CSS gradients
  (`--gradient-wash` in `tokens.css`) rather than exported images, so they
  scale losslessly at any screen size and stay editable.
- Section numbering (001–015) from the original design was kept as a
  visual motif (`.eyebrow-number`).
- Animations (fade-up on scroll, staggered gallery reveals, image hover
  zoom) approximate the "movement" implied by the Canva design using
  Framer Motion, and respect `prefers-reduced-motion` for accessibility.
